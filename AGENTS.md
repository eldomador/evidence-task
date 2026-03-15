# Cistercian numerals converter

React app that converts decimal numbers (1–9999) to Cistercian numerals and lets the user download the result as SVG.

## Stack

- **React 19**, **Vite**, **TypeScript**
- **Zod** + **React Hook Form** (`@hookform/resolvers/zod`) for forms
- **shadcn/ui** (Base UI), **Tailwind CSS**
- **ES6**, arrow functions; `useMemo` / `useCallback` where useful

## Structure

- `src/app/` – root `App`, layout
- `src/features/cistercian/` – Cistercian logic (`lib/`: `numberToDigits`, digit paths), UI (form, SVG preview, download)
- `src/shared/` – `shared/ui` (shadcn components), `shared/lib` (e.g. `utils`), `shared/schemas` (Zod)

## Language

- **Code and docs**: English.
- **UI strings**: may be in Polish.
