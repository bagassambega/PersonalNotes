document.addEventListener("DOMContentLoaded", () => {
  // Fetch glossary page once
  fetch("/glossary")
    .then(res => res.text())
    .then(html => {
      // Create a virtual DOM to search glossary definitions
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const terms = {};
      doc.querySelectorAll("h2").forEach(h2 => {
        const term = h2.textContent.trim();
        let def = "";
        let el = h2.nextElementSibling;
        while (el && el.tagName !== "H2") {
          def += el.outerHTML;
          el = el.nextElementSibling;
        }
        terms[term.toLowerCase()] = {
          href: `/glossary#${h2.id}`,
          definition: def.replace(/<[^>]+>/g, "").trim()
        };
      });

      // Scan current page for matching words
      document.querySelectorAll("p, li").forEach(el => {
        let html = el.innerHTML;
        for (const term in terms) {
          const t = terms[term];
          const re = new RegExp(`\\b${term}\\b`, "gi");
          html = html.replace(
            re,
            `<a href="${t.href}" class="glossary-term" data-tooltip="${t.definition}">${term}</a>`
          );
        }
        el.innerHTML = html;
      });
    });
});
