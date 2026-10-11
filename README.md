# The Consistent Academy — Website Redesign Prototype

A clean, modern, accessible, and high-performance website redesign prototype for **The Consistent Academy** (Pune, Maharashtra), developed under internship assignment guidelines through **ThinkBuild**.

- **Client Live Website:** [https://www.theconsistentacademy.in/](https://www.theconsistentacademy.in/)
- **Developer / Organization:** [ThinkBuild](https://www.thinkbuild.in/)
- **Core Technology Stack:** React 18, Vite 6, Tailwind CSS 3.4, React Router DOM 6, Lucide React

---

## 1. Project Overview & Architectural Vision

The Consistent Academy is an educational institution based in **Pune, Maharashtra**, founded in 2025 by **Vidya Wankhade** (IELTS Master Trainer, UGC NET qualified, author of 3 published books, with 18+ years of teaching experience since 2007). 

This redesign replaces generic template bloat, heavy WebGL animations, and clutter with a **calm, credible, education-focused design system**:
1. **Preserved Brand Identity:** Deep brand purple (`#5C25B3`), vibrant accent (`#9738F9`), and teal highlights (`#0D9488`), derived directly from the academy's official logo and palette.
2. **100% Genuine Client Data:** Preserves all verified offerings, course fees, module syllabi, testimonials, published books, and campus workshop photography without inventing claims.
3. **Verified Local Footprint:** Verified contact numbers (`+91 77091 09830`), official email (`theconsistentacademy@gmail.com`), embedded Google Map of Pune, Maharashtra, and direct "Get Directions" navigation.
4. **Developer Attribution:** Prominent, professional footer credit: *"Developed and Maintained by ThinkBuild"* with the official ThinkBuild logo linking to `https://www.thinkbuild.in/`.

---

## 2. Directory Structure

```text
consistent/
├── public/
│   ├── assets/
│   │   ├── books/             # Original book covers (Cakewalk IELTS, Reading Detective, 101 Management)
│   │   ├── courses/           # Original course illustrations & banners (img1 - img14)
│   │   ├── gallery/           # Authentic workshop, lecture & student photos (v1 - v22, vidya.png)
│   │   ├── logo2.png          # High-resolution Consistent Academy brand logo
│   │   └── thinkbuild-logo.png# Official ThinkBuild corporate logo
│   ├── favicon.png            # Favicon
│   ├── logo2.png              # Direct logo path
│   ├── robots.txt             # Crawl instructions with sitemap reference
│   └── sitemap.xml            # Canonical public XML sitemap (16 routes)
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx    # Accessible form with prototype validation & disclaimer
│   │   ├── CourseCard.jsx     # Education course card with badges & module counts
│   │   ├── EnquiryModal.jsx   # Universal modal with focus trap & Esc handling
│   │   ├── FAQAccordion.jsx   # Accessible accordion with keyboard navigation
│   │   ├── Footer.jsx         # Complete footer with verified contact & ThinkBuild credit
│   │   ├── MapEmbed.jsx       # Google Map iframe with direct "Get Directions" action
│   │   ├── Navbar.jsx         # Sticky header with responsive drawer & top contact bar
│   │   └── SEOHead.jsx        # Dynamic document title, meta tags & Schema.org JSON-LD
│   ├── data/
│   │   ├── careersData.js     # Real faculty positions & requirements
│   │   ├── coursesData.js     # Verified 13 courses, modules, hours & fees
│   │   ├── faqData.js         # Verified FAQs grounded in real academy policies
│   │   ├── founderData.js     # Vidya Wankhade profile, timeline & 3 published books
│   │   ├── galleryData.js     # Real workshop photo metadata
│   │   ├── testimonialsData.js# Verified student reviews (Ninoshka, Sucharita, Deepak S.)
│   │   └── testsData.js       # 10-question English test & 5-question Leadership assessment
│   ├── pages/
│   │   ├── AboutPage.jsx      # Academy vision, founder biography, timeline & books
│   │   ├── CareersPage.jsx    # Faculty job openings with application form prototype
│   │   ├── ClubPage.jsx       # Consistency Reading Club & WhatsApp community
│   │   ├── ContactPage.jsx    # Mandatory Contact Us page with Pune map & form
│   │   ├── CourseDetailPage.jsx# Dynamic route /courses/:slug with complete module syllabus
│   │   ├── CoursesPage.jsx    # Complete catalog with category tabs
│   │   ├── HomePage.jsx       # Comprehensive homepage with hero, trust & preview sections
│   │   ├── NotFoundPage.jsx   # Helpful 404 page
│   │   ├── PrivacyPage.jsx    # Educational transparency privacy policy
│   │   └── TestsPage.jsx      # Interactive Diagnostic & Leadership assessments
│   ├── App.jsx                # Router setup, ScrollToTop, shared layouts
│   ├── index.css              # Tailwind directives & CSS variables design system
│   └── main.jsx               # Entry mount
├── index.html                 # Semantic HTML shell, SEO tags, Google Fonts (Inter & Outfit)
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS setup
├── tailwind.config.js         # Custom brand colors, fonts & shadows
└── vite.config.js             # Vite configuration
```

---

## 3. Installation & Run Commands

### Prerequisites
- **Node.js:** v18.0.0 or later (tested on Node v22.14.0)
- **npm:** v9.0.0 or later (tested on npm 11.5.2)

### Setup & Launch
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Server starts at http://localhost:3000/

# 3. Create production bundle
npm run build
# Compiles optimized static assets to /dist

# 4. Preview production build locally
npm run preview
```

---

## 4. Design System Tokens

| Token Category | Variable / Class | Value | Usage |
|---|---|---|---|
| **Primary Brand** | `colors.brand.primary` / `--brand-primary` | `#5C25B3` | Main CTA buttons, active navigation, logo accent |
| **Accent Purple** | `colors.brand.purple` / `--brand-accent` | `#9738F9` | Headings, badge highlights, link hovers |
| **Teal Accent** | `colors.brand.teal` / `--brand-teal` | `#0D9488` | Trust badges, secondary icons, success states |
| **Surface Background** | `colors.surface.subtle` / `--surface-bg` | `#F8FAFC` | Page background, alternating section backgrounds |
| **Surface Card** | `colors.surface.DEFAULT` | `#FFFFFF` | Content cards, modals, form containers |
| **Text Primary** | `text-slate-900` / `--text-primary` | `#0F172A` | Primary typography, headers, card titles |
| **Text Muted** | `text-slate-600` / `--text-secondary` | `#475569` | Body paragraphs, course descriptions |
| **Border Subtle** | `border-slate-200` / `--border-subtle` | `#E2E8F0` | Dividers, card boundaries, input borders |
| **Typography** | `font-heading` & `font-sans` | Outfit, Inter | Modern, clean, readable educational typography |

---

## 5. Verified Course & Pricing Inventory

All courses and pricing below were extracted directly from the verified client data:

| # | Course Title | Category | Duration | Tuition Fee | Highlights / Modules |
|---|---|---|---|---|---|
| 1 | **IELTS \| TOEFL \| PTE \| CELPIP Preparation** | Test Prep | 20 Hours | ₹12,000/- (Single: ₹4,000) | 4 Modules: Listening, Reading, Writing, Speaking. Mock tests & evaluations. |
| 2 | **Corporate Survival & Success Program** | Corporate | 12 Hours | ₹6,000/- | 6 Modules: Workplace reality, emails/chats, meeting etiquette, career growth. |
| 3 | **Crack Your Interview** | Career | 6 Hours | ₹3,000/- | 6 Modules: Recruiter mindset, self-pitch, STAR/PREP framework, mock interviews. |
| 4 | **Corporate Dining & Social Etiquette** | Corporate | 6 Hours | ₹3,000/- | 6 Modules: Indian & Continental table manners, cutlery handling, networking small talk. |
| 5 | **Advanced English & Leadership Presence** | Management | 12 Hours | ₹6,000/- | 12 Modules: Executive writing, meeting command, stakeholder persuasion, coaching. |
| 6 | **Communication Skill Training** | Speaking | 20 Hours | ₹5,000/- | 8 Modules: Articulation, speech fluency, vocabulary, filler removal, public speaking. |
| 7 | **Personality Development Training** | Personality | 12 Hours | ₹6,000/- | 8 Modules: First impressions, body language, wardrobe etiquette, negotiation. |
| 8 | **EELTA - Experiential English Teaching** | Educators | 15 Hours | ₹15,000/- | 5 Modules: Global classroom design, communicative activities, CEFR/IELTS rubrics. |
| 9 | **Kids Elocution Course** | Kids | 4 Weeks | ₹3,000/- | Speech clarity, expressive storytelling, pronunciation drills. |
| 10 | **Kids TEDx & Toastmaster Training** | Kids | 4 Weeks | ₹3,000/- | Eliminating stage fright, body language, speech structuring. |
| 11 | **Kids Grammar Foundations** | Kids | 4 Weeks | ₹3,000/- | Sentence architecture, parts of speech, punctuation, tenses. |
| 12 | **Kids Creative Writing** | Kids | 4 Weeks | ₹3,000/- | Plot arcs, character creation, descriptive sensory language. |
| 13 | **Consistency Reading Club** | Community | Monthly | ₹500/month | Online book circles, critical comprehension, empathy through stories. |

---

## 6. Technical SEO & GEO Foundations

### Page-by-Page Metadata
- **Home (`/`):** Title: *"The Consistent Academy | English Language Proficiency & IELTS Coaching in Pune"* (Meta description: 154 characters).
- **About (`/about`):** Title: *"About Us | The Consistent Academy & Founder Vidya Wankhade"*.
- **Courses (`/courses`):** Title: *"Courses & Fee Structure | The Consistent Academy Pune"*.
- **Course Detail (`/courses/:slug`):** Dynamic title with course name, duration, and price.
- **Assessments (`/tests`):** Title: *"Diagnostic Proficiency Tests & Assessments | The Consistent Academy"*.
- **Consistency Club (`/club`):** Title: *"Consistency Reading & Speaking Club | The Consistent Academy"*.
- **Careers (`/careers`):** Title: *"Careers & Faculty Openings | The Consistent Academy"*.
- **Contact (`/contact`):** Title: *"Contact Us & Directions | The Consistent Academy Pune"*.
- **Privacy (`/privacy`):** Title: *"Privacy Policy | The Consistent Academy"*.
- **404 (`*`):** Title: *"404 - Page Not Found | The Consistent Academy"*.

### Schema.org Structured Data
- `EducationalOrganization`: Registered name, logo, official telephone (`+91 77091 09830`), email (`theconsistentacademy@gmail.com`), Pune postal address, founder (`Vidya Wankhade`), and verified social channels.
- `Course`: Injected dynamically on course detail pages with course title, syllabus provider, duration, and INR price offer.
- `ItemList`: Course catalog collection on `/courses`.
- `ContactPage`: Structured contact point schema on `/contact`.

### Generative Engine Optimisation (GEO)
- Clear HTML hierarchy (one distinct `<h1>` per page, semantic `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Facts are provided in high-contrast text rather than flattened graphics.
- Consistent NAP (Name: The Consistent Academy, Address: Pune, Maharashtra, Phone: +91 77091 09830).

---

## 7. QA Testing Results

| Test Area | Items Tested | Status | Remarks |
|---|---|---|---|
| **Compilation & Build** | `npm run build` | **PASSED** | 0 errors, gzip JS: 97.15 kB, gzip CSS: 6.9 kB |
| **Navigation & Links** | All Navbar & Footer links | **PASSED** | React Router client-side routing with smooth transitions |
| **Mobile Drawer** | Viewport < 1024px | **PASSED** | Hamburger button toggles menu, closes on route change and Escape key |
| **Course Filters** | Category filter tabs | **PASSED** | Test Prep, Corporate, Kids, Educators render correct cards |
| **Course Details** | Dynamic route `/courses/:slug` | **PASSED** | Syllabus modules, pricing, and highlights render accurately |
| **FAQ Accordion** | Expand/collapse | **PASSED** | Verified toggle state, ARIA expanded attributes |
| **Interactive Tests** | English Diagnostic & Leadership | **PASSED** | Calculates score out of 10, provides diagnostic explanations |
| **Contact Form** | Client-side validation | **PASSED** | Required fields enforced, inline errors, prototype disclaimer active |
| **Map & Directions** | Google Maps iframe & action | **PASSED** | Iframe embeds Pune, "Get Directions" links to Google Maps |
| **ThinkBuild Credit** | Footer developer credit | **PASSED** | Displays logo, text, and active link to `https://www.thinkbuild.in/` |

---

## 8. Known Limitations & Production Handoff Notes

1. **Form Backend Dispatch:** In this prototype, the contact and career forms validate input client-side and display a transparent prototype notice. For live production, connect the form endpoints to an approved form provider (e.g., Formspree, EmailJS, or the client's Node/Express backend).
2. **Blog CMS:** The original bundle contained an admin blog route connected to Cloudinary and Firebase. In this frontend redesign prototype, the primary educational student journeys have been prioritized. Blog integration can be linked to a headless CMS or restored via the Firebase service.
3. **Domain & DNS:** Production deployment to `https://www.theconsistentacademy.in/` requires DNS cutover and client authorization from the supervisor/client lead.
