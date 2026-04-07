export declare type Colors = typeof colors;

export declare const colors: {
    readonly black: "#000000";
    readonly white: "#FFFFFF";
    readonly gray: {
        readonly 50: "#FAFAFA";
        readonly 100: "#F4F4F5";
        readonly 200: "#E4E4E7";
        readonly 300: "#D4D4D8";
        readonly 400: "#A1A1AA";
        readonly 500: "#71717A";
        readonly 600: "#52525B";
        readonly 700: "#3F3F46";
        readonly 800: "#27272A";
        readonly 900: "#18181B";
        readonly 950: "#09090B";
    };
    readonly success: {
        readonly light: "#4ADE80";
        readonly DEFAULT: "#22C55E";
        readonly dark: "#16A34A";
    };
    readonly error: {
        readonly light: "#F87171";
        readonly DEFAULT: "#EF4444";
        readonly dark: "#DC2626";
    };
    readonly warning: {
        readonly light: "#FBBF24";
        readonly DEFAULT: "#F59E0B";
        readonly dark: "#D97706";
    };
    readonly info: {
        readonly light: "#60A5FA";
        readonly DEFAULT: "#3B82F6";
        readonly dark: "#2563EB";
    };
};

export declare type Radii = typeof radii;

export declare const radii: {
    readonly none: "0px";
    readonly sm: "4px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    readonly '2xl': "24px";
    readonly full: "9999px";
};

export declare type Shadows = typeof shadows;

export declare const shadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px rgba(0, 0, 0, 0.4)";
    readonly md: "0 4px 6px rgba(0, 0, 0, 0.4)";
    readonly lg: "0 10px 15px rgba(0, 0, 0, 0.4)";
    readonly xl: "0 20px 25px rgba(0, 0, 0, 0.4)";
    readonly '2xl': "0 25px 50px rgba(0, 0, 0, 0.5)";
};

export declare type Spacing = typeof spacing;

export declare const spacing: {
    readonly 0: "0px";
    readonly 0.5: "2px";
    readonly 1: "4px";
    readonly 1.5: "6px";
    readonly 2: "8px";
    readonly 2.5: "10px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 8: "32px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
};

export declare type Typography = typeof typography;

export declare const typography: {
    readonly fontFamily: {
        readonly sans: "\"Geist Sans\", \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
        readonly mono: "\"Geist Mono\", \"Fira Code\", \"Cascadia Code\", Consolas, monospace";
    };
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "1.875rem";
        readonly '4xl': "2.25rem";
    };
    readonly fontWeight: {
        readonly light: 300;
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly lineHeight: {
        readonly tight: 1.25;
        readonly normal: 1.5;
        readonly relaxed: 1.75;
    };
};

export declare type ZIndex = typeof zIndex;

export declare const zIndex: {
    readonly base: 0;
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly overlay: 1300;
    readonly modal: 1400;
    readonly popover: 1500;
    readonly toast: 1600;
    readonly tooltip: 1700;
};

export { }
