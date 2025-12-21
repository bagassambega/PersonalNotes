#!/usr/bin/env bash
set -e

SUBMODULE="assets/images"

echo "== Syncing assets repository =="

cd "$SUBMODULE"
git checkout main
git pull

if [[ -n "$(git status --porcelain)" ]]; then
  git add .
  git commit -m "Update images"
  git push
else
  echo "No asset changes"
fi

cd - >/dev/null

echo "== Syncing main repository =="

git add "$SUBMODULE"

if [[ -n "$(git status --porcelain)" ]]; then
  git commit -m "Update assets submodule"
fi

git push

echo "== Sync complete =="

