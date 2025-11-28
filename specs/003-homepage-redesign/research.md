# Research: Homepage Redesign

**Feature**: 003-homepage-redesign
**Date**: 2025-11-28

## Overview

This document captures technology decisions and best practices research for the homepage redesign. Since this is a static HTML/CSS/JavaScript implementation with no complex dependencies, the research focuses on design system patterns, icon solutions, and responsive layout approaches.

---

## Decision 1: CSS Architecture

**Question**: How should we organize CSS for maintainability and reusability across future pages?

**Decision**: Two-file modular CSS approach

**Rationale**:
- `modern.css` - Contains design system tokens (colors, typography, spacing) and reusable component styles (buttons, cards, sections)
- `homepage.css` - Contains page-specific layout and adjustments
- This separation allows other pages to import `modern.css` and create their own page-specific styles
- No CSS preprocessor needed (SASS/LESS) - keeps it simple per constitution

**Alternatives Considered**:
| Alternative | Why Rejected |
|-------------|--------------|
| Single CSS file | Would become unwieldy as more pages are redesigned |
| CSS-in-JS | Requires build tools, violates constitution |
| Tailwind CSS | Requires build tools, learning curve |
| CSS Modules | Requires build tools |

---

## Decision 2: Icon Implementation

**Question**: How should icons be implemented for the feature cards and UI elements?

**Decision**: Inline SVG icons

**Rationale**:
- SVG icons can be styled with CSS (color, size)
- No external dependencies or icon font loading
- Crisp at any resolution
- Can be embedded directly in HTML or loaded as separate files
- Self-hosted per constitution requirements

**Alternatives Considered**:
| Alternative | Why Rejected |
|-------------|--------------|
| Font Awesome CDN | External dependency, potential cost, CDN reliance |
| Icon fonts (self-hosted) | Larger file size, harder to style individual icons |
| PNG/JPG images | Not scalable, can't change colors with CSS |
| External icon CDN | Violates zero-cost/self-hosted requirements |

**Icon Sources** (free, open source):
- Heroicons (MIT license) - https://heroicons.com/
- Feather Icons (MIT license) - https://feathericons.com/
- Lucide Icons (ISC license) - https://lucide.dev/

---

## Decision 3: Typography Stack

**Question**: What fonts should be used for the modern design?

**Decision**: System font stack (no web fonts)

**Rationale**:
- Zero additional HTTP requests
- Instant rendering (no FOUT/FOIT)
- Native look on each platform
- Zero cost
- Excellent readability

**CSS Font Stack**:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

**Alternatives Considered**:
| Alternative | Why Rejected |
|-------------|--------------|
| Google Fonts | External dependency, privacy concerns, slight performance hit |
| Self-hosted web fonts | Adds complexity, file size, may not improve appearance significantly |
| Single fallback font | Less consistent cross-platform appearance |

---

## Decision 4: Responsive Breakpoints

**Question**: What breakpoints should be used for responsive design?

**Decision**: Three-tier breakpoint system

**Rationale**:
- Matches industry standards
- Covers major device categories
- Simple to implement and maintain

**Breakpoints**:
```css
/* Mobile first approach */
/* Base styles: Mobile (< 768px) */

@media (min-width: 768px) {
  /* Tablet and larger */
}

@media (min-width: 1024px) {
  /* Desktop and larger */
}
```

**Alternatives Considered**:
| Alternative | Why Rejected |
|-------------|--------------|
| More granular breakpoints | Adds complexity without significant benefit |
| Desktop-first approach | Mobile-first is current best practice |
| Container queries | Limited browser support, adds complexity |

---

## Decision 5: Color Implementation

**Question**: How should the color scheme from mockups be implemented?

**Decision**: CSS custom properties (variables)

**Rationale**:
- Easy to update colors in one place
- Supports future theming if needed
- Modern browser support is excellent
- Self-documenting code

**Color Variables** (from constitution design system):
```css
:root {
  --color-primary: #0077B6;
  --color-primary-light: #E8F4F8;
  --color-text-dark: #1A1A2E;
  --color-text-body: #4A4A4A;
  --color-text-muted: #6B7280;
  --color-white: #FFFFFF;
  --color-border: #E5E7EB;
  --color-shadow: rgba(0, 0, 0, 0.1);
}
```

---

## Decision 6: Card Layout System

**Question**: How should the card grid layouts be implemented?

**Decision**: CSS Grid with Flexbox fallback patterns

**Rationale**:
- CSS Grid provides clean 3-column layouts
- Flexbox handles single-row card arrangements
- Both have excellent browser support
- No JavaScript required for responsive behavior

**Grid Pattern**:
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

---

## Decision 7: Button Styles

**Question**: How should CTA buttons be styled?

**Decision**: Two button variants - primary (filled) and secondary (outlined)

**Rationale**:
- Matches mockup design
- Clear visual hierarchy
- Reusable across pages
- Accessible with proper contrast

**Button Styles**:
- Primary: Blue background (#0077B6), white text, rounded corners
- Secondary: White/transparent background, blue border, blue text
- Both: Hover states, focus states for accessibility

---

## Decision 8: Navigation Approach

**Question**: Should we create a new navigation or adapt existing?

**Decision**: Create new navigation HTML/CSS, preserve all link destinations

**Rationale**:
- Existing navigation is tightly coupled to WebSite X5 generated code
- New navigation will be cleaner and more maintainable
- All existing page links must be preserved per constitution
- New nav can be reused when other pages are redesigned

**Navigation Items** (from existing site):
- Home
- Events
- Learning (dropdown: About Amateur Radio, Digital Communications, Morse Code, UHF/VHF, HF, Summits on the Air, Solar Propagation)
- Local Nets
- Exams
- Podcasts (dropdown: ARRL News, Ham Nation, This Week in Amateur Radio, Ham Radio 360)
- Community (dropdown: Community Service, Interview on Community Service)
- Contact
- About Us

---

## Decision 9: Hero Section Background

**Question**: How should the hero gradient background be implemented?

**Decision**: CSS linear gradient

**Rationale**:
- Matches mockup appearance
- No image file needed
- Infinitely scalable
- Easy to adjust

**Gradient**:
```css
.hero {
  background: linear-gradient(180deg, #E8F4F8 0%, #FFFFFF 100%);
}
```

---

## Summary

All technology decisions align with constitution principles:
- ✅ No build tools required
- ✅ Zero external dependencies (CDN, APIs)
- ✅ Self-hosted assets only
- ✅ Maintainable by non-developer
- ✅ GitHub Pages compatible
- ✅ Modern, accessible design patterns
