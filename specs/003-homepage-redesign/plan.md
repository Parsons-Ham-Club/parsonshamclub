# Implementation Plan: Homepage Redesign

**Branch**: `003-homepage-redesign` | **Date**: 2025-11-28 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/003-homepage-redesign/spec.md`

## Summary

Redesign the Parsons Amateur Radio Club homepage with a modern, professional look based on provided mockups. The new design features a hero section with welcoming messaging, feature cards explaining amateur radio, licensing information, activity exploration cards, meeting information, and a modern footer. The implementation uses static HTML/CSS/JavaScript with no build tools, following the constitution's static-first, zero-cost, maintainable architecture principles.

## Technical Context

**Language/Version**: HTML5, CSS3, Vanilla JavaScript (ES6+)
**Primary Dependencies**: None (vanilla implementation, self-hosted assets)
**Storage**: N/A (static website)
**Testing**: Manual browser testing, VS Code Live Server
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge), responsive for mobile/tablet/desktop
**Project Type**: Static website (single HTML page with CSS)
**Performance Goals**: Page load < 3 seconds, smooth scrolling, responsive layout
**Constraints**: Zero cost hosting (GitHub Pages), no build tools, maintainable by non-developer
**Scale/Scope**: Single page redesign (homepage), reusable components for future pages

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Modern User Experience | ✅ PASS | Design follows mockups with modern aesthetic, responsive layout, clear CTAs |
| II. Maintainability First | ✅ PASS | No build tools, direct HTML editing, modular CSS structure |
| III. Static-First Architecture | ✅ PASS | Pure HTML/CSS/JS, no server-side dependencies |
| IV. Zero Cost Operation | ✅ PASS | GitHub Pages compatible, self-hosted assets only |
| V. Modern Maintainable Codebase | ✅ PASS | Semantic HTML5, organized CSS, reusable components |
| VI. Incremental Redesign | ✅ PASS | Homepage first, components reusable for other pages |
| VII. Documentation | ✅ PASS | Will include design system docs in quickstart.md |

**Result**: All gates PASSED - proceed to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/003-homepage-redesign/
├── plan.md              # This file
├── research.md          # Phase 0: Technology decisions
├── quickstart.md        # Phase 1: Implementation guide & design system
├── checklists/
│   └── requirements.md  # Quality checklist
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
/                           # Repository root
├── index.html              # Homepage (REDESIGN TARGET)
├── css/
│   ├── modern.css          # NEW: Design system base styles
│   └── homepage.css        # NEW: Homepage-specific styles
├── icons/                  # NEW: SVG icons for redesign
│   ├── radio-waves.svg
│   ├── globe.svg
│   ├── emergency.svg
│   ├── community.svg
│   ├── satellite.svg
│   ├── digital.svg
│   ├── contest.svg
│   ├── international.svg
│   ├── sota.svg
│   └── calendar.svg
├── images/                 # Existing images (keep)
├── style/                  # Legacy styles (keep for other pages)
├── [existing pages].html   # Other pages (unchanged for now)
└── res/                    # Existing resources (keep)
```

**Structure Decision**: Static website structure with new `/css/` and `/icons/` directories for the modern design. Legacy `/style/` directory preserved for non-redesigned pages. This allows incremental rollout while maintaining existing pages.

## Complexity Tracking

> No constitution violations - table not needed.

