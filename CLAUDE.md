# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working with This Project

**IMPORTANT:** The project owner has granted permission to make code changes without asking for approval on each edit. Proceed with file modifications confidently once the task is clear. Only ask for clarification if requirements are ambiguous or if making risky/destructive changes (e.g., deleting files, force-pushing).

## Project Overview

Static HTML5 marketing and documentation website for **SportBot** — a gamified fitness Telegram bot that turns workouts into an RPG adventure. Deployed via GitHub Pages at `https://denkaydunov.github.io/sportbot-site/`.

Bot codebase: `/Users/deniskaydunov/IdeaProjects/SportBot` (`https://github.com/DenKaydunov/SportBot`)

## Local Development

No build system. Serve files directly:

```bash
python -m http.server 8000
# or
npx http-server
```

Then open `http://localhost:8000`.

## Site Structure

Three HTML pages, each self-contained (inline CSS, minimal vanilla JS):

- **`index.html`** — Landing page: hero video background, feature grid, raid boss section, CTA buttons
- **`guide.html`** — User documentation: rank system, achievements, battle system, guild quests, social features
- **`commands.html`** — Full command reference (largest file, ~2000 lines)

Supporting assets:
- `img/monster/` — Monster/boss sprite artwork (16 images, ~61MB)
- `video/` — MP4 hero videos for landing page backgrounds
- `robots.txt` + `sitemap.xml` — SEO configuration

## Architecture & Conventions

**No external dependencies, no frameworks, no build step.** All three pages share the same visual identity:
- Dark background `#1A1A1A`, green accent `#7FD957`
- Responsive grid layouts with CSS media queries (inline in each file)
- RPG/fantasy aesthetic matching the bot's gamification theme

**Each HTML file is fully standalone** — styles and scripts are inlined, not shared across files. When updating design elements (colors, fonts, card styles), apply changes to each page independently.

**JavaScript is minimal**: video sound toggle and counter animations in `index.html`, smooth scroll navigation in `guide.html`.

## SEO

All pages have meta tags, Open Graph, Twitter Card, and Schema.org JSON-LD. The `sitemap.xml` currently only lists the homepage — update it when adding new pages or making significant structural changes.

## Content Language

The bot and primary content are in **Russian**. README.md is in Russian. HTML content is Russian, but attribute values and code are in English.