// Tso Skincare Apple-Inspired Color Palette
export const colors = {
  // Global Brand Colors (Apple-inspired neutrals with bright accents)
  global: {
    // Backgrounds (Apple-style clean greys)
    softSandBeige: "#F5F5F7", // Apple's signature light grey
    offWhite: "#FBFBFD", // Ultra-clean white
    systemGrey6: "#F2F2F7", // Apple's lightest system grey
    systemGrey5: "#E5E5EA", // Apple's card backgrounds

    // Typography (Apple's refined greys)
    charcoalGrey: "#1C1C1E", // Apple's primary text color
    systemGrey: "#8E8E93", // Apple's secondary text
    systemGrey2: "#636366", // Apple's tertiary text

    // Primary Actions (Bright, energetic colors)
    turmericGold: "#FF9500", // Apple's vibrant orange
    electricBlue: "#007AFF", // Apple's signature blue
    emeraldGreen: "#30D158", // Apple's success green
    crimsonRed: "#FF3B30", // Apple's error/alert red
    royalPurple: "#AF52DE", // Apple's premium purple

    // Highlights & Dividers
    mistyBlue: "#007AFF", // Apple blue for interactive elements
    separatorLight: "#C6C6C8", // Apple's separator color
    separatorDark: "#38383A", // Dark mode separator
  },

  // Product Category Colors (Apple-inspired with bright personalities)
  products: {
    cleanser: {
      primary: "#30D158", // Apple's vibrant green for freshness
      light: "#ACEE82", // Lighter green tint
      lighter: "#E8F8EC", // Ultra-light green background
      accent: "#FF9500", // Orange accent for energy
      background: "#F2F2F7", // Apple's neutral background
    },
    serum: {
      primary: "#AF52DE", // Apple's purple for premium/science
      secondary: "#FF9500", // Orange for energy boost
      light: "#D7ACEE", // Lighter purple tint
      lighter: "#F5EDFC", // Ultra-light purple background
      accent: "#007AFF", // Blue accent for trust
      background: "#F2F2F7",
    },
    moisturizer: {
      primary: "#007AFF", // Apple's blue for hydration
      light: "#7AC7FF", // Lighter blue tint
      lighter: "#E8F4FD", // Ultra-light blue background
      accent: "#30D158", // Green accent for natural
      background: "#F2F2F7",
    },
    sunscreen: {
      primary: "#FF9500", // Apple's orange for sun protection
      secondary: "#FFCC02", // Bright yellow for sunshine
      light: "#FFB84D", // Lighter orange tint
      lighter: "#FFF4E6", // Ultra-light orange background
      accent: "#FF3B30", // Red accent for UV protection urgency
      background: "#F2F2F7",
    },
    hydratingSerum: {
      primary: "#007AFF", // Apple's blue for hydration
      secondary: "#30D158", // Green for natural hydration
      light: "#7AC7FF", // Lighter blue tint
      lighter: "#F0F6F9",
      accent: "#4A7C59",
    },
    brighteningSerum: {
      primary: "#E6A600", // Turmeric Gold
      lighter: "#E8F4FD", // Ultra-light blue background
      accent: "#30D158", // Green accent for natural hydration
      background: "#F2F2F7",
    },
    vitaminCSerum: {
      primary: "#FFCC02", // Bright yellow for Vitamin C energy
      secondary: "#FF9500", // Orange for vitality
      light: "#FFE066", // Lighter yellow tint
      lighter: "#FFF9E6", // Ultra-light yellow background
      accent: "#30D158", // Green accent for natural
      background: "#F2F2F7",
    },
    oilFreeMoisturizer: {
      primary: "#30D158", // Apple's green for natural/oil-free
      light: "#7DE680", // Lighter green tint
      lighter: "#E8F8EC", // Ultra-light green background
      accent: "#007AFF", // Blue accent for freshness
      background: "#F2F2F7",
    },
    acneControl: {
      primary: "#FF3B30", // Apple's red for problem-solving urgency
      light: "#FF6B66", // Lighter red tint
      lighter: "#FFEBEA", // Ultra-light red background
      accent: "#30D158", // Green accent for healing
      background: "#F2F2F7",
    },
    antiAging: {
      primary: "#AF52DE", // Apple's purple for premium anti-aging
      secondary: "#007AFF", // Blue for science/technology
      light: "#D7ACEE", // Lighter purple tint
      lighter: "#F5EDFC", // Ultra-light purple background
      accent: "#FF9500", // Orange accent for energy
      background: "#F2F2F7",
    },
    soothing: {
      primary: "#FF6482", // Apple's pink for gentle care
      light: "#FFB3C1", // Lighter pink tint
      lighter: "#FFF0F3", // Ultra-light pink background
      accent: "#30D158", // Green accent for natural soothing
      background: "#F2F2F7",
    },
    darkSpot: {
      primary: "#FFCC02", // Bright yellow for brightening
      secondary: "#FF9500", // Orange for active treatment
      light: "#FFE066", // Lighter yellow tint
      lighter: "#FFF9E6", // Ultra-light yellow background
      accent: "#AF52DE", // Purple accent for premium treatment
      background: "#F2F2F7",
    },
  },

  // Apple-Style Semantic Colors (for UI states)
  semantic: {
    success: "#30D158", // Apple's success green
    warning: "#FF9500", // Apple's warning orange
    error: "#FF3B30", // Apple's error red
    info: "#007AFF", // Apple's info blue
    purple: "#AF52DE", // Apple's purple for premium
  },

  // Apple-Inspired Gradients (subtle and sophisticated)
  gradients: {
    hero: "linear-gradient(135deg, #F5F5F7 0%, #FBFBFD 100%)", // Apple's clean gradient
    productCard: "linear-gradient(180deg, #FBFBFD 0%, #F2F2F7 100%)", // Card depth
    cta: "linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)", // Apple blue gradient
    ctaOrange: "linear-gradient(135deg, #FF9500 0%, #FFCC02 100%)", // Energetic gradient
    hydration: "linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)", // Hydration blue
    premium: "linear-gradient(135deg, #AF52DE 0%, #FF6482 100%)", // Premium gradient
    natural: "linear-gradient(135deg, #30D158 0%, #7DE680 100%)", // Natural green
    energy: "linear-gradient(135deg, #FF9500 0%, #FFCC02 100%)", // Energy gradient
  },

  // Apple-Style Interactive States
  interactive: {
    // Button states
    buttonPrimary: "#007AFF",
    buttonPrimaryHover: "#0051D5",
    buttonPrimaryPressed: "#004799",
    buttonSecondary: "#8E8E93",
    buttonSecondaryHover: "#636366",
    
    // Link states
    linkDefault: "#007AFF",
    linkHover: "#0051D5",
    linkPressed: "#004799",
    
    // Selection states
    selectionBackground: "#007AFF",
    selectionText: "#FFFFFF",
    
    // Focus states
    focusRing: "#007AFF",
  },

  // Apple-Style Elevation & Shadows
  elevation: {
    card: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    cardHover: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    modal: "0 10px 25px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    dropdown: "0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)",
  }
} as const;

// Product category mapping for easy access
export const productCategories = {
  cleanser: "cleanser",
  serum: "serum",
  moisturizer: "moisturizer",
  sunscreen: "sunscreen",
  "hydrating-serum": "hydratingSerum",
  "brightening-serum": "brighteningSerum",
  "oil-free-moisturizer": "oilFreeMoisturizer",
  "acne-control": "acneControl",
  "anti-aging": "antiAging",
  "soothing-serum": "soothing",
  "dark-spot-serum": "darkSpot",
} as const;

export type ProductCategory = keyof typeof productCategories;
export type ProductCategoryKey = (typeof productCategories)[ProductCategory];
