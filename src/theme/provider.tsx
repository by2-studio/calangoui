import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme, type CalangoUITheme } from './themes';

interface ThemeContextValue {
  theme: CalangoUITheme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const GlobalStyles = createGlobalStyle<{ theme?: CalangoUITheme }>`
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

export interface CalangoUIProviderProps {
  children: ReactNode;
  defaultTheme?: 'dark' | 'light' | 'system';
  theme?: CalangoUITheme;
}

function resolveInitialDark(pref: 'dark' | 'light' | 'system'): boolean {
  if (pref === 'dark') return true;
  if (pref === 'light') return false;
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function CalangoUIProvider({ children, defaultTheme = 'system', theme: customTheme }: CalangoUIProviderProps) {
  const [isDark, setIsDark] = useState(() => resolveInitialDark(defaultTheme ?? 'system'));
  const resolvedTheme = customTheme ?? (isDark ? darkTheme : lightTheme);

  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, isDark, toggleTheme }}>
      <ThemeProvider theme={resolvedTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within CalangoUIProvider');
  return ctx;
}
