# Cassandra Dsouza — Portfolio Website

Static, dependency-free portfolio published with GitHub Pages at [cassandra-3.github.io](https://cassandra-3.github.io/).

## Structure

- `index.html` — semantic page structure and metadata
- `styles.css` — responsive design, themes, focus styles, and reduced-motion support
- `portfolio-data.js` — all case studies, experience cards, domain labels, and skills-to-evidence mappings
- `script.js` — rendering, filters, disclosure controls, theme preference, navigation, counters, and charts
- `404.html` — friendly fallback page
- `.nojekyll` — serves the static files directly on GitHub Pages

No build step or third-party runtime is required.

## Updating projects

1. Open `portfolio-data.js`.
2. Add or edit an object in the `projects` array.
3. Use `status: "published"` only when public implementation or documentation evidence exists. Use `status: "planned"` for future work.
4. Choose one or more domain IDs from the `domains` list. Filters, counters, and charts update automatically.
5. Keep `type`, `scope`, and `contribution` precise so individual, team, academic, professional, and planned work remain distinct.
6. Add the project ID to a row in `skills` only when the linked public evidence supports that capability.

## Privacy and evidence rules

- Do not add private contact information, employer or confidential client names, internal metrics, proprietary screenshots, or private documents.
- Do not describe recommendations as implemented controls.
- Do not claim all team deliverables as Cassandra's individual work.
- Keep planned projects out of demonstrated-skills claims until evidence is published.
- Link only to intentionally public GitHub and LinkedIn pages.

## Local preview

Open `index.html` directly, or serve this directory with any simple static web server. The site uses only relative static assets and works at the root of a GitHub Pages user site.

