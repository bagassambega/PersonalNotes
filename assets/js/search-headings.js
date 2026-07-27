(function () {
  "use strict";

  const input = document.getElementById("heading-search-input");
  const results = document.getElementById("heading-search-results");
  const empty = document.getElementById("heading-search-empty");
  const count = document.getElementById("heading-search-count");
  const root = document.getElementById("heading-search-root");
  const pageList = document.getElementById("heading-search-pages");

  if (!input || !results || !empty || !count || !root || !pageList) return;

  const baseurl = root.dataset.baseurl || "";
  let entries = [];

  function normalize(value) {
    return value.toLowerCase().normalize("NFKD");
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function render(matches, query) {
    results.innerHTML = "";
    count.textContent = `${matches.length} heading${matches.length === 1 ? "" : "s"}`;
    empty.classList.toggle("hidden", matches.length > 0);

    if (matches.length === 0) {
      return;
    }

    const fragment = document.createDocumentFragment();

    matches.slice(0, 80).forEach((entry) => {
      const link = document.createElement("a");
      link.href = `${baseurl}${entry.url}`;
      link.className =
        "block rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 transition-colors duration-200 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700";

      const title = escapeHtml(entry.title);
      const pageTitle = escapeHtml(entry.pageTitle || "Untitled");
      const level = `H${entry.level}`;

      link.innerHTML = `
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-base font-semibold text-gray-900 dark:text-gray-100">${title}</h2>
          <span class="flex-shrink-0 rounded bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">${level}</span>
        </div>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${pageTitle}</p>
      `;

      fragment.appendChild(link);
    });

    results.appendChild(fragment);

    if (matches.length > 80) {
      const note = document.createElement("p");
      note.className = "text-sm text-gray-500 dark:text-gray-400";
      note.textContent = `Showing first 80 results. Refine "${query}" to narrow it down.`;
      results.appendChild(note);
    }
  }

  function search() {
    const query = input.value.trim();
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      render(entries, query);
      return;
    }

    const terms = normalizedQuery.split(/\s+/).filter(Boolean);
    const matches = entries.filter((entry) => {
      const haystack = normalize(entry.text || "");
      return terms.every((term) => haystack.includes(term));
    });

    render(matches, query);
  }

  function parsePages() {
    try {
      const pages = JSON.parse(pageList.textContent || "[]");
      return Array.isArray(pages) ? pages.filter((page) => page.url) : [];
    } catch (_) {
      return [];
    }
  }

  function pageUrl(url) {
    return `${baseurl}${url}`;
  }

  function headingId(heading, index) {
    if (heading.id) return heading.id;
    return `heading-${index + 1}`;
  }

  function entriesFromPage(page, html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const pageTitle =
      page.title || doc.querySelector("title")?.textContent?.split("|")[0]?.trim() || "Untitled";

    return Array.from(
      doc.querySelectorAll(
        "article.prose h1, article.prose h2, article.prose h3, article.prose h4, article.prose h5"
      )
    )
      .map((heading, index) => {
        const title = heading.textContent.trim();
        const level = Number(heading.tagName.slice(1));
        const id = headingId(heading, index);

        if (!title || !id) return null;

        return {
          title,
          level,
          pageTitle,
          url: `${page.url}#${id}`,
          text: [title, pageTitle].join(" "),
        };
      })
      .filter(Boolean);
  }

  function loadHeadings() {
    const pages = parsePages();

    return Promise.all(
      pages.map((page) =>
        fetch(pageUrl(page.url))
          .then((response) => {
            if (!response.ok) return [];
            return response.text();
          })
          .then((html) => entriesFromPage(page, html))
          .catch(() => [])
      )
    ).then((groups) => groups.flat());
  }

  loadHeadings()
    .then((data) => {
      entries = data;
      search();
      input.disabled = false;
      input.focus();
    })
    .catch(() => {
      empty.classList.remove("hidden");
      empty.textContent = "Headings could not be loaded.";
      input.disabled = true;
    });

  input.addEventListener("input", search);
})();
