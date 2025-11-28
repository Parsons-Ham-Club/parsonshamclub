<!--
SYNC IMPACT REPORT
==================
Version Change: 1.0.0 → 2.0.0
Change Type: Major Project Direction Change (MAJOR)
Rationale: Project evolved from migration-only to full website redesign with modern UI

Modified Principles:
  - Principle I: Changed from "Preserve User Experience" to "Modern User Experience"
  - Principle V: Changed from "Minimize File Changes" to "Modern Maintainable Codebase"

Added Sections:
  - Redesign Guidelines (new section)

Removed Sections:
  - Migration Constraints (replaced with Redesign Guidelines)

Templates Requiring Updates:
  ✅ plan-template.md - Aligned (Constitution Check section compatible)
  ✅ spec-template.md - Aligned (user scenarios support new UI design)
  ✅ tasks-template.md - Aligned (phase-based approach supports incremental redesign)

Follow-up TODOs: None
-->

# Parsons Ham Radio Club Website Constitution

## Core Principles

### I. Modern User Experience (NON-NEGOTIABLE)

The website MUST provide a modern, professional, and welcoming user experience that effectively communicates the club's purpose and attracts new members. The design should follow current web design best practices with clean layouts, clear typography, and intuitive navigation.

**Rationale**: The original WebSite X5-generated design is outdated. A modern redesign will better represent the club, attract new members, and provide a more engaging experience for visitors. The site owner has approved a full visual redesign based on provided mockups.

**Design Requirements**:
- Clean, modern aesthetic with consistent color scheme (blue primary, light gradients)
- Responsive design that works on desktop, tablet, and mobile
- Clear visual hierarchy with prominent calls-to-action
- Card-based layouts for feature presentation
- Modern typography stack for readability
- Accessible design following WCAG guidelines

### II. Maintainability First

The website MUST be easily maintainable by a non-professional developer (the site owner, Bob Hoffman) using modern tools: VS Code editor, Git version control, and free AI assistants (Gemini/Claude). The codebase MUST use standard HTML/CSS/JavaScript without proprietary dependencies.

**Rationale**: Bob maintains the site and needs a modern workflow without server administration overhead. The new design must be even easier to maintain than the old WebSite X5 generated code.

**Requirements**:
- No build tools or compilation steps required
- Direct HTML editing workflow
- GitHub Pages compatible (static hosting)
- Free tooling only (no paid services for core functionality)
- Clear documentation for common tasks
- Modular CSS that can be reused across pages
- Semantic HTML structure for easy content updates

### III. Static-First Architecture

All features MUST be implemented using static HTML/CSS/JavaScript or free third-party services that integrate via client-side code. No server-side dependencies.

**Rationale**: GitHub Pages only supports static hosting. Static architecture provides reliability, security, and zero maintenance overhead.

**Approved Services**:
- Contact forms: Formspree (free tier sufficient)
- Icons: Inline SVG or icon fonts (self-hosted)
- Fonts: System font stack or self-hosted web fonts
- All JavaScript: Vanilla JS or minimal libraries (self-hosted)

### IV. Zero Cost Operation

The hosting and core operational costs MUST be $0/year. Optional enhancements (custom domain) may have minimal cost ($12/year) but are not required.

**Rationale**: The club is a volunteer organization. Zero-cost hosting enables sustainable long-term operation.

**Free Tier Services**:
- GitHub Pages: Hosting (included with GitHub account)
- Formspree: Contact form (50 submissions/month free)
- All assets: Self-hosted (no CDN costs)
- SSL/HTTPS: Automatic via GitHub Pages

### V. Modern Maintainable Codebase

The redesigned website MUST use clean, well-organized code that is easy to understand and modify. The codebase should follow modern web standards and be structured for reusability across all site pages.

**Rationale**: The new design will be applied to all pages over time. A well-structured codebase makes this incremental rollout manageable and reduces maintenance burden.

**Requirements**:
- Semantic HTML5 structure
- CSS organized into reusable components (header, footer, cards, buttons, etc.)
- Consistent naming conventions
- Comments for complex sections
- No inline styles (all styling in CSS files)
- Reusable page template structure

### VI. Incremental Redesign

The redesign MUST be deployable incrementally, starting with the homepage and extending to other pages over time. Each page redesign MUST be independently verifiable before proceeding.

