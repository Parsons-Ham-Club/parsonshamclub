# Implementation Plan: Website Design Framework

**Branch**: `004-website-framework` | **Date**: 2025-11-28 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/004-website-framework/spec.md`

## Summary

Establish a consistent website design framework based on the homepage design, creating reusable CSS components, standardized page templates, and documentation that ensures visual consistency across all pages of the Parsons Amateur Radio Club website. The framework leverages the existing `modern.css` design system with dark monochrome theme, CSS custom properties for design tokens, and responsive breakpoints at 768px and 1024px.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript (ES6)
**Primary Dependencies**: None (vanilla HTML/CSS/JS, no frameworks)
**Storage**: N/A (static site, no database)
**Testing**: Manual browser testing, responsive viewport testing
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge), responsive design
**Project Type**: Static website
**Performance Goals**: Sub-2 second page load, no JavaScript required for core layout
**Constraints**: Static hosting only (GitHub Pages), zero build process, maintainable by non-developer
**Scale/Scope**: ~20 existing pages to migrate to framework

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Modern User Experience | ✅ PASS | Framework establishes modern dark theme, responsive design, clear typography |
| II. Maintainability First | ✅ PASS | Pure HTML/CSS/JS, no build tools, CSS custom properties for easy updates |
| III. Static-First Architecture | ✅ PASS | No server dependencies, all static files |
| IV. Zero Cost Operation | ✅ PASS | GitHub Pages compatible, no external services for framework |
| V. Modern Maintainable Codebase | ✅ PASS | Semantic HTML5, modular CSS components, design tokens |
| VI. Incremental Redesign | ✅ PASS | Framework enables page-by-page migration with consistent templates |
| VII. Documentation & Knowledge Transfer | ✅ PASS | Quickstart guide and component documentation included in deliverables |

**Gate Result**: PASS - All principles satisfied

## Project Structure

### Documentation (this feature)

\`\`\`text
specs/004-website-framework/
├── plan.md              # This file
├── research.md          # Phase 0 output (design system analysis)
├── data-model.md        # Phase 1 output (component catalog)
├── quickstart.md        # Phase 1 output (framework usage guide)
├── contracts/           # Phase 1 output (page template contracts)
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
\`\`\`

### Source Code (repository root)

\`\`\`text
css/
├── modern.css           # Design system (tokens, base styles, shared components)
├── homepage.css         # Homepage-specific styles (hero, carousel, meeting card)
└── [page].css           # Page-specific styles (as needed)

images/
├── Logo.svg             # Site logo
├── background1.png      # Hero background
└── [other images]       # Content images

[page].html              # Individual page files using framework
\`\`\`

**Structure Decision**: Static website structure with centralized CSS design system (\`modern.css\`) and optional page-specific stylesheets. No \`src/\` directory needed - HTML files at root level following existing convention.

## Complexity Tracking

> No Constitution violations requiring justification.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
