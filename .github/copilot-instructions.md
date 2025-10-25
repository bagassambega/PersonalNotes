# GitHub Copilot Instructions for PersonalNotes

## Project Overview

- This repository is a personal knowledge base and note-taking system.
- Built with Jekyll, a static site generator for blogs and documentation.
- Contains markdown notes, technical documentation, and blog posts on various topics (e.g., algorithms, mathematics, development operations).
- Ruby dependencies are managed via Bundler (`Gemfile`, `vendor/bundle`).

## Coding Guidelines

- Use Markdown (`.md` or `.markdown`) for all notes and documentation.
- Organize new notes in the root directory or `docs/` folder.
- Blog posts should be placed in `_posts/` using the format `YYYY-MM-DD-title.markdown`.
- Update `_config.yml` for site-wide settings and configuration.
- Use only Jekyll-compatible plugins and themes.

## Copilot Usage

- Suggest code snippets for Ruby, Markdown, and Jekyll configuration.
- Automate note formatting, post creation, and site structure organization.
- Assist with troubleshooting Jekyll build or deployment issues.
- Recommend best practices for organizing technical notes and resources.

## Contribution Workflow

- Create new branches for major changes or new features.
- Write clear and descriptive commit messages.
- Run `bundle exec jekyll build` to generate the site locally.
- Preview changes before pushing to the repository.
- Ensure all notes and posts follow the established structure and naming conventions.
