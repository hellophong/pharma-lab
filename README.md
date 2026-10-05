# Pharma Lab

A small launchpad for AI-built pharma agency tools. Built by Phong.

Vite + React + TypeScript, managed with pnpm. No backend, analytics or external services. The fonts (Bodoni Moda, DM Sans) are self-hosted through `@fontsource`.

## Run locally

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm lint
pnpm build      # outputs dist/
pnpm preview    # serves the built dist/
```

## Add a tool

Add one entry to `src/data/tools.ts`:

```ts
{
  id: "my-tool",
  name: "My Tool",
  description: "One line on what it does.",
  status: "live", // "live" | "prototype" | "coming-soon"
  url: "https://hellophong.github.io/my-tool/",
},
```

Cards with a `url` that aren't `coming-soon` become clickable and open in a new tab. A `coming-soon` entry shows as a dashed placeholder. The grid lays itself out, so you don't touch any layout code.

## Restyle

All colors, type, spacing, radius and motion live as CSS custom properties at the top of `src/styles.css`.

## Deployment

Local dev and preview serve from `/`. Production builds for GitHub Pages set `VITE_BASE_PATH=/pharma-lab/`:

```sh
VITE_BASE_PATH=/pharma-lab/ pnpm build
```
