# Project Structure Documentation

## Overview
This Next.js project follows a clean and organized structure for better maintainability and readability.

## Directory Structure

```
scc-cms/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Main navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero section component
│   │   ├── TogetherInFaith.tsx
│   │   ├── SpiritualMessages.tsx
│   │   └── BelongingFellowship.tsx
│   ├── pages/               # Page components (business logic)
│   │   └── tentang.tsx      # About page component
│   ├── tentang/             # Next.js route for /tentang
│   │   └── page.tsx         # Route handler that imports from pages/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # External UI components
│   └── ui/
│       └── 3d-flip-card.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
│   ├── scc-logo.svg
│   └── ...
└── ...
```

## Component Usage

### Active Components
- **Navigation.tsx**: Used in main page and tentang page
- **Footer.tsx**: Used in main page and tentang page
- **Hero.tsx**: Used in main page
- **TogetherInFaith.tsx**: Used in main page
- **SpiritualMessages.tsx**: Used in main page
- **BelongingFellowship.tsx**: Used in main page

### Removed Components
- About.tsx (unused)
- ExperienceSection.tsx (unused)
- FollowUs.tsx (unused)
- MinistrySection.tsx (unused)

## Architecture Decisions

1. **Separation of Concerns**: Page components are separated from route handlers
2. **Clean Components Directory**: Only contains actively used components
3. **Next.js App Router**: Follows Next.js 13+ app directory structure
4. **Reusable Components**: Navigation and Footer are shared across pages

## File Naming Conventions

- Components: PascalCase (e.g., `Navigation.tsx`)
- Pages: lowercase (e.g., `tentang.tsx`)
- Routes: Next.js convention (`page.tsx`)

## Import Patterns

- Route pages import from `../pages/`
- Page components import from `../components/`
- Relative imports are used for better maintainability