import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useContext, createContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { zIndex, shadows, radii, spacing, typography, colors } from "./tokens.js";
const darkTheme = {
  name: "dark",
  colors: {
    ...colors,
    background: colors.black,
    foreground: colors.gray[50],
    muted: colors.gray[900],
    mutedForeground: colors.gray[400],
    border: colors.gray[800],
    input: colors.gray[800],
    ring: colors.gray[600],
    primary: colors.white,
    primaryForeground: colors.black,
    secondary: colors.gray[800],
    secondaryForeground: colors.gray[50],
    accent: colors.gray[800],
    accentForeground: colors.gray[50],
    destructive: colors.error.DEFAULT,
    destructiveForeground: colors.white,
    card: colors.gray[950],
    cardForeground: colors.gray[50]
  },
  typography,
  spacing,
  radii,
  shadows,
  zIndex
};
const lightTheme = {
  name: "light",
  colors: {
    ...colors,
    background: colors.white,
    foreground: colors.gray[950],
    muted: colors.gray[100],
    mutedForeground: colors.gray[500],
    border: colors.gray[200],
    input: colors.gray[200],
    ring: colors.gray[400],
    primary: colors.black,
    primaryForeground: colors.white,
    secondary: colors.gray[100],
    secondaryForeground: colors.gray[900],
    accent: colors.gray[100],
    accentForeground: colors.gray[900],
    destructive: colors.error.DEFAULT,
    destructiveForeground: colors.white,
    card: colors.white,
    cardForeground: colors.gray[950]
  },
  typography,
  spacing,
  radii,
  shadows: {
    none: "none",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.15)"
  },
  zIndex
};
const ThemeContext = createContext(null);
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.foreground};
    background: ${({ theme }) => theme.colors.background};
    transition: background 0.3s ease, color 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }
`;
function resolveInitialDark(pref) {
  if (pref === "dark") return true;
  if (pref === "light") return false;
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function CalangoUIProvider({ children, defaultTheme = "system", theme: customTheme }) {
  const [isDark, setIsDark] = useState(() => resolveInitialDark(defaultTheme ?? "system"));
  const resolvedTheme = customTheme ?? (isDark ? darkTheme : lightTheme);
  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme: resolvedTheme, isDark, toggleTheme }, children: /* @__PURE__ */ jsxs(ThemeProvider, { theme: resolvedTheme, children: [
    /* @__PURE__ */ jsx(GlobalStyles, {}),
    children
  ] }) });
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within CalangoUIProvider");
  return ctx;
}
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    const targetVal = target[key];
    if (sourceVal && typeof sourceVal === "object" && !Array.isArray(sourceVal) && targetVal && typeof targetVal === "object" && !Array.isArray(targetVal)) {
      result[key] = deepMerge(
        targetVal,
        sourceVal
      );
    } else if (sourceVal !== void 0) {
      result[key] = sourceVal;
    }
  }
  return result;
}
function createTheme(overrides, base = darkTheme) {
  return deepMerge(base, overrides);
}
export {
  CalangoUIProvider as C,
  GlobalStyles as G,
  createTheme as c,
  darkTheme as d,
  lightTheme as l,
  useTheme as u
};
//# sourceMappingURL=createTheme-B7xWTe6p.js.map
