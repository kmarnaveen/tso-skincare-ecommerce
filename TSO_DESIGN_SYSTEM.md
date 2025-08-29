# 🌊 Tso Design System

## Sister Brand to Ursa Major

Tso draws inspiration from **Tso Moriri**, the pristine high-altitude lake in Ladakh, India. This design system embodies the serene purity, empowered transparency, and minimalist strength of the Himalayan landscape.

---

## 🎨 Brand Principles

1. **Serene Purity** – Designs evoke the calm, untouched beauty of Tso Moriri's waters and skies
2. **Empowered Transparency** – Clarity in communication and design, ensuring trust
3. **Minimalist Strength** – Simplicity that feels grounded and powerful
4. **Nature Meets Science** – Balancing natural inspiration with modern skincare science
5. **Enduring Connection** – Create timeless experiences rooted in nature and human self-discovery

---

## 🌈 Color Palette

### Primary Colors (Inspired by Tso Moriri)

- **Deep Lake Blue**: `#1E4A68` - Primary color for buttons, links, emphasis
- **Sky White**: `#FFFFFF` - Backgrounds, purity, endless space
- **Sandy Beige**: `#D9C7A2` - Supporting neutrals, warmth of Ladakh sands
- **Mountain Stone Gray**: `#8C8C89` - Typography, grounding neutrals
- **Golden Dawn**: `#E1A85F` - Accents for sunlit peaks, highlights, hover states

### Supporting Palette

- **Glacial Blue**: `#2B5A7A` - Deeper blue for hierarchy
- **Mist White**: `#F8F9FA` - Soft background alternative
- **Warm Sand**: `#E6D4B7` - Lighter sandy tone
- **Cool Stone**: `#A8A8A5` - Lighter stone gray
- **Sunrise Gold**: `#F4C27D` - Lighter golden accent

---

## ✍️ Typography

### Font Families

- **Headings**: Playfair Display (elegant serif) - conveys timelessness
- **Body Text**: Inter (clean sans-serif) - clarity & modernity

### Font Scale

- **H1**: 48px
- **H2**: 36px
- **H3**: 28px
- **Body**: 16–18px
- **Caption**: 14px

---

## 🔧 Design Tokens

### Spacing

Based on 4px grid system: `4px`, `8px`, `16px`, `24px`, `32px`, `64px`

### Border Radius

- **Primary**: `6px` (cleaner, sharper than Ursa Major's 8px)
- **Small**: `3px`
- **Large**: `12px`
- **XL**: `18px`

### Shadows

Soft diffused shadows evoking mountain sunlight:

- **Low**: `0 1px 3px rgba(30, 74, 104, 0.08)`
- **Medium**: `0 4px 12px rgba(30, 74, 104, 0.12)`
- **High**: `0 8px 24px rgba(30, 74, 104, 0.16)`

---

## 🎯 Component Guidelines

### Buttons

- **Primary**: Deep Lake Blue background, white text
- **Secondary**: Transparent with blue border
- **Hover**: Slight glow in Golden Dawn accent

### Forms

- White backgrounds with beige accents
- 6px rounded corners
- Labels always present

### Navigation

- Centered logo, clean horizontal nav
- Sticky nav on scroll
- Minimal dropdowns with transparent backgrounds

### Cards

- White background, subtle shadows
- Accent divider lines in Sandy Beige
- Emphasis on imagery with minimal copy

---

## 📸 Photography & Imagery

### Landscapes

High-altitude lakes, golden dawns, Ladakh mountain silhouettes

### Color Grading

Cool tones (blues, whites) with warm sunlit accents

### Lifestyle

People outdoors, self-discovery moments, empowerment visuals

### Product Shots

Clean studio shots with subtle natural textures (stone, sand, water ripples)

---

## 🗣️ Voice & Tone

### Voice

Honest, poetic, and empowering

### Tone

Calm and transparent, but uplifting

### Example Copy

Instead of _"Made with natural ingredients"_  
→ _"Born from the clarity of Himalayan waters and the strength of Ladakh herbs"_

---

## ♿ Accessibility

- **Contrast ratio**: Minimum 4.5:1 for all text
- **Font scaling**: Responsive design for all devices
- **Alt text**: Required for all images
- **Navigation**: Full keyboard and screen reader support

---

## 🚀 Implementation

The design system is implemented in `/src/styles/colors.ts` with:

- Complete color palette as TypeScript constants
- Design tokens for spacing, radius, typography
- Semantic color mappings for consistent usage
- Type-safe product category system

### Usage Example

```tsx
import { colors, spacing, borderRadius } from '@/styles/colors';

// Primary button
<Button style={{
  backgroundColor: colors.interactive.primary,
  borderRadius: borderRadius.md,
  padding: spacing.md
}}>
  Explore Collection
</Button>

// Card with brand gradient
<Card style={{
  background: colors.gradients.card,
  boxShadow: colors.elevation.medium
}}>
  Content
</Card>
```

---

_Inspired by the pristine waters of Tso Moriri and the endless possibilities of self-discovery in nature._
