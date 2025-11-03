/**
 * Glossary Terms Handler
 * Converts <term> tags into interactive glossary links with tooltips
 */

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch glossary definitions once
  let glossaryTerms = {};

  try {
    const response = await fetch("/PersonalNotes/glossary/");
    const html = await response.text();

    // Parse the glossary page
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Extract all h2 headings as glossary terms
    doc.querySelectorAll("h2").forEach((h2) => {
      const termName = h2.textContent.trim();
      const termId = h2.id;

      // Get the definition (all content until next h2 or hr)
      let definition = "";
      let el = h2.nextElementSibling;

      while (el && el.tagName !== "H2" && el.tagName !== "HR") {
        if (el.tagName === "P") {
          // Store HTML content to preserve LaTeX formatting
          definition += el.innerHTML.trim() + " ";
        }
        el = el.nextElementSibling;
      }

      glossaryTerms[termId] = {
        name: termName,
        definition: definition.trim(),
      };
    });
  } catch (error) {
    console.error("Failed to load glossary:", error);
    return;
  }

  // Find all <term> elements and convert them
  document.querySelectorAll("term").forEach((termElement) => {
    const href = termElement.getAttribute("href");
    const text = termElement.textContent;

    if (!href) return;

    // Extract the hash/anchor from href
    const hashMatch = href.match(/#(.+)$/);
    if (!hashMatch) return;

    const termId = hashMatch[1];
    const termData = glossaryTerms[termId];

    // Create the replacement link element
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.className = "glossary-term";

    // Add tooltip if definition exists
    if (termData && termData.definition) {
      link.setAttribute("data-tooltip", termData.definition);
      link.setAttribute("aria-label", termData.definition);
    }

    // Replace <term> with <a>
    termElement.parentNode.replaceChild(link, termElement);
  });

  // Create tooltip element
  const tooltip = document.createElement("div");
  tooltip.className = "glossary-tooltip";
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);

  // Handle tooltip display
  document.querySelectorAll(".glossary-term").forEach((term) => {
    term.addEventListener("mouseenter", (e) => {
      const definition = term.getAttribute("data-tooltip");
      if (!definition) return;

      // Use innerHTML to preserve LaTeX formatting
      tooltip.innerHTML = definition;
      tooltip.style.display = "block";

      // Position tooltip
      const rect = term.getBoundingClientRect();
      tooltip.style.left = rect.left + "px";
      tooltip.style.top = rect.bottom + window.scrollY + 5 + "px";

      // Render LaTeX in tooltip using MathJax
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([tooltip]).catch((err) =>
          console.error("MathJax rendering error in tooltip:", err)
        );
      }
    });

    term.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    // Update tooltip position on scroll
    term.addEventListener("mousemove", (e) => {
      if (tooltip.style.display === "block") {
        const rect = term.getBoundingClientRect();
        tooltip.style.left = rect.left + "px";
        tooltip.style.top = rect.bottom + window.scrollY + 5 + "px";
      }
    });
  });
});
