#!/bin/bash
# Converts M4A to faststart format so seeking works in the browser.
# Requires ffmpeg: brew install ffmpeg
cd "$(dirname "$0")/audio"
for f in *.m4a; do
  [ -f "$f" ] || continue
  tmp="${f}.tmp.m4a"
  if ffmpeg -i "$f" -c copy -movflags +faststart -y "$tmp" 2>/dev/null; then
    mv "$tmp" "$f"
    echo "Converted: $f"
  else
    rm -f "$tmp"
    echo "Skipped (ffmpeg failed): $f"
  fi
done
