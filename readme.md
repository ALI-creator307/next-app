# DevKit

A modern dark-themed web application built with **Next.js 15** and **Tailwind CSS**, featuring a responsive navigation system, hero section, documentation page, projects gallery, and contact form.

## Live Demo

🔗 https://next-app-nine-peach.vercel.app/

---

## Features

- Responsive navbar with animated hamburger menu
- Modern hero section with badge, CTA buttons, and statistics
- Documentation page with sticky sidebar navigation
- Projects gallery with category-based filtering
- Contact form with success state and information cards
- Fully responsive design across all devices
- Built using Next.js App Router

---

## Tech Stack

- **Next.js 15** — React framework with App Router
- **Tailwind CSS** — Utility-first CSS framework
- **Vercel** — Deployment and hosting platform

---

## Getting Started

### Prerequisites

```bash
node --version   # v18+
npm --version    # v9+
```

### Installation

```bash
git clone https://github.com/ALI-creator307/next-app.git

cd next-app

npm install

npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Project Structure

```text
next-app/
├── public/
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   ├── docs/
│   │   │   └── page.js
│   │   ├── projects/
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   └── components/
│       ├── docs/
│       │   ├── DocContent.jsx
│       │   └── Sidebar.jsx
│       │
│       ├── home/
│       │   └── Hero.jsx
│       │
│       ├── project/
│       │   ├── ProjectCard.jsx
│       │   └── ProjectsFilter.jsx
│       │
│       └── NavBar.jsx
```

---

## Pages

| Route | Description |
| ------- | --------------------------------------------- |
| `/` | Home page with hero section |
| `/docs` | Documentation page with sidebar navigation |
| `/projects` | Projects gallery with category filters |
| `/contact` | Contact page with contact form and info cards |

---

## Available Scripts

```bash
npm run dev      # Start development server

npm run build    # Build application for production

npm run start    # Start production server

npm run lint     # Run ESLint checks
```

---

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy on Vercel

The easiest way to deploy this project is through Vercel:

1. Push the project to GitHub
2. Import the repository into Vercel
3. Deploy with a single click

---

## Author

GitHub: https://github.com/ALI-creator307