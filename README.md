# Cistercian numerals

A small web app that converts decimal numbers (1–9999) into **Cistercian numerals** and lets you download the result as an SVG.

[Cistercian numerals](https://en.wikipedia.org/wiki/Cistercian_numerals) are a medieval notation where a single glyph represents a number from 1 to 9,999 using a central vertical stave and strokes in four quadrants (units, tens, hundreds, thousands).

## What it does

- Enter any natural number from **1 to 9999**
- See the corresponding Cistercian numeral rendered as **SVG** (live as you type)
- **Download** the glyph as an SVG file

## Tech stack

React 19, Vite, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod.

## Install & run

**Requirements:** Node.js 20.19+ or 22.12+ (see [.nvmrc](.nvmrc) or [.node-version](.node-version)).

```bash
# Install dependencies
npm install

# Development (with hot reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

After `npm run dev`, open the URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

- `src/app/` – root layout and app shell
- `src/features/cistercian/` – Cistercian logic (digit paths, SVG) and UI (form, preview)
- `src/shared/` – shared UI components, schemas, utilities

## Scripts

| Command     | Description                |
| ----------- | -------------------------- |
| `npm run dev`     | Start dev server           |
| `npm run build`   | Type-check and production build |
| `npm run preview` | Serve the production build |
| `npm run lint`    | Run ESLint                 |
