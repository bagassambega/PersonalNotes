// Table of Contents Generator
(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    tocSelector: "#toc-nav",
    mobileTocSelector: "#mobile-toc-nav",
    contentSelector: "#page-content",
    headingSelectors: "h1, h2, h3, h4, h5, h6",
    mobileToggleSelector: "#mobile-toc-toggle",
    mobileCloseSelector: "#mobile-toc-close",
    mobileSidebarSelector: "#mobile-toc-sidebar",
    mobileOverlaySelector: "#mobile-toc-overlay",
    sidebarSelector: "#toc-sidebar",
    activeClass: "toc-active",
    expandedClass: "toc-expanded",
  };

  // State
  let tocItems = [];
  let expandedSections = new Set();
  let observer;
  let currentActiveId = null;

  // Initialize TOC
  function initTOC() {
    const contentElement = document.querySelector(CONFIG.contentSelector);
    const tocElement = document.querySelector(CONFIG.tocSelector);
    const mobileTocElement = document.querySelector(CONFIG.mobileTocSelector);

    if (!contentElement || !tocElement) {
      return;
    }

    // Generate TOC structure
    tocItems = generateTOCStructure(contentElement);

    if (tocItems.length === 0) {
      // Hide TOC if no headings found
      const sidebarElement = document.querySelector(CONFIG.sidebarSelector);
      if (sidebarElement) {
        sidebarElement.style.display = "none";
      }
      return;
    }

    // Render TOC
    renderTOC(tocElement, tocItems);
    if (mobileTocElement) {
      renderTOC(mobileTocElement, tocItems);
    }

    // Initialize mobile navigation
    initMobileNavigation();

    // Initialize scroll spy
    initScrollSpy();

    // Initialize reading progress
    initReadingProgress();

    // Initialize smooth scrolling
    initSmoothScrolling();
  }

  // Generate TOC structure from headings
  function generateTOCStructure(contentElement) {
    const headings = contentElement.querySelectorAll(CONFIG.headingSelectors);
    const items = [];
    let idCounter = 0;

    headings.forEach((heading, index) => {
      // Generate ID if not present
      if (!heading.id) {
        heading.id =
          generateId(heading.textContent) || `heading-${++idCounter}`;
      }

      const level = parseInt(heading.tagName.charAt(1));
      const item = {
        id: heading.id,
        text: heading.textContent.trim(),
        level: level,
        element: heading,
        children: [],
      };

      // Build hierarchical structure
      if (level === 1 || items.length === 0) {
        items.push(item);
      } else {
        // Find parent item
        let parent = items[items.length - 1];
        while (parent && parent.level >= level) {
          parent = parent.parent;
        }

        if (parent && parent.level === level - 1) {
          item.parent = parent;
          parent.children.push(item);
        } else {
          // If no appropriate parent found, add to root
          items.push(item);
        }
      }
    });

    return items;
  }

  // Generate ID from text
  function generateId(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  // Render TOC
  function renderTOC(container, items) {
    container.innerHTML = "";

    // Add "Back to Top" link
    const backToTop = document.createElement("div");
    backToTop.className = "toc-item mb-3";
    backToTop.innerHTML = `
      <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 toc-link" data-target="top">
        <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
        Back to Top
      </a>
    `;
    container.appendChild(backToTop);

    // Add separator
    const separator = document.createElement("div");
    separator.className = "border-b border-gray-200 dark:border-gray-600 mb-3";
    container.appendChild(separator);

    items.forEach((item) => {
      const itemElement = createTOCItem(item);
      container.appendChild(itemElement);
    });
  }

  // Create TOC item element
  function createTOCItem(item) {
    const div = document.createElement("div");
    div.className = "toc-item";

    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      // Create expandable section
      const button = document.createElement("button");
      button.className =
        "w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-900 dark:text-gray-100";
      button.innerHTML = `
        <span>${item.text}</span>
        <svg class="w-4 h-4 transition-transform transform ${
          expandedSections.has(item.id) ? "rotate-180" : ""
        }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      `;

      button.addEventListener("click", () => toggleSection(item.id, button));
      div.appendChild(button);

      // Create children container
      if (expandedSections.has(item.id)) {
        const childrenContainer = createChildrenContainer(item.children);
        div.appendChild(childrenContainer);
      }
    } else {
      // Create link
      const link = document.createElement("a");
      link.href = `#${item.id}`;
      link.className =
        "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 toc-link";
      link.textContent = item.text;
      link.dataset.target = item.id;
      div.appendChild(link);
    }

    return div;
  }

  // Create children container
  function createChildrenContainer(children) {
    const container = document.createElement("div");
    container.className =
      "ml-2 border-l border-gray-200 dark:border-gray-600 toc-children";

    children.forEach((child) => {
      const childLink = document.createElement("a");
      childLink.href = `#${child.id}`;
      childLink.className =
        "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ml-2 toc-link text-left";
      childLink.textContent = child.text;
      childLink.dataset.target = child.id;
      childLink.style.textAlign = "left";
      container.appendChild(childLink);
    });

    return container;
  }

  // Toggle section expansion
  function toggleSection(sectionId, buttonElement) {
    const isExpanded = expandedSections.has(sectionId);
    const svg = buttonElement.querySelector("svg");
    const parentDiv = buttonElement.parentElement;

    if (isExpanded) {
      expandedSections.delete(sectionId);
      svg.classList.remove("rotate-180");

      // Remove children container
      const childrenContainer = parentDiv.querySelector(".toc-children");
      if (childrenContainer) {
        childrenContainer.remove();
      }
    } else {
      expandedSections.add(sectionId);
      svg.classList.add("rotate-180");

      // Add children container
      const item = findItemById(sectionId);
      if (item && item.children) {
        const childrenContainer = createChildrenContainer(item.children);
        parentDiv.appendChild(childrenContainer);
      }
    }
  }

  // Find item by ID
  function findItemById(id) {
    function search(items) {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = search(item.children);
          if (found) return found;
        }
      }
      return null;
    }
    return search(tocItems);
  }

  // Initialize mobile navigation
  function initMobileNavigation() {
    const mobileToggle = document.querySelector(CONFIG.mobileToggleSelector);
    const mobileClose = document.querySelector(CONFIG.mobileCloseSelector);
    const mobileSidebar = document.querySelector(CONFIG.mobileSidebarSelector);
    const mobileOverlay = document.querySelector(CONFIG.mobileOverlaySelector);

    if (!mobileToggle || !mobileSidebar) return;

    // Toggle mobile sidebar
    mobileToggle.addEventListener("click", () => {
      mobileSidebar.classList.remove("hidden");
      mobileOverlay.classList.remove("hidden");
      setTimeout(() => {
        mobileSidebar.classList.remove("-translate-x-full");
      }, 10);
    });

    // Close mobile sidebar
    const closeSidebar = () => {
      mobileSidebar.classList.add("-translate-x-full");
      setTimeout(() => {
        mobileSidebar.classList.add("hidden");
        mobileOverlay.classList.add("hidden");
      }, 300);
    };

    if (mobileClose) {
      mobileClose.addEventListener("click", closeSidebar);
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener("click", closeSidebar);
    }

    // Close on link click
    mobileSidebar.addEventListener("click", (e) => {
      if (e.target.classList.contains("toc-link")) {
        closeSidebar();
      }
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileSidebar.classList.contains("hidden")) {
        closeSidebar();
      }
    });
  }

  // Initialize scroll spy
  function initScrollSpy() {
    const headings = document.querySelectorAll(CONFIG.headingSelectors);

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveItem(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-20% 0% -80% 0%",
          threshold: 0,
        }
      );

      headings.forEach((heading) => {
        observer.observe(heading);
      });
    }
  }

  // Set active item
  function setActiveItem(id) {
    if (currentActiveId === id) return;

    // Remove previous active class
    document.querySelectorAll(".toc-link.toc-active").forEach((link) => {
      link.classList.remove(
        "toc-active",
        "bg-primary-100",
        "dark:bg-primary-900",
        "text-primary-600",
        "dark:text-primary-400"
      );
      link.classList.add("text-gray-700", "dark:text-gray-300");
    });

    // Add active class to current item
    document.querySelectorAll(`[data-target="${id}"]`).forEach((link) => {
      link.classList.add(
        "toc-active",
        "bg-primary-100",
        "dark:bg-primary-900",
        "text-primary-600",
        "dark:text-primary-400"
      );
      link.classList.remove("text-gray-700", "dark:text-gray-300");
    });

    currentActiveId = id;
  }

  // Initialize reading progress
  function initReadingProgress() {
    const progressBar = document.getElementById("reading-progress-bar");
    const progressText = document.getElementById("reading-progress-text");

    if (!progressBar || !progressText) return;

    function updateProgress() {
      const contentElement = document.querySelector(CONFIG.contentSelector);
      if (!contentElement) return;

      const contentRect = contentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const contentHeight = contentRect.height;
      const contentTop = contentRect.top;

      // Calculate progress based on how much of the content has been scrolled through
      let progress = 0;

      if (contentTop <= 0) {
        const visibleHeight = Math.min(
          windowHeight,
          contentHeight + contentTop
        );
        progress = Math.max(
          0,
          (windowHeight - contentTop) / (contentHeight + windowHeight)
        );
      }

      progress = Math.min(progress, 1);
      const percentage = Math.round(progress * 100);

      progressBar.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}%`;
    }

    // Throttled scroll listener for performance
    let progressTimer;
    window.addEventListener("scroll", () => {
      if (progressTimer) {
        clearTimeout(progressTimer);
      }
      progressTimer = setTimeout(updateProgress, 10);
    });

    // Initial update
    updateProgress();
  }

  // Initialize smooth scrolling for TOC links
  function initSmoothScrolling() {
    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("toc-link") ||
        e.target.closest(".toc-link")
      ) {
        e.preventDefault();
        const link = e.target.classList.contains("toc-link")
          ? e.target
          : e.target.closest(".toc-link");
        const targetId = link.dataset.target;

        if (targetId === "top") {
          // Scroll to top
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const headerOffset = 80; // Account for sticky header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    });
  }

  // Initialize when DOM is ready
  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTOC);
    } else {
      initTOC();
    }
  }

  // Auto-expand first section and any section with active headings
  function autoExpandFirstSection() {
    if (tocItems.length > 0) {
      // Always expand the first section if it has children
      if (tocItems[0].children && tocItems[0].children.length > 0) {
        expandedSections.add(tocItems[0].id);
      }

      // If there's a hash in URL, expand the section containing that heading
      const hash = window.location.hash.slice(1);
      if (hash) {
        const item = findItemById(hash);
        if (item && item.parent) {
          expandedSections.add(item.parent.id);
        }
      }

      // Re-render TOC with expanded sections
      const tocElement = document.querySelector(CONFIG.tocSelector);
      const mobileTocElement = document.querySelector(CONFIG.mobileTocSelector);

      if (tocElement) renderTOC(tocElement, tocItems);
      if (mobileTocElement) renderTOC(mobileTocElement, tocItems);
    }
  }

  // Cleanup
  function cleanup() {
    if (observer) {
      observer.disconnect();
    }
  }

  // Initialize
  init();

  // Auto-expand first section
  setTimeout(autoExpandFirstSection, 100);

  // Cleanup on page unload
  window.addEventListener("beforeunload", cleanup);
})();
