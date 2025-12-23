# Design System & Style Guidelines

This document serves as the single source of truth for the visual design of the website. All generated code (HTML/CSS/React/Vue, etc.) must strictly adhere to these guidelines to replicate the "Japanese Soft Modern" aesthetic.

## 1. Design Concept & Philosophy
* **Theme:** "Soft Minimalism" & "Trustworthiness" (Japanese Modern Clean).
* **Keywords:** Airy, Gentle, Professional, Clean, Sophisticated.
* **Visual Metaphor:** A gentle breeze, ample breathing room, organic flow.
* **Core Rule:** Avoid harsh contrasts (pure black `#000000` is forbidden). Use generous whitespace to create a sense of luxury and calm.

---

## 2. Color Palette (Design Tokens)

Use these specific color codes. Do not deviate.

### Primary Colors
* **Primary Text / Accent:** `#2D4059` (Deep Muted Navy) - Used for main headings and body text. A softer alternative to black.
* **Background Base:** `#FAFAFA` (Off-White) - Warm, paper-like white. Never use `#FFFFFF` for the main background.
* **Secondary Accent:** `#708198` (Grayish Blue) - Used for sub-text or subtle decorative elements.

### Functional Colors
* **Link / CTA:** `#4A6C96` (Soft Blue) to `#2D4059` (Navy) - Subtle gradient or solid tone.
* **Background Highlight:** `#F2F4F6` (Pale Blue-Grey) - Used for alternating sections (e.g., distinct content blocks).

---

## 3. Typography System

The typography relies on a unified "Rounded Sans-serif" or "Humanist Sans" style for a friendly and modern feel.

### Font Families
*   **English & Japanese Text (Unified):** Rounded Sans-serif.
    *   *Suggestion:* `Zen Maru Gothic` (for friendliness/headings) and `Noto Sans JP` (for body readability).
    *   *Rule:* No Serif fonts. Ensure `font-feature-settings: "palt"` is enabled.

### Type Hierarchy
1.  **Display Heading:** `Zen Maru Gothic` (Bold/Medium). Rounded, friendly, large.
2.  **Section Title:** `Zen Maru Gothic` (Medium).
3.  **Body Text:** `Noto Sans JP` or `Zen Maru Gothic`. Line-height: `1.8` to `2.0`.

---

## 4. Layout & Spacing (The "Broken Grid")

The layout must not look "boxy". It should feel organic.

* **Whitespace:** Use extremely generous padding.
    * *Section Padding:* `100px` to `160px` vertical spacing on desktop.
* **Broken Grid Layout:**
    * Do not perfectly align text and images. Allow elements to overlap slightly.
    * Use asymmetrical layouts (e.g., Image on the left taking 50%, Text on the right offset vertically).
* **Container Width:** Max-width `1200px` but allow full-bleed images.

---

## 5. UI Components & Elements

### Buttons
* **Shape:** Fully rounded (Pill shape). `border-radius: 9999px`.
* **Style:**
    * *Primary:* Solid Navy background, White text.
    * *Secondary:* Transparent background, Navy border (1px), Navy text.
    * *Hover:* Slight transform (translateY -3px) and subtle shadow.

### Images & Cards
* **Border Radius:** Soft rounding.
    * *Standard:* `border-radius: 12px` to `24px`.
    * *Organic:* Consider using custom border-radius like `30% 70% 70% 30% / 30% 30% 70% 70%` for decorative background shapes.
* **Shadows:** extremely diffuse and soft.
    * *Example:* `box-shadow: 0 20px 40px -10px rgba(45, 64, 89, 0.05);`

### Decorative Elements (The "Handwritten" Feel)
* **Lines:** Use thin, curved SVG lines as section dividers or background decorations.
* **Stroke Width:** Ultra-thin (`0.5px` to `1px`).
* **Opacity:** Low opacity (`0.2` to `0.5`) for background motifs.

---

## 6. Micro-Interactions & Animation

Static pages feel dead. Implement subtle motion.

* **Scroll Reveal:** Elements should fade in and move up (`translateY(20px)` -> `0`) as they enter the viewport.
* **Parallax:** Background images or decorative floating elements should move at a different speed than the scroll.
* **Hover Effects:** Slow transition duration (`0.4s` or slower). No instant color snaps.

---

## 7. Implementation Hints (for Tailwind CSS)

If using Tailwind, extend the config as follows:

```js
// tailwind.config.js snippet
theme: {
  extend: {
    colors: {
      navy: {
        900: '#2D4059',
        800: '#4A6C96',
      },
      paper: '#FAFAFA',
    },
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'serif'],
      sans: ['"Zen Maru Gothic"', '"Noto Sans JP"', 'sans-serif'],
    },
    letterSpacing: {
      widest: '.2em',
    }
  }
}