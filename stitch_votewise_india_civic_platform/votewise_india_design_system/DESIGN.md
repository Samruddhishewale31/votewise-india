---
name: VoteWise India Design System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424752'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727783'
  outline-variant: '#c2c6d4'
  surface-tint: '#175db2'
  primary: '#004790'
  on-primary: '#ffffff'
  primary-container: '#1a5fb4'
  on-primary-container: '#cbdcff'
  inverse-primary: '#aac7ff'
  secondary: '#8f4e00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9832'
  on-secondary-container: '#683700'
  tertiary: '#035500'
  on-tertiary: '#ffffff'
  tertiary-container: '#057000'
  on-tertiary-container: '#86f46f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458d'
  secondary-fixed: '#ffdcc2'
  secondary-fixed-dim: '#ffb77a'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6d3a00'
  tertiary-fixed: '#8dfc75'
  tertiary-fixed-dim: '#72de5c'
  on-tertiary-fixed: '#012200'
  on-tertiary-fixed-variant: '#035300'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The brand personality is institutional, non-partisan, and authoritative, designed to evoke a sense of civic duty and reliable education. This design system adopts a **Corporate / Modern** style with a heavy emphasis on **Minimalism** to ensure information density never compromises readability. 

The aesthetic communicates "Government-inspired Trust" without the bureaucratic friction. It achieves this through a high-integrity blue palette, generous white space that reduces cognitive load, and a tactile "rounded" language that feels inclusive and modern. The focus is on clarity and the removal of visual noise to empower citizens of all digital literacy levels.

## Colors
The palette is rooted in a deep, trustworthy primary blue (#1A5FB4) which serves as the anchor for all interactive elements and primary branding. The base is a clean, expansive white to maximize contrast and focus.

Saffron (#FF9933) and Green (#138808) are used strictly as secondary and tertiary accents. Saffron is reserved for critical attention-points or educational highlights (not warnings), while Green is utilized for success states and civic progress milestones. To maintain a non-political stance, these colors must never dominate the screen; they appear as thin accents, small icons, or subtle progress bars. All color combinations are strictly tested to meet WCAG AAA standards for text legibility.

## Typography
This design system utilizes **Public Sans**, an open-source typeface designed specifically for government interfaces. Its neutral yet friendly tone provides the perfect balance of institutional authority and modern accessibility.

Hierarchy is established through significant weight shifts rather than color shifts, ensuring clarity for users with visual impairments. Headlines use a tighter letter-spacing and heavier weights to command attention, while body text uses a generous line height (1.5–1.6) to facilitate long-form reading of civic documents and educational content.

## Layout & Spacing
The design system employs a **fixed grid** model for desktop environments (centered 12-column grid) and a fluid 4-column grid for mobile devices. The layout philosophy centers on "The Breathable Interface"—using wide margins and large gutters to prevent information dense content from feeling overwhelming.

Spacing follows a strict 8px base unit. Margins between distinct content sections use the `lg` (48px) or `xl` (80px) tokens to create a rhythmic, easy-to-scan flow. Interactive elements are always separated by at least 12px to prevent accidental taps, catering to mobile accessibility.

## Elevation & Depth
Depth is conveyed through **ambient shadows** and tonal layering. The system avoids heavy blacks for shadows, instead using low-opacity primary blue tints (e.g., `rgba(26, 95, 180, 0.08)`) to create a soft, modern lift.

- **Level 0 (Base):** Flat white background for the main canvas.
- **Level 1 (Cards):** Soft, diffused shadow with a large blur radius to denote interactivity.
- **Level 2 (Modals/Dropdowns):** Slightly tighter, more defined shadows to indicate a physical layer above the UI.
- **Focus States:** High-contrast, 3px solid offsets in Primary Blue are required for all keyboard navigation, ensuring the design is fully navigable without a mouse.

## Shapes
The shape language is defined by **roundedness level 2**. This translates to a base radius of 8px (0.5rem) for standard components like buttons and input fields. Large containers and cards use a 16px (1rem) radius, while featured "info-blocks" or highlights may use up to 24px (1.5rem) to feel more inviting.

This "soft-square" approach strikes the balance between the precision required for a government-inspired platform and the friendliness required for a civic education tool. Icons should follow this logic, utilizing rounded caps and joins rather than sharp corners.

## Components
- **Buttons:** Primary buttons are solid Blue (#1A5FB4) with white text. Secondary buttons use a thick 2px Blue border. All buttons have a minimum height of 48px to meet touch-target accessibility standards.
- **Cards:** Rounded containers (16px) with Level 1 ambient shadows. They use a subtle 1px border (#E5E7EB) to maintain definition even if the shadow is not perceived by the user.
- **Input Fields:** Large, clear labels placed above the field. Focus states utilize a 3px blue "glow" or solid outline to clearly indicate active status.
- **Chips & Badges:** Used for filtering topics (e.g., "Elections", "Rights"). These use the accent colors (Saffron/Green) at 10% opacity for backgrounds with 100% opacity text for maximum contrast.
- **Progress Indicators:** Horizontal bars using Green (#138808) to show completion in educational modules, paired with clear percentage labels.
- **Iconography:** Inclusive, multi-cultural, and stroke-based. Lines are 2px thick to ensure visibility at small scales.
- **Civic Alerts:** Informational banners that use Saffron (#FF9933) as a left-hand border accent rather than a full background fill, keeping the interface premium and calm.