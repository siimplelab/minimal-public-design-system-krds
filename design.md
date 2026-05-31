# Design System: Minimal Public Design System
**Project:** Korean Public Service UI — Apple-Inspired Minimal Design System

---

## 1. Visual Theme & Atmosphere

Clean, reductive, and precision-engineered — the UI is modeled after the clarity and intentionality of Apple's design language, adapted for Korean public service (공공서비스/민원) contexts. The atmosphere is **airy but purposeful**: vast areas of near-white space punctuated by quietly floating content surfaces. Nothing is decorative. Every element earns its place.

The canvas background is a barely-there Apple warm gray (`#f5f5f7`) — not pure white, which would feel sterile, but a faint blue-gray that reads as "paper" rather than "screen." Cards and panels lift off this canvas as pure white (`#ffffff`) surfaces, separated not by heavy borders but by whisper-soft diffused shadows that evoke the sensation of physical paper sheets stacked on a desk.

Navigation floats as a frosted glass pill, centered at the top of the viewport — a signature depth cue that signals "above the content" without imposing. The interface retreats so the content can breathe.

Korean Hangul and Latin text coexist under the same tight negative tracking philosophy. Text runs compressed and confident — never loose or decorative.

---

## 2. Color Palette & Roles

### Backgrounds
| Descriptive Name | Hex / Value | Role |
|---|---|---|
| Apple Warm Gray — Canvas | `#f5f5f7` | Page-level background. The "table" all content sits on. |
| Pure White — Surface | `#ffffff` | Cards, panels, inputs, modals. The primary content layer. |
| Whisper Gray — Subtle | `#f0f0f3` | Table headers, hover states, secondary zones. One step above canvas. |
| Near Black — Inverse | `#1d1d1f` | Dark surfaces. Warmer than pure black, used for inverse UI. |

### Text
| Descriptive Name | Hex / Value | Role |
|---|---|---|
| Charcoal Near-Black — Primary | `#1d1d1f` | All primary text. Slightly warmer than pure black for reading comfort. |
| Semi-transparent Graphite — Muted | `rgba(0,0,0,0.54)` | Labels, captions, secondary info. Opacity-based so it adapts to any surface. |
| Pure White — Inverse | `#ffffff` | Text on dark or colored backgrounds. |
| Cobalt Link Blue | `#0066cc` | Inline text links, "더보기" / "상세보기" actions on light backgrounds. |

### Interactive Accent — Single Color Budget
| Descriptive Name | Hex | Role |
|---|---|---|
| Azure Signal Blue — Primary Action | `#0071e3` | Primary buttons, focus rings, step indicators, info state. The ONLY saturated color in the neutral UI. |

### Semantic State Colors
| Descriptive Name | Foreground Hex | Background Hex | Role |
|---|---|---|---|
| Signal Blue — Info | `#0071e3` | `#e8f1ff` | Informational badges, notice banners, primary CTA |
| Forest Green — Success | `#1a7f4b` | `#e8f8f0` | Completion states, approved statuses, done step indicators |
| Amber Rust — Warning | `#b55d00` | `#fff5e6` | Caution states, pending review |
| Warm Crimson — Danger | `#c9302c` | `#fff0f0` | Errors, destructive actions, important notices |

### Borders (Opacity-based — adapts to any background)
| Descriptive Name | Value | Role |
|---|---|---|
| Ghost Border — Subtle | `rgba(0,0,0,0.08)` | Card outlines, dividers. Barely perceptible. |
| Faint Border — Default | `rgba(0,0,0,0.10)` | Standard UI borders |
| Visible Border — Strong | `rgba(0,0,0,0.22)` | Input fields, secondary buttons. Clearly present but not heavy. |

---

## 3. Typography Rules

**Font Family:** Noto Sans KR (Korean + Latin), with Apple SD Gothic Neo and Malgun Gothic as system fallbacks. IBM Plex Mono for code and monospaced contexts.

**The Core Rule — Negative Tracking Everywhere:** Unlike most systems that only tighten headlines, this system applies negative letter-spacing at *every* size. Text runs compressed and efficient at all scales — this is the single most important typographic characteristic.

| Role | Size | Weight | Line Height | Letter Spacing | Character |
|---|---|---|---|---|---|
| Page Title (h1) | 1.875rem (30px) | Semibold (600) | Compressed (1.2) | Tight (−0.03em) | Commanding, confident |
| Section Title (h2) | 1.25rem (20px) | Semibold (600) | Compressed (1.3) | Tight (−0.025em) | Clear hierarchy signal |
| Card Title (h3) | 1rem (16px) | Semibold (600) | Normal (1.4) | Normal (−0.02em) | Labeled, structured |
| Body Text | 0.9375rem (15px) | Regular (400) | Comfortable (1.6) | Body (−0.018em) | Readable, efficient |
| Caption / Label | 0.8125rem (13px) | Regular (400) | Normal (1.5) | Loose (−0.015em) | Supportive, secondary |
| All-Caps Category Label | 0.75rem (12px) | Semibold (600) | — | Wide (+0.06em) | Section category markers only |
| Button | 0.875rem (14px) | Medium (500) | Single (1.0) | Loose (−0.01em) | Compact and decisive |

**Weight Philosophy:** Regular (400) through Medium (500) to Semibold (600). Bold (700) appears only on large stat/number displays. Weight 800+ is never used.

---

## 4. Component Stylings

