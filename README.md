# Vouchq — promotional landing site

A self-contained marketing landing page for **Vouchq** (the trust registry &
governance plane for the MCP servers, Skills, and Tools AI agents depend on).
Bilingual (English default · 한국어), dark "Control Room" brand, no build step.

## Stack

- **`index.html`** — markup + Tailwind config. No build step.
- **`assets/styles.css`** — custom styles Tailwind utilities can't express:
  keyframes (hero aurora, scanline, drift ping), the scroll-grid mask,
  scroll-reveal, card depth/lift, and the language-toggle state.
- **`assets/app.js`** — vanilla JS: the EN/KO i18n dictionary + switcher,
  scroll-reveal (`IntersectionObserver`), mobile menu, and header-on-scroll.
- **Tailwind CSS** via CDN (config inlined; Vouchq palette + IBM Plex fonts).
- **IBM Plex Sans / Mono** via Google Fonts.
- No framework, no `npm install`, no dependencies to vendor.

## Run / preview

It's static — open it, or serve the folder so the `assets/` files load.

```bash
# macOS: open directly in the default browser
open index.html

# or serve it (recommended — keeps relative asset paths clean):
python3 -m http.server 4321
# → http://localhost:4321
```

The whole folder (`index.html` + `assets/`) is the deployable artifact. Drop it
on any static host (GitHub Pages, Netlify, S3, Cloudflare Pages, nginx) as-is.

## Language toggle (i18n)

- Switcher lives in the nav: **EN / 한국어**.
- Default is **English**; the choice is persisted in `localStorage`
  (`vouchq.lang`), so a returning visitor keeps their language.
- Every visible string is keyed via `data-i18n` (text), `data-i18n-html`
  (copy with inline markup), or `data-i18n-attr` (attributes like `content`,
  `aria-label`). Switching also updates `document.title` and `<html lang>`.
- All copy lives in one dictionary `{ en, ko }` in `assets/app.js`. To edit or
  add a language, edit that object — no other file changes needed.
- Korean copy follows the tone/terminology of the repo's `README.ko.md`
  (박제, 정본, rug-pull, vouched kept as product terms).

## Sections

1. **Nav** — sticky, anchor links, language toggle, GitHub / Get started CTAs,
   responsive mobile menu.
2. **Hero** — value prop with an animated accent (drifting aurora + a sweeping
   "verification" scanline), primary CTA, and a polished **console-preview**
   mock showing approved / drift / pending inventory rows.
3. **Problem** — the rug-pull / runtime tool-tampering threat
   (adopted clean → mutated later → no baseline, no proof).
4. **Key capabilities** — 8-card grid with inline-SVG icons (ingestion,
   scanning, approve & pin, drift detection, policy, audit WORM + hash chain,
   RBAC/multitenancy, distribution).
5. **How it works** — the two-door pipeline (governance in → pin → distribution
   out) as a styled HTML diagram.
6. **Open-core & self-hosted** — module map + self-hosting bullets + stack.
7. **Get started** — quick-start code block + CTAs.
8. **Footer** — product / resources / license columns.

## Notes

- **Motion** is tasteful and respects `prefers-reduced-motion` (reveals resolve
  instantly, animations are disabled).
- Responsive (mobile → desktop) and accessibility-minded: skip link, semantic
  landmarks, focus-visible outlines, `aria-hidden` on decorative SVG/glyphs,
  `aria-pressed` on the language toggle, `aria-expanded` on the mobile menu.
- All copy is real Vouchq product copy — no placeholder/lorem text. Brand colors
  and fonts match the repo's Control Room dark direction.
- This directory is **standalone** and lives outside the `vouchq` repo on
  purpose; it has no link to the app/console build.

## Honest gaps

- Tailwind is loaded from the **CDN** (great for zero-build; for a production
  deploy you'd typically precompile a minimal CSS file to drop the runtime JIT).
- The console preview is a **static mock**, not a live screenshot of the console.
- Icons are hand-rolled inline SVG (no icon library) to stay dependency-free.
