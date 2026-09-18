# Beneva — Premium Technology Company Website

A modern editorial-style company website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The project is designed for a technology and creative services business that delivers software, ERP systems, AI automation, web products, and product design.

This project is intentionally not a generic SaaS template. It uses a premium, business-focused visual language built around systems thinking, product engineering, and credible service delivery.

## Overview

The website is structured as a polished marketing and lead-generation platform for a company that provides:

- Software Development
- ERP Software Development
- Custom Software Solutions
- Web Development
- AI Automation
- UI/UX Design
- Graphic Design

The homepage communicates:

- engineering credibility
- product thinking
- business understanding
- AI capability
- design discipline
- clear pathways to start a project

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint

## Project Structure

```bash
site/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   └── work/
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── data/
│   ├── projects.ts
│   ├── services.ts
│   └── technologies.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── .gitignore
├── README.md
└── public/
```

## Key Content Architecture

The content is intentionally separated from the UI layer so the site is easy to maintain and scale.

### Data files

- `data/services.ts` contains all services and capability data.
- `data/projects.ts` contains project examples and blog post placeholders.
- `data/technologies.ts` contains the technology stack groupings.

This makes the site compatible with future CMS or admin dashboard work without rewriting the components.

## Features Included

- Editorial luxury-style homepage layout
- Strong typography-driven visual system
- Systems-based storytelling and capability map
- Proof-of-work section with project archive cards
- Service positioning by business problem, not buzzword-heavy summaries
- Technology stack wall
- Why-us principles section
- Contact/lead capture form
- Responsive design optimized for desktop, tablet, and mobile
- Reduced-motion support for accessibility
- Semantic HTML and keyboard-friendly structure
- Performance-conscious static generation

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
```

### 4. Start the production server

```bash
npm start
```

### 5. Run lint checks

```bash
npm run lint
```

## Customization Guide

### Update the brand name

Edit the brand label in:

- `components/Navbar.tsx`
- `components/Footer.tsx`

### Update services and positioning

Modify the content in:

- `data/services.ts`

You can change:

- title
- category
- problem framing
- use cases
- technologies

### Update project archive content

Modify:

- `data/projects.ts`

This file currently includes example project entries and blog placeholders that are easy to replace with real client work later.

### Update typography or color system

Edit:

- `app/globals.css`

Here you can adjust the neutral palette, spacing rules, and base visual styling.

## Deployment

This project is ready to deploy on platforms such as:

- Vercel
- Netlify
- Railway
- any Node.js-compatible host

For Vercel, the simplest deployment is:

1. Push the project to GitHub.
2. Import it into Vercel.
3. Use the default build settings.

Because it is a Next.js app, Vercel will handle the build and deploy process automatically.

## Notes for Future Growth

The project is structured to evolve into a fuller digital company website:

- add real case studies
- add CMS-driven project management
- add blog content
- add multi-page routes for services, work, about, and contact
- add form backend integration
- add automation and CRM workflows

## Important Design Intent

This site is designed to feel:

- credible and technical
- human-crafted rather than template-generated
- product-minded and business-aware
- visually distinct without being noisy
- strong enough for serious software delivery conversations

## License

This project is currently intended for internal business use and ongoing website development. Adjust licensing as needed for commercial deployment.

## Repository

Project is configured for Git and can be pushed to your GitHub repository as needed.

## Recommended Next Steps

- replace placeholder brand name
- add real client work and actual project details
- connect the contact form
- add dedicated service pages
- add SEO metadata improvements for each page
- align final copy with your exact business offer and pricing model

If you want, the next improvement can be a multi-page version of this site with dedicated pages for services, work, about, and contact.
