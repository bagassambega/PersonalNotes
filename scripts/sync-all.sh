#!/usr/bin/env bash
set -e

SUBMODULE="assets/images"

echo "== Step 1: Commit and push main repo content =="

git add .
if [[ -n "$(git status --porcelain)" ]]; then
  git commit -m "Update notes"
  git push
else
  echo "No main repo changes"
fi

echo "== Step 2: Commit and push assets submodule =="

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

echo "== Step 3: Update submodule pointer =="

git add "$SUBMODULE"
if [[ -n "$(git status --porcelain)" ]]; then
  git commit -m "Update assets submodule pointer"
  git push
else
  echo "Submodule pointer unchanged"
fi

echo "== Sync complete =="

