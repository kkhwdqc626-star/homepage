#!/usr/bin/env bash
# Serve the site on your local network so phones & tablets can open it (same Wi‑Fi).
# Usage: ./serve-lan.sh [port]
# Then on your device: http://<your-computer-ip>:<port>

set -e
cd "$(dirname "$0")"
PORT="${1:-8080}"

echo ""
echo "  Chrisna website — LAN server"
echo "  ────────────────────────────"
IP=""
if command -v ipconfig >/dev/null 2>&1; then
  for IF in en0 en1; do
    IP=$(ipconfig getifaddr "$IF" 2>/dev/null) && break
  done
fi
if [ -z "$IP" ] && command -v hostname >/dev/null 2>&1; then
  IP=$(hostname -I 2>/dev/null | awk '{print $1}')
fi
if [ -n "$IP" ]; then
  echo "  On this machine:    http://127.0.0.1:$PORT"
  echo "  On phone / tablet: http://$IP:$PORT  (same Wi‑Fi)"
else
  echo "  Open: http://127.0.0.1:$PORT"
  echo "  Find this Mac's IP in System Settings → Network, then use http://<IP>:$PORT"
fi
echo ""
echo "  Press Ctrl+C to stop."
echo ""

exec python3 -m http.server "$PORT" --bind 0.0.0.0
