# Page Template Contract

**Version**: 1.0.0
**Date**: 2025-11-28

## Overview

This contract defines the required structure and elements for all pages in the PAARC website.

## Required Elements

### Document Head

Every page MUST include:

| Element | Requirement |
|---------|-------------|
| \`<!DOCTYPE html>\` | HTML5 doctype |
| \`<html lang="en">\` | Language attribute |
| \`<meta charset="UTF-8">\` | Character encoding |
| \`<meta name="viewport">\` | Responsive viewport |
| \`<meta name="description">\` | Unique page description (50-160 chars) |
| \`<title>\` | Format: "[Page] - Parsons Area Amateur Radio Club" |
| \`<link rel="icon">\` | favicon.png |
| \`<link rel="stylesheet">\` | css/modern.css |

### Header Component

All pages MUST include the standard header from index.html containing:

- Logo with link to homepage
- Desktop navigation (\`.nav-list\`)
- Mobile hamburger menu (\`.hamburger\`)
- Mobile navigation drawer (\`.nav-mobile\`)

**Active State**: The current page's nav link MUST have \`class="nav-link active"\`

### Main Content

Content MUST be wrapped in semantic sections:

\`\`\`html
<section class="section section-[variant]">
  <div class="container">
    <!-- Content -->
  </div>
</section>
\`\`\`

**Allowed section variants**: \`section-white\`, \`section-gray\`, \`section-light\`

### Footer Component

All pages MUST include the standard footer from index.html containing:

- Footer brand with logo
- Quick links
- Community links  
- Copyright notice

### Mobile Navigation Script

All pages MUST include the JavaScript for mobile navigation functionality.

## Validation Rules

### Accessibility

| Rule | Requirement |
|------|-------------|
| Images | MUST have \`alt\` attribute |
| Links | MUST have descriptive text (not "click here") |
| Headings | MUST follow hierarchy (h1 → h2 → h3) |
| Focus | Interactive elements MUST be keyboard accessible |

### Performance

| Rule | Requirement |
|------|-------------|
| CSS | Only include css/modern.css and optional page-specific CSS |
| JavaScript | Minimal, inline in page (no external libraries) |
| Images | Optimized, appropriate format (SVG for icons/logos) |

### Consistency

| Element | Requirement |
|---------|-------------|
| Header | Identical across all pages |
| Footer | Identical across all pages |
| Navigation | Same items, same order on all pages |
| Colors | Only use design tokens from modern.css |
| Typography | Only use font-size tokens from modern.css |
| Spacing | Only use space tokens from modern.css |

## Example Compliant Page

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn about amateur radio exams and how to get licensed with the Parsons Area Amateur Radio Club.">
  <meta name="author" content="Parsons Area Amateur Radio Club">
  <title>Exams - Parsons Area Amateur Radio Club</title>
  <link rel="icon" href="favicon.png" type="image/png">
  <link rel="stylesheet" href="css/modern.css">
</head>
<body>
  <header class="header">
    <!-- Standard header content -->
  </header>

  <section class="section section-white">
    <div class="container">
      <h1 class="section-title">Amateur Radio Exams</h1>
      <p class="section-description">
        Information about getting your amateur radio license.
      </p>
    </div>
  </section>

  <section class="section section-gray">
    <div class="container">
      <h2 class="section-title">License Classes</h2>
      <!-- Content -->
    </div>
  </section>

  <footer class="footer">
    <!-- Standard footer content -->
  </footer>

  <script>
    // Mobile navigation script
  </script>
</body>
</html>
\`\`\`

## Non-Compliant Examples

### Missing Meta Description
\`\`\`html
<!-- BAD: No description -->
<head>
  <title>Exams - PAARC</title>
</head>
\`\`\`

### Custom Colors
\`\`\`html
<!-- BAD: Using custom color instead of token -->
<h1 style="color: #ff0000;">Title</h1>
\`\`\`

### Different Header
\`\`\`html
<!-- BAD: Modified header structure -->
<header class="header">
  <div class="my-custom-nav">...</div>
</header>
\`\`\`

### Missing Container
\`\`\`html
<!-- BAD: Content not in container -->
<section class="section section-white">
  <h1>Title</h1>
</section>
\`\`\`
