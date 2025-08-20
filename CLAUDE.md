# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Daniela Ayelén Argüello, a Digital Communication & Marketing Strategist. The project uses TypeScript, React 19, Tailwind CSS, and shadcn/ui components.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: shadcn/ui (Radix UI based)
- **Package Manager**: pnpm
- **Deployment**: Vercel

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with theme provider and fonts
  - `page.tsx` - Main portfolio page assembling all sections
  - `globals.css` - Global styles and CSS variables
- `/components` - React components organized by section
  - Each section is a separate component (hero, about, experience, etc.)
  - `/ui` - Reusable UI components from shadcn/ui
- `/lib` - Utility functions
- `/public` - Static assets (images, audio files, CVs)

### Component Organization
The portfolio is composed of modular sections:
1. `Header` - Navigation
2. `HeroSection` - Landing intro
3. `AboutSection` - Personal introduction
4. `ResumeSection` - CV/Resume display
5. `ExperienceSection` - Work history
6. `SkillsSection` - Technical skills
7. `BroadcasterSection` - Broadcasting/media experience
8. `UXUISection` - Design work showcase
9. `ProjectsSection` - Portfolio projects
10. `ContactSection` - Contact form
11. `Footer` - Site footer

### Styling System
- Uses Tailwind CSS with custom configuration
- CSS variables for theming (light/dark mode support)
- Custom color palette defined in `tailwind.config.ts`
- Font system: Inter and Source Sans Pro from Google Fonts

### Build Configuration
- TypeScript with strict mode enabled
- ESLint and TypeScript errors ignored during builds (for faster deployment)
- Images unoptimized for static export compatibility
- Trailing slashes enabled for proper routing

### Path Aliases
- `@/*` maps to root directory for clean imports

### No Testing Framework
Currently no test framework is configured. Tests would need to be set up if required.