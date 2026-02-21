# _plugins/resolve_image_paths.rb
#
# Resolves bare image filenames (e.g., "photo.png") to their actual paths
# within the site. This mirrors Obsidian's behavior where images can be
# referenced by filename alone regardless of directory structure.
#
# How it works:
#   1. At site startup, scans all static files under assets/images/ and
#      builds a filename -> site-relative-path lookup table.
#   2. After each page/document renders, finds <img> tags whose src is a
#      bare filename (no "/" or path separator) and rewrites the src to
#      the correct path, prepended with the site baseurl.
#
# If two files share the same basename, the first one found wins and a
# warning is emitted during the build.

module JekyllImageResolver
  # Build the filename -> path map once per site build.
  class ImageMapGenerator < Jekyll::Generator
    priority :highest

    def generate(site)
      image_map = {}

      site.static_files.each do |sf|
        # Only index files under assets/images/
        next unless sf.relative_path.start_with?("/assets/images/")

        basename = File.basename(sf.relative_path)

        if image_map.key?(basename)
          Jekyll.logger.warn "ImageResolver:",
            "Duplicate filename '#{basename}' — keeping #{image_map[basename]}, " \
            "ignoring #{sf.relative_path}"
          next
        end

        image_map[basename] = sf.relative_path
      end

      # Store on site config so hooks can access it.
      site.config["_image_map"] = image_map
      Jekyll.logger.info "ImageResolver:", "Indexed #{image_map.size} images from assets/images/"
    end
  end
end

# Rewrite bare-filename <img> src attributes after render.
# Handles both :pages and :documents (collections like _pages).

rewrite_images = proc do |item|
  next unless item.output_ext == ".html"

  image_map = item.site.config["_image_map"]
  next if image_map.nil? || image_map.empty?

  baseurl = item.site.config["baseurl"] || ""

  # Match <img ... src="bare_filename.ext" ...>
  # A "bare filename" contains no "/" characters.
  item.output = item.output.gsub(/(<img\s[^>]*src=["'])([^"'\/]+\.(?:png|jpe?g|gif|svg|webp|avif|ico))(["'])/) do
    prefix  = Regexp.last_match(1)
    fname   = Regexp.last_match(2)
    suffix  = Regexp.last_match(3)

    if image_map.key?(fname)
      resolved = "#{baseurl}#{image_map[fname]}"
      "#{prefix}#{resolved}#{suffix}"
    else
      # Leave unchanged if not found; Jekyll will serve a 404 as before.
      Jekyll.logger.warn "ImageResolver:", "Could not resolve '#{fname}'"
      "#{prefix}#{fname}#{suffix}"
    end
  end
end

Jekyll::Hooks.register :pages,     :post_render, &rewrite_images
Jekyll::Hooks.register :documents, :post_render, &rewrite_images
