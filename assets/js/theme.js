// Theme management
(function () {
  "use strict";

  // Theme constants
  const THEME_STORAGE_KEY = "theme";
  const THEME_DARK = "dark";
  const THEME_LIGHT = "light";
  const THEME_SYSTEM = "system";

  // DOM elements
  let themeToggle;
  let lightIcon;
  let darkIcon;
  let mobileMenuButton;
  let mobileMenu;

  // Initialize theme on page load
  function initTheme() {
    // Get saved theme or default to system
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || THEME_SYSTEM;
    applyTheme(savedTheme);
    updateThemeIcons(savedTheme);
  }

  // Apply theme to document
  function applyTheme(theme) {
    const root = document.documentElement;

    if (theme === THEME_DARK) {
      root.classList.add(THEME_DARK);
    } else if (theme === THEME_LIGHT) {
      root.classList.remove(THEME_DARK);
    } else {
      // System theme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add(THEME_DARK);
      } else {
        root.classList.remove(THEME_DARK);
      }
    }
  }

  // Update theme toggle icons
  function updateThemeIcons(theme) {
    if (!lightIcon || !darkIcon) return;

    const isDark =
      theme === THEME_DARK ||
      (theme === THEME_SYSTEM &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      lightIcon.classList.remove("hidden");
      darkIcon.classList.add("hidden");
    } else {
      lightIcon.classList.add("hidden");
      darkIcon.classList.remove("hidden");
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme =
      localStorage.getItem(THEME_STORAGE_KEY) || THEME_SYSTEM;
    let newTheme;

    // Cycle through: system -> light -> dark -> system
    if (currentTheme === THEME_SYSTEM) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      newTheme = prefersDark ? THEME_LIGHT : THEME_DARK;
    } else if (currentTheme === THEME_LIGHT) {
      newTheme = THEME_DARK;
    } else {
      newTheme = THEME_SYSTEM;
    }

    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    applyTheme(newTheme);
    updateThemeIcons(newTheme);

    // Add a subtle animation
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 300);
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    if (!mobileMenu) return;

    const isHidden = mobileMenu.classList.contains("hidden");

    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("animate-slide-down");
      mobileMenuButton.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("animate-slide-down");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    }
  }

  // Handle system theme changes
  function handleSystemThemeChange() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === THEME_SYSTEM || !savedTheme) {
      applyTheme(THEME_SYSTEM);
      updateThemeIcons(THEME_SYSTEM);
    }
  }

  // Handle keyboard navigation
  function handleKeyboardNavigation(event) {
    // Toggle theme with Ctrl/Cmd + Shift + L
    if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "L"
    ) {
      event.preventDefault();
      toggleTheme();
    }

    // Toggle mobile menu with Escape
    if (
      event.key === "Escape" &&
      mobileMenu &&
      !mobileMenu.classList.contains("hidden")
    ) {
      toggleMobileMenu();
    }
  }

  // Handle clicks outside mobile menu
  function handleClickOutside(event) {
    if (!mobileMenu || mobileMenu.classList.contains("hidden")) return;

    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuButton.contains(event.target)
    ) {
      toggleMobileMenu();
    }
  }

  // Initialize smooth scrolling for anchor links
  function initSmoothScrolling() {
    document.addEventListener("click", function (event) {
      const target = event.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (href === "#") return;

      const element = document.querySelector(href);
      if (!element) return;

      event.preventDefault();

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL
      history.pushState(null, null, href);
    });
  }

  // Initialize scroll-to-top functionality
  function initScrollToTop() {
    let scrollToTopButton = document.getElementById("scroll-to-top");

    if (!scrollToTopButton) {
      // Create scroll to top button
      scrollToTopButton = document.createElement("button");
      scrollToTopButton.id = "scroll-to-top";
      scrollToTopButton.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      `;
      scrollToTopButton.className =
        "fixed bottom-6 right-6 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg opacity-0 invisible transition-all duration-300 focus-ring z-40";
      scrollToTopButton.setAttribute("aria-label", "Scroll to top");
      document.body.appendChild(scrollToTopButton);
    }

    // Show/hide scroll to top button
    function toggleScrollToTop() {
      const scrolled = window.pageYOffset > 300;

      if (scrolled) {
        scrollToTopButton.classList.remove("opacity-0", "invisible");
        scrollToTopButton.classList.add("opacity-100", "visible");
      } else {
        scrollToTopButton.classList.add("opacity-0", "invisible");
        scrollToTopButton.classList.remove("opacity-100", "visible");
      }
    }

    // Scroll to top functionality
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Throttled scroll listener
    let scrollTimer;
    window.addEventListener("scroll", function () {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(toggleScrollToTop, 100);
    });
  }

  // Initialize on DOM content loaded
  function init() {
    // Get DOM elements
    themeToggle = document.getElementById("theme-toggle");
    lightIcon = document.getElementById("theme-toggle-light-icon");
    darkIcon = document.getElementById("theme-toggle-dark-icon");
    mobileMenuButton = document.getElementById("mobile-menu-button");
    mobileMenu = document.getElementById("mobile-menu");

    // Initialize theme
    initTheme();

    // Event listeners
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", toggleMobileMenu);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
    }

    // Keyboard navigation
    document.addEventListener("keydown", handleKeyboardNavigation);

    // Click outside to close mobile menu
    document.addEventListener("click", handleClickOutside);

    // Initialize additional features
    initSmoothScrolling();
    initScrollToTop();

    // Add page load animation
    document.body.classList.add("animate-fade-in");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Re-initialize theme on page navigation (for SPAs)
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      initTheme();
    }
  });
})();
