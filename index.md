---
title: "Personal Knowledge Base"
description: "A curated collection of knowledge, insights, and resources across various domains of computer science and technology"
layout: "home"
---

> **Welcome to Digital Notes**  
> _A curated collection of knowledge, insights, and resources across various domains of computer science and technology._

## 📁 Table of Contents

<style>
  .toc-container {
    @apply my-8 flex flex-col gap-3;
  }

  .toc-header {
    @apply grid gap-4 p-4 font-semibold text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 mb-2;
    grid-template-columns: 60px 1fr 60px;
  }

  .toc-header-no,
  .toc-header-title,
  .toc-header-link {
    @apply flex items-center;
  }

  .toc-header-no {
    @apply justify-center;
  }

  .toc-header-title {
    @apply justify-start;
  }

  .toc-header-link {
    @apply justify-center;
  }

  .toc-item {
    @apply grid gap-4 p-4 items-center border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm;
    grid-template-columns: 60px 1fr 60px;
  }

  .toc-no {
    @apply text-center text-sm text-gray-500 dark:text-gray-400 font-medium;
  }

  .toc-title {
    @apply text-left font-medium text-gray-900 dark:text-gray-100;
  }

  .toc-link a {
    @apply inline-flex items-center justify-center w-8 h-8 rounded transition-all duration-200 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30;
  }

  .toc-link svg {
    @apply w-4.5 h-4.5 stroke-current stroke-2;
  }

  @media (max-width: 640px) {
    .toc-header {
      @apply p-3 text-xs gap-3;
      grid-template-columns: 40px 1fr 40px;
    }

    .toc-item {
      @apply p-3 gap-3;
      grid-template-columns: 40px 1fr 40px;
    }

    .toc-title {
      @apply text-sm;
    }

    .toc-link svg {
      @apply w-4 h-4;
    }
  }
</style>

<div class="toc-container">
  <div class="toc-header">
    <div class="toc-header-no">No.</div>
    <div class="toc-header-title">Subject</div>
    <div class="toc-header-link">Link</div>
  </div>

  {% assign count = 0 %}
  {% for resource in site.data.resources %}
  {% assign count = count | plus: 1 %}
  <div class="toc-item">
    <div class="toc-no">{{ count }}</div>
    <div class="toc-title">{{ resource.title }}</div>
    <div class="toc-link">
      <a href="{{ resource.url | relative_url }}" title="Open {{ resource.title }}">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"/>
          <polyline points="40.32 8.6 55.4 8.6 55.4 24.18"/>
          <line x1="19.32" y1="45.72" x2="54.61" y2="8.91"/>
        </svg>
      </a>
    </div>
  </div>
  {% endfor %}
</div>


## 🎓 Stats

### 📋 Metadata

- **Repository**: PersonalNotes
- **Author**: bagassambega
- **Version**: 1.0.0
- **License**: Open Source
- **Built with**: Markdown + Static Site Generator
- **Last updated**: October 25, 2025

---

## 📈 Quick Statistics

```md
📚 Topics Covered: 17
🔗 Cross-References: ∞
📝 Content Quality: High
🎯 Target Audience: Developers & Students
📅 Last Updated: October 27, 2025
```

---

## 📞 Contact & Contributions

Found an error or want to contribute? Feel free to:

- Open an issue on the repository
- Submit a pull request with improvements
- Suggest new topics or sections
