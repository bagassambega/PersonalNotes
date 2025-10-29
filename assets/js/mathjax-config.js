window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    processEnvironments: true,
    packages: { "[+]": ["ams", "newcommand", "configmacros"] },
    tags: "ams",
    tagSide: "right",
    tagIndent: "0.8em",
    useLabelIds: true,
    multlineWidth: "85%",
    macros: {
      pmod: ["\\left(\\bmod{#1}\\right)", 1],
      bmod: ["\\mbox{ mod }{#1}", 1],
    },
  },
  chtml: {
    displayAlign: "center",
    displayIndent: "0",
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
    ignoreHtmlClass: "no-mathjax",
  },
  startup: {
    ready: () => {
      console.log("MathJax is loaded, but not yet initialized");
      MathJax.startup.defaultReady();
      console.log("MathJax is initialized, and the initial typeset is queued");
    },
    pageReady: () => {
      return MathJax.startup.defaultPageReady().then(() => {
        // Wrap all display math with scrollable container
        wrapDisplayMath();

        // Set up observer for dynamically added math
        const observer = new MutationObserver(() => {
          wrapDisplayMath();
        });

        // Observe for dynamically added math
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
    },
  },
};

// Function to wrap display math equations with scrollable div
function wrapDisplayMath() {
  const displayMath = document.querySelectorAll(
    'mjx-container[display="true"]'
  );

  displayMath.forEach((math) => {
    // Skip if already wrapped
    if (math.parentElement.classList.contains("latex-scroll")) {
      return;
    }

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "latex-scroll";

    // Insert wrapper before math element
    math.parentNode.insertBefore(wrapper, math);

    // Move math into wrapper
    wrapper.appendChild(math);
  });

  console.log("Display math equations wrapped with latex-scroll");
}