# CLAUDE.md

## Project Overview

**KYRAI** is a React/TypeScript web application showcase — a landing page template with modular components. Built with Vite for fast development and optimized production builds.

- **Author:** tareqkayyali
- **License:** ISC
- **Repository:** https://github.com/tareqkayyali/KYRAI

## Tech Stack

- **React 19** — UI component library
- **TypeScript 5.7** — Static typing (`.tsx` files, strict mode enabled)
- **Vite 6** — Build tool and dev server
- **Node.js / npm** — Package management and runtime

## Project Structure

```
KYRAI/
├── index.html              # Vite entry point (loads src/main.tsx)
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration (React plugin, port 3000)
├── tsconfig.json           # TypeScript project references
├── tsconfig.app.json       # TypeScript compiler options (strict, react-jsx)
├── CLAUDE.md               # This file
├── .gitignore              # Ignores node_modules, dist, .env, logs
└── src/
    ├── main.tsx            # React DOM root — renders <App /> in StrictMode
    ├── vite-env.d.ts       # Vite client type declarations
    ├── App.tsx             # Root component — composes Hero + Features
    └── components/
        ├── Features.tsx    # Features list section
        └── Hero.tsx        # Hero/landing section with CTA
```

## Development Commands

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server (localhost:3000)
npm run build     # Type-check (tsc -b) then build for production
npm run preview   # Preview production build locally
```

## Architecture and Conventions

### Component Patterns

- **Functional components only** — no class components
- **Modern JSX transform** — no `import React` needed (`react-jsx` in tsconfig)
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
const ComponentName = () => {
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

### TypeScript

- Strict mode enabled (`strict: true` in tsconfig.app.json)
- `noUnusedLocals` and `noUnusedParameters` enforced
- Use the `react-jsx` transform — do not add `import React from 'react'`

## Git Workflow

- **Main branch:** `master`
- **Feature branches:** Used for development, merged via pull requests
- **Commit messages:** Imperative mood, descriptive (e.g., "Add Hero component for the showcase")

## Environment

- No environment variables required at this time
- `.env` files are gitignored
- Dev server runs on `http://localhost:3000`
- Production build outputs to `dist/`

## Key Files for AI Assistants

| File                          | Purpose                              |
|-------------------------------|--------------------------------------|
| `src/App.tsx`                 | Root component — composes page       |
| `src/main.tsx`                | React DOM entry point                |
| `src/components/Hero.tsx`     | Landing hero section                 |
| `src/components/Features.tsx` | Features showcase section            |
| `package.json`                | Dependencies and scripts             |
| `vite.config.ts`             | Build and dev server configuration   |
| `tsconfig.app.json`          | TypeScript compiler settings         |

## Guidelines for Contributors

1. Follow the existing component pattern (arrow function, default export, dedicated file)
2. Place new components in `src/components/`
3. Use 4-space indentation consistently
4. Keep components focused — one responsibility per component
5. Use TypeScript types; avoid `any`
6. Do not add `import React` — the `react-jsx` transform handles it
7. Do not commit `.env` files, `node_modules/`, or `dist/`

## Current Gaps

- No test framework configured
- No linting (ESLint/Prettier)
- No CSS framework (Tailwind CSS planned)
- No CI/CD pipeline
