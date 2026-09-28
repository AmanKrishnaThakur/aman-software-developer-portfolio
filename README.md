# Aman Krishna Thakur | Full Stack Developer

A static software engineering portfolio built with Astro, TypeScript, and locally installed Tailwind CSS. It highlights production work at Complyr at a public, high level and clearly labels personal learning projects.

## Setup

Install Node.js 20.3 or later, then:

```sh
npm install
npm run dev
```

The local URL is printed by Astro.

## Build

```sh
npm run build
npm run preview
```

Astro writes the static site to `dist/`.

## Deploy to Cloudflare Workers

The repository includes `wrangler.jsonc` for static assets. After authenticating Wrangler:

```sh
npm run build
npx wrangler deploy
```

The Worker name is `aman-software-developer-portfolio`. No backend or environment variables are required.

## Content

Update links in `src/data/links.ts`, projects in `src/data/projects.ts`, experience in `src/data/experience.ts`, and skills in `src/data/skills.ts`. The Complyr card describes professional experience only; proprietary source is not published. Personal projects have no repository or demo links until those URLs are verified.