**Rationale**: This is a live website serving an active club. Incremental deployment allows testing and refinement while maintaining site functionality.

**Phases**:
1. Homepage redesign (current focus)
2. Navigation/header/footer standardization
3. Content pages (Learning, Podcasts, etc.)
4. Special pages (Events, Contact, About)
5. Final validation and cleanup

### VII. Documentation & Knowledge Transfer

All design decisions, component structures, and maintenance procedures MUST be documented for the site owner. Documentation MUST enable independent site updates and future page redesigns.

**Rationale**: The goal is to enable Bob to maintain the site and continue the redesign independently. Documentation must explain the new structure clearly.

**Required Documentation**:
- Design system overview (colors, typography, spacing)
- Component usage guide (cards, buttons, sections)
- Page template structure
- Common maintenance tasks
- How to apply redesign to additional pages

## Redesign Guidelines

### Design System

**Colors**:
- Primary Blue: #0077B6 (buttons, headings, accents)
- Light Blue: #E8F4F8 (backgrounds, gradients)
- Dark Text: #1A1A2E (headings)
- Body Text: #4A4A4A (paragraphs)
- White: #FFFFFF (cards, backgrounds)

**Typography**:
- Headings: System sans-serif stack (clean, modern)
- Body: System sans-serif stack (readable)
- Minimum body size: 16px

**Spacing**:
- Consistent padding/margins using multiples of 8px
- Section spacing: 64px-80px
- Card padding: 24px-32px

**Components**:
- Cards: Rounded corners (8-12px), subtle shadows
- Buttons: Rounded, clear hover states
- Icons: Consistent style (outlined or filled)
- Sections: Alternating backgrounds for visual rhythm

### Content Preservation

**MUST Preserve**:
- All existing page destinations (navigation links)
- Meeting information (First Monday, 7:00 PM, Parsons Arboretum)
- Contact information
- Club branding (Parsons Area Amateur Radio Club / PAARC)
- All external embeds (YouTube, TuneIn, Google Calendar)

**MAY Update**:
- Text content for clarity and modern tone
- Image presentation (galleries, slideshows)
- Page layouts and visual organization
- Navigation structure (if improved)

### File Organization

```text
/                       # Root directory
├── index.html          # Homepage (redesign target)
├── [other pages].html  # Existing pages (future redesign)
├── css/
│   ├── modern.css      # New design system styles
│   └── components.css  # Reusable component styles
├── images/             # All images
├── icons/              # SVG icons for new design
└── style/              # Legacy styles (keep for non-redesigned pages)
```

## Development Workflow

### Local Development

1. Clone repository from GitHub
2. Open project in VS Code
3. Use Live Server extension for local preview
4. Edit HTML/CSS files directly
5. Test changes in browser (including mobile viewport)
6. Commit and push to GitHub

### Deployment Process

1. Push changes to `main` branch on GitHub
2. GitHub Pages automatically rebuilds (1-2 minutes)
3. Verify changes at live URL
4. No manual deployment steps required

### Testing Requirements

**Before Deployment**:
- Verify page loads and displays correctly
- Test all navigation links
- Test responsive design (desktop, tablet, mobile)
- Verify all buttons and CTAs work
- Check accessibility (contrast, focus states)

**After Deployment**:
- Visual verification on live site
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on actual mobile devices if possible

## Governance

### Amendment Process

This constitution may be amended when:
1. Design direction changes
2. Technical constraints change
3. Site owner requirements evolve

Amendments require:
- Documentation of change rationale
- Impact analysis on existing work
- Version increment per semantic versioning

### Versioning Policy

Constitution versions follow semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Significant direction changes (e.g., this redesign pivot)
- **MINOR**: New principles or constraints added
- **PATCH**: Clarifications, typo fixes, wording improvements

### Compliance Review

All tasks and implementation decisions MUST be validated against this constitution:

1. **Specification Phase**: User scenarios must support modern UX goals
2. **Planning Phase**: Technical approach must be static-first, zero-cost, maintainable
3. **Task Generation**: Tasks must follow incremental redesign approach
4. **Implementation**: Code must follow design system and maintainability requirements

**Version**: 2.0.0 | **Ratified**: 2025-11-28 | **Last Amended**: 2025-11-28
