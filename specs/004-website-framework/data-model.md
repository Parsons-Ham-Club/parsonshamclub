# Component Catalog: Website Design Framework

**Feature**: 004-website-framework
**Date**: 2025-11-28

## Overview

This document catalogs all reusable components in the website framework, their properties, and usage guidelines.

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| \`--color-primary\` | #ffffff | Primary actions, headings accent |
| \`--color-primary-dark\` | #e5e5e5 | Primary hover states |
| \`--color-accent\` | #a3a3a3 | Secondary accent, labels |
| \`--color-bg-white\` | #141414 | Main background |
| \`--color-bg-light\` | #1a1a1a | Slightly lighter sections |
| \`--color-bg-gray\` | #222222 | Alternate section backgrounds |
| \`--color-text-heading\` | #ffffff | Heading text |
| \`--color-text-body\` | #d4d4d4 | Body text |
| \`--color-text-muted\` | #a3a3a3 | Secondary/muted text |
| \`--color-border\` | #333333 | Border color |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| \`--font-size-xs\` | 0.75rem (12px) | Fine print |
| \`--font-size-sm\` | 0.875rem (14px) | Labels, meta |
| \`--font-size-base\` | 1rem (16px) | Body text |
| \`--font-size-lg\` | 1.125rem (18px) | Lead paragraphs |
| \`--font-size-xl\` | 1.25rem (20px) | Card titles |
| \`--font-size-2xl\` | 1.5rem (24px) | Small headings |
| \`--font-size-3xl\` | 1.875rem (30px) | Section subheadings |
| \`--font-size-4xl\` | 2.25rem (36px) | Section titles |
| \`--font-size-5xl\` | 3rem (48px) | Hero title (desktop) |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| \`--space-1\` | 0.25rem (4px) | Tight spacing |
| \`--space-2\` | 0.5rem (8px) | Icon gaps |
| \`--space-3\` | 0.75rem (12px) | Small padding |
| \`--space-4\` | 1rem (16px) | Standard padding |
| \`--space-6\` | 1.5rem (24px) | Card padding |
| \`--space-8\` | 2rem (32px) | Section spacing |
| \`--space-10\` | 2.5rem (40px) | Large gaps |
| \`--space-12\` | 3rem (48px) | Section margins |
| \`--space-16\` | 4rem (64px) | Section padding |
| \`--space-20\` | 5rem (80px) | Large section padding |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| \`--radius-sm\` | 0.25rem (4px) | Small elements |
| \`--radius-md\` | 0.5rem (8px) | Buttons, inputs |
| \`--radius-lg\` | 0.75rem (12px) | Cards |
| \`--radius-xl\` | 1rem (16px) | Large cards, hero |
| \`--radius-full\` | 9999px | Pills, circular buttons |

## Layout Components

### Container

Constrains content to maximum width with horizontal padding.

| Property | Value |
|----------|-------|
| Max Width | 1200px |
| Padding | 24px (--space-6) |
| Margin | 0 auto (centered) |

**Class**: \`.container\`

### Section

Full-width section with vertical padding.

| Variant | Class | Background |
|---------|-------|------------|
| White/Dark | \`.section-white\` | #141414 |
| Light | \`.section-light\` | #1a1a1a |
| Gray | \`.section-gray\` | #222222 |

**Base Class**: \`.section\`
**Padding**: 64px (mobile), 80px (tablet+)

### Card Grid

Responsive grid for card layouts.

| Property | Value |
|----------|-------|
| Gap | 24px |
| Columns (mobile) | 1 |
| Columns (desktop) | 3 (for \`.card-grid-3\`) |

**Class**: \`.card-grid .card-grid-3\`

## UI Components

### Buttons

| Variant | Class | Style |
|---------|-------|-------|
| Primary | \`.btn .btn-primary\` | White background, dark text |
| Secondary | \`.btn .btn-secondary\` | Transparent, bordered |
| Accent | \`.btn .btn-accent\` | Gray background |

**States**: Hover lifts button (-2px), increases shadow

### Cards

| Variant | Class | Usage |
|---------|-------|-------|
| Feature Card | \`.feature-card\` | Feature highlights with icon |
| Activity Card | \`.activity-card\` | Activity listings |

**Properties**:
- Background: #363636
- Border: 1px solid #333333
- Hover: Lifts (-4px), gradient accent line

**Card Children**:
- \`.card-icon\` - 56x56 icon container
- \`.card-title\` - Heading
- \`.card-description\` - Body text

### Section Typography

| Element | Class | Font Size |
|---------|-------|-----------|
| Title | \`.section-title\` | 36px, with underline accent |
| Description | \`.section-description\` | 18px, centered, max-width 800px |

## Navigation Components

### Header

| Property | Value |
|----------|-------|
| Position | Sticky, top: 0 |
| Background | rgba(10, 10, 10, 0.95) with blur |
| Border | Bottom, subtle |
| Z-index | 100 |

**Children**:
- \`.logo\` - Site logo with text
- \`.nav\` - Navigation wrapper
- \`.nav-list\` - Desktop nav links (hidden on mobile)
- \`.hamburger\` - Mobile menu toggle (hidden on desktop)
- \`.nav-mobile\` - Mobile navigation drawer

### Navigation Links

| State | Style |
|-------|-------|
| Default | Gray text (#d4d4d4) |
| Hover | White text, subtle background |
| Active | White text, underline indicator |

### Dropdown Menu

| Property | Value |
|----------|-------|
| Trigger | Hover (desktop), tap (mobile) |
| Animation | Fade + slide down |
| Background | #141414 |
| Border | 1px solid #333333 |

### Footer

| Property | Value |
|----------|-------|
| Background | #222222 |
| Layout | 3-column grid (desktop) |
| Padding | 48px top, 24px bottom |

**Children**:
- \`.footer-brand\` - Logo and tagline
- \`.footer-links\` - Link columns
- \`.footer-bottom\` - Copyright

## Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Hamburger menu navigation
- Stacked cards
- Smaller headings

### Tablet (768px - 1023px)
- Two-column layouts where appropriate
- Full navigation may display
- Card grid adapts

### Desktop (≥ 1024px)
- Full navigation bar
- Three-column card grids
- Maximum content width
- Full hero layouts
