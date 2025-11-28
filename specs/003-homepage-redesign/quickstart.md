# Quickstart: Homepage Redesign

**Feature**: 003-homepage-redesign
**Date**: 2025-11-28

## Overview

This guide provides everything needed to implement the homepage redesign. It includes the design system specifications, component patterns, and implementation instructions.

---

## Design System

### Colors

```css
:root {
  /* Primary */
  --color-primary: #0077B6;
  --color-primary-dark: #005f8a;
  --color-primary-light: #E8F4F8;

  /* Text */
  --color-text-heading: #1A1A2E;
  --color-text-body: #4A4A4A;
  --color-text-muted: #6B7280;

  /* Backgrounds */
  --color-bg-white: #FFFFFF;
  --color-bg-light: #F8FAFC;
  --color-bg-gray: #F3F4F6;

  /* Borders & Shadows */
  --color-border: #E5E7EB;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Typography

```css
:root {
  /* Font Family */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Spacing

```css
:root {
  /* Spacing Scale (8px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */

  /* Border Radius */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-full: 9999px;
}
```

---

## Page Sections

### 1. Header/Navigation

```html
<header class="header">
  <div class="container">
    <a href="index.html" class="logo">
      <span class="logo-icon">((o))</span>
      <span class="logo-text">PAARC</span>
    </a>
    <nav class="nav">
      <ul class="nav-list">
        <li><a href="index.html" class="nav-link active">Home</a></li>
        <li><a href="events.html" class="nav-link">Events</a></li>
        <li class="nav-dropdown">
          <span class="nav-link">Learning</span>
          <ul class="dropdown-menu">
            <li><a href="about-amateur-radio.html">About Amateur Radio</a></li>
            <!-- more items -->
          </ul>
        </li>
        <!-- more nav items -->
      </ul>
    </nav>
  </div>
</header>
```

### 2. Hero Section

```html
<section class="hero">
  <div class="container">
    <div class="hero-icon">
      <!-- Radio waves icon SVG -->
    </div>
    <h1 class="hero-title">
      Welcome to <span class="text-primary">Parsons Amateur Radio Club</span>
    </h1>
    <p class="hero-description">
      Discover the fascinating world of amateur radio. Whether you're young or old,
      tech-savvy or a complete beginner, we invite you to explore the exciting
      channels of communication that ham radio offers.
    </p>
    <div class="hero-buttons">
      <a href="exams.html" class="btn btn-primary">Get Started →</a>
      <a href="about-amateur-radio.html" class="btn btn-secondary">Learn More</a>
    </div>
    <div class="meeting-card">
      <span class="meeting-label">Next Meeting</span>
      <strong class="meeting-time">First Monday of each month at 7:00 PM</strong>
      <span class="meeting-location">Parsons Arboretum</span>
    </div>
  </div>
</section>
```

### 3. What is Amateur Radio Section

```html
<section class="section section-white">
  <div class="container">
    <h2 class="section-title">What is Amateur Radio?</h2>
    <p class="section-description">
      Ham radio is a hobby enjoyed by hundreds of thousands of people in the United States
      and over a million worldwide. It's not just a hobby—it's a vital communication tool
      during emergencies and a gateway to countless fascinating technical pursuits.
    </p>
    <div class="card-grid card-grid-3">
      <div class="feature-card">
        <div class="card-icon"><!-- SVG --></div>
        <h3 class="card-title">Global Communication</h3>
        <p class="card-description">
          Connect with fellow operators worldwide. Ham radio knows no borders,
          enabling conversations across continents and cultures.
        </p>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

### 4. Getting Licensed Section

```html
<section class="section section-gray">
  <div class="container">
    <div class="license-card">
      <h2 class="section-title">Getting Licensed</h2>
      <p class="license-description">
        To become a licensed ham radio operator, you'll need to pass an FCC examination.
        There are three license classes, each offering different privileges. With a little
        effort and motivation, nearly anyone can obtain a license.
      </p>
      <p class="license-highlight">
        <strong class="text-primary">Good news:</strong> Morse code is no longer required!
        While it's still a popular mode of communication, you can get licensed without knowing it.
        Our club can help guide you through the licensing process.
      </p>
    </div>
  </div>
</section>
```

### 5. Activities Section (So Many Facets)

```html
<section class="section section-white">
  <div class="container">
    <h2 class="section-title">So Many Facets to Explore</h2>
    <p class="section-description">
      Amateur radio offers endless opportunities for learning, experimentation, and adventure.
      Here are just a few of the exciting activities you can pursue.
    </p>
    <div class="card-grid card-grid-3">
      <div class="activity-card">
        <div class="card-icon"><!-- SVG --></div>
        <h3 class="card-title">Satellite Communication</h3>
        <p class="card-description">Talk through amateur radio satellites orbiting Earth</p>
      </div>
      <!-- 5 more activity cards -->
    </div>
  </div>
</section>
```

### 6. Meeting Section

```html
<section class="section section-light">
  <div class="container text-center">
    <div class="meeting-icon"><!-- Calendar SVG --></div>
    <h2 class="section-title">Join Us at Our Next Meeting</h2>
    <p class="section-description">
      Whether you're interested in becoming a ham or just curious about amateur radio,
      you're welcome to attend our monthly meetings. No experience required—just bring your curiosity!
    </p>
    <div class="meeting-info-card">
      <div class="meeting-detail">
        <span class="detail-label">When</span>
        <strong class="detail-value">First Monday of Each Month, 7:00 PM</strong>
      </div>
      <div class="meeting-detail">
        <span class="detail-label">Where</span>
        <strong class="detail-value">Parsons Arboretum</strong>
      </div>
    </div>
    <div class="meeting-buttons">
      <a href="contact.html" class="btn btn-primary">Contact Us →</a>
      <a href="events.html" class="btn btn-secondary">View Events Calendar</a>
    </div>
  </div>
</section>
```

### 7. Footer

```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-icon">((o))</span>
          <span class="logo-text">Parsons Amateur Radio Club</span>
        </div>
        <p class="footer-tagline">
          Connecting amateur radio enthusiasts in the Parsons area and beyond.
          Join us to explore the fascinating world of ham radio.
        </p>
      </div>
      <div class="footer-links">
        <h4 class="footer-heading">Quick Links</h4>
        <ul>
          <li><a href="events.html">Events</a></li>
          <li><a href="about-amateur-radio.html">Learning Resources</a></li>
          <li><a href="exams.html">Exam Information</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4 class="footer-heading">Community</h4>
        <ul>
          <li><a href="local-nets.html">Local Nets</a></li>
          <li><a href="arrl-news.html">Podcasts</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Parsons Area Amateur Radio Club. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Component CSS Patterns

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}
```

### Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-bg-white);
  border: 2px solid var(--color-primary);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.btn-secondary {
  background-color: var(--color-bg-white);
  color: var(--color-text-heading);
  border: 2px solid var(--color-border);
}

.btn-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

### Cards

```css
.feature-card,
.activity-card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: var(--color-primary-light);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.card-icon svg {
  width: 24px;
  height: 24px;
  color: var(--color-primary);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-heading);
  margin-bottom: var(--space-2);
}

