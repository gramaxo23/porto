# Topógrafos Porto — Architectural Swiss Grid Redesign & Local SEO Authority

A complete visual transformation of **Topógrafos Porto** into a world-class Architectural Swiss Grid business presence with technical cartography accents, engineered to rank in the top 3 local search results for surveying and topography queries across Porto, Vila Nova de Gaia, and Grande Porto while preserving 100% of the original copy, contact modal, and floating quick-contact actions.

## User Review & Critical Decisions

> [!IMPORTANT]
> Review the confirmed aesthetic, SEO architecture, and conversion flow decisions below before we apply the changes.

- **Confirmed Decision 1 — Visual Direction**: **Architectural Swiss Grid with Technical Cartography Accents**. Precision hairline grid lines (`1px solid`), cartographic coordinate motifs (`41°08'58"N · 08°36'39"W`), clean human editorial numbering (`01.`, `02.`, `03.`), and an asymmetric Bento capability layout replacing generic symmetrical cards.
- **Confirmed Decision 2 — SEO & Content Expansion (Preserving 100% Original Content)**: Every original heading, paragraph, phone number (`923 579 181`), and email (`topografosdoporto@gmail.com`) is preserved verbatim and supplemented with:
  1. **Multi-Entity JSON-LD Structured Data (`@graph`)**: `ProfessionalService` / `LocalBusiness` with geo-coordinates, service area definitions, `OfferCatalog` for each core topography service, `BreadcrumbList`, and `FAQPage` schema.
  2. **Detailed Municipal Coverage Section**: Dedicated local SEO authority matrix covering **Porto**, **Vila Nova de Gaia**, **Matosinhos**, **Maia**, **Gondomar**, **Valongo**, **Vila do Conde**, and **Póvoa de Varzim** with municipality-specific licensing and urban planning context (RJUE, PDM, georreferenciação).
  3. **Interactive FAQ Accordion with `FAQPage` Schema**: High-intent Portuguese search queries answered clearly (licensing requirements, planialtimetric vs. topographic surveys, delivery formats `.DWG`/`.DXF`, turnaround times, and property boundary demarcation).
- **Confirmed Decision 3 — Conversion & Contact Flow**: **Keep the popup contact modal and floating WhatsApp/Phone buttons only**. All email/quote triggers open the accessible modal dialog (`#contactFormModal`) with client-side validation and feedback, paired with the floating WhatsApp and Phone quick-action buttons.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Topógrafos Porto's 20+ years of surveying expertise through an authoritative engineering & architectural interface that signals technical precision to architects, civil engineers, urban planners, historians, and property owners.
- **Target Audience / Persona**: Architects, civil engineering firms, construction managers, real estate developers, archaeological/heritage teams, and private landowners in the Greater Porto metropolitan area seeking certified topographic surveys and construction staking.
- **Key Value**: Combines immediate visual trust (architectural studio caliber) with comprehensive semantic HTML5 and Schema.org local search optimization so search engines index rich snippets, FAQs, and municipal coverage across Grande Porto.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Arrival & Proposition (Hero)**: Visitors land on a 1440px-scaled Swiss architectural split layout featuring the preserved headline (*"Topógrafos no Porto com rigor e precisão"*), regional unboxed metadata (`Porto · Vila Nova de Gaia · Grande Porto`), direct phone action (`923 579 181`), and modal trigger (`Envie-nos um e-mail`), anchored by a high-contrast photographic showcase with subtle topographic contour lines and coordinate framing.
  2. **Capabilities & Technical Deliverables (`#services`)**: Visitors explore the 3 core services (*Levantamentos Topográficos*, *Levantamentos Planialtimétricos*, *Implantação e Acompanhamento de Obras*) in an asymmetric Swiss grid with editorial numbering (`01`, `02`, `03`), original verbatim descriptions, and unboxed deliverable specifications (`DWG · DXF · PDF · ETRS89/PT-TM06`).
  3. **20+ Years of Multidisciplinary Proof (`#about`)**: Highlights the verbatim 20+ years experience statement alongside structured domain pillars (*Arquitetura*, *Engenharia Civil*, *Documentação Histórica*, *Planeamento Urbano*, *Arqueologia*) with tabular numeric indicators (`tabular-nums`).
  4. **Grande Porto Municipal Coverage (`#zonas`)**: Interactive municipal selector and semantic index covering Porto, Vila Nova de Gaia, Matosinhos, Maia, Gondomar, Valongo, Vila do Conde, and Póvoa de Varzim so both users and search crawlers see explicit local relevance.
  5. **Technical FAQ Accordion (`#faq`)**: Accessible accordion answering top local search questions around topographic surveys in Northern Portugal.
  6. **Direct Conversion (`#contact` & Modal)**: Clean contact section with direct `tel:` and `mailto:` links plus the popup contact form modal (`#contactFormModal`) with instant validation and submission confirmation, supported by floating WhatsApp and Phone buttons.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Architectural Swiss Grid meets precision cartography—inspired by European engineering practices and contemporary architectural monographs.
  - *Color Palette & Mood (60-30-10 Discipline)*:
    - **60% Dominant Neutral Canvas**: Crisp alabaster paper `#F8FAFA` (`--background`) and pure white `#FFFFFF` (`--surface-elevated`).
    - **30% Structural Surfaces & Ink**: Deep slate-ink `#0F1A20` (`--ink`) for primary typography, muted mineral slate `#4A5963` (`--muted`) for prose, subtle stone surface `#EFF3F4` (`--surface`), and exposed Swiss grid hairlines `#DCE3E6` (`--line`).
    - **10% High-Intent Accent**: Deep Theodolite Teal `#186068` (`--brand`) and Surveying Vermilion `#D94E34` (`--accent-datum` for subtle survey datum crosshairs and active focus indicators).
  - *Typography & Hierarchy (2+1 Font Rule)*:
    - **Display & Headings**: `Plus Jakarta Sans` (600/700/800, tight tracking `-0.035em`, `text-wrap: balance`) for architectural authority.
    - **Body Prose**: `Manrope` (400/500/600, `1.65` line-height, `65ch` measure) preserving the original font family for seamless readability.
    - **Technical Coordinates & Tabular Metrics**: `IBM Plex Mono` (`400/500`, `tabular-nums`) strictly for cartographic coordinates, datum references (`PT-TM06/ETRS89`), and index numbers.
  - *Component Styling & Layout*:
    - **Top Bar Contract**: Strict 3-zone single-row header (`Topógrafos Porto` wordmark — 4 single-line nav links `Serviços`, `Experiência`, `Zonas`, `FAQ` — 1 primary CTA `Pedir Contacto` / `923 579 181`).
    - **Zero-Pill Discipline**: All metadata (municipalities, deliverables, coordinate references) rendered as clean unboxed text separated by `·` or `/`.
    - **Single-Elevation Exposed Grid**: Hairline `1px solid` borders with subtle corner datum ticks (`+`) instead of heavy drop-shadow card clones.

