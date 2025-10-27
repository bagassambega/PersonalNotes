---
title: "Personal Knowledge Base"
description: "A curated collection of knowledge, insights, and resources across various domains of computer science and technology"
layout: "home"
---

> **Welcome to My Digital Notes**  
> _A curated collection of knowledge, insights, and resources across various domains of computer science and technology._

## 📁 Table of Contents

<div style="margin:2rem 0;">
<table style="width:100%;border-collapse:collapse;font-family:Helvetica,Inter,sans-serif;font-size:1rem;box-shadow:0 2px 8px rgba(0,0,0,0.03);border-radius:8px;overflow:hidden;">
   <thead style="background:transparent;color:default;">
      <tr>
         <th style="padding:0.75em 1em;text-align:left;font-weight:600;border-bottom:1px solid #eee;">No.</th>
         <th style="padding:0.75em 1em;text-align:left;font-weight:600;border-bottom:1px solid #eee;">Subject</th>
         <th style="padding:0.75em 1em;text-align:left;font-weight:600;border-bottom:1px solid #eee;">Path</th>
      </tr>
   </thead>
   <tbody>
      {% assign count = 0 %}
      {% for resource in site.data.resources %}
      {% assign count = count | plus: 1 %}
      <tr>
         <td style="text-align:center;">{{ count }}</td>
         <td style="text-align:center;">{{ resource.title }}</td>
         <td style="text-align:center;">
           <a href="{{ resource.url | relative_url }}" style="color:#2563eb;text-decoration:none;">
            <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#f0f0f0" fill="none"><path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"/><polyline points="40.32 8.6 55.4 8.6 55.4 24.18"/><line x1="19.32" y1="45.72" x2="54.61" y2="8.91"/></svg>
           </a>
         </td>
      </tr>
      {% endfor %}
   </tbody>
</table>
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
