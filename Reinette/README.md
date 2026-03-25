# Reinette — Real Estate Studio

A modern, minimal real estate landing page built with **React 19 + Vite + Tailwind CSS v4**.

---

## Live Preview

> Dark-themed, fully responsive single-page website for a premium real estate studio.

---

## Tech Stack

| Tech | Version |
|------|---------|
| React | 19.x |
| Vite | 7.x |
| Tailwind CSS | 4.x |
| ESLint | 9.x |

---

## Project Structure

```
Reinette/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navbar with mobile menu
│   │   ├── Hero.jsx          # Full-screen hero section
│   │   ├── About.jsx         # About + image grid + stats
│   │   ├── Achievement.jsx   # Achievements section
│   │   ├── Service.jsx       # Services list
│   │   ├── Project.jsx       # Project showcase grid
│   │   ├── Team.jsx          # Team members
│   │   ├── Review.jsx        # Client reviews
│   │   ├── CTA.jsx           # Call to action
│   │   └── Footer.jsx        # Footer with newsletter
│   ├── img/                  # Local images (a1–a10)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Navbar | Fixed top nav, scroll effect, mobile hamburger menu |
| 2 | Hero | Full-screen title with social links & scroll indicator |
| 3 | About | Company info, stats (12+ yrs, 500+ sold, 98% satisfaction), image grid |
| 4 | Achievement | Key milestones and numbers |
| 5 | Service | Property Consultation, Market Analysis, Management, Financing |
| 6 | Project | 4 featured properties (Villa, Resort, Suites, Villas) |
| 7 | Team | 4 team members — Inspector, Manager, Planner, Consultant |
| 8 | Review | Client testimonials |
| 9 | CTA | Call to action banner |
| 10 | Footer | Nav links, newsletter signup, social icons |

---

## Project Images

All local images are in `src/img/` folder:

| File | Preview |
|------|---------|
| a1.png | ![a1](src/img/a1.png) |
| a2.png | ![a2](src/img/a2.png) |
| a3.png | ![a3](src/img/a3.png) |
| a4.png | ![a4](src/img/a4.png) |
| a5.png | ![a5](src/img/a5.png) |
| a6.png | ![a6](src/img/a6.png) |
| a7.png | ![a7](src/img/a7.png) |
| a8.png | ![a8](src/img/a8.png) |
| a9.png | ![a9](src/img/a9.png) |
| a10.png | ![a10](src/img/a10.png) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Features

- Scroll-triggered reveal animations (IntersectionObserver)
- Fully responsive — mobile, tablet, desktop
- Fixed navbar with blur + scroll effect
- Mobile hamburger menu
- Image hover zoom effects
- Grayscale → color team card hover
- Newsletter input in footer
- Dark theme throughout (`bg-black`)

---

## Contact

📧 hello@reinette.com  
🔗 [LinkedIn](https://www.linkedin.com/)

---

© 2025 Reinette. All rights reserved.
