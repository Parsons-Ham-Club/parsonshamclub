# Quickstart Guide: Website Design Framework

**Feature**: 004-website-framework
**Date**: 2025-11-28

## Overview

This guide explains how to create new pages using the PAARC website design framework.

## Getting Started

### Required Files

Every page needs:
1. \`css/modern.css\` - The design system (required)
2. \`favicon.png\` - Site favicon
3. \`images/Logo.svg\` - Site logo

### Basic Page Template

Copy this template for any new page:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Your page description for search engines]">
  <meta name="author" content="Parsons Area Amateur Radio Club">
  <title>[Page Title] - Parsons Area Amateur Radio Club</title>
  <link rel="icon" href="favicon.png" type="image/png">
  <link rel="stylesheet" href="css/modern.css">
</head>
<body>
  <!-- HEADER - Copy exactly from index.html -->
  <header class="header">
    <!-- ... header content ... -->
  </header>

  <!-- YOUR PAGE CONTENT GOES HERE -->
  <section class="section section-white">
    <div class="container">
      <h1 class="section-title">Page Title</h1>
      <p class="section-description">
        Introduction paragraph for this page.
      </p>
      <!-- Add your content -->
    </div>
  </section>

  <!-- FOOTER - Copy exactly from index.html -->
  <footer class="footer">
    <!-- ... footer content ... -->
  </footer>

  <!-- Mobile Navigation Script - Copy from index.html -->
  <script>
    // ... navigation JavaScript ...
  </script>
</body>
</html>
\`\`\`

## Common Components

### Section with Cards

\`\`\`html
<section class="section section-white">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <p class="section-description">
      Brief description of this section.
    </p>
    <div class="card-grid card-grid-3">
      <!-- Cards go here -->
    </div>
  </div>
</section>
\`\`\`

### Feature Card

\`\`\`html
<div class="feature-card">
  <div class="card-icon">
    <svg><!-- SVG icon --></svg>
  </div>
  <h3 class="card-title">Card Title</h3>
  <p class="card-description">
    Description text for this card.
  </p>
</div>
\`\`\`

### Primary Button

\`\`\`html
<a href="page.html" class="btn btn-primary">Button Text →</a>
\`\`\`

### Secondary Button

\`\`\`html
<a href="page.html" class="btn btn-secondary">Button Text</a>
\`\`\`

### Simple Text Section

\`\`\`html
<section class="section section-gray">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <p class="section-description">
      Your paragraph text here. This will be centered and have
      a maximum width for readability.
    </p>
  </div>
</section>
\`\`\`

## Section Backgrounds

Alternate between these for visual rhythm:

| Class | Background | Use For |
|-------|------------|---------|
| \`section-white\` | Dark (#141414) | Primary content |
| \`section-gray\` | Gray (#222222) | Alternate sections |
| \`section-light\` | Light (#1a1a1a) | Call-to-action areas |

## Navigation Active State

When creating a new page, update the navigation to show the active page:

\`\`\`html
<!-- For a top-level page -->
<li><a href="your-page.html" class="nav-link active">Your Page</a></li>

<!-- For pages in dropdowns, the parent doesn't need active class -->
\`\`\`

## Adding Icons

Use inline SVGs from a consistent icon set. Example:

\`\`\`html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
     fill="none" stroke="currentColor" stroke-width="2" 
     stroke-linecap="round" stroke-linejoin="round">
  <!-- SVG path data -->
</svg>
\`\`\`

Recommended source: [Feather Icons](https://feathericons.com/) (MIT licensed)

## Responsive Testing

Always test your page at these widths:
- **320px** - Small mobile
- **768px** - Tablet breakpoint
- **1024px** - Desktop breakpoint
- **1920px** - Large desktop

Use browser DevTools (F12) → Device Toolbar to test.

## Checklist for New Pages

- [ ] Page uses \`css/modern.css\`
- [ ] Header copied from index.html exactly
- [ ] Footer copied from index.html exactly
- [ ] Navigation script copied from index.html
- [ ] Active state set on correct nav item
- [ ] Meta description is unique and descriptive
- [ ] Title follows pattern: "[Page] - Parsons Area Amateur Radio Club"
- [ ] Content uses semantic HTML (h1, h2, p, etc.)
- [ ] Tested at mobile, tablet, and desktop widths
- [ ] All links work correctly
- [ ] Images have alt text

## Maintenance Tips

### Changing Colors
Edit the CSS custom properties in \`:root\` at the top of \`modern.css\`.

### Changing Fonts
Edit \`--font-family\` in \`:root\`.

### Adding New Components
Add new classes to \`modern.css\` following the existing naming convention.

### Page-Specific Styles
If a page needs unique styles, create a \`css/[page-name].css\` file and include it after \`modern.css\`.
