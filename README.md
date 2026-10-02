# Aman Krishna Thakur | Full Stack Developer

A static software engineering portfolio built with Astro, TypeScript, and locally installed Tailwind CSS. It highlights production work at Complyr at a public, high level and clearly labels personal learning projects.

## Setup

Install Node.js 22.12 or later, then:

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

## Public Resume and Security

The downloadable PDF is a public resume prepared from the supplied resume and portfolio content. It omits internal Complyr implementation details, internal counts, the removed trainee role, phone number, and postal code. The original supplied PDF is not published.

To regenerate the public PDF, install PyMuPDF in a Python environment and run `python scripts/generate_public_resume.py`. This is an offline document tool; it is not required by the website build or deployment.

Movie and weather projects are described without embedding their scripts or API credentials. Cloudflare response headers are declared in `public/_headers`; scripts and styles are emitted as local files to support the Content Security Policy. Review dependency advisories with `npm audit`. These checks reduce identified risks; they do not guarantee the absence of every vulnerability.
