# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands
- `npm run dev` - Start dev server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **Framework**: Next.js with React 19 and TypeScript
- **Styling**: TailwindCSS (see tailwind.config.ts)
- **Imports**: Group imports by external, internal (@/*), and relative (sorted alphabetically)
- **Component Structure**: Functional components with React hooks
- **Types**: Use TypeScript types for props (Readonly<{...}> for component props)
- **Naming**: PascalCase for components, camelCase for functions/vars
- **Theme Handling**: Access via `useTheme()` hook from context/ThemeContext
- **File Structure**: Maintain domain-based structure in src/components/Resume/*
- **Error Handling**: Use try/catch blocks, provide fallback UIs
- **Whitespace**: 2-space indentation, trailing commas on multiline objects