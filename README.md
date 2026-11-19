# BalCal Construction, Inc. — Premium Website Redesign

> **A high-end architectural and general contracting digital experience concept created for Max Ballines & Cruz Calderon by The Brand Design.**

Live Concept Redesign for: [BalCal Construction](https://www.balcalconstruction.com/)  
Headquarters: **Napa Valley, California**  
Contact: **(707) 226-2690** | `info@balcalconstruction.com`

---

## 1. Executive Summary & Purpose

This repository contains a complete, production-grade website redesign concept for **BalCal Construction, Inc.**, a full-service general contractor established in Napa, California in 2006.

The purpose of this concept is to replace their legacy Squarespace website with a bespoke digital presence that matches the true scale, luxury, and prestige of the multi-million-dollar residential estates, winery hospitality pavilions, and architectural commercial projects they build across Napa Valley, Sonoma County, and the greater San Francisco Bay Area.

---

## 2. Verified Business Profile

Every business claim, name, date, and contact detail on this website has been verified against BalCal Construction's business profile:

- **Corporate Name:** BalCal Construction, Inc. (Bal-Cal Construction, Inc.)
- **Founding Date:** Established in 2006 (18+ continuous years serving Northern California)
- **Ownership:** Privately held, Mexican-American owned general contractor
- **Executive Leadership:**
  - **Max Ballines**, President — Strategic vision, base building, and architectural knowledge
  - **Cruz Calderon**, Vice President — 20+ years industry veteran, pre-construction and site operations
  - **Luis-Enrique Ballines**, Office Manager — Operations and client communications
- **Headquarters:** 68 Coombs Street, Suite G1, Napa, CA 94559
- **Mailing Address:** P.O. Box 5720, Napa, CA 94581
- **Direct Phone:** **(707) 226-2690** (Fully clickable via `tel:+17072262690`)
- **Direct Email:** `info@balcalconstruction.com`
- **Industry Affiliation:** Active Member, **Napa Solano Builders Exchange**
- **Insurance:** Fully Insured with comprehensive General Liability and Workers' Compensation
- **Environmental Ethics:** Eco-conscious building with continuous jobsite material recycling and salvage protocols
- **Verified Portfolio Engagements:**
  - *The Hutchins Luxury Residence* (Custom estate, handmade kitchen, luxury bath suites, pool terrace)
  - *Thomas George Winery & Estate* (Commercial hospitality tasting room, heavy timber framing, commercial finishes)
  - *The Ark Commercial Series* (Contemporary architectural commercial structure, precision steel & glass)
  - *Artisan Millwork & Historical Restoration* (In-house handcrafted woodwork, historical reproduction, custom cabinetry)

---

## 3. Creative Direction & Visual Identity

The design language moves away from generic contractor templates and embraces the editorial aesthetic of world-renowned architectural studios:

- **Color Palette:**
  - Deep Obsidian Black (`#0d0f12`)
  - Monolithic Charcoal Planes (`#14171d`, `#1a1e26`)
  - Warm Architectural Bronze (`#c5a059`) and Pale Gold (`#e0be7d`)
  - Warm Off-White (`#f5f5f7`)
  - Frosted Glass Overlays (`backdrop-filter: blur(16px)`)
- **Typography:**
  - Display / Headlines: **Cinzel** (Serif) — Evoking Napa Valley stone masonry, structural permanence, and prestige.
  - Body & Specifications: **Plus Jakarta Sans** (Sans-Serif) — Crisp geometric legibility across all screen sizes.
- **Imagery:** High-resolution architectural photography capturing dusk lighting, monolithic stone, board-formed concrete, floor-to-ceiling glass, and artisan woodwork.

---

## 4. Key Interactive Features

1. **Frosted Glass Navigation:**
   - Sticky navigation that transitions to a compact, darkened frosted glass bar upon scrolling.
   - Verified credentials ticker (Napa Solano Builders Exchange, 18+ Years Heritage, Direct Phone).
   - Responsive mobile drawer navigation with smooth transition, keyboard accessibility (Esc key), and focus management.
2. **Cinematic Hero:**
   - Full-viewport architectural hero with subtle Ken Burns zoom animation.
   - Live verified stats counter animating to 2006, 18+ Years, and 100% Insured.
   - Dual Call-to-Action buttons ("Explore Our Work" and "Let's Talk").
   - Animated scroll-down mouse indicator.
3. **Interactive Services Cards:**
   - Three core disciplines (Residential, Commercial, Artisan Craftsmanship) with 3D hover lift, bronze glow, and direct filter shortcuts to the portfolio.
4. **Filterable Project Gallery:**
   - Category filters: *All Works*, *Residential*, *Commercial*, *Craftsmanship*.
   - Project cards with smooth fade/re-flow animations.
5. **Architectural Case Study Modals:**
   - Clicking any project opens a full-screen lightbox modal displaying the high-resolution photo, scope highlights, location, and a direct inquiry action.
6. **The BalCal 4-Phase Construction Process:**
   - An interactive timeline displaying Pre-Construction, Architectural Coordination, Precision Execution, and Master Finishing.
7. **The Credibility Matrix (Why Choose BalCal):**
   - 6 feature pillars highlighting Napa Solano Builders Exchange membership, Mexican-American ownership, full insurance, eco-conscious building, and in-house millwork.
8. **Leadership Spotlight:**
   - Profiles for Max Ballines, Cruz Calderon, and Luis-Enrique Ballines with verified biographies and direct email triggers.
9. **Interactive Consultation Planner & Contact Portal:**
   - Front-end consultation interface allowing prospective clients to select project discipline, region, timeline, and scope.
   - Clear client feedback via a presentation modal providing instant click-to-call or pre-formatted email dispatch without misleading backend claims.
10. **Quick-Contact Floating Pill & Back-to-Top:**
    - Persistent floating phone button with subtle pulse animation for fast mobile access.

---

## 5. Technology Stack & Architecture

- **HTML5:** Semantic, accessible markup with ARIA landmarks and roles.
- **CSS3:** Modern CSS custom properties, Flexbox, CSS Grid, clamp() fluid typography, and GPU-accelerated keyframe animations. Zero heavy frameworks.
- **Vanilla JavaScript (ES6+):** Ultra-performant, 60fps animations utilizing `IntersectionObserver` for scroll reveals and counter triggers.
- **Vector Assets:** Custom architectural SVG monogram & logo mark in `./logo.svg`.
- **Zero Build Dependencies:** Works out of the box in any browser or static hosting environment.

---

## 6. Project Structure

```
BalCal-Construction-Redesign/
├── index.html                        # Main semantic webpage
├── styles.css                        # Complete design system & responsive styling
├── script.js                         # Interactive logic, modals, gallery & animations
├── README.md                         # Presentation dossier & deployment instructions
├── server.ps1                        # Local HTTP development server utility
├── logo.svg                          # Architectural BalCal vector logo
├── balcal-original-logo.jpg          # Original archive logo from existing website
├── hero-architecture.jpg             # Fullscreen cinematic hero image
├── project-hutchins-residence.jpg
├── project-thomas-george-winery.jpg
├── project-ark-commercial.jpg
├── project-craftsmanship-millwork.jpg
├── project-napa-hillside-estate.jpg
├── project-heritage-restoration.jpg
├── service-residential.jpg
├── service-commercial.jpg
├── service-craftsmanship.jpg
├── napa-valley-landscape.jpg
├── team-max-ballines.jpg
├── team-cruz-calderon.jpg
└── team-luis-ballines.jpg
```

---

## 7. GitHub Pages Deployment Guide

This project is 100% static and configured for instant zero-config deployment to **GitHub Pages**:

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BalCal Construction luxury website redesign"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub (`Settings` -> `Pages`).
   - Under **Build and deployment** -> **Source**, select `Deploy from a branch`.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - Your live website will be available at: `https://<your-username>.github.io/<your-repo-name>/`.

---

## 8. Local Testing & Verification

To preview locally:

```bash
# Using Python (if available):
python -m http.server 8000

# Using Node (npx serve):
npx serve .

# Or using PowerShell built-in HTTP server / VS Code Live Server
```

Open `http://localhost:8000` in your modern web browser.
