// Tso Design System - Inspired by Tso Moriri Lake
// Sister brand to Ursa Major with serene purity and empowered transparency

export const colors = {
  // Primary Brand Colors (Inspired by Tso Moriri Lake & Ladakh landscape)
  brand: {
    deepLakeBlue: "#1E4A68", // Primary - calm, strength, depth of the lake
    skyWhite: "#FFFFFF", // Backgrounds, purity, endless sky
    sandyBeige: "#D9C7A2", // Neutrals, warmth of Ladakh sands
    mountainStoneGray: "#8C8C89", // Typography, grounding mountain stone
    goldenDawn: "#E1A85F", // Accents - sunlit peaks, golden highlights

    // Supporting palette for depth and variety
    glacialBlue: "#2B5A7A", // Deeper blue for hierarchy
    mistWhite: "#F8F9FA", // Soft background alternative
    warmSand: "#E6D4B7", // Lighter sandy tone
    coolStone: "#A8A8A5", // Lighter stone gray
    sunriseGold: "#F4C27D", // Lighter golden accent
  },

  // Typography colors following natural hierarchy
  text: {
    primary: "#1E4A68", // Deep lake blue for primary text
    secondary: "#8C8C89", // Mountain stone gray for secondary
    tertiary: "#A8A8A5", // Cool stone for tertiary text
    inverse: "#FFFFFF", // White text on dark backgrounds
    accent: "#E1A85F", // Golden dawn for highlighted text
  },

  // Interactive elements inspired by Himalayan landscape
  interactive: {
    primary: "#1E4A68", // Deep lake blue for primary buttons
    primaryHover: "#2B5A7A", // Glacial blue on hover
    secondary: "transparent", // Secondary button background
    secondaryBorder: "#1E4A68", // Deep lake blue border
    secondaryHover: "#D9C7A2", // Sandy beige hover for secondary
    disabled: "#A8A8A5", // Cool stone for disabled state
    focus: "#E1A85F", // Golden dawn for focus outlines
  },

  // Product category colors (inspired by Ladakh elements)
  products: {
    cleanser: {
      primary: "#2B5A7A", // Glacial blue for cleansing
      light: "#4A7B9D", // Lighter glacial blue
      lighter: "#E8F1F7", // Ultra-light blue background
      accent: "#E1A85F", // Golden dawn accent
      background: "#FFFFFF", // Pure white background
    },
    serum: {
      primary: "#E1A85F", // Golden dawn for serums
      light: "#F4C27D", // Sunrise gold
      lighter: "#FDF6EC", // Ultra-light golden background
      accent: "#1E4A68", // Deep lake blue accent
      background: "#FFFFFF",
    },
    moisturizer: {
      primary: "#D9C7A2", // Sandy beige for moisturizers
      light: "#E6D4B7", // Warm sand
      lighter: "#F5F1E8", // Ultra-light sand background
      accent: "#2B5A7A", // Glacial blue accent
      background: "#FFFFFF",
    },
    sunscreen: {
      primary: "#E1A85F", // Golden dawn for sun protection
      light: "#F4C27D", // Sunrise gold
      lighter: "#FDF6EC", // Ultra-light golden background
      accent: "#1E4A68", // Deep lake blue accent
      background: "#FFFFFF",
    },
    treatment: {
      primary: "#1E4A68", // Deep lake blue for treatments
      light: "#2B5A7A", // Glacial blue
      lighter: "#E8F1F7", // Ultra-light blue background
      accent: "#E1A85F", // Golden dawn accent
      background: "#FFFFFF",
    },
  },

  // Semantic colors for feedback and states
  semantic: {
    success: "#2B5A7A", // Glacial blue for success
    warning: "#E1A85F", // Golden dawn for warnings
    error: "#C67B7B", // Muted red for errors (maintaining accessibility)
    info: "#1E4A68", // Deep lake blue for information

    // Background variants
    successBg: "#E8F1F7",
    warningBg: "#FDF6EC",
    errorBg: "#F7F0F0",
    infoBg: "#E8F1F7",
  },

  // Surface colors for cards, modals, etc.
  surfaces: {
    primary: "#FFFFFF", // Primary surface - pure white
    secondary: "#F8F9FA", // Secondary surface - mist white
    tertiary: "#D9C7A2", // Tertiary surface - sandy beige
    overlay: "rgba(30, 74, 104, 0.4)", // Modal overlays in lake blue
    border: "#E6D4B7", // Warm sand borders
    divider: "#A8A8A5", // Cool stone dividers
  },

  // Elevation and shadows (soft diffused like mountain sunlight)
  elevation: {
    low: "0 1px 3px rgba(30, 74, 104, 0.08)",
    medium: "0 4px 12px rgba(30, 74, 104, 0.12)",
    high: "0 8px 24px rgba(30, 74, 104, 0.16)",
  },

  // Gradients inspired by Tso Moriri transitions
  gradients: {
    hero: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
    card: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
    subtle: "linear-gradient(135deg, #F8F9FA 0%, #D9C7A2 100%)",
    brand: "linear-gradient(135deg, #1E4A68 0%, #2B5A7A 100%)",
    dawn: "linear-gradient(135deg, #E1A85F 0%, #F4C27D 100%)",
  },
};

// Design tokens following the 4px grid system with 6px radius
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "64px",
};

export const borderRadius = {
  sm: "3px",
  md: "6px", // TSO's signature radius - cleaner than Ursa Major's 8px
  lg: "12px",
  xl: "18px",
  full: "50%",
};

export const typography = {
  fontFamily: {
    serif: '"Playfair Display", "Freight Display", "Georgia", serif', // Elegant serif for headings
    sans: '"Inter", "Proxima Nova", sans-serif', // Clean sans for body text
  },
  fontSize: {
    caption: "14px",
    body: "16px",
    bodyLarge: "18px",
    h3: "28px",
    h2: "36px",
    h1: "48px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.2",
    normal: "1.5",
    relaxed: "1.6",
  },
};

// Product category mapping for easy access
export const productCategories = {
  cleanser: "cleanser",
  serum: "serum",
  moisturizer: "moisturizer",
  sunscreen: "sunscreen",
  treatment: "treatment",
} as const;

export type ProductCategory = keyof typeof productCategories;
export type ProductCategoryKey = (typeof productCategories)[ProductCategory];

// Export default for easy importing
export default colors;