- **Interactive Feedback & Motion**:
  - Compositor-only transitions (`transform`, `opacity` in `150ms cubic-bezier(0.16, 1, 0.3, 1)`), full `prefers-reduced-motion` support, interactive FAQ accordion state toggles, interactive municipal area filter tabs, and accessible focus-trapped modal with keyboard (`Escape`) and backdrop dismissal.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Preserving Original Verbatim Copy Inside an Expanded Semantic Structure**
  - *Chosen Approach*: Keep every original Portuguese sentence intact in its primary heading and paragraph slot while adding structured semantic subsections (Municipal Coverage, Technical Deliverables, FAQ) below.
  - *Why*: Protects existing keyword rankings and brand familiarity while multiplying long-tail keyword coverage and dwell time for Top-3 Google ranking performance.
  - *Alternatives Considered*: Rewriting the original copy from scratch—rejected because the user explicitly requested keeping the original content.

- **Decision 2: Comprehensive `@graph` JSON-LD Schema + Technical Meta Optimization**
  - *Chosen Approach*: Upgrade the single JSON-LD block to a linked `@graph` containing `ProfessionalService`, `LocalBusiness` (with `GeoCoordinates` for Porto/Gaia, `areaServed` across 8 Grande Porto municipalities, `hasOfferCatalog`), `WebSite`, and `FAQPage`, alongside optimized `<title>`, `<meta name="description">`, OpenGraph (`og:image:width`, `og:image:height`, `og:image:alt`), `robots.txt`, and `sitemap.xml` with `<lastmod>`.
  - *Why*: Google's local pack and organic top-3 results heavily reward structured entity relationships, explicit service catalogs, and `FAQPage` rich results for regional service businesses.

- **Decision 3: Popup Contact Modal + Floating Quick-Contact Buttons Only**
  - *Chosen Approach*: Retain the clean popup modal (`#contactFormModal`) triggered by CTA buttons and the floating WhatsApp/Phone buttons without cluttering the page footer with a second embedded form.
  - *Why*: Matches the user's explicit preference, keeps the architectural grid uncluttered, and channels high-intent leads directly to phone, WhatsApp, or the modal dialog.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     SEO & Semantic Document Layer                       │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌───────────────┐  │
│  │ Meta & OpenGraph     │  │ Schema.org @graph    │  │ Sitemap &     │  │
│  │ Canonical / Geo Tags │  │ LocalBusiness + FAQ  │  │ Robots Config │  │
│  └──────────┬───────────┘  └──────────┬───────────┘  └───────┬───────┘  │
└─────────────┼─────────────────────────┼──────────────────────┼──────────┘
              │                         │                      │
              ▼                         ▼                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                Architectural Swiss Grid UI (1440px Desktop)             │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Top Bar (3-Zone Contract): Wordmark │ Nav Links │ Primary Action  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────┬───────────────────────────────┐  │
│  │ Hero Proposition (Original Copy)  │ Cartographic Visual Frame     │  │
│  │ Eyebrow + H1 + Lead + Dual CTAs   │ Contour SVG + Datum + Photo   │  │
│  └───────────────────────────────────┴───────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ 01–03 Asymmetric Swiss Service Grid (#services - Original + Spec) │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ 20+ Years Experience & 5 Sector Pillars (#about - Original Copy)  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Grande Porto Municipal Coverage Matrix (#zonas - Interactive)     │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Local SEO Technical FAQ Accordion (#faq - Synced with JSON-LD)    │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Direct Contact Section (#contact) + Accessible Modal + Float CTAs │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - **Contact Modal State**: `isOpen` (`aria-hidden`, `body.modal-open`), focus management (auto-focus `#name` on open, restore focus on close), form validation state (name, email, message required + inline confirmation toast on submit while remaining compatible with Netlify form attributes).
  - **Municipal Coverage Filter State**: Active municipality tab (`Todos`, `Porto`, `Vila Nova de Gaia`, `Matosinhos`, `Maia`, `Gondomar`, `Valongo`) highlighting local municipal requirements and response coverage.
  - **FAQ Accordion State**: Independent `aria-expanded` toggle states for each technical question so all answers remain crawlable in the DOM while providing smooth interactive expansion.
