# Portfolio Web App Design Guidelines

## Design Approach
**System-Based Approach**: Using modern professional design patterns with clean, minimalist aesthetics inspired by contemporary portfolio sites like those of software engineers at major tech companies. Focus on readability, professional presentation, and seamless user experience.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 15 85% 15% (Deep charcoal)
- Secondary: 200 15% 25% (Muted blue-gray)
- Accent: 200 100% 50% (Professional blue - sparingly used)
- Background: 0 0% 98% (Off-white)
- Card backgrounds: 0 0% 100% (Pure white)

**Dark Mode:**
- Primary: 200 15% 85% (Light gray)
- Secondary: 200 10% 70% (Muted light gray)
- Accent: 200 100% 60% (Bright blue - sparingly used)
- Background: 220 15% 8% (Deep dark blue)
- Card backgrounds: 220 10% 12% (Dark cards)

### B. Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern sans-serif
- **Code Font**: JetBrains Mono for technical content
- **Hierarchy**: text-5xl for hero titles, text-2xl for section headers, text-lg for body content

### C. Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, and 16 (p-4, m-8, gap-12, py-16)
- Consistent 4-unit base rhythm
- Generous whitespace for professional appearance
- Maximum content width of 1200px centered

### D. Component Library
**Navigation**: Clean header with logo/name and navigation links
**Hero Section**: Large typography with professional photo and current role highlight
**Cards**: Elevated cards with subtle shadows for projects and experience
**Buttons**: Primary filled buttons and outline variants with proper contrast
**Forms**: Clean contact form with proper validation states
**Timeline**: Vertical timeline for experience and education

### E. Animations
Minimal and purposeful:
- Subtle fade-in animations on scroll
- Smooth hover transitions on interactive elements
- No distracting or excessive motion

## Specific Sections

### Hero Section
- Professional headshot (circular crop)
- Large typography: "R.G.R. Lakshan"
- Subtitle: "Software Engineering Intern at NAITA"
- Brief professional summary
- CTA buttons for contact and resume download

### Skills Showcase
- Grid layout of skill cards
- Grouped by category (Programming Languages, Databases, Tools)
- Clean icons from Heroicons
- Subtle hover effects

### Projects Portfolio
- Card-based layout with project screenshots
- Technology tags for each project
- Links to live demos and GitHub repositories
- Brief descriptions highlighting key features

### Experience & Education
- Timeline layout showing progression
- Expandable cards for detailed information
- Professional styling with dates prominently displayed

### Contact Section
- Clean contact form
- Professional contact information display
- Social links (LinkedIn, GitHub)

## Images
**Required Images:**
- Professional headshot for hero section (circular, high-quality)
- Project screenshots or mockups for portfolio cards
- Optional: NAITA office/workspace photos for experience section
- Icons: Use Heroicons for all interface icons

**Hero Image**: Single professional headshot, not a large background image - focus remains on content and professional presentation.