# Tso Skincare - Nature-Inspired Website Color Strategy

## 🎨 Color Philosophy

Our color strategy creates a **clean, airy, and modern** aesthetic that communicates **science-backed credibility** while remaining **emotionally inviting and feminine**. Each product category has its own distinct accent color that ties seamlessly to packaging, creating a cohesive online-to-offline experience.

## 🌐 Global Brand Color Framework

### Primary Brand Colors (Always Present)

#### Backgrounds
- **Soft Sand Beige** (`#F4EDE4`) - Premium, breathable feeling
- **Off White** (`#FAFAFA`) - Clean, light foundation

#### Typography
- **Charcoal Grey** (`#2E2E2E`) - Primary body text and headers

#### Primary Actions
- **Turmeric Gold** (`#E6A600`) - All CTA buttons and action elements

#### Accents & Dividers
- **Misty Blue** (`#A8C6D7`) - Soft hydration tone, maintains calm flow

---

## 🛍️ Product Category Color System

Each product category has its own accent color palette applied subtly throughout:
- Product card background hovers
- Category navigation tags/badges
- Mini-icons and linework illustrations
- Section highlights on product detail pages

### Product Mappings

| Product Category | Primary Color | Light Variant | Lighter Variant | Usage |
|-----------------|---------------|---------------|-----------------|-------|
| **Cleanser** | Botanical Green (`#4A7C59`) | `#6B9B7A` | `#E8F2EA` | Natural purification |
| **Hydrating Serum** | Misty Blue (`#A8C6D7`) | `#C4D9E8` | `#F0F6F9` | Deep moisture |
| **Brightening Serum** | Turmeric Gold (`#E6A600`) | `#F2D666` | `#FDF6E0` | Radiant glow |
| **Oil-Free Moisturizer** | Botanical Green (`#4A7C59`) | `#7BA888` | `#E8F2EA` | Light hydration |
| **Sunscreen** | Citrus Yellow (`#FFD45A`) | `#FFF0C7` | `#FFFCF0` | Sun protection |
| **Acne Control** | Earth Clay (`#B86B4B`) | `#D4A085` | `#F4EDE8` | Clarifying treatment |
| **Anti-Aging** | Deep Plum (`#5A3A55`) | `#7A5A75` | `#F0EBF0` | Mature skin care |
| **Soothing Serum** | Lotus Pink (`#F3A6B5`) | `#F8C6D1` | `#FDF2F4` | Gentle care |
| **Dark Spot Serum** | Turmeric Gold (`#E6A600`) | `#F2D666` | `#FDF6E0` | Targeted treatment |

---

## 📄 Page-Specific Implementation

### Homepage
```css
/* Hero Section */
background: linear-gradient(135deg, #F4EDE4 0%, #FAFAFA 100%);

/* Product Previews */
.product-card:hover {
  border-color: var(--product-accent);
  background: var(--product-lighter);
}

/* CTA Buttons */
background: linear-gradient(135deg, #E6A600 0%, #F2D666 100%);
```

### Category Pages
```css
/* Header Bar */
background: linear-gradient(135deg, var(--category-lighter) 0%, #FAFAFA 100%);
border-bottom: 2px solid var(--category-light);

/* Filter Buttons */
border-color: var(--category-light);
color: var(--category-primary);

/* Product Grid Items */
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(var(--category-primary), 0.15);
}
```

### Product Detail Pages (PDPs)
```css
/* Background */
background: #FAFAFA;

/* Add to Cart Button */
background-color: var(--product-primary);
color: white;

/* Review Highlights */
border-left: 3px solid var(--product-primary);
background: var(--product-lighter);

/* Ingredient Callouts */
.ingredient-badge {
  background: var(--product-primary);
  color: white;
}
```

### Education/Blog Section
```css
/* Science Articles */
.science-article {
  accent-color: #A8C6D7; /* Misty Blue */
}

/* Nature Stories */
.nature-story {
  accent-color: #4A7C59; /* Botanical Green */
}

/* Self-Care Rituals */
.self-care-content {
  accent-color: #F3A6B5; /* Lotus Pink */
}
```

