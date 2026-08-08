# CareerConnect — Design System & Build Specification

> This document is the single source of truth for building the CareerConnect job portal UI. It is written for an AI coding assistant (Amazon Q) to implement pixel-faithful, consistent screens based on the Stitch design reference.

---

## 1. Project Overview

**CareerConnect** is a professional job application portal connecting job seekers and employers. The design prioritizes clarity, professional trust, and efficient application tracking.

**Core objectives:**
- Seamless, high-trust job discovery experience
- Simplified applications via "Easy Apply" workflows
- Centralized candidate dashboard for tracking progress and profile performance

**Target audience:**
- Job Seekers (entry-level to senior professionals)
- Employers/Recruiters (posting roles, managing candidate pipelines)

**Device support:** Desktop-first, optimized for **1440px+**. Build responsively, but desktop is the primary breakpoint to design against first.

---

## 2. Design Tokens

Implement these as CSS custom properties / Tailwind theme extensions / a shared `tokens.ts` — pick one and use it everywhere. Do not hardcode raw hex/px values in components.

### 2.1 Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#0052CC` | Primary buttons, links, active nav states, key CTAs |
| `--color-primary-hover` | `#0043A6` (derive ~15% darker) | Primary button hover |
| `--color-primary-subtle` | `#E6EFFC` (derive ~90% tint) | Selected chips, subtle backgrounds, badges |
| `--color-text-primary` | `#111827` (near-black, high contrast) | Headings, body copy |
| `--color-text-secondary` | `#6B7280` (mid gray) | Meta text, captions, secondary labels |
| `--color-border` | `#E5E7EB` | Dividers, card borders, input borders |
| `--color-surface` | `#FFFFFF` | Cards, panels, nav bar |
| `--color-background` | `#F9FAFB` | Page background |
| `--color-success` | `#16A34A` | "Offer Received," positive status |
| `--color-warning` | `#D97706` | "Interviewing," pending status |
| `--color-danger` | `#DC2626` | Errors, rejected status, destructive actions |

> Note: Exact secondary/status hex values are inferred to fit the professional-blue palette. If the Stitch export specifies different values, replace these — the primary `#0052CC` is confirmed and non-negotiable.

### 2.2 Typography

- **Font family:** `Manrope` (Google Font) — load via `@font-face` or Google Fonts link, weights 400/500/600/700/800.
- **Fallback stack:** `'Manrope', -apple-system, 'Segoe UI', sans-serif`

| Style | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display | 48px | 800 | 1.1 | Hero headline |
| H1 | 32px | 700 | 1.2 | Page titles |
| H2 | 24px | 700 | 1.3 | Section headers |
| H3 | 18px | 600 | 1.4 | Card titles, job titles |
| Body | 16px | 400 | 1.5 | Paragraph text |
| Body Small | 14px | 400 | 1.5 | Meta text, captions |
| Label | 13px | 600 | 1.4 | Form labels, tags (uppercase optional) |

### 2.3 Shape Language

- **Corner radius:** `4px` on ALL interactive elements and containers — buttons, inputs, cards, badges, chips, modals. This "Round Four" system is a defining trait: do not use larger radii (8px, 12px, full-round) anywhere except avatars (circular) and pill-shaped status badges if explicitly needed.

### 2.4 Spacing & Layout

- Base spacing unit: **8px** grid (`4, 8, 16, 24, 32, 48, 64` px scale)
- Generous whitespace between sections (min `64px` vertical section padding on landing page)
- Max content width: `1440px`, centered, with `24–32px` horizontal gutters
- Cards use `24px` internal padding

### 2.5 Interactive States

Every button, link, input, and card must define all of:
- **Default**
- **Hover** (subtle background/border shift, no radius change)
- **Focus** (visible `2px` outline in `--color-primary`, for accessibility)
- **Active/Pressed**
- **Disabled** (reduced opacity `0.5`, no pointer events)

Accessibility requirement: text/background contrast must meet WCAG AA minimum (4.5:1 for body text).

---

## 3. Shared Components (build these first, reuse everywhere)

### 3.1 TopNavBar
- Persistent, sticky top navigation
- Left: CareerConnect logo/wordmark
- Center/Left nav links: **Find Jobs**, **Dashboard**, **Applications**
- Right: user avatar/profile menu (or Sign In / Sign Up buttons if logged out)
- Active route indicated with `--color-primary` text/underline
- Height: ~72px, `--color-surface` background, bottom border `--color-border`

### 3.2 Footer
- Site-wide footer, simple columns: Company, For Job Seekers, For Employers, Legal
- Muted background or `--color-background`
- Small text (`Body Small`), `--color-text-secondary`

### 3.3 Job Card
- Company logo (square, 4px radius)
- Job title (`H3`)
- Company name + location (`Body Small`, secondary color)
- Salary range (bold, primary or success color)
- Tags/chips for job type (Full-time / Contract / Freelance)
- Action row: "View Details" (primary button) + "Save" (icon/outline button)

