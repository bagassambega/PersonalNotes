#!/usr/bin/env python3
"""
Post-build script: resolves bare-filename <img> src attributes in the
built Jekyll site (_site/) to their actual paths.

This replaces the Jekyll plugin approach, which cannot run because the
github-pages gem forces safe mode (disabling _plugins/).

Algorithm:
  1. Walk _site/assets/images/ and build a filename -> site-relative-path map.
  2. Walk all .html files in _site/.
  3. For each <img> tag whose src is a bare filename (no "/"), rewrite it
     to the resolved path.
"""

import os
import re
import sys

SITE_DIR = os.path.join(os.getcwd(), "_site")
IMAGES_DIR = os.path.join(SITE_DIR, "assets", "images")
IMG_EXTENSIONS = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif", ".ico"}

# Pattern: <img ... src="bare_filename.ext" ...>
# Bare filename = no "/" in the value.
IMG_SRC_RE = re.compile(
    r'(<img\s[^>]*?src=["\'])([^"\'\/]+\.(png|jpe?g|gif|svg|webp|avif|ico))(["\'])',
    re.IGNORECASE,
)


def build_image_map():
    """Scan _site/assets/images/ and map each filename to its site-relative path."""
    image_map = {}
    if not os.path.isdir(IMAGES_DIR):
        print(f"WARNING: {IMAGES_DIR} does not exist, no images to index.")
        return image_map

    for root, _dirs, files in os.walk(IMAGES_DIR):
        for fname in files:
            ext = os.path.splitext(fname)[1].lower()
            if ext not in IMG_EXTENSIONS:
                continue

            # Path relative to _site/, with leading /
            abs_path = os.path.join(root, fname)
            rel_path = "/" + os.path.relpath(abs_path, SITE_DIR)

            if fname in image_map:
                print(f"  WARN: duplicate filename '{fname}', keeping {image_map[fname]}")
                continue

            image_map[fname] = rel_path

    return image_map


def rewrite_html_files(image_map):
    """Find all .html files in _site/ and rewrite bare-filename img src."""
    rewritten_count = 0
    file_count = 0

    for root, _dirs, files in os.walk(SITE_DIR):
        for fname in files:
            if not fname.endswith(".html"):
                continue

            filepath = os.path.join(root, fname)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            original = content

            def replace_src(match):
                nonlocal rewritten_count
                prefix = match.group(1)
                bare_name = match.group(2)
                suffix = match.group(4)

                if bare_name in image_map:
                    rewritten_count += 1
                    return f"{prefix}{image_map[bare_name]}{suffix}"
                else:
                    print(f"  WARN: could not resolve '{bare_name}' in {filepath}")
                    return match.group(0)

            content = IMG_SRC_RE.sub(replace_src, content)

            if content != original:
                file_count += 1
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)

    return file_count, rewritten_count


def main():
    if not os.path.isdir(SITE_DIR):
        print(f"ERROR: {SITE_DIR} not found. Run this from the repo root after jekyll build.")
        sys.exit(1)

    print("=== resolve-image-paths: post-build ===")

    image_map = build_image_map()
    print(f"  Indexed {len(image_map)} images from assets/images/")

    file_count, rewrite_count = rewrite_html_files(image_map)
    print(f"  Rewrote {rewrite_count} img src(s) across {file_count} file(s)")

    print("=== done ===")


if __name__ == "__main__":
    main()
