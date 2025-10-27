# Personal Notes

A modern, responsive knowledge base built with Jekyll and TailwindCSS, featuring dark mode support and automated deployment to GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, responsive design powered by TailwindCSS
- **Dark Mode**: Automatic dark/light mode toggle with system preference detection
- **Fast Loading**: Optimized static site generation with Jekyll
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Mobile First**: Responsive design that works on all devices
- **Accessibility**: WCAG compliant with keyboard navigation support
- **CI/CD**: Automated deployment to GitHub Pages
- **Typography**: Beautiful typography with the Inter font family

## 🛠️ Technology Stack

- **[Jekyll](https://jekyllrb.com/)** - Static site generator
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[GitHub Pages](https://pages.github.com/)** - Hosting and deployment
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation
- **[Inter Font](https://rsms.me/inter/)** - Typography

## 🏗️ Local Development

### Prerequisites

- Ruby 3.1 or higher
- Node.js 18 or higher
- Bundler gem

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bagassambega/PersonalNotes.git
   cd PersonalNotes
   ```

2. **Install Ruby dependencies**

   ```bash
   bundle install
   ```

3. **Install Node.js dependencies**

   ```bash
   npm install
   ```

4. **Build TailwindCSS**

   ```bash
   npm run build-css
   ```

5. **Start the development server**
   ```bash
   bundle exec jekyll serve --livereload
   ```

The site will be available at `http://localhost:4000`.

### Development Commands

- **Build CSS for development (with watch mode)**:

  ```bash
  npm run build-css
  ```

- **Build CSS for production (minified)**:

  ```bash
  npm run build-css-prod
  ```

- **Build Jekyll site**:

  ```bash
  bundle exec jekyll build
  ```

- **Serve with live reload**:
  ```bash
  bundle exec jekyll serve --livereload
  ```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment process:

1. **GitHub Actions** triggers on push to `main`
2. **Dependencies** are installed (Ruby gems and Node.js packages)
3. **TailwindCSS** is built and optimized
4. **Jekyll** generates the static site
5. **Site** is deployed to GitHub Pages

### Manual Deployment

If you need to deploy manually:

1. Ensure GitHub Pages is enabled in repository settings
2. Set source to "GitHub Actions"
3. Push changes to the main branch

## 📝 Content Management

### Adding New Pages

1. Create a new Markdown file in the root directory
2. Add frontmatter with layout, title, and description:
   ```yaml
   ---
   layout: page
   title: "Your Page Title"
   description: "A brief description of the page content"
   permalink: /your-page/
   github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/your-file.md
   ---
   ```

### Navigation

Update the navigation in `_includes/header.html` to add new main sections.

<style>
   .toc-table {
      width: 100%;
      border-collapse: collapse;
      font-family: Inter, sans-serif;
      font-size: 1rem;
      background: #fff;
      color: #222;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      border-radius: 8px;
      overflow: hidden;
      margin: 2rem 0;
   }
   .toc-table thead {
      background: #f8f9fa;
   }
   .toc-table th {
      padding: 0.75em 1em;
      text-align: left;
      font-weight: 600;
      border-bottom: 1px solid #eee;
   }
   .toc-table td {
      padding: 0.5em 1em;
      border-bottom: 1px solid #f0f0f0;
   }
   .toc-table a {
      color: #2563eb;
      text-decoration: none;
   }
   @media (prefers-color-scheme: dark) {
      .toc-table {
         background: #18181b;
         color: #e5e7eb;
         box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
      .toc-table thead {
         background: #23232a;
      }
      .toc-table th {
         border-bottom: 1px solid #333;
      }
      .toc-table td {
         border-bottom: 1px solid #23232a;
      }
      .toc-table a {
         color: #60a5fa;
      }
   }
</style>