### 3.4 Buttons
- **Primary:** filled `--color-primary`, white text, 4px radius
- **Secondary/Outline:** transparent bg, `--color-primary` border + text
- **Ghost/Text:** no border, primary-colored text only
- Sizes: `sm` (32px height), `md` (40px height), `lg` (48px height)

### 3.5 Form Inputs
- Text inputs, selects, textareas: 4px radius, `--color-border` default border, `--color-primary` focus border + subtle glow
- Labels above inputs, `Label` style
- Error state: `--color-danger` border + helper text below

### 3.6 Status Badge
- Small pill/chip, colored by status: Interviewing (`warning`), Offer Received (`success`), Rejected (`danger`), Applied (`primary-subtle` bg)

### 3.7 Tabs
- Used in Job Details page (Description / Company Profile / Requirements)
- Underline-style active indicator in `--color-primary`

---

## 4. Screens

### 4.1 Home (Landing Page)
- **Hero section:** Large headline — "Find your dream career today." Subtext reinforcing value prop. Background: clean, light, possibly a subtle illustration or gradient — no stock photography clutter.
- **Integrated search bar:** Two-field combo — Job title/keyword input + Location input — with a prominent primary "Search" button, placed directly in/below the hero.
- **TopNavBar** present with links: Find Jobs, Dashboard, Applications.
- Below the fold: optionally feature categories, trending jobs, or trust signals (companies hiring, stats) — infer tasteful supporting sections consistent with a professional job board if not otherwise specified.
- **Footer** at the bottom.

### 4.2 Search & Discovery
- **Layout:** Left sidebar (fixed width, ~280px) for filters + main content area with job listing results.
- **Sidebar filters:** Location (text/dropdown), Job Type (checkboxes: Full-time, Contract, Freelance), Experience Level (checkboxes or dropdown). Each filter section collapsible/expandable, clear "Apply Filters" or live-filtering.
- **Main content:** High-density list of Job Cards (see 3.3), stacked vertically, with result count header and sort dropdown (e.g., "Most Relevant," "Newest").
- Each card supports "View Details" (navigates to Job Details) and "Save" (icon toggle, no navigation).

### 4.3 Job Details & Application
- **Header block:** Company logo, job title (`H1`), company name, location, salary, posted date, primary "Easy Apply" CTA button (sticky/prominent).
- **Tabbed content** (see 3.7): Job Description | Company Profile | Requirements.
- **Recruiter Activity Insights panel:** small sidebar or inline card showing "X views," "Typically responds within Y days" — social proof styling, secondary text with icon accents.
- **Easy Apply Form:** Triggered via modal or dedicated section — streamlined multi-field form (name, email, phone, resume upload, optional cover note). Minimal friction: as few required fields as possible, clear submit CTA.

### 4.4 Candidate Dashboard
- **Layout:** TopNavBar + main dashboard grid.
- **Analytics row:** 3 stat cards — Profile Views, Search Appearances, Active Applications — each with a number, label, and small trend indicator (e.g., "+12% this week").
- **Application Status Tracker:** Table/list with columns: Job Title, Company, Date Applied, Status (use Status Badge component), Last Update. Sortable if feasible.
- **Profile Management panel:** Card with quick-edit link to profile, and a toggle switch for "Actively Looking" status (clearly labeled, primary-colored when active).

---

## 5. Implementation Notes for Amazon Q

1. **Build shared components first** (TopNavBar, Footer, Button, Input, Job Card, Status Badge, Tabs) as reusable modules before assembling screens — every screen consumes them.
2. **Centralize design tokens** in one file (Tailwind config `theme.extend`, or a `tokens.css`/`tokens.ts`) — never inline arbitrary hex/px values in component code.
3. **Font loading:** import Manrope once globally (e.g., in root layout / `index.html`), not per-component.
4. **Radius discipline:** apply the 4px radius token consistently; treat any larger radius as a bug unless it's an avatar or explicit pill badge.
5. **State completeness:** every interactive element must implement hover/focus/active/disabled states per §2.5 before being considered "done."
6. **Routing structure** (suggested):
   - `/` — Home
   - `/jobs` — Search & Discovery
   - `/jobs/:id` — Job Details & Application
   - `/dashboard` — Candidate Dashboard
7. **Data:** Use mock/placeholder data matching the field shapes described (job title, company, location, salary range, job type, experience level, application status) until real API integration is specified.
8. **Accessibility:** semantic HTML, labeled form fields, visible focus rings, sufficient color contrast (WCAG AA) — required, not optional.

---

## 6. Open Items to Confirm

Fields inferred rather than explicitly specified in the source brief — confirm/adjust once the actual Stitch screen exports are available:
- Exact secondary color palette (success/warning/danger hex values)
- Hero section background treatment (illustration vs. plain vs. photography)
- Whether "Save" job is a toggle-only action or has its own saved-jobs view
- Exact Easy Apply form field list beyond resume + core contact info