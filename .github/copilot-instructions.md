<!-- Automatic Copilot instructions for contributors and AI agents -->
# Project snapshot

This is a tiny Node.js personal web app (single-file server) used for a lab exercise. The app serves a static HTML page generated in `index.js`. The repository contains no build system or external dependencies.

# What to focus on when editing

- `index.js` is the single source of truth: the HTTP server, HTML template, inline CSS, and runtime logic (date and quote) all live here. Prefer minimal, backwards-compatible changes.
- `package.json` has no runtime dependencies and only a placeholder `test` script. If you add packages, update `package.json` and keep changes minimal and documented in `README.md`.

# Coding patterns and conventions in this repo

- Plain CommonJS modules (require/exports). Follow the module style already present.
- Synchronous server boot: the server is created with Node's built-in `http` and started with `.listen(port, ...)`. Keep server initialization simple and synchronous.
- Inline HTML/CSS: templating is manual string interpolation in `index.js` (no template engine). When changing the HTML, keep UTF-8 charset and do not break the current minimal layout.

# Typical tasks and commands

- Run locally: `node index.js`. The server listens on port 5000 (see `index.js`).
- Tests: none present. If you add tests, add a `test` script to `package.json` and document how to run them in `README.md`.

# Error handling and logging

- `index.js` uses a try/catch around request handling and logs errors with `console.error`. Preserve this approach for small fixes. For larger changes, add structured logging and a proper error handler.

# When adding new features

- Prefer adding small modules (new `.js` files) rather than bloating `index.js`. Export functions with CommonJS and require them from `index.js`.
- If you introduce dependencies, prefer minimal, well-known packages and pin them in `package.json`.

# Examples and guidance for common edits

- Change displayed quote or date formatting: update the `quote` variable or the `today` line in `index.js`.
- Change port: update the `port` constant near the top of `index.js`. When proposing a PR, mention why the port change is needed (conflicts, platform, etc.).

# Files to reference

- `index.js` — main server and page template (primary file to edit).
- `package.json` — project metadata; update when adding deps or scripts.
- `README.md` — user-facing documentation; update when changing behavior or commands.

# PR tips for reviewers and AI agents

- Keep changes minimal and focused — this is a learning/lab repo.
- Run `node index.js` locally and verify the page renders and the date/quote appear correctly.
- If adding a dependency, show a short justification and update `README.md` and `package.json`.

If anything in this instruction set is unclear or you want a different level of detail, ask and I'll refine it.
