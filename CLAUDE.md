# CLAUDE.md

## Project Overview

**KYRAI** is a React/TypeScript web application showcase — a landing page template with modular components. The project is in early-stage development, providing a foundation for a professional web app with hero and features sections.

- **Author:** tareqkayyali
- **License:** ISC
- **Repository:** https://github.com/tareqkayyali/KYRAI

## Tech Stack

- **React** — UI component library
- **TypeScript** — Static typing (`.tsx` files)
- **Tailwind CSS** — Utility-first CSS framework (planned, referenced in commit history)
- **Node.js / npm** — Package management and runtime

## Project Structure

```
KYRAI/
├── .gitignore              # Node.js ignore rules (logs, node_modules, .env, build artifacts)
├── README.md               # Setup instructions
├── package.json            # NPM configuration (minimal — no build/dev scripts yet)
├── CLAUDE.md               # This file
└── src/
    ├── App.tsx             # Root application component
    └── components/
        ├── Features.tsx    # Features list section
        └── Hero.tsx        # Hero/landing section with CTA
```

## Architecture and Conventions

### Component Patterns

- **Functional components only** — no class components
- **TypeScript typing** — components use `React.FC` type annotation
- **Default exports** — each component file exports a single default component
- **One component per file** — components live in dedicated files under `src/components/`

### Naming Conventions

| Item              | Convention      | Example            |
|-------------------|-----------------|--------------------|
| Component files   | PascalCase.tsx  | `Hero.tsx`         |
| Component names   | PascalCase      | `const Hero`       |
| CSS classes       | lowercase/kebab | `className="hero"` |
| Directories       | lowercase       | `components/`      |

### Component Template

```tsx
import React from 'react';

const ComponentName: React.FC = () => {
    return (
        <section className="component-class">
            {/* content */}
        </section>
    );
};

export default ComponentName;
```

### Code Style

- **Indentation:** 4 spaces
- **Quotes:** Single quotes for imports, double quotes in JSX attributes
- **Semicolons:** Yes
- **Arrow functions** for component definitions

## Development Commands

```bash
npm install       # Install dependencies
npm start         # Start dev server (localhost:3000)
npm test          # Run tests (placeholder — not yet configured)
```

### Current Gaps (not yet configured)

- No build script (`npm run build`)
- No test framework
- No linting (ESLint/Prettier)
- No dev server configuration (Vite, CRA, or similar)
- No CI/CD pipeline
- No dependencies installed in `package.json` yet (React, TypeScript, etc. need to be added)

## Git Workflow

- **Main branch:** `master`
- **Feature branches:** Used for development, merged via pull requests
- **Commit messages:** Imperative mood, descriptive (e.g., "Create Features component in Features.tsx file")

## Environment

- No environment variables required at this time
- `.env` files are gitignored
- App runs on `http://localhost:3000`

## Key Files for AI Assistants

When making changes, these are the most important files to understand:

| File                        | Purpose                          |
|-----------------------------|----------------------------------|
| `src/App.tsx`               | Root component — entry point     |
| `src/components/Hero.tsx`   | Landing hero section             |
| `src/components/Features.tsx` | Features showcase section      |
| `package.json`              | Dependencies and scripts         |

## Guidelines for Contributors

1. Follow the existing component pattern (`React.FC`, default export, dedicated file)
2. Place new components in `src/components/`
3. Use 4-space indentation consistently
4. Keep components focused — one responsibility per component
5. Use TypeScript types; avoid `any`
6. Do not commit `.env` files or `node_modules/`
