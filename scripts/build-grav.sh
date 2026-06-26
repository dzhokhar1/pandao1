#!/usr/bin/env bash
# Build a deployable Grav package for Beget from the authored files in grav/user/.
# Downloads the Grav core (+ Admin), overlays our theme/pages/config, strips test
# data, and zips it. Upload the contents of the resulting zip into Beget public_html.
#   Usage: bash scripts/build-grav.sh [output.zip]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$HOME/Downloads/pandao-grav-beget.zip}"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "→ downloading Grav core (+ Admin)…"
curl -sL "https://getgrav.org/download/core/grav-admin/latest" -o "$WORK/grav.zip"
unzip -q "$WORK/grav.zip" -d "$WORK"
GRAV="$WORK/grav-admin"

echo "→ overlaying PanDao theme / pages / config…"
rm -rf "$GRAV/user/themes/quark2" "$GRAV/user/pages/"*
cp -R "$ROOT/grav/user/themes/pandao" "$GRAV/user/themes/"
cp -R "$ROOT/grav/user/pages/." "$GRAV/user/pages/"
cp -R "$ROOT/grav/user/config/." "$GRAV/user/config/"

echo "→ cleaning test data / caches (admin account is created on first /admin visit)…"
rm -rf "$GRAV/user/accounts/"* "$GRAV/user/data/lead/"* "$GRAV/cache/"* "$GRAV/logs/"* 2>/dev/null || true
mkdir -p "$GRAV/user/accounts"

echo "→ packaging…"
rm -f "$OUT"
( cd "$GRAV" && zip -rqX "$OUT" . -x '*.DS_Store' )
echo "✓ Built: $OUT ($(( $(wc -c < "$OUT") / 1024 / 1024 )) MB)"
echo "  Upload the CONTENTS of this zip into Beget public_html, then open /admin to create your login."