.card-description {
  color: var(--color-text-body);
  line-height: var(--line-height-relaxed);
}
```

### Card Grid

```css
.card-grid {
  display: grid;
  gap: var(--space-6);
}

.card-grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (min-width: 1024px) {
  .card-grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Sections

```css
.section {
  padding: var(--space-16) 0;
}

.section-white {
  background-color: var(--color-bg-white);
}

.section-light {
  background-color: var(--color-primary-light);
}

.section-gray {
  background-color: var(--color-bg-gray);
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-heading);
  text-align: center;
  margin-bottom: var(--space-4);
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-body);
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--space-10);
  line-height: var(--line-height-relaxed);
}
```

---

## Responsive Breakpoints

```css
/* Base: Mobile (< 768px) */

/* Tablet */
@media (min-width: 768px) {
  .hero-title {
    font-size: var(--font-size-5xl);
  }

  .section {
    padding: var(--space-20) 0;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .nav-list {
    display: flex;
  }

  .hamburger {
    display: none;
  }

  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
```

---

## File Checklist

Files to create:
- [ ] `css/modern.css` - Design system variables and base styles
- [ ] `css/homepage.css` - Homepage-specific styles
- [ ] `icons/*.svg` - All required SVG icons (10 icons)
- [ ] `index.html` - Redesigned homepage (replace existing)

---

## Implementation Order

1. **Create CSS files** - Set up design system first
2. **Create icon files** - SVG icons for all cards
3. **Build HTML structure** - Section by section
4. **Add responsive styles** - Mobile-first approach
5. **Test across browsers** - Chrome, Firefox, Safari, Edge
6. **Test responsive behavior** - Mobile, tablet, desktop viewports
7. **Validate all links** - Ensure navigation works
