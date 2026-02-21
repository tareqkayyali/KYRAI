# CLAUDE.md

## Project Overview

**KYRAI** is a React/TypeScript web application showcase — a landing page template with modular components. Built with Vite for fast development and optimized production builds.

- **Author:** tareqkayyali
- **License:** ISC
- **Repository:** https://github.com/tareqkayyali/KYRAI

## Tech Stack

- **React 19** — UI component library
- **TypeScript 5.7** — Static typing (`.tsx` files, strict mode enabled)
- **Tailwind CSS 4** — Utility-first styling (via `@tailwindcss/vite` plugin)
- **Vite 6** — Build tool and dev server
- **ESLint 9** — Linting (flat config with TypeScript + React hooks plugins)
- **Prettier 3** — Code formatting (4-space indent, single quotes, trailing commas)
- **Vitest 4** — Unit testing (jsdom environment, React Testing Library)
- **Node.js / npm** — Package management and runtime

## Project Structure

```
KYRAI/
├── index.html              # Vite entry point (loads src/main.tsx)
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration (Tailwind + React plugins, port 3000)
├── tsconfig.json           # TypeScript project references
├── tsconfig.app.json       # TypeScript compiler options (strict, react-jsx)
├── eslint.config.js        # ESLint flat config (TS + React hooks + React Refresh)
├── .prettierrc             # Prettier config (4-space, single quotes, trailing commas)
├── CLAUDE.md               # This file
├── .gitignore              # Ignores node_modules, dist, .env, logs
└── src/
    ├── main.tsx            # React DOM root — renders <App /> in StrictMode
    ├── index.css           # Tailwind CSS entry (@import "tailwindcss")
    ├── vite-env.d.ts       # Vite client type declarations
    ├── App.tsx             # Root component — composes Hero + Features
    ├── App.test.tsx        # App integration test
    ├── test/
    │   └── setup.ts        # Vitest setup (jest-dom matchers)
    └── components/
        ├── Features.tsx    # Features list section
        ├── Features.test.tsx
        ├── Hero.tsx        # Hero/landing section with CTA
        └── Hero.test.tsx
```

## Development Commands

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server (localhost:3000)
npm run build     # Type-check (tsc -b) then build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
npm run lint:fix  # Run ESLint with auto-fix
npm run format    # Format all source files with Prettier
npm run format:check  # Check formatting without writing
npm test          # Run all tests once (vitest run)
npm run test:watch  # Run tests in watch mode
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
| CSS classes       | Tailwind utilities | `className="text-lg font-bold"` |
| Directories       | lowercase       | `components/`      |

### Component Template

```tsx
const ComponentName = () => {
    return (
        <section className="mx-auto max-w-3xl px-4 py-16">
            {/* content styled with Tailwind utility classes */}
        </section>
    );
};

export default ComponentName;
```

### Code Style (enforced by Prettier + ESLint)

- **Indentation:** 4 spaces
- **Quotes:** Single quotes for imports, double quotes in JSX attributes
- **Semicolons:** Yes
- **Trailing commas:** Yes (all)
- **Arrow functions** for component definitions
- Run `npm run format` before committing to ensure consistent formatting

### Styling

- **Tailwind CSS 4** via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed
- CSS entry point: `src/index.css` (imported in `src/main.tsx`)
- Use Tailwind utility classes directly in JSX `className` attributes
- Avoid custom CSS files — prefer Tailwind utilities and composing classes
- Use `@theme` in `src/index.css` to extend the default design tokens if needed

### Testing

- **Vitest** with jsdom environment (configured in `vite.config.ts` under `test`)
- **React Testing Library** for rendering components
- **jest-dom matchers** available globally via `src/test/setup.ts`
- Test files live next to source files: `ComponentName.test.tsx`
- Use `describe`/`it`/`expect` from Vitest
- Query elements using accessible roles (`getByRole`, `getByText`)

### TypeScript

- Strict mode enabled (`strict: true` in tsconfig.app.json)
- `noUnusedLocals` and `noUnusedParameters` enforced
- Use the `react-jsx` transform — do not add `import React from 'react'`

## CI/CD

- **GitHub Actions** workflow at `.github/workflows/ci.yml`
- Runs on pushes to `master` and all pull requests targeting `master`
- Pipeline steps: lint, format check, type check, test, build
- Node 20 with npm caching

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
| `src/index.css`              | Tailwind CSS entry point             |
| `vite.config.ts`             | Build and dev server configuration   |
| `tsconfig.app.json`          | TypeScript compiler settings         |
| `eslint.config.js`          | ESLint flat config                   |
| `.prettierrc`               | Prettier formatting rules            |
| `.github/workflows/ci.yml` | GitHub Actions CI pipeline           |

## Guidelines for Contributors

1. Follow the existing component pattern (arrow function, default export, dedicated file)
2. Place new components in `src/components/`
3. Use 4-space indentation consistently
4. Keep components focused — one responsibility per component
5. Use TypeScript types; avoid `any`
6. Do not add `import React` — the `react-jsx` transform handles it
7. Add a `ComponentName.test.tsx` file alongside each new component
8. Do not commit `.env` files, `node_modules/`, or `dist/`

## Current Gaps

- None — all core tooling is in place
