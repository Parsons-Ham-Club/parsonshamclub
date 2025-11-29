# Research: Alternating Carousel

**Feature**: 005-alternating-carousel
**Date**: 2025-11-29
**Status**: Complete

## Research Tasks

### 1. Existing Carousel Implementation Analysis

**Task**: Analyze current homepage carousel to understand integration points

**Findings**:
- Current carousel uses CSS opacity transitions (0.5s ease-in-out)
- Two carousels exist: `.hero-carousel-inline` (tablet) and `.hero-carousel-below` (desktop)
- JavaScript handles slide advancement with 5-second interval
- Navigation controls: prev/next buttons and dot indicators
- Auto-play pauses on hover

**Decision**: Build new alternating carousel as a separate component that replaces the existing carousel implementation. Reuse the navigation pattern but redesign the slide structure for two-column layout.

### 2. CSS Flexbox/Grid for Alternating Layouts

**Task**: Best approach for alternating image/text column positions

**Findings**:
- CSS Flexbox `flex-direction: row` vs `row-reverse` is cleanest approach
- Alternative: CSS Grid with grid-template-areas swapping
- JavaScript class toggle (`.image-left` / `.image-right`) controls layout

**Decision**: Use Flexbox with `flex-direction` toggled via JavaScript class. Simpler than Grid for two-column layout. Apply class based on slide index (odd/even).

**Rationale**: Flexbox is well-supported, performant, and the direction reversal is smooth. Avoids complex Grid template definitions.

**Alternatives Considered**:
- CSS Grid: More verbose, overkill for simple two-column swap
- Absolute positioning: Poor for responsive design
- DOM reordering: Causes accessibility issues and reflow

### 3. 16:9 Aspect Ratio Implementation

**Task**: Best practice for maintaining 16:9 aspect ratio

**Findings**:
- CSS `aspect-ratio: 16 / 9` property is well-supported (96%+ browser support)
- Fallback for older browsers: padding-bottom percentage trick (56.25%)
- Use `object-fit: cover` on images to fill container without distortion

**Decision**: Use native `aspect-ratio` property with `object-fit: cover`. No fallback needed for target browsers.

**Rationale**: Modern browsers all support aspect-ratio. The site already uses this property in the current carousel.

### 4. Transition Animations

**Task**: Smooth transition between alternating slides

**Findings**:
- Cross-fade (opacity) transitions work well with layout changes
- Adding slight scale or translate can enhance visual appeal
- Transition timing: 400-600ms is optimal for perceived smoothness
- Use CSS transitions rather than JavaScript animation for better performance

**Decision**: Use opacity fade (500ms) combined with slight horizontal translate for polished effect. Image fades out while new image fades in with layout position swap.

**Rationale**: Matches existing carousel timing. Cross-fade is simpler to implement and doesn't cause layout jumps.

### 5. Responsive Design Approach

**Task**: Handle mobile layout (stacked vs side-by-side)

**Findings**:
- Current site uses 768px as tablet breakpoint
- Mobile should stack image above description (no alternation)
- Desktop/tablet shows side-by-side with alternation

**Decision**: 
- Below 768px: Stack layout (image on top, description below)
- 768px and above: Two-column layout with alternation

**Rationale**: Aligns with existing responsive breakpoints in the site design system.

### 6. Accessibility Considerations

**Task**: Ensure carousel is accessible

**Findings**:
- Images need descriptive alt text
- Navigation buttons need aria-labels
- Live region announcement for slide changes (optional)
- Keyboard navigation for prev/next
- Pause auto-play on focus (not just hover)

**Decision**: 
- Add `role="region"` with `aria-label="Image carousel"`
- Buttons have `aria-label` for screen readers
- Images have descriptive alt text
- Support keyboard navigation (arrow keys optional enhancement)

**Rationale**: Follows WCAG guidelines and constitution's accessibility requirement.

## Technical Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Layout method | Flexbox with direction toggle | Simple, performant, well-supported |
| Aspect ratio | CSS aspect-ratio: 16/9 | Modern browsers support, already used in site |
| Transition | Opacity fade + translate (500ms) | Smooth, matches existing carousel |
| Mobile breakpoint | 768px (stack below) | Consistent with site design system |
| Alternation logic | CSS class based on slide index | JavaScript controls, CSS handles visual |

## Unknowns Resolved

All technical unknowns resolved. Ready for Phase 1 design.
