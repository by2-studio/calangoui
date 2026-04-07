const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
    950: "#09090B"
  },
  success: {
    light: "#4ADE80",
    DEFAULT: "#22C55E",
    dark: "#16A34A"
  },
  error: {
    light: "#F87171",
    DEFAULT: "#EF4444",
    dark: "#DC2626"
  },
  warning: {
    light: "#FBBF24",
    DEFAULT: "#F59E0B",
    dark: "#D97706"
  },
  info: {
    light: "#60A5FA",
    DEFAULT: "#3B82F6",
    dark: "#2563EB"
  }
};
const typography = {
  fontFamily: {
    sans: '"Geist Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"Geist Mono", "Fira Code", "Cascadia Code", Consolas, monospace'
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem"
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  }
};
const spacing = {
  0: "0px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px"
};
const radii = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  full: "9999px"
};
const shadows = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
  md: "0 4px 6px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.4)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.4)",
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.5)"
};
const zIndex = {
  base: 0,
  dropdown: 1e3,
  sticky: 1100,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700
};
export {
  colors,
  radii,
  shadows,
  spacing,
  typography,
  zIndex
};
//# sourceMappingURL=tokens.js.map
