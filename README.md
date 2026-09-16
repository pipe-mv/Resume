# Felipe Marin Portfolio

Personal portfolio and downloadable resume for Felipe Marin, a Full-Stack
Developer. The site highlights selected web and mobile projects, technical
experience, professional background, and contact information.

## Live site

[https://pipe-mv.github.io/Resume/](https://pipe-mv.github.io/Resume/)

## Documentation

- [Architecture guide](./ARCHITECTURE.md) — application structure, data flows,
  styling, external services, and deployment.
- [Agent guide](./AGENTS.md) — repository rules, source-of-truth locations,
  validation requirements, and pull-request conventions.

## Technology stack

- React 19
- Vite 6
- Vitest and Testing Library
- Plain CSS
- GitHub Actions and GitHub Pages

## Local development

Node.js 20 or newer is required.

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal, normally
`http://localhost:5173/Resume/`.

## Validation

```bash
npm test
npm run build
git diff --check
```

The production build is written to `dist/`. To inspect it locally:

```bash
npm run preview
```

## Deployment

Pull requests targeting `master` are tested and built by GitHub Actions. After a
successful merge to `master`, the same workflow builds and deploys the site to
GitHub Pages automatically.

The Vite base path is `/Resume/`; changing it will break production asset URLs
unless the hosting path changes at the same time.
