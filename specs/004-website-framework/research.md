# Research: Website Design Framework

**Feature**: 004-website-framework
**Date**: 2025-11-28

## Overview

This research documents the analysis of the existing homepage design system to establish a consistent framework for all website pages.

## Design System Analysis

### Decision: Dark Monochrome Color Palette

**Rationale**: The homepage uses a sophisticated dark monochrome theme that provides excellent readability and a modern, professional appearance suitable for a technical community.

**Alternatives Considered**:
- Blue primary theme (from original constitution) - Rejected: Homepage already implements dark theme successfully
- Light theme - Rejected: Dark theme already established and preferred by site owner

**Implementation**: CSS custom properties in `modern.css`:
- `--color-bg-white: #141414` (dark background)
- `--color-bg-light: #1a1a1a` (slightly lighter)
- `--color-bg-gray: #222222` (section backgrounds)
- `--color-text-heading: #ffffff` (white headings)
- `--color-text-body: #d4d4d4` (light gray body text)
- `--color-text-muted: #a3a3a3` (muted/secondary text)
- `--color-primary: #ffffff` (primary accent - white)
- `--color-accent: #a3a3a3` (secondary accent - gray)

### Decision: 8px Spacing Scale

**Rationale**: Consistent spacing creates visual rhythm and makes the design system predictable.

**Alternatives Considered**:
- 4px base - Rejected: Too fine-grained for this design
- 10px base - Rejected: Doesn't align well with common screen sizes

**Implementation**: Space tokens from `--space-1` (4px) through `--space-20` (80px) in increments.

### Decision: Three Breakpoints (Mobile/Tablet/Desktop)

**Rationale**: Standard responsive breakpoints that cover the majority of devices.

**Alternatives Considered**:
- Two breakpoints only - Rejected: Tablet experience would suffer
- Four+ breakpoints - Rejected: Unnecessary complexity for this site

**Implementation**:
- Mobile: < 768px (stacked layouts, hamburger menu)
- Tablet: 768px - 1023px (two-column layouts, full nav possible)
- Desktop: ≥ 1024px (full layouts, expanded navigation)

### Decision: Component-Based CSS Architecture

**Rationale**: Reusable components reduce code duplication and ensure consistency.

**Alternatives Considered**:
- Page-specific styles only - Rejected: Would lead to inconsistency and maintenance burden
- CSS framework (Bootstrap, etc.) - Rejected: Constitution requires no external dependencies

**Implementation**: Modular classes in `modern.css`:
- `.container` - Max-width wrapper
- `.btn`, `.btn-primary`, `.btn-secondary` - Button variants
- `.feature-card`, `.activity-card` - Card components
- `.section`, `.section-white`, `.section-gray` - Section backgrounds
- `.header`, `.nav`, `.footer` - Layout components

### Decision: System Font Stack

**Rationale**: No external font loading, instant rendering, consistent cross-platform appearance.

**Alternatives Considered**:
- Google Fonts - Rejected: External dependency, privacy concerns, extra request
- Self-hosted fonts - Rejected: Adds complexity for minimal benefit

**Implementation**:
\`\`\`css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
\`\`\`

### Decision: SVG Logo

**Rationale**: Scalable at any size, small file size, customizable colors.

**Alternatives Considered**:
- PNG logo - Rejected: Already migrated to SVG, better quality at all sizes

**Implementation**: `images/Logo.svg` with gradient colors matching the design system.

## Component Inventory (from Homepage)

### Shared Components (in modern.css)
1. **Header** - Sticky navigation with logo, nav links, hamburger menu
2. **Footer** - Site branding, quick links, copyright
3. **Buttons** - Primary (white), Secondary (outline), Accent (gray)
4. **Cards** - Feature cards, activity cards with hover effects
5. **Sections** - White, light, gray background variants
6. **Typography** - Heading hierarchy, body text, muted text
7. **Navigation** - Desktop nav list, dropdowns, mobile hamburger menu

### Homepage-Specific Components (in homepage.css)
1. **Hero Section** - Background image, title, description, CTA buttons
2. **Carousel** - Image slideshow with dots and arrows
3. **Meeting Card** - Next meeting info display

## Page Template Structure

All pages should follow this structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Page description]">
  <title>[Page Title] - Parsons Area Amateur Radio Club</title>
  <link rel="icon" href="favicon.png" type="image/png">
  <link rel="stylesheet" href="css/modern.css">
  <!-- Optional: page-specific CSS -->
</head>
<body>
  <!-- Header (consistent across all pages) -->
  <header class="header">...</header>
  
  <!-- Main Content (page-specific) -->
  <main>
    <section class="section section-white">...</section>
    <section class="section section-gray">...</section>
  </main>
  
  <!-- Footer (consistent across all pages) -->
  <footer class="footer">...</footer>
  
  <!-- JavaScript (if needed) -->
  <script>...</script>
</body>
</html>
\`\`\`

## Recommendations

1. **Extract shared HTML** - Create reference patterns for header and footer to copy into each page
2. **Document component usage** - Create quickstart guide with copy-paste examples
3. **Test all breakpoints** - Verify every component works at mobile, tablet, and desktop widths
4. **Establish naming conventions** - BEM-like naming for new components
5. **Keep page-specific CSS minimal** - Most styling should come from modern.css

## Resolved Questions

All technical decisions have been made based on the existing homepage implementation:

- ✅ Color palette: Dark monochrome theme (implemented)
- ✅ Typography: System font stack (implemented)
- ✅ Breakpoints: 768px / 1024px (implemented)
- ✅ Component architecture: Modular CSS classes (implemented)
- ✅ Logo format: SVG (implemented)
