# Data Model: Alternating Carousel

**Feature**: 005-alternating-carousel
**Date**: 2025-11-29

## Overview

The alternating carousel is a client-side component with no backend storage. All slide data is defined inline in HTML. This document describes the logical data structure for slides and carousel state.

## Entities

### Slide

A single carousel slide containing an image and its description.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `imageSrc` | string | Yes | Path to image file (relative to site root) |
| `imageAlt` | string | Yes | Accessible alt text describing the image |
| `title` | string | No | Optional headline for the slide |
| `description` | string | Yes | Text description displayed alongside image |

**HTML Representation**:
```html
<div class="alt-carousel-slide" data-slide-index="0">
  <div class="alt-carousel-image">
    <img src="images/example.jpg" alt="Description of image">
  </div>
  <div class="alt-carousel-content">
    <h3 class="alt-carousel-title">Optional Title</h3>
    <p class="alt-carousel-description">Description text here...</p>
  </div>
</div>
```

### Carousel State

Runtime state managed by JavaScript.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `currentIndex` | number | 0 | Index of currently visible slide |
| `totalSlides` | number | - | Total number of slides (computed from DOM) |
| `isPlaying` | boolean | true | Whether auto-advance is active |
| `interval` | number | 5000 | Auto-advance interval in milliseconds |
| `transitionDuration` | number | 500 | Transition animation duration in ms |

**JavaScript Representation**:
```javascript
const carouselState = {
  currentIndex: 0,
  totalSlides: document.querySelectorAll('.alt-carousel-slide').length,
  isPlaying: true,
  interval: 5000,
  transitionDuration: 500
};
```

## Layout Logic

### Alternation Rule

The image position alternates based on slide index:
- **Even index (0, 2, 4...)**: Image on LEFT, description on RIGHT
- **Odd index (1, 3, 5...)**: Image on RIGHT, description on LEFT

**CSS Implementation**:
```css
/* Default: image left */
.alt-carousel-slide {
  display: flex;
  flex-direction: row;
}

/* Odd slides: image right */
.alt-carousel-slide.image-right {
  flex-direction: row-reverse;
}
```

**JavaScript Logic**:
```javascript
function updateSlideLayout(index) {
  const slide = slides[index];
  if (index % 2 === 1) {
    slide.classList.add('image-right');
  } else {
    slide.classList.remove('image-right');
  }
}
```

## Responsive Behavior

### Breakpoints

| Viewport | Layout | Alternation |
|----------|--------|-------------|
| < 768px | Stacked (image on top) | No |
| >= 768px | Side-by-side (50/50) | Yes |

### Mobile Layout

On mobile, all slides use stacked layout regardless of index:
```css
@media (max-width: 767px) {
  .alt-carousel-slide,
  .alt-carousel-slide.image-right {
    flex-direction: column;
  }
}
```

## Validation Rules

1. **Minimum slides**: At least 1 slide required
2. **Image required**: Each slide must have an image with valid src
3. **Alt text required**: All images must have non-empty alt text
4. **Description required**: Each slide must have description text

## State Transitions

```
[Initial Load]
    |
    v
[Show Slide 0] --> (5s timer) --> [Show Slide 1] --> ... --> [Wrap to Slide 0]
    |                                   |
    | (hover)                          | (hover)
    v                                   v
[Pause Auto-play]                 [Pause Auto-play]
    |                                   |
    | (mouse leave)                    | (mouse leave)
    v                                   v
[Resume Auto-play]                [Resume Auto-play]
```

## Example Data

```html
<!-- Slide 1: Image Left -->
<div class="alt-carousel-slide" data-slide-index="0">
  <div class="alt-carousel-image">
    <img src="images/Katy Days photo.jpg" alt="PAARC members at Katy Days festival">
  </div>
  <div class="alt-carousel-content">
    <h3 class="alt-carousel-title">Katy Days 2024</h3>
    <p class="alt-carousel-description">Club members demonstrate amateur radio equipment at the annual Katy Days festival in Parsons.</p>
  </div>
</div>

<!-- Slide 2: Image Right (automatic via index) -->
<div class="alt-carousel-slide" data-slide-index="1">
  <div class="alt-carousel-image">
    <img src="images/Screenshot Trailer.png" alt="PAARC mobile trailer setup">
  </div>
  <div class="alt-carousel-content">
    <h3 class="alt-carousel-title">Mobile Operations</h3>
    <p class="alt-carousel-description">Our club trailer provides portable radio capabilities for field day events and emergency communications.</p>
  </div>
</div>
```
