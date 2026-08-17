# ShikshaMatrix Website

Public marketing website for **ShikshaMatrix** — a multi-tenant School ERP / SaaS platform. This is the conversion-focused landing site prospective schools land on: product story, ROI calculator, pricing, and lead capture — built with premium 3D visuals rather than a template look.

Live site: [shikshamatrix.in](https://shikshamatrix.in)
Product backend: [shikshamatrix-api](https://github.com/raghuveer911/shikshamatrix-api)
Product web admin: [shikshamatrix-web-admin](https://github.com/raghuveer911/shikshamatrix-web-admin)

---

## What It Is

The ShikshaMatrix marketing site is the front door for new schools — a full Next.js app with an accompanying Fastify backend for lead capture, built inside the existing product monorepo. Instead of a generic SaaS landing page, it leans on interactive 3D scenes and game-quality visual effects to make the product story tangible: what a school's operations look like without ShikshaMatrix, what they look like with it, and what running the platform actually feels like day to day.

- **Status:** Live in production
- **Built and maintained solo** — 3D scene design, conversion flow, backend inquiry handling, and deployment all owned end-to-end.

---

## Architecture

```
Next.js homepage (conversion-flow components)
        ↓
Fastify backend (website.routes.ts) — rate limiting + honeypot spam protection
        ↓
Prisma (WebsiteInquiry model)
        ↓
PostgreSQL
```

Built as a standalone Next.js app with its own Fastify backend, living alongside the core product apps inside the same **npm workspaces monorepo** (`apps/shikshamatrix/`) — sharing tooling and conventions with the rest of the platform without being coupled to the product's own backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Styling | Tailwind CSS v4 |
| 3D / graphics | `@react-three/fiber`, `@react-three/drei`, `postprocessing` (`EffectComposer`, Bloom, Vignette) |
| Backend | Fastify (`website.routes.ts`) |
| ORM | Prisma (`WebsiteInquiry` model) |
| Database | PostgreSQL |
| Spam protection | Honeypot fields + rate limiting |
| Language | TypeScript |
| Package management | npm workspaces (monorepo root) |

---

## Major Sections / Modules

- **Hero** — interactive 3D "ecosystem" scene introducing the platform
- **Pain Points / Problem vs. Solution** — architectural 3D scene contrasting life before/after ShikshaMatrix
- **ROI Calculator** — interactive component for prospects to estimate value
- **Feature Hubs** — modular breakdown of platform capabilities
- **OS Map** — visual map of the platform's modules/operating system
- **Principal's Day** — narrative section walking through a school leader's day using the platform
- **Control Center** — 3D scene representing the platform's live operational hub
- **Pricing** — plan/tier presentation
- **Inquiry Form** — lead capture, feeding the `WebsiteInquiry` backend model (surfaced to the team via the Inquiries module in the superadmin panel)

---

## Visual / Interaction Design

This isn't a static marketing page — it's treated as a small interactive experience:

- Three custom 3D scenes built with `@react-three/fiber`/`drei`, rendered with post-processing (Bloom, Vignette via `EffectComposer`)
- PBR materials with procedural environment lighting for realistic surfaces in the 3D scenes
- Custom UI treatments: liquid buttons, claymorphism accents, and liquid-glass card effects, layered on top of the conversion-flow components

---

## Authentication / Authorization

This is a public marketing site — no authentication is required to browse it. The only backend surface is the inquiry submission endpoint, which is protected against abuse rather than gated behind login (see Spam Protection below). Inquiry data submitted here is reviewed internally through the ShikshaMatrix superadmin panel, which *is* authenticated and role-gated.

---

## Multi-Tenancy

Not applicable — this is a single public-facing site, not a tenant-scoped application. It exists to *bring in* new tenants (schools) for the core product, rather than serving any tenant's own data.

---

## API Structure

- A dedicated Fastify backend (`website.routes.ts`) separate from the core product API, handling one primary concern: inquiry submissions
- **Rate limiting** to prevent abuse of the public-facing endpoint
- **Honeypot fields** as a lightweight, low-friction spam filter (no CAPTCHA friction for genuine leads)
- Submissions are persisted via Prisma into a `WebsiteInquiry` model, later reviewed through the internal Inquiries admin UI

---

## Deployment

- Deployed on **Vercel**
- Part of an npm workspaces monorepo — installs and builds run from the monorepo root, not from this folder in isolation
- Resolved setup issues specific to this app during integration: Tailwind v4 syntax differences from earlier versions, and a duplicate `pnpm-workspace.yaml` conflict within the monorepo

---

## Screenshots / Demo

- Live site: [shikshamatrix.in](https://shikshamatrix.in)


---

## AI-Assisted Development Note

Parts of this codebase — including 3D scene composition, visual-effect implementation, and component scaffolding — were built using AI-assisted engineering (Claude) as an accelerator. Visual/interaction design decisions, conversion-flow structure, backend spam-protection design, and deployment were done and owned directly, with every AI-assisted change reviewed, tested, and integrated by hand before shipping.

---

## Contact

Built and maintained by Raghuveer Choudhary.
📧 raghuveer911e@gmail.com
🌐 [shikshamatrix.in](https://shikshamatrix.in)
