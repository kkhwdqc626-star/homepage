#!/usr/bin/env python3
"""
Lossless visual asset optimization for chrisna-website.

- PNG: Recompress IDAT with zopfli (zlib), preserving every pixel.
- WebP (including files misnamed as .png): Lossless re-encode; best method 0–6.
- GIF: Pillow save with optimize=True; only replace if every frame matches.
- SVG: Conservative whitespace collapse.
- JPEG: If `jpegtran` is on PATH, uses -optimize (lossless Huffman); else skipped.

Requires: pillow, zopfli, numpy (for GIF frame checks)

Run from repo root:
  python3 scripts/optimize_visual_assets.py
"""
from __future__ import annotations

import io
import re
import struct
import subprocess
import sys
import tempfile
import zlib
from pathlib import Path
from shutil import which

import zopfli.zlib as zopfli_zlib
from PIL import Image, ImageChops, ImageSequence

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "images"

PNG_SIG = b"\x89PNG\r\n\x1a\n"


def sniff_format(path: Path) -> str:
    data = path.read_bytes()[:32]
    if data.startswith(PNG_SIG):
        return "png"
    if data.startswith(b"\xff\xd8\xff"):
        return "jpeg"
    if data.startswith(b"GIF87a") or data.startswith(b"GIF89a"):
        return "gif"
    if data.startswith(b"RIFF") and len(data) >= 12 and data[8:12] == b"WEBP":
        return "webp"
    if path.suffix.lower() == ".svg":
        return "svg"
    return "unknown"


def read_png_chunks(data: bytes) -> list[tuple[bytes, bytes]]:
    if data[:8] != PNG_SIG:
        raise ValueError("not a PNG")
    pos = 8
    chunks: list[tuple[bytes, bytes]] = []
    while pos < len(data):
        length = struct.unpack(">I", data[pos : pos + 4])[0]
        ctype = data[pos + 4 : pos + 8]
        cdata = data[pos + 8 : pos + 8 + length]
        pos += 12 + length
        chunks.append((ctype, cdata))
    return chunks


def png_crc(chunk_type: bytes, data: bytes) -> bytes:
    import binascii

    c = binascii.crc32(chunk_type) & 0xFFFFFFFF
    c = binascii.crc32(data, c) & 0xFFFFFFFF
    return struct.pack(">I", c)


def build_png(chunks: list[tuple[bytes, bytes]]) -> bytes:
    out = bytearray(PNG_SIG)
    for ctype, cdata in chunks:
        out += struct.pack(">I", len(cdata))
        out += ctype + cdata + png_crc(ctype, cdata)
    return bytes(out)


def optimize_png_lossless(path: Path) -> tuple[bytes | None, str]:
    data = path.read_bytes()
    try:
        chunks = read_png_chunks(data)
    except ValueError:
        return None, "skip-not-png"

    prefix: list[tuple[bytes, bytes]] = []
    idat_parts: list[bytes] = []
    suffix: list[tuple[bytes, bytes]] = []
    seen_idat = False
    for ctype, cdata in chunks:
        if ctype == b"IDAT":
            seen_idat = True
            idat_parts.append(cdata)
        elif seen_idat:
            suffix.append((ctype, cdata))
        else:
            prefix.append((ctype, cdata))

    if not idat_parts:
        return None, "skip-no-idat"

    raw = zlib.decompress(b"".join(idat_parts))

    best = data
    best_name = "orig"
    compressors: list[tuple[str, object]] = [
        ("zlib-9", lambda d: zlib.compress(d, 9)),
        ("zopfli", lambda d: zopfli_zlib.compress(d)),
    ]
    # Very large raw streams: zopfli can be slow; zlib-9 is usually enough
    if len(raw) > 8_000_000:
        compressors = [compressors[0]]

    for name, compressor in compressors:
        try:
            comp = compressor(raw)
        except Exception:
            continue
        idat_chunks: list[tuple[bytes, bytes]] = []
        for i in range(0, len(comp), 65536):
            idat_chunks.append((b"IDAT", comp[i : i + 65536]))
        new_data = build_png(prefix + idat_chunks + suffix)
        if len(new_data) < len(best):
            best = new_data
            best_name = name

    if len(best) >= len(data):
        return None, "no-shrink"

    im1 = Image.open(path)
    im2 = Image.open(io.BytesIO(best))
    if im1.mode != im2.mode:
        im2 = im2.convert(im1.mode)
    if ImageChops.difference(im1, im2).getbbox() is not None:
        return None, "pixel-mismatch"
    return best, f"ok-{best_name}"


def optimize_gif_lossless(path: Path) -> tuple[bytes | None, str]:
    im = Image.open(path)
    orig_size = path.stat().st_size
    if not getattr(im, "is_animated", False):
        buf = io.BytesIO()
        im.save(buf, format="GIF", optimize=True)
        new_b = buf.getvalue()
        if len(new_b) >= orig_size:
            return None, "no-shrink"
        im2 = Image.open(io.BytesIO(new_b))
        if ImageChops.difference(im.convert("RGBA"), im2.convert("RGBA")).getbbox() is not None:
            return None, "pixel-mismatch"
        return new_b, "ok-static"

    orig_frames = []
    for frame in ImageSequence.Iterator(im):
        frame = frame.convert("RGBA")
        orig_frames.append(frame.copy())

    buf = io.BytesIO()
    im.save(buf, format="GIF", save_all=True, optimize=True)
    new_b = buf.getvalue()
    if len(new_b) >= orig_size:
        return None, "no-shrink"

    im_new = Image.open(io.BytesIO(new_b))
    new_frames = [f.convert("RGBA") for f in ImageSequence.Iterator(im_new)]
    if len(new_frames) != len(orig_frames):
        return None, "frame-count"
    for a, b in zip(orig_frames, new_frames):
        if ImageChops.difference(a, b).getbbox() is not None:
            return None, "pixel-mismatch"
    return new_b, "ok-animated"


