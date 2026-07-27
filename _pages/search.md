---
layout: page
title: Search
description: "Find headings across the knowledge base."
permalink: "/search/"
show_nav: false
---

<div id="heading-search-root" class="not-prose" data-baseurl="{{ site.baseurl }}">
  <label for="heading-search-input" class="sr-only">Search headings</label>
  <input
    id="heading-search-input"
    type="search"
    class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-base text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
    placeholder="Search H1 through H5 headings..."
    autocomplete="off"
    disabled
  />

  <div class="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
    <span id="heading-search-count">0 headings</span>
  </div>

  <p id="heading-search-empty" class="mt-8 hidden text-gray-600 dark:text-gray-400">
    No headings found.
  </p>

  <div id="heading-search-results" class="mt-6 space-y-3"></div>
</div>

<script type="application/json" id="heading-search-pages">
[
  {% assign searchable_pages = site.pages | where_exp: "item", "item.url != page.url" | sort: "url" %}
  {% for item in searchable_pages %}
    {% unless item.url contains '.xml' or item.url contains '.json' or item.url contains '.css' or item.url contains '.js' %}
      {
        "title": {{ item.title | default: site.title | jsonify }},
        "url": {{ item.url | jsonify }}
      }{% unless forloop.last %},{% endunless %}
    {% endunless %}
  {% endfor %}
]
</script>
<script src="{{ '/assets/js/search-headings.js' | relative_url }}"></script>
