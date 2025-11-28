# Phase 0: Research - About Amateur Radio Page

**Feature**: About Amateur Radio Page  
**Branch**: 002-about-amateur-radio-page  
**Date**: 2025-11-27

## Overview

This document consolidates research findings for creating a new About Amateur Radio page by relocating the existing slideshow from the homepage.

## Technical Research

### 1. Existing Slideshow Component

**Decision**: Relocate existing Jssor Slider component as-is from index.html lines 354-473

**Rationale**: 
- Self-contained JavaScript component
- All 37 slides already in pluginAppObj/pluginAppObj_03/
- Works identically on any page

### 2. Page Template Structure

**Decision**: Use digital-communications.html as template base
- Consistent with other Learning section pages
- Clean content layout
- All required CSS/JS includes present

### 3. Navigation Menu Updates

**Decision**: Manually update all 19 HTML pages
- Add About Amateur Radio as first item in Learning dropdown
- Update CSS classes (imMnMnFirst for new item, change Digital Communications to imMnMnMiddle)
- Menu structure at lines 94-137 in each file

### 4. Slideshow Removal from Homepage

**Removal Scope**:
- Delete imPageRow_5 div (intro text, lines 340-351)
- Delete imPageRow_6 div (spacer, lines 351-353)  
- Delete imCell_3 div (slider component, lines 354-473)

### 5. Dependencies

**No new dependencies required**
- Jssor CSS: pluginAppObj/pluginAppObj_03/jssor.slider.css
- Jssor JS: appsresources/jssor.slider.min.js
- Both already loaded globally

## Implementation Steps

1. Create about-amateur-radio.html from digital-communications.html template
2. Copy slideshow HTML from index.html  
3. Add new menu item to all 19 pages
4. Remove slideshow from homepage
5. Test locally before committing

## Decisions Summary

| Decision Point | Choice Made |
|----------------|-------------|
| Slider component | Relocate as-is |
| Page template | digital-communications.html |
| Menu updates | Manual update all 19 pages |
| CSS/JS | Use existing global includes |

All technical research complete. Ready for Phase 1.