def optimize_webp_lossless(path: Path) -> tuple[bytes | None, str]:
    im = Image.open(path)
    orig_size = path.stat().st_size
    base = im.convert("RGBA")
    best_b: bytes | None = None
    best_m = -1
    for method in range(7):
        buf = io.BytesIO()
        im.save(buf, format="WEBP", lossless=True, method=method)
        b = buf.getvalue()
        im2 = Image.open(io.BytesIO(b))
        if ImageChops.difference(base, im2.convert("RGBA")).getbbox() is not None:
            continue
        if best_b is None or len(b) < len(best_b):
            best_b = b
            best_m = method

    if best_b is None or len(best_b) >= orig_size:
        return None, "no-shrink"
    return best_b, f"ok-webp-lossless-m{best_m}"


def optimize_jpeg_jpegtran(path: Path) -> tuple[bytes | None, str]:
    jt = which("jpegtran")
    if not jt:
        return None, "skip-no-jpegtran"
    orig_size = path.stat().st_size
    with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp:
        out_path = Path(tmp.name)
    try:
        subprocess.run(
            [jt, "-optimize", "-copy", "none", "-out", str(out_path), str(path)],
            check=True,
            capture_output=True,
        )
    except (subprocess.CalledProcessError, OSError):
        return None, "jpegtran-failed"
    new_b = out_path.read_bytes()
    out_path.unlink(missing_ok=True)
    if len(new_b) >= orig_size:
        return None, "no-shrink"
    im1 = Image.open(path)
    im2 = Image.open(io.BytesIO(new_b))
    if im1.mode != im2.mode:
        im2 = im2.convert(im1.mode)
    if ImageChops.difference(im1, im2).getbbox() is not None:
        return None, "pixel-mismatch"
    return new_b, "ok-jpegtran"


def minify_svg(text: str) -> str:
    text = re.sub(r"<!--.*?-->", "", text, flags=re.DOTALL)
    text = re.sub(r">\s+<", "><", text)
    text = text.strip()
    return text


def optimize_svg(path: Path) -> tuple[str | None, str]:
    t = path.read_text(encoding="utf-8")
    new_t = minify_svg(t)
    if len(new_t.encode("utf-8")) >= len(t.encode("utf-8")):
        return None, "no-shrink"
    return new_t, "ok-minify"


def main() -> int:
    exts = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"}
    files = sorted(
        p for p in IMAGES.rglob("*") if p.is_file() and p.suffix.lower() in exts and ".DS_Store" not in p.name
    )
    total_before = 0
    total_after = 0
    changed = 0

    for path in files:
        total_before += path.stat().st_size
        rel = path.relative_to(ROOT)
        kind = sniff_format(path)

        if kind == "svg":
            new_t, note = optimize_svg(path)
            if new_t:
                path.write_text(new_t, encoding="utf-8")
                changed += 1
                total_after += path.stat().st_size
                print(f"- {rel}  ({note})  {path.stat().st_size} bytes")
            else:
                total_after += path.stat().st_size
                print(f"  {rel}  ({note})")
            continue

        if kind == "png":
            new_data, note = optimize_png_lossless(path)
            if new_data:
                path.write_bytes(new_data)
                changed += 1
                total_after += len(new_data)
                print(f"- {rel}  ({note})  {path.stat().st_size} bytes")
            else:
                total_after += path.stat().st_size
                print(f"  {rel}  ({note})")
            continue

        if kind == "webp":
            new_data, note = optimize_webp_lossless(path)
            if new_data:
                path.write_bytes(new_data)
                changed += 1
                total_after += len(new_data)
                print(f"- {rel}  ({note})  {path.stat().st_size} bytes")
            else:
                total_after += path.stat().st_size
                print(f"  {rel}  ({note})")
            continue

        if kind == "gif":
            new_data, note = optimize_gif_lossless(path)
            if new_data:
                path.write_bytes(new_data)
                changed += 1
                total_after += len(new_data)
                print(f"- {rel}  ({note})  {path.stat().st_size} bytes")
            else:
                total_after += path.stat().st_size
                print(f"  {rel}  ({note})")
            continue

        if kind == "jpeg":
            new_data, note = optimize_jpeg_jpegtran(path)
            if new_data:
                path.write_bytes(new_data)
                changed += 1
                total_after += len(new_data)
                print(f"- {rel}  ({note})  {path.stat().st_size} bytes")
            else:
                total_after += path.stat().st_size
                print(f"  {rel}  ({note})")
            continue

        total_after += path.stat().st_size
        print(f"  {rel}  (skip-unknown-format)")

    print()
    print(f"Files touched: {changed}")
    print(f"Total bytes before: {total_before}")
    print(f"Total bytes after:  {total_after}")
    if total_before > total_after:
        print(f"Saved: {total_before - total_after} ({100 * (total_before - total_after) / total_before:.1f}%)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
