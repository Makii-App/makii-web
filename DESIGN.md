---
name: Makii Burger Brand System
colors:
  surface: '#FFFDF5'
  surface-dim: '#FFF8E7'
  surface-bright: '#FFFFFF'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#FFFDF5'
  surface-container: '#FFF8E7'
  surface-container-high: '#FFF3CD'
  surface-container-highest: '#FFE699'
  on-surface: '#3E2723'
  on-surface-variant: '#6D4C41'
  inverse-surface: '#3E2723'
  inverse-on-surface: '#FFF8E7'
  outline: '#A1887F'
  outline-variant: '#D7CCC8'
  surface-tint: '#C61A2E'
  primary: '#C61A2E'
  on-primary: '#FFFFFF'
  primary-container: '#E53935'
  on-primary-container: '#FFEBEE'
  inverse-primary: '#FF8A80'
  secondary: '#EEB111'
  on-secondary: '#5C3317'
  secondary-container: '#FDD835'
  on-secondary-container: '#5C3317'
  tertiary: '#5C3317'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#8D6E63'
  on-tertiary-container: '#FFF8E7'
  error: '#B71C1C'
  on-error: '#FFFFFF'
  error-container: '#FFCDD2'
  on-error-container: '#B71C1C'
  primary-fixed: '#FFCDD2'
  primary-fixed-dim: '#FF8A80'
  on-primary-fixed: '#3E0000'
  on-primary-fixed-variant: '#8E0000'
  secondary-fixed: '#FFF8E7'
  secondary-fixed-dim: '#FFE082'
  on-secondary-fixed: '#5C3317'
  on-secondary-fixed-variant: '#8B5A2B'
  tertiary-fixed: '#D7CCC8'
  tertiary-fixed-dim: '#A1887F'
  on-tertiary-fixed: '#3E2723'
  on-tertiary-fixed-variant: '#5C3317'
  background: '#FFF8E7'
  on-background: '#3E2723'
  surface-variant: '#FFF3CD'
  brand-yellow: '#EEB111'
  brand-yellow-light: '#FFF3CD'
  brand-brown: '#5C3317'
  brand-brown-light: '#8D6E63'
  brand-red: '#C61A2E'
  brand-red-light: '#FFCDD2'
  brand-cream: '#FFF8E7'
typography:
  h1:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  h3:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  section-gap: 120px
  card-padding: 32px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The visual identity of Makii bridges the gap between the structured efficiency of modern SaaS and the sensory, appetizing world of fast food delivery. It evokes a feeling of freshness, speed, and premium reliability with a playful, mischievous personality.

The design style is **High-Fidelity Modern**, characterized by:
- **Circular Motifs:** Utilizing broken circles and orbital paths to frame product photography, creating a sense of movement and "spinning up" a meal.
- **Dynamic Overlaps:** Elements like floating ingredients, "out-of-the-box" product shots, and overlapping cards create depth and a playful, tactile energy.
- **SaaS Precision:** While the aesthetic is vibrant, the underlying structure uses rigorous alignment, clear data visualization, and high-performance interface patterns common in enterprise software.
- **Burger-Inspired Warmth:** Colors drawn from the brand logo—toasted bun yellow, grilled patty brown, and ketchup red—create an appetizing, warm palette that feels both premium and approachable.

## Colors
The palette is rooted in the brand's hamburger-inspired colors, creating a warm, appetizing experience.
- **Ketchup Red Primary:** Represents energy, appetite, and the "go" signal of a successful order. Used for CTAs and primary actions.
- **Toasted Bun Yellow:** Used for highlights, call-to-actions, and warm accents. It provides a friendly contrast to the deep browns and reds.
- **Grilled Patty Brown:** Replaces standard neutrals for text and dark-mode surfaces, providing a more premium, branded feel than pure black or gray.
- **Cream Background:** A subtle, warm off-white base that softens the UI and prevents the clinical feel of pure white (#FFFFFF), making the photography pop.

## Typography
The system employs a dual-font strategy to balance personality with readability.
- **Bricolage Grotesque:** Used for all expressive headings. Its unique, slightly quirky character widths give the brand a distinct "voice" that feels modern yet approachable.
- **Inter:** Used for all functional text, UI labels, and long-form body copy. It ensures high legibility on small screens and within dense data grids.
- **Stylistic Note:** Headings should frequently use "Split Coloring," where a key action word is highlighted in the Ketchup Red or Toasted Bun Yellow to guide the eye.

## Layout & Spacing
The layout follows a **Hybrid Fluid Grid** inspired by the "Meal Monkey" structure, emphasizing large vertical sections with generous whitespace.
- **Sectioning:** Use large gaps between major content blocks to allow "floating" elements (like falling fries or leaves) to occupy the negative space.
- **Asymmetry:** Group content on one side while using the opposite side for large-scale, high-fidelity imagery wrapped in circular motifs.
- **Safe Zones:** Maintain a 12-column grid for dashboard views, but break the grid for marketing sections to create a more editorial, energetic flow.

## Elevation & Depth
Depth is created through "Colored Ambient Shadows" rather than standard gray blurs.
- **Shadow Tints:** Elevation shadows should use a semi-transparent version of the Ketchup Red or Toasted Bun Yellow colors (e.g., `rgba(198, 26, 46, 0.15)`).
- **Layering:** Use dynamic overlapping. For example, a food item should appear to sit "on top" of its card, with its own specific shadow to create a 3D effect.
- **Gradients:** Use soft radial gradients on the background to draw focus toward the center of the screen or specific CTA areas.

## Shapes
The shape language is extremely soft and organic, moving away from "tech-sharp" corners.
- **Main Containers:** Large sections (like the footer or hero image containers) use an aggressive `rounded-4xl` (48px) to feel friendly and safe.
- **Cards:** Standard UI cards use `rounded-2xl` (24px).
- **Interaction Elements:** Buttons and tags use pill-shapes (fully rounded) to contrast against the larger container radii.
- **Masking:** Circular masks are a core brand element, often used as background "halos" behind product photography.

## Components
- **Buttons:** Primary buttons are pill-shaped with a subtle Ketchup Red background. Use Toasted Bun Yellow for high-priority "Order Now" actions.
- **Featured Cards:** Use the `rounded-2xl` radius with a `shadow-lg` that has a subtle Ketchup Red spread. Imagery should "pop" out of the top edge.
- **Food Category Chips:** Horizontal scrolling pill-shaped buttons. Active state uses the Ketchup Red background with white text; inactive state uses a thin Grilled Patty Brown border.
- **Circular Progress/Status:** Use the broken-circle motif for loading states or delivery progress indicators to maintain visual consistency with the hero illustrations.
- **Input Fields:** Large, 16px-padding fields with a Cream background slightly darker than the page, using a 1px Ketchup Red border only on focus.
