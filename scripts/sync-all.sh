#!/usr/bin/env bash
set -e

SUBMODULE="assets/images"

echo "== Step 1: Sync and commit main repo =="

git add .
CHANGED_FILES=$(git diff --cached --name-only)
if [[ -n "$CHANGED_FILES" ]]; then
  COMMIT_MSG="Update files:
$CHANGED_FILES"
  git commit -m "$COMMIT_MSG"
  git push
  echo "Main repo: Committed and pushed"
else
  echo "No main repo changes"
fi

echo "== Step 2: Sync and commit assets submodule =="

cd "$SUBMODULE"
git checkout main
git pull

git add .
CHANGED_FILES=$(git diff --cached --name-only)
if [[ -n "$CHANGED_FILES" ]]; then
  COMMIT_MSG="Update images:
$CHANGED_FILES"
  git commit -m "$COMMIT_MSG"
  git push
  echo "Submodule: Committed and pushed"
else
  echo "No asset changes"
fi
cd - >/dev/null

echo "== Step 3: Update and sync submodule pointer =="

git add "$SUBMODULE"
SUBMODULE_STATUS=$(git diff --cached --name-only)
if [[ -n "$SUBMODULE_STATUS" ]]; then
  git commit -m "Sync submodule pointer:
$SUBMODULE"
  git push
  echo "Main repo: Submodule pointer updated and pushed"
else
  echo "Submodule pointer unchanged"
fi

echo "== Sync complete =="

