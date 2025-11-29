# Implementation Plan: Alternating Carousel

**Branch**: `005-alternating-carousel` | **Date**: 2025-11-29 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/005-alternating-carousel/spec.md`

## Summary

Implement a new carousel component for the homepage that displays images with descriptions in a two-column layout, where the image and description positions alternate on each slide transition. Images display in 16:9 aspect ratio. The implementation uses pure HTML/CSS/JavaScript following the existing site architecture.

## Technical Context

**Language/Version**: HTML5, CSS3, Vanilla JavaScript (ES6+)
**Primary Dependencies**: None (static site, no build tools)
**Storage**: N/A (content defined inline in HTML)
**Testing**: Manual browser testing (desktop, tablet, mobile)
**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge), GitHub Pages hosting
**Project Type**: Static website enhancement
**Performance Goals**: Smooth 500ms transitions, no layout shift during rotation
**Constraints**: Static-first, no server dependencies, zero-cost operation
**Scale/Scope**: Homepage component, 2-10 slides expected

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Modern User Experience | ✅ PASS | Carousel with alternating layout provides engaging visual experience |
| II. Maintainability First | ✅ PASS | Pure HTML/CSS/JS, no build tools, direct editing workflow |
| III. Static-First Architecture | ✅ PASS | Client-side only, no server dependencies |
| IV. Zero Cost Operation | ✅ PASS | No additional services required |
| V. Modern Maintainable Codebase | ✅ PASS | Semantic HTML, CSS in dedicated file, vanilla JS |
| VI. Incremental Redesign | ✅ PASS | Enhances existing homepage, self-contained component |
| VII. Documentation & Knowledge Transfer | ✅ PASS | Component documented for reuse |

**Gate Status**: ✅ PASSED - Proceeding to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/005-alternating-carousel/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (slide data structure)
├── quickstart.md        # Phase 1 output (usage guide)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
# Static Website Structure
index.html               # Homepage (carousel integration target)
css/
├── modern.css           # Base design system styles
├── homepage.css         # Homepage-specific styles (carousel CSS here)
images/                  # Carousel images stored here
```

**Structure Decision**: Static website - all code in root HTML and css/ directory. No src/ folders needed. Carousel styles will be added to existing `css/homepage.css`. JavaScript will be inline in `index.html` as with existing carousel.

## Complexity Tracking

> No violations - implementation follows all constitution principles.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
