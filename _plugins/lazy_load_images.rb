# _plugins/lazy_load_images.rb
Jekyll::Hooks.register :documents, :post_render do |doc|
  # Only process markdown files
  if doc.output_ext == ".html"
    doc.output = doc.output.gsub(/<img(.*?)>/) do |match|
      # Skip if already has loading attribute
      next match if match.include?('loading=')
      
      # Add loading="lazy" attribute
      match.sub(/<img/, '<img loading="lazy"')
    end
  end
end

Jekyll::Hooks.register :pages, :post_render do |page|
  if page.output_ext == ".html"
    page.output = page.output.gsub(/<img(.*?)>/) do |match|
      next match if match.include?('loading=')
      match.sub(/<img/, '<img loading="lazy"')
    end
  end
end