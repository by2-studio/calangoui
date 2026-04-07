import { colors } from '../tokens/colors';
import { typography } from '../tokens/typography';
import { spacing, radii, shadows, zIndex } from '../tokens/spacing';

export interface SemanticColors {
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  card: string;
  cardForeground: string;
}

export interface CalangoUITheme {
  name: string;
  colors: typeof colors & SemanticColors;
  typography: typeof typography;
  spacing: typeof spacing;
  radii: typeof radii;
  shadows: { [K in keyof typeof shadows]: string };
  zIndex: typeof zIndex;
}

export const darkTheme: CalangoUITheme = {
  name: 'dark',
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
    cardForeground: colors.gray[50],
  },
  typography,
  spacing,
  radii,
  shadows,
  zIndex,
};

export const lightTheme: CalangoUITheme = {
  name: 'light',
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
    cardForeground: colors.gray[950],
  },
  typography,
  spacing,
  radii,
  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
  },
  zIndex,
};
