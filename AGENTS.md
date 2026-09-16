# Agent Guide

## Scope

These instructions apply to the entire repository. They are intended for coding
agents and contributors making changes to Felipe Marin's portfolio.

Read [ARCHITECTURE.md](./ARCHITECTURE.md) before making structural, deployment,
media, project-data, or contact-form changes.

## Working agreement

- Use the existing `codex-work` branch for portfolio updates unless the user
  explicitly requests another branch.
- Inspect `git status` before editing and preserve unrelated user changes.
- Do not commit, push, open a pull request, or merge unless the user requests it.
- After pushing work for a pull request, provide a clear PR title and a complete
  Markdown description covering the summary, changes, and validation.
- Never commit credentials, tokens, private API keys, or unnecessary personal
  information. Browser-delivered React code and assets are public.
- Keep changes focused. Avoid unrelated refactors when updating copy, media, or
  project metadata.

## Environment and commands

Use Node.js 20 or newer. The GitHub workflow currently verifies with Node.js 22.

```bash
npm ci              # reproducible dependency installation
npm run dev         # Vite development server
npm test            # Vitest test suite, run once
npm run test:watch  # interactive test watch mode
npm run build       # production build in dist/
npm run preview     # preview the production build
```

There is no configured lint command. Do not report linting as completed unless a
linter is added and run.

## Source-of-truth map

- Page order: `src/App.jsx`
- Portfolio biography and resume download: `src/components/About.jsx`
- Hero video and autoplay fallback: `src/components/Home.jsx`
- Project content: `src/components/ProjectsDB.js`
- Project card behaviour: `src/components/Projects.jsx`
- Project modal: `src/components/Modal.jsx`
- Technology definitions: `src/components/TechnoIcons.js`
- Contact-form validation and UI: `src/components/ContactForm.jsx`
- Contact-form state and submission: `src/hooks/useForm.js`
- Active site styling: `src/App.css` and `src/index.css`
- Build and test configuration: `vite.config.js`
- CI and GitHub Pages deployment: `.github/workflows/ci.yml`

`src/style.css` is legacy and is not imported. Do not edit it for active UI
changes unless the application is intentionally changed to load it.

## Implementation rules

### React

- Use function components and React hooks, matching the existing codebase.
- Preserve the single-page anchor IDs: `home`, `about`, `projects`, and `contact`.
- Use stable project IDs as React keys when touching project rendering; do not
  rely on array positions for persistent identity.
- Add accessible names and meaningful alternative text to interactive controls
  and informative images.
- External links opened in a new tab must retain `rel="noreferrer"` or a stricter
  equivalent.

### Project entries

- Keep every active project `id` unique.
- Define technologies in `TechnoIcons.js` before referencing them in a project.
- Preserve the optional nature of `link_website`; repository links are expected.
- Test new entries in both the card grid and modal.
- Prefer concise descriptions that explain what the application does.

### CSS and responsive behaviour

- Follow the current mobile-first approach.
- Treat `768px` and `1024px` as established breakpoints unless a broader design
  change justifies another breakpoint.
- Check changes at mobile and desktop widths.
- Avoid global selectors when a component-specific class can contain the change.
- Preserve keyboard focus visibility and readable colour contrast.

### Assets

- Import local assets through JavaScript so Vite fingerprints them correctly.
- Prefer WebP for project screenshots and MP4 for the background video.
- Optimize images and video before committing; avoid adding an uncompressed
  duplicate unless it is intentionally retained as a source asset.
- Do not replace the resume without confirming that the download filename and
  About-section import still work.
- Preserve the hero video's `muted`, `playsInline`, `loop`, and playback fallback
  behaviour unless the task explicitly changes video interaction.

### Security and privacy

- Assume every value bundled by Vite can be inspected by visitors.
- Do not place secrets in source files, CSS, assets, or `VITE_*` variables.
- Validate and encode untrusted values before introducing any HTML injection
  path. Do not use `dangerouslySetInnerHTML` for portfolio content.
- Keep third-party links on HTTPS.
- Treat resume and portrait updates as personal-data changes: modify and publish
  them only when explicitly requested.

### Deployment

- Keep `base: "/Resume/"` in `vite.config.js` while deploying to the repository
  GitHub Pages URL.
- Pull requests to `master` must pass tests and build checks.
- Deployment occurs automatically after a successful push or merge to `master`.
- Do not manually commit `dist/` or push generated output to `gh-pages` during
  the normal workflow.

## Required validation

For ordinary source or content changes, run:

```bash
npm test
npm run build
git diff --check
```

Also perform focused checks appropriate to the change:

- UI/layout: inspect mobile and desktop rendering.
- Project data: open the affected card and modal.
- Resume: confirm the download opens the intended PDF.
- Video: test initial autoplay and interaction fallback.
- Contact form: test invalid input and the submission states; do not send a real
  message unless explicitly requested.
- Workflow changes: review triggers, permissions, concurrency, and Pages paths.

Report exactly what was run and call out any check that could not be performed.

## Pull-request description template

```md
## Summary

Briefly explain the user-visible or technical outcome.

## Changes

- Describe the important changes.
- Mention relevant responsive, accessibility, security, or deployment effects.

## Validation

- `npm test`
- `npm run build`
- `git diff --check`
```