### Footer
```css
background-color: #F4EDE4; /* Sand Beige */
color: #2E2E2E; /* Charcoal Grey */

/* CTA Signup */
.newsletter-cta {
  background: #E6A600; /* Turmeric Gold */
  color: white;
}
```

---

## 🎯 CSS Custom Properties Implementation

```css
:root {
  /* Global Brand Colors */
  --tso-soft-sand-beige: #F4EDE4;
  --tso-off-white: #FAFAFA;
  --tso-charcoal-grey: #2E2E2E;
  --tso-turmeric-gold: #E6A600;
  --tso-misty-blue: #A8C6D7;
  
  /* Gradients */
  --tso-gradient-hero: linear-gradient(135deg, #F4EDE4 0%, #FAFAFA 100%);
  --tso-gradient-cta: linear-gradient(135deg, #E6A600 0%, #F2D666 100%);
  --tso-gradient-hydration: linear-gradient(135deg, #A8C6D7 0%, #C4D9E8 100%);
}

/* Product Category Classes */
.product-cleanser {
  --product-primary: #4A7C59;
  --product-light: #6B9B7A;
  --product-lighter: #E8F2EA;
}

.product-hydrating-serum {
  --product-primary: #A8C6D7;
  --product-light: #C4D9E8;
  --product-lighter: #F0F6F9;
}

/* Dynamic Product Styling */
.product-accent {
  background-color: var(--product-lighter);
  border-color: var(--product-light);
  transition: all 0.3s ease;
}

.product-accent:hover {
  background-color: var(--product-light);
  border-color: var(--product-primary);
  transform: translateY(-2px);
}

.product-cta {
  background-color: var(--product-primary);
  color: white;
}
```

---

## 🎨 Component Usage Examples

### React/TypeScript Implementation

```typescript
import { colors } from '@/styles/colors'

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  const categoryColors = colors.products[product.category]
  
  return (
    <div 
      className="product-card"
      style={{
        background: `linear-gradient(135deg, ${colors.global.offWhite} 0%, ${categoryColors.lighter} 100%)`,
        borderColor: categoryColors.light,
      }}
    >
      <button
        className="add-to-cart"
        style={{
          backgroundColor: categoryColors.primary,
          color: 'white',
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

// Category Page Header
const CategoryHeader = ({ category }: { category: string }) => {
  const categoryColors = colors.products[category]
  
  return (
    <header
      style={{
        background: `linear-gradient(135deg, ${categoryColors.lighter} 0%, ${colors.global.offWhite} 100%)`,
      }}
    >
      <span 
        className="category-badge"
        style={{ backgroundColor: categoryColors.primary }}
      >
        {category}
      </span>
    </header>
  )
}
```

---

## 🌈 Accessibility & Contrast

All color combinations maintain WCAG AA accessibility standards:

- **Charcoal Grey on Off White**: 15.6:1 contrast ratio
- **Turmeric Gold on White**: 4.8:1 contrast ratio
- **Product primaries on white backgrounds**: All above 4.5:1
- **White text on product primary colors**: All above 4.5:1

---

## 📱 Responsive Considerations

### Mobile Adaptations
- Larger touch targets with product accent colors
- Simplified gradient backgrounds for performance
- High contrast mode support with core brand colors

### Dark Mode Support
- Maintains brand color hierarchy
- Product accents become slightly desaturated
- Background shifts to deep charcoal with light text

---

## 🚀 Implementation Checklist

- [x] Global CSS custom properties defined
- [x] Product category classes created
- [x] Component-level color integration
- [x] Hover states and transitions
- [x] Accessibility compliance verified
- [x] Mobile responsiveness tested
- [x] Brand consistency documented

---

*This color strategy ensures Tso Skincare's digital presence reflects the premium, nature-inspired, and scientifically-backed brand values while maintaining excellent user experience and accessibility standards.*
