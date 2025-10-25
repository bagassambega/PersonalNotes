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

## 📁 Content Areas

### [Algorithm Strategy](algorithm-strategy.md)

Comprehensive notes on algorithmic strategies, complexity analysis, and problem-solving techniques including NP-Complete problems and optimization algorithms.

### [Discrete Mathematics](discrete-math.md)

Essential mathematical concepts for computer science including number theory, modular arithmetic, graph theory, combinatorics, and discrete structures.

### [Development & Operations](devops.md)

Modern software development practices including DevOps, MLOps, DataOps, CI/CD pipelines, infrastructure as code, and cloud deployment strategies.

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

### Adding Blog Posts

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-title.markdown`
2. Add frontmatter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   description: "Post description"
   date: 2025-10-25 12:00:00 +0000
   categories: [category1, category2]
   tags: [tag1, tag2]
   ---
   ```

### Navigation

Update the navigation in `_includes/header.html` to add new main sections.

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  }
}
```

### Typography

The site uses the Inter font family. To change fonts, update:

1. Font import in `assets/css/main.css`
2. Font family in `tailwind.config.js`
3. Font link in `_layouts/default.html`

### Dark Mode

Dark mode is implemented using Tailwind's `dark:` variant and JavaScript for theme persistence. The theme toggle cycles through:

- System preference
- Light mode
- Dark mode

## 🔧 Configuration

### Site Settings

Edit `_config.yml` to update:

- Site title and description
- Author information
- Social links
- Build settings

### SEO Settings

The site includes comprehensive SEO configuration:

- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured data
- XML sitemap (via jekyll-feed plugin)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Jekyll** team for the excellent static site generator
- **TailwindCSS** team for the utility-first CSS framework
- **GitHub** for Pages hosting and Actions CI/CD
- **Inter** font family by Rasmus Andersson

---

**Made with ❤️ by [bagassambega](https://github.com/bagassambega)**
