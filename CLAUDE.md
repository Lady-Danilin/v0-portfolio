# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm dev` - Start the development server (Next.js dev server on port 3000)
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run Next.js linting

### Important Build Configuration
The project has ESLint and TypeScript error checking disabled during builds (see next.config.mjs). While this allows for faster development, ensure code quality when making changes.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **UI Components**: Radix UI (comprehensive component library)
- **Styling**: Tailwind CSS with custom animations
- **Type System**: TypeScript
- **Package Manager**: pnpm

### Project Structure

```
v0-portfolio/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout with theme provider and fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/             # React components
│   ├── ui/                 # Reusable UI components (Button, Card, etc.)
│   ├── *-section.tsx       # Page sections (hero, about, contact, etc.)
│   ├── header.tsx          # Navigation header
│   └── theme-provider.tsx  # Dark/light theme context
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions (cn for classnames)
└── public/                 # Static assets
    └── static/             # Images and other static files
```

### Key Architecture Patterns

1. **Component Organization**: 
   - All major page sections are separate components (hero-section, about-section, etc.)
   - UI primitives from Radix UI are wrapped in `components/ui/`
   - Each component follows consistent TypeScript patterns with proper prop typing

2. **Styling System**:
   - Uses Tailwind CSS with custom configuration
   - Implements CSS variables for theming (dark/light mode support)
   - Custom fonts: Inter and Source Sans Pro loaded via Next.js font optimization

3. **Path Aliases**:
   - `@/*` maps to the project root for clean imports

4. **Theme System**:
   - Uses next-themes for dark/light mode switching
   - Theme provider wraps the entire application in layout.tsx

### Important Files

- `vercel.json` - Vercel deployment configuration with framework set to "nextjs"
- `components.json` - shadcn/ui configuration for component styling
- Multiple content markdown files (Experience.md, LinkedinInfo.md) containing portfolio content

### Legacy Files
The project contains legacy static HTML/CSS/JS files (old_index.html, portfolios.html, styles.css, script.js) from a previous portfolio version. These are not part of the current Next.js application.

## Development Notes

- The project uses v0.dev for initial generation (see metadata.generator in layout.tsx)
- Images should be placed in `public/static/` directory for proper deployment
- All components use React 19 with TypeScript strict mode enabled
- Form handling uses react-hook-form with zod validation