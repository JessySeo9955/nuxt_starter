# 📁 Project Structure: Nuxt Application

This document outlines the structure of the Nuxt application and the purpose of each directory or file.

---

## 📦 Root Structure
```
├── application/ # Core Nuxt app (pages, layouts, plugins, etc.)
├── package/ # Custom logic (utils, API handlers)
├── public/ # Static files served as-is
├── assets/ # Imported assets (CSS, fonts, images)
├── tests/ # Unit and E2E tests
├── .nvmrc # Node.js version configuration
└── ...

```
---

## 📂 application/

Standard Nuxt 3 directory containing:
- `pages/` – Route-based pages
- `layouts/` – Custom layouts
- `plugins/` – Nuxt plugins
- `middleware/` – Route middleware
- etc.

---

## 📂 package/

Custom logic organized for scalability:

- `utils/` – Reusable utility functions (formatters, validators, etc.)
- `api/` – API request handlers (e.g., $fetch wrappers, backend interaction)

---

## 📂 public/

Files placed here are **served statically** at the root level (`/`).

Examples:
- `favicon.ico`
- `robots.txt`
- Static images (`/logo.png` becomes accessible at `http://yourdomain.com/logo.png`)

---

## 📂 assets/

Used for assets that are **processed by Nuxt/Vite**, such as:
- SCSS/CSS
- Fonts
- Images used via imports in Vue components

---

## 📂 tests/

Organized into:

- `unit/` – Component, composable, and logic unit tests
- `e2e/` – End-to-end tests using tools like Playwright or Cypress

---

## 📄 .nvmrc

Defines the Node.js version for this project. Useful for consistency across local development and CI/CD pipelines.


