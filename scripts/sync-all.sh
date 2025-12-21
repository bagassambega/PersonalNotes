#!/usr/bin/env bash
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "[1/3] Sync images submodule"
cd "$ROOT/assets/images"

if [[ -n "$(git status --porcelain)" ]]; then
  git add .
  git commit -m "Auto-sync images"
  git push
else
  echo "No image changes"
fi

echo "[2/3] Sync main repo"
cd "$ROOT"

git add -u   # critical: does NOT recurse into submodules
if [[ -n "$(git status --porcelain)" ]]; then
  git commit -m "Auto-sync notes"
  git push
else
  echo "No note changes"
fi

echo "[3/3] Done"
