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
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .toc-header {
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    gap: 1rem;
    padding: 1rem;
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 0.5rem;
  }

  .dark .toc-header {
    color: #9ca3af;
    border-bottom: 1px solid #374151;
  }

  .toc-header-no {
    text-align: center;
  }

  .toc-header-title {
    text-align: left;
  }

  .toc-header-link {
    text-align: center;
  }

  .toc-item {
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    border-radius: 6px;
    transition: all 0.2s ease;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .dark .toc-item {
    background-color: #1f2937;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .toc-item:hover {
    background-color: #f9fafb;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .dark .toc-item:hover {
    background-color: #374151;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  .toc-no {
    text-align: center;
    font-size: 0.875rem;
    color: #9ca3af;
    font-weight: 500;
  }

  .dark .toc-no {
    color: #6b7280;
  }

  .toc-title {
    text-align: left;
    font-weight: 500;
    color: #111827;
  }

  .dark .toc-title {
    color: #f9fafb;
  }

  .toc-link {
    text-align: center;
  }

  .toc-link a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    transition: all 0.2s ease;
    color: #4b5563;
  }

  .dark .toc-link a {
    color: #9ca3af;
  }

  .toc-link a:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  .dark .toc-link a:hover {
    background-color: rgba(55, 65, 81, 0.5);
    color: #f9fafb;
  }

  .toc-link svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    stroke-width: 2;
  }

  .icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }

  .toc-item:hover .icon-container {
    background-color: rgba(229, 231, 235, 0.5);
  }

  .dark .toc-item:hover .icon-container {
    background-color: rgba(75, 85, 99, 0.5);
  }

  .toc-item:hover .toc-title {
    color: #111827;
    transition: color 0.2s ease;
  }

  .dark .toc-item:hover .toc-title {
    color: #ffffff;
  }

  @media (max-width: 640px) {
    .toc-header {
      grid-template-columns: 40px 1fr 40px;
      padding: 0.75rem;
      font-size: 0.75rem;
    }

    .toc-item {
      grid-template-columns: 40px 1fr 40px;
      padding: 0.75rem;
      gap: 0.75rem;
    }

    .toc-title {
      font-size: 0.9rem;
    }

    .toc-link svg {
      width: 16px;
      height: 16px;
    }
  }
</style>

<div class="toc-container no-underline">
  <div class="toc-header">
    <div class="toc-header-no">No.</div>
    <div class="toc-header-title">Subject</div>
    <div class="toc-header-link">Link</div>
  </div>

{% assign count = 0 %}
{% for resource in site.data.resources %}
{% assign count = count | plus: 1 %}
<a href="{{ resource.url | relative_url }}" target="_blank" rel="noopener noreferrer" class="toc-item group no-underline">

  <div class="toc-no no-underline">{{ count }}</div>
  <div class="toc-title">{{ resource.title }}</div>
  <div class="toc-link">
  <div class="icon-container">
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" class="w-[18px] h-[18px] stroke-current">
  <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"/>
  <polyline points="40.32 8.6 55.4 8.6 55.4 24.18"/>
  <line x1="19.32" y1="45.72" x2="54.61" y2="8.91"/>
  </svg>
  </div>
  </div>
  </a>
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
