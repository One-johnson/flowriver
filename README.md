# FlowRiver Technologies website

Marketing site for FlowRiver Technologies, built with [TanStack Start](https://tanstack.com/start) (React, Vite, Nitro) and Tailwind CSS 4.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build into .output/
npm run start      # serve the production build
npm run lint
npm run typecheck
```

## Where things live

| Path | What |
| --- | --- |
| `src/routes/` | Pages and server routes (file-based routing). `api/contact.ts` sends contact-form email; `sitemap[.]xml.ts` and `robots[.]txt.ts` generate those files. |
| `content/` | Markdown for services, portfolio projects and testimonials. Bundled at build time, so changes need a rebuild. |
| `src/lib/data.functions.ts` | Server functions that route loaders call to read content. |
| `src/lib/site-config.ts` | Site URL, email, reply-time promise, nav links, social links. |
| `src/styles/app.css` | Theme tokens. `.theme-ink` (navy) and `.theme-tint` (light blue) section themes. |
| `public/` | Logos, Open Graph image (`og.png`), favicons. |

### Adding a portfolio project

Add a markdown file to `content/portfolio/` (copy an existing one), put its image or logo in `public/`, and set `order` to position it. The first three by `order` appear on the homepage. Add the logo to `clientLogos` in `src/components/ClientMarquee.tsx` to include it in the moving logo strip.

## Environment variables

| Name | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Canonical site URL used in meta tags, sitemap and robots.txt. Defaults to `https://flowrivertechnologies.com`. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Mail server for the contact form. |
| `SMTP_FROM`, `CONTACT_TO_EMAIL` | Optional sender and recipient overrides. |

## Deploying to Vercel

Nitro detects Vercel during the build and outputs a Vercel deployment automatically. In the Vercel project settings, set the framework preset to **TanStack Start** (or "Other") rather than Next.js, with build command `npm run build`.
