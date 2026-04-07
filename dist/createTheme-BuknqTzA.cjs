"use strict";
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const styled = require("styled-components");
const tokens = require("./tokens.cjs");
const darkTheme = {
  name: "dark",
  colors: {
    ...tokens.colors,
    background: tokens.colors.black,
    foreground: tokens.colors.gray[50],
    muted: tokens.colors.gray[900],
    mutedForeground: tokens.colors.gray[400],
    border: tokens.colors.gray[800],
    input: tokens.colors.gray[800],
    ring: tokens.colors.gray[600],
    primary: tokens.colors.white,
    primaryForeground: tokens.colors.black,
    secondary: tokens.colors.gray[800],
    secondaryForeground: tokens.colors.gray[50],
    accent: tokens.colors.gray[800],
    accentForeground: tokens.colors.gray[50],
    destructive: tokens.colors.error.DEFAULT,
    destructiveForeground: tokens.colors.white,
    card: tokens.colors.gray[950],
    cardForeground: tokens.colors.gray[50]
  },
  typography: tokens.typography,
  spacing: tokens.spacing,
  radii: tokens.radii,
  shadows: tokens.shadows,
  zIndex: tokens.zIndex
};
const lightTheme = {
  name: "light",
  colors: {
    ...tokens.colors,
    background: tokens.colors.white,
    foreground: tokens.colors.gray[950],
    muted: tokens.colors.gray[100],
    mutedForeground: tokens.colors.gray[500],
    border: tokens.colors.gray[200],
    input: tokens.colors.gray[200],
    ring: tokens.colors.gray[400],
    primary: tokens.colors.black,
    primaryForeground: tokens.colors.white,
    secondary: tokens.colors.gray[100],
    secondaryForeground: tokens.colors.gray[900],
    accent: tokens.colors.gray[100],
    accentForeground: tokens.colors.gray[900],
    destructive: tokens.colors.error.DEFAULT,
    destructiveForeground: tokens.colors.white,
    card: tokens.colors.white,
    cardForeground: tokens.colors.gray[950]
  },
  typography: tokens.typography,
  spacing: tokens.spacing,
  radii: tokens.radii,
  shadows: {
    none: "none",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.15)"
  },
  zIndex: tokens.zIndex
};
const ThemeContext = React.createContext(null);
const GlobalStyles = styled.createGlobalStyle`
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
  const [isDark, setIsDark] = React.useState(() => resolveInitialDark(defaultTheme ?? "system"));
  const resolvedTheme = customTheme ?? (isDark ? darkTheme : lightTheme);
  const toggleTheme = React.useCallback(() => setIsDark((d) => !d), []);
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeContext.Provider, { value: { theme: resolvedTheme, isDark, toggleTheme }, children: /* @__PURE__ */ jsxRuntime.jsxs(styled.ThemeProvider, { theme: resolvedTheme, children: [
    /* @__PURE__ */ jsxRuntime.jsx(GlobalStyles, {}),
    children
  ] }) });
}
function useTheme() {
  const ctx = React.useContext(ThemeContext);
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
exports.CalangoUIProvider = CalangoUIProvider;
exports.GlobalStyles = GlobalStyles;
exports.createTheme = createTheme;
exports.darkTheme = darkTheme;
exports.lightTheme = lightTheme;
exports.useTheme = useTheme;
//# sourceMappingURL=createTheme-BuknqTzA.cjs.map
