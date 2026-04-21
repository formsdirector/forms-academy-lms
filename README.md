# Forms Academy LMS

**Live site:** [learn.formsacademy.com](https://learn.formsacademy.com) · [forms-academy-lms.netlify.app](https://forms-academy-lms.netlify.app)

The Definitive Coach Education System — a comprehensive certification platform for Forms Academy coaches.

---

## Overview

Forms Academy LMS is a React + Vite single-page application deployed on **Netlify**, using **Supabase** for authentication and data. It delivers a structured coaching certification pathway across four progressive tiers.

### Key Features

- Four certification tiers: Forms Foundation Coach (FFC), Forms Certified Coach (FCC), Companion/Rondo Module, and Master Coach
- 53+ courses, 151+ lessons across 6 curriculum parts
- Supabase-powered authentication and user management
- Certification hub with tier badges, requirements, and study guidance
- Coach directory listing credentialed Forms Academy coaches
- Assignment submission, quiz system, and final exam flows
- Light/white canonical theme with Playfair Display + Montserrat typography

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, TypeScript |
| Styling | Tailwind CSS, custom CSS variables |
| Auth & Data | Supabase |
| Deployment | Netlify |
| Domain | learn.formsacademy.com |

---

## Repository Contents

This repository contains the **production build artifacts** deployed to Netlify. The original source files were built in a development environment and the compiled output is committed here to keep the repository in sync with the live production deployment.

```
/
├── index.html          # SPA entry point
└── assets/
    ├── index-*.js      # Compiled React application bundle
    └── index-*.css     # Compiled Tailwind + custom styles
```

### Fonts

The application loads the following fonts from Google Fonts at runtime:
- **Playfair Display** (400, 500, 600, 700) — headings
- **Montserrat** (300, 400, 500, 600, 700) — body and UI

---

## Deployment

The site is deployed via **Netlify** with automatic SPA routing (all paths serve `index.html`). The Supabase project URL is embedded in the compiled bundle.

**Supabase project:** `xkuojnbdvljhqiebiabi.supabase.co`

---

## Certification Pathway

1. **Forms Foundation Coach (FFC)** — Entry-level certification. Seven practical modules grounding coaches in the Forms methodology.
2. **Forms Certified Coach (FCC)** — Intermediate certification building on FFC foundations.
3. **Forms Rondo Module** — Companion module covering practical rondo exercises and methodology.
4. **Master Coach** — The highest distinction. Advanced theory, coaching standards, and master methodology.

---

## License

Proprietary — Forms Academy. All rights reserved.
