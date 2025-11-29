# Quickstart: Alternating Carousel

**Feature**: 005-alternating-carousel
**Date**: 2025-11-29

## Overview

The alternating carousel displays images with descriptions in a two-column layout. Each slide alternates the image position (left/right) for visual interest. Images display in 16:9 aspect ratio.

## Quick Implementation

### 1. Add HTML Structure

Add to `index.html` in the hero section (replaces existing carousel):

```html
<!-- Alternating Carousel -->
<div class="alt-carousel" role="region" aria-label="Image carousel">
  <div class="alt-carousel-track">
    <!-- Slide 1 -->
    <div class="alt-carousel-slide active" data-slide-index="0">
      <div class="alt-carousel-image">
        <img src="images/your-image.jpg" alt="Description">
      </div>
      <div class="alt-carousel-content">
        <h3 class="alt-carousel-title">Title</h3>
        <p class="alt-carousel-description">Description text...</p>
      </div>
    </div>
    
    <!-- Slide 2 (will auto-flip to image-right) -->
    <div class="alt-carousel-slide" data-slide-index="1">
      <div class="alt-carousel-image">
        <img src="images/another-image.jpg" alt="Description">
      </div>
      <div class="alt-carousel-content">
        <h3 class="alt-carousel-title">Title</h3>
        <p class="alt-carousel-description">Description text...</p>
      </div>
    </div>
  </div>
  
  <!-- Navigation -->
  <button class="alt-carousel-prev" aria-label="Previous slide">←</button>
  <button class="alt-carousel-next" aria-label="Next slide">→</button>
  <div class="alt-carousel-dots"></div>
</div>
```

### 2. Add CSS (to homepage.css)

```css
/* Alternating Carousel */
.alt-carousel {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.alt-carousel-slide {
  display: none;
  flex-direction: row;
  gap: var(--space-6);
  align-items: center;
}

.alt-carousel-slide.active {
  display: flex;
}

.alt-carousel-slide.image-right {
  flex-direction: row-reverse;
}

.alt-carousel-image {
  flex: 1;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.alt-carousel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.alt-carousel-content {
  flex: 1;
  padding: var(--space-4);
}

/* Mobile: Stack layout */
@media (max-width: 767px) {
  .alt-carousel-slide,
  .alt-carousel-slide.image-right {
    flex-direction: column;
  }
}
```

### 3. Add JavaScript

```javascript
// Alternating Carousel
const altCarousel = {
  slides: document.querySelectorAll('.alt-carousel-slide'),
  currentIndex: 0,
  interval: null,

  init() {
    if (this.slides.length === 0) return;
    this.updateLayout();
    this.startAutoplay();
    this.bindEvents();
  },

  showSlide(index) {
    this.slides.forEach(s => s.classList.remove('active'));
    this.currentIndex = (index + this.slides.length) % this.slides.length;
    this.slides[this.currentIndex].classList.add('active');
    this.updateLayout();
  },

  updateLayout() {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('image-right', i % 2 === 1);
    });
  },

  startAutoplay() {
    this.interval = setInterval(() => this.showSlide(this.currentIndex + 1), 5000);
  },

  bindEvents() {
    document.querySelector('.alt-carousel-prev')?.addEventListener('click', () => {
      this.showSlide(this.currentIndex - 1);
    });
    document.querySelector('.alt-carousel-next')?.addEventListener('click', () => {
      this.showSlide(this.currentIndex + 1);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => altCarousel.init());
```

## Adding New Slides

1. Copy an existing `<div class="alt-carousel-slide">` block
2. Update `data-slide-index` to the next number
3. Replace image `src` and `alt` text
4. Update title and description
5. The alternating layout is automatic based on index

## Configuration

| Setting | Default | How to Change |
|---------|---------|---------------|
| Auto-advance interval | 5000ms | Change `5000` in `startAutoplay()` |
| Transition duration | 500ms | Update CSS `transition` property |
| Mobile breakpoint | 767px | Update media query |

## Testing Checklist

- [ ] Images display in 16:9 ratio
- [ ] Odd slides show image on right
- [ ] Even slides show image on left  
- [ ] Auto-advance works every 5 seconds
- [ ] Prev/Next buttons work
- [ ] Mobile view stacks correctly
- [ ] Alt text is descriptive