### Navigation
- **Desktop:** A frosted glass pill fixed and floating at the top center of the viewport. Background is translucent white (`rgba(255,255,255,0.88)`) with 16px backdrop blur — creating a "hovering above content" sensation. Ghost border (`rgba(0,0,0,0.08)`) and a soft diffused shadow (`0 4px 20px rgba(0,0,0,0.10)`). Active item receives a quiet gray pill highlight (`rgba(0,0,0,0.08)`) — no underlines, no bold, just a background shift.
- **Mobile:** Collapses to a compact floating pill showing a hamburger icon (≡) and the active page name. Tapping opens a left-sliding drawer panel with the full navigation list. Each nav link in the drawer has generously rounded corners (0.75rem) and a very subtle active background.

### Buttons

**Primary CTA (신청하기, 확인):**
- Solid Azure Signal Blue (`#0071e3`) fill, pure white text
- Gently rounded corners (0.625rem — approachable, not system-default)
- Hover: lightens to `#0077ed`. Active: deepens to `#006cd6`
- Height 2.5rem, padding 1.25rem horizontal

**Secondary (취소, 보조):**
- White surface with Visible Border (`rgba(0,0,0,0.22)`) — border-defined, not filled
- On hover: fills with Whisper Gray (`#f0f0f3`)

**Ghost / Text (더보기):**
- Completely borderless and backgroundless at rest. On hover: a barely-there `rgba(0,0,0,0.05)` wash

**Danger (삭제):**
- Warm Crimson (`#c9302c`) fill, white text. Same geometry as Primary.

**Pill CTA:**
- Full pill radius (9999px). Used for inline "이동", "상세보기" text links styled as buttons.

### Cards & Containers
- Pure White surface (`#ffffff`)
- Ghost Border (`rgba(0,0,0,0.08)`) — implies structure without weight
- Whisper-soft diffused shadow (`0 2px 8px rgba(0,0,0,0.07)`) — a studio light casting a natural shadow beneath a physical object
- Generously rounded corners (0.875rem / ~14px)
- Internal padding: 1.5rem standard, 1rem on mobile
- Hover behavior: none on the card — only links *within* cards are interactive

### Inputs & Forms
- Pure white background, Visible Border (`rgba(0,0,0,0.22)`)
- Gently rounded corners (0.625rem)
- Height 2.75rem (44px) for accessible touch targets
- Focus: crisp 2px solid Azure Signal Blue (`#0071e3`) outline, 2px offset
- Error state: border switches to Warm Crimson (`#c9302c`)
- Disabled: Whisper Gray background, opacity-reduced text

### Badges & Status Tags
- Full pill shape (rounded-full) — always
- Very small type: 12–13px, medium weight
- Background-only coloring — no borders:
  - Neutral: `rgba(0,0,0,0.06)` background / Charcoal text
  - Info: Soft Blue Tint (`#e8f1ff`) / Deep Blue (`#0052cc`) text
  - Success: Soft Green Tint (`#e8f8f0`) / Forest Green (`#1a6b42`) text
  - Warning: Soft Amber Tint (`#fff5e6`) / Amber Rust (`#a85400`) text
  - Danger: Soft Crimson Tint (`#fff0f0`) / Warm Crimson (`#c9302c`) text

### Step Indicators
- Horizontal strip of pill-shaped step items
- **Done:** Forest Green circle with checkmark, muted gray text, white background
- **Active:** White background with Azure Signal Blue double-border ring, Azure Signal Blue circle with white step number
- **Pending:** Faint gray circle with step number, muted text on canvas background

### Notice Banners
- Soft Blue Tint (`#e8f1ff`) fill — borderless
- Generously rounded corners (0.75rem)
- Deep Blue (`#0052cc`) title, Near-Black description body

### Data Tables
- No outer border — elevated via card shadow
- Header row: barely-there tint `rgba(0,0,0,0.025)`
- Row dividers: Ghost-weight `rgba(0,0,0,0.06)`
- Row hover: ultra-subtle wash `rgba(0,0,0,0.015)`
- Cell text: 14px caption scale

---

## 5. Layout Principles

**Content Width:** Max 74rem (1184px), centered. 1.5rem side gutters on mobile, 3rem on desktop.

**Floating Nav Clearance:** All page content begins at `padding-top: 5rem` (80px) to clear the fixed floating pill.

**Vertical Rhythm:** Sections within a page are separated by 1rem–1.25rem gaps, creating a stacked-cards feel rather than a single-scrolling document.

**Whitespace Philosophy — Compression Within, Breathing Between:** Type runs tight (negative letter-spacing, compact line-heights). Space *surrounding* content blocks is generous. The contrast between compressed type and open spatial layout creates the "precision meets calm" aesthetic.

**Grid Strategy:**
- Stat cards: 1 column (mobile) → 3 columns (640px+)
- Quick service links: 1 column → 2 columns (640px+) → 3 columns (768px+)
- Full-width tables with `overflow-x-auto` horizontal scroll on mobile

**Elevation Hierarchy (bottom to top):**
1. **Canvas** (`#f5f5f7`) — the page floor
2. **Surface** (`#ffffff`) — cards lifted by `0 2px 8px rgba(0,0,0,0.07)`
3. **Float** (navigation pill) — glass with `0 4px 20px rgba(0,0,0,0.10)` and backdrop blur
4. **Overlay** (modals, drawers) — heavy diffused shadow `rgba(0,0,0,0.18) 3px 5px 30px`, scrim behind

**Spacing Scale (Base 4px):**
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48`

Card padding 24px · Component gaps 8–12px · Section gaps 16–20px · Page vertical padding 40px+
