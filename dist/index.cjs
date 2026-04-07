"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tokens = require("./tokens.cjs");
const createTheme = require("./createTheme-BuknqTzA.cjs");
const RadixAccordion = require("@radix-ui/react-accordion");
const styled = require("styled-components");
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const RadixAlertDialog = require("@radix-ui/react-alert-dialog");
const recharts = require("recharts");
const reactAspectRatio = require("@radix-ui/react-aspect-ratio");
const RadixAvatar = require("@radix-ui/react-avatar");
const RadixCheckbox = require("@radix-ui/react-checkbox");
const RadixCollapsible = require("@radix-ui/react-collapsible");
const RadixDialog = require("@radix-ui/react-dialog");
const RadixContextMenu = require("@radix-ui/react-context-menu");
const RadixPopover = require("@radix-ui/react-popover");
const RadixDropdown = require("@radix-ui/react-dropdown-menu");
const fi = require("react-icons/fi");
const hi2 = require("react-icons/hi2");
const RadixHoverCard = require("@radix-ui/react-hover-card");
const RadixNavigationMenu = require("@radix-ui/react-navigation-menu");
const RadixRadioGroup = require("@radix-ui/react-radio-group");
const RadixScrollArea = require("@radix-ui/react-scroll-area");
const RadixSelect = require("@radix-ui/react-select");
const RadixSeparator = require("@radix-ui/react-separator");
const si = require("react-icons/si");
const RadixSlider = require("@radix-ui/react-slider");
const RadixSwitch = require("@radix-ui/react-switch");
const RadixTabs = require("@radix-ui/react-tabs");
const RadixToast = require("@radix-ui/react-toast");
const RadixTooltip = require("@radix-ui/react-tooltip");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const RadixAccordion__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixAccordion);
const RadixAlertDialog__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixAlertDialog);
const RadixAvatar__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixAvatar);
const RadixCheckbox__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixCheckbox);
const RadixCollapsible__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixCollapsible);
const RadixDialog__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixDialog);
const RadixContextMenu__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixContextMenu);
const RadixPopover__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixPopover);
const RadixDropdown__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixDropdown);
const RadixHoverCard__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixHoverCard);
const RadixNavigationMenu__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixNavigationMenu);
const RadixRadioGroup__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixRadioGroup);
const RadixScrollArea__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixScrollArea);
const RadixSelect__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixSelect);
const RadixSeparator__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixSeparator);
const RadixSlider__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixSlider);
const RadixSwitch__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixSwitch);
const RadixTabs__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixTabs);
const RadixToast__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixToast);
const RadixTooltip__namespace = /* @__PURE__ */ _interopNamespaceDefault(RadixTooltip);
const StyledBox = styled.div`
  padding: ${({ $styles }) => $styles.p};
  padding-inline: ${({ $styles }) => $styles.px};
  padding-block: ${({ $styles }) => $styles.py};
  padding-top: ${({ $styles }) => $styles.pt};
  padding-bottom: ${({ $styles }) => $styles.pb};
  margin: ${({ $styles }) => $styles.m};
  margin-inline: ${({ $styles }) => $styles.mx};
  margin-block: ${({ $styles }) => $styles.my};
  background: ${({ $styles }) => $styles.bg};
  color: ${({ $styles }) => $styles.color};
  border-radius: ${({ $styles }) => $styles.radius};
  box-shadow: ${({ $styles }) => $styles.shadow};
  border: ${({ $styles }) => $styles.border};
  width: ${({ $styles }) => $styles.w};
  height: ${({ $styles }) => $styles.h};
  min-width: ${({ $styles }) => $styles.minW};
  min-height: ${({ $styles }) => $styles.minH};
  max-width: ${({ $styles }) => $styles.maxW};
  display: ${({ $styles }) => $styles.display};
  overflow: ${({ $styles }) => $styles.overflow};
`;
const Box = React.forwardRef(
  ({ as, p, px, py, pt, pb, m, mx, my, bg, color, radius, shadow, border, w, h, minW, minH, maxW, display, overflow, ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    StyledBox,
    {
      ref,
      as,
      $styles: { p, px, py, pt, pb, m, mx, my, bg, color, radius, shadow, border, w, h, minW, minH, maxW, display, overflow },
      ...rest
    }
  )
);
Box.displayName = "Box";
const StyledText = styled.span`
  font-size: ${({ $s }) => $s.size};
  font-weight: ${({ $s }) => $s.weight};
  color: ${({ $s }) => $s.color};
  text-align: ${({ $s }) => $s.align};
  line-height: ${({ $s }) => $s.lineHeight};
  font-family: ${({ $s, theme }) => $s.mono ? theme.typography.fontFamily.mono : "inherit"};
  ${({ $s }) => $s.truncate && styled.css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;
const Text = React.forwardRef(
  ({ as, size, weight, color, align, truncate, mono, lineHeight, ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsx(StyledText, { ref, as, $s: { size, weight, color, align, truncate, mono, lineHeight }, ...rest })
);
Text.displayName = "Text";
const StyledHeading = styled.h2`
  font-size: ${({ $s, theme }) => $s.size || theme.typography.fontSize["2xl"]};
  font-weight: ${({ $s, theme }) => $s.weight || theme.typography.fontWeight.bold};
  color: ${({ $s }) => $s.color};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;
const Heading = React.forwardRef(
  ({ as, size, weight, color, ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsx(StyledHeading, { ref, as, $s: { size, weight, color }, ...rest })
);
Heading.displayName = "Heading";
const Flex = styled.div`
  display: ${({ $inline }) => $inline ? "inline-flex" : "flex"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $align }) => $align || "stretch"};
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};
  gap: ${({ $gap }) => $gap || "0"};
`;
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $spacing }) => $spacing || "0"};
  align-items: ${({ $align }) => $align};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => typeof $columns === "number" ? `repeat(${$columns}, 1fr)` : $columns || "1fr"};
  grid-template-rows: ${({ $rows }) => $rows};
  gap: ${({ $gap }) => $gap || "0"};
  grid-template-areas: ${({ $areas }) => $areas};
`;
const Divider = styled.hr`
  border: none;
  background: ${({ $color, theme }) => $color || theme.colors.border};
  ${({ $orientation }) => $orientation === "vertical" ? `width: 1px; height: 100%; min-height: 20px;` : `height: 1px; width: 100%;`}
`;
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => typeof $size === "number" ? `${$size}px` : $size || "20px"};
  height: ${({ $size }) => typeof $size === "number" ? `${$size}px` : $size || "20px"};
  color: ${({ $color }) => $color || "currentColor"};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;
const Icon = React.forwardRef(
  ({ icon: IconComponent, size, color, ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsx(IconWrapper, { ref, $size: size, $color: color, children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { ...rest }) })
);
Icon.displayName = "Icon";
const sizeMap$1 = {
  xs: { box: 24, icon: 12 },
  sm: { box: 32, icon: 16 },
  md: { box: 40, icon: 20 },
  lg: { box: 48, icon: 24 },
  xl: { box: 56, icon: 28 },
  "2xl": { box: 72, icon: 36 }
};
const StyledRoundedIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;

  ${({ $size }) => {
  const s = sizeMap$1[$size];
  return styled.css`
      width: ${s.box}px;
      height: ${s.box}px;
      font-size: ${s.icon}px;
    `;
}}

  border-radius: ${({ $radius, theme }) => {
  switch ($radius) {
    case "sm":
      return theme.radii.sm;
    case "md":
      return theme.radii.md;
    case "lg":
      return theme.radii.lg;
    default:
      return theme.radii.full;
  }
}};

  ${({ $variant, $color, theme }) => {
  const c = $color || theme.colors.primary;
  switch ($variant) {
    case "solid":
      return styled.css`
          background: ${c};
          color: ${theme.colors.primaryForeground};
        `;
    case "soft":
      return styled.css`
          background: ${c}18;
          color: ${c};
        `;
    case "outline":
      return styled.css`
          background: transparent;
          color: ${c};
          border: 1.5px solid ${c}44;
        `;
    case "ghost":
      return styled.css`
          background: transparent;
          color: ${c};
        `;
  }
}}

  svg {
    width: 1em;
    height: 1em;
  }
`;
const RoundedIcon = React.forwardRef(
  ({ icon, size = "md", variant = "soft", color, radius = "full", ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    StyledRoundedIcon,
    {
      ref,
      $size: size,
      $variant: variant,
      $color: color,
      $radius: radius,
      ...rest,
      children: icon
    }
  )
);
RoundedIcon.displayName = "RoundedIcon";
const spin$2 = styled.keyframes`
  to { transform: rotate(360deg); }
`;
const sizeMap = {
  sm: styled.css`height: 32px; padding: 0 12px; font-size: 0.8125rem; gap: 6px;`,
  md: styled.css`height: 40px; padding: 0 16px; font-size: 0.875rem; gap: 8px;`,
  lg: styled.css`height: 48px; padding: 0 24px; font-size: 1rem; gap: 10px;`
};
const variantMap = (t) => ({
  solid: styled.css`background: ${t.colors.primary}; color: ${t.colors.primaryForeground};
    &:hover:not(:disabled) { opacity: 0.9; }`,
  outline: styled.css`background: transparent; color: ${t.colors.foreground}; border: 1px solid ${t.colors.border};
    &:hover:not(:disabled) { background: ${t.colors.accent}; }`,
  ghost: styled.css`background: transparent; color: ${t.colors.foreground};
    &:hover:not(:disabled) { background: ${t.colors.accent}; }`,
  link: styled.css`background: transparent; color: ${t.colors.foreground}; padding: 0; height: auto;
    text-decoration: underline; text-underline-offset: 4px;
    &:hover:not(:disabled) { opacity: 0.8; }`
});
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  position: relative;

  ${({ $sz }) => sizeMap[$sz]}
  ${({ $v, theme }) => variantMap(theme)[$v]}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }

  ${({ $loading, theme }) => $loading && styled.css`
      color: transparent;
      pointer-events: none;
      &::after {
        content: '';
        position: absolute;
        width: 16px; height: 16px;
        border: 2px solid ${theme.colors.mutedForeground};
        border-right-color: transparent;
        border-radius: 50%;
        animation: ${spin$2} 0.6s linear infinite;
      }
    `}
`;
const Button = React.forwardRef(
  ({ variant = "solid", size = "md", loading, leftIcon, rightIcon, children, disabled, ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(StyledButton, { ref, $v: variant, $sz: size, $loading: loading, disabled: disabled || loading, "aria-busy": loading || void 0, ...rest, children: [
    leftIcon,
    children,
    rightIcon
  ] })
);
Button.displayName = "Button";
const IconButton = styled(StyledButton)`
  width: ${({ $sz }) => $sz === "sm" ? "32px" : $sz === "lg" ? "48px" : "40px"};
  padding: 0;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme, $error }) => $error ? theme.colors.destructive : theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  background: transparent;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }

  &:has(input:disabled) { opacity: 0.5; }
`;
const StyledInput$2 = styled.input`
  flex: 1;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  outline: none;
  width: 100%;

  ${({ $sz }) => $sz === "sm" ? styled.css`height: 32px; padding: 0 10px;` : $sz === "lg" ? styled.css`height: 48px; padding: 0 16px; font-size: 1rem;` : styled.css`height: 40px; padding: 0 12px;`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:disabled { cursor: not-allowed; }
`;
const SideElement = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
const ErrorText$1 = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.destructive};
  margin-top: 4px;
`;
const Label$1 = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Input = React.forwardRef(
  ({ size = "md", error, leftElement, rightElement, id, ...rest }, ref) => {
    const errorId = error && id ? `${id}-error` : void 0;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(InputWrapper, { $error: !!error, children: [
        leftElement && /* @__PURE__ */ jsxRuntime.jsx(SideElement, { children: leftElement }),
        /* @__PURE__ */ jsxRuntime.jsx(StyledInput$2, { ref, $sz: size, id, "aria-describedby": errorId, "aria-invalid": !!error || void 0, ...rest }),
        rightElement && /* @__PURE__ */ jsxRuntime.jsx(SideElement, { children: rightElement })
      ] }),
      error && /* @__PURE__ */ jsxRuntime.jsx(ErrorText$1, { id: errorId, children: error })
    ] });
  }
);
Input.displayName = "Input";
const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme, $error }) => $error ? theme.colors.destructive : theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: 10px 12px;
  resize: ${({ $resize }) => $resize || "vertical"};
  transition: border-color 0.15s ease;
  outline: none;

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:focus {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
const Textarea = React.forwardRef(
  ({ error, resize, ...rest }, ref) => /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx(StyledTextarea, { ref, $error: !!error, $resize: resize, "aria-invalid": !!error || void 0, ...rest }),
    error && /* @__PURE__ */ jsxRuntime.jsx(ErrorText$1, { children: error })
  ] })
);
Textarea.displayName = "Textarea";
const SelectTrigger = styled(RadixSelect__namespace.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  outline: none;
  gap: 8px;

  &:focus { border-color: ${({ theme }) => theme.colors.ring}; box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33; }
  &[data-placeholder] { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;
const SelectContent = styled(RadixSelect__namespace.Content)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndex.popover};
  min-width: var(--radix-select-trigger-width);
  overflow: hidden;
`;
const SelectItem = styled(RadixSelect__namespace.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;

  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &[data-disabled] { opacity: 0.5; pointer-events: none; }
`;
const SelectGroupLabel = styled(RadixSelect__namespace.Label)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const SelectSeparator = styled(RadixSelect__namespace.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;
const Select = {
  Root: RadixSelect__namespace.Root,
  Trigger: SelectTrigger,
  Value: RadixSelect__namespace.Value,
  Icon: RadixSelect__namespace.Icon,
  Portal: RadixSelect__namespace.Portal,
  Content: SelectContent,
  Viewport: RadixSelect__namespace.Viewport,
  Item: SelectItem,
  ItemText: RadixSelect__namespace.ItemText,
  Group: RadixSelect__namespace.Group,
  Label: SelectGroupLabel,
  Separator: SelectSeparator
};
const StyledRoot$4 = styled(RadixCheckbox__namespace.Root)`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &[data-state='checked'], &[data-state='indeterminate'] {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;
const StyledIndicator$1 = styled(RadixCheckbox__namespace.Indicator)`
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Checkbox = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(StyledRoot$4, { ref, ...props, children: /* @__PURE__ */ jsxRuntime.jsx(StyledIndicator$1, { children: props.checked === "indeterminate" ? "−" : "✓" }) })
);
Checkbox.displayName = "Checkbox";
const StyledRoot$3 = styled(RadixRadioGroup__namespace.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledItem = styled(RadixRadioGroup__namespace.Item)`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: border-color 0.15s ease;

  &[data-state='checked'] { border-color: ${({ theme }) => theme.colors.primary}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;
const StyledIndicator = styled(RadixRadioGroup__namespace.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
const RadioGroup = {
  Root: StyledRoot$3,
  Item: StyledItem,
  Indicator: StyledIndicator
};
const StyledRoot$2 = styled(RadixSwitch__namespace.Root)`
  all: unset;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;
  transition: background 0.2s ease;
  flex-shrink: 0;

  ${({ $size }) => $size === "sm" ? styled.css`width: 36px; height: 20px;` : styled.css`width: 44px; height: 24px;`}

  background: ${({ theme }) => theme.colors.input};
  &[data-state='checked'] { background: ${({ theme }) => theme.colors.primary}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;
const StyledThumb$1 = styled(RadixSwitch__namespace.Thumb)`
  display: block;
  border-radius: 50%;
  transition: transform 0.2s ease;
  background: ${({ theme }) => theme.colors.foreground};

  ${({ $size }) => $size === "sm" ? styled.css`
          width: 16px; height: 16px;
          transform: translateX(2px);
          &[data-state='checked'] { transform: translateX(18px); background: ${({ theme }) => theme.colors.primaryForeground}; }
        ` : styled.css`
          width: 20px; height: 20px;
          transform: translateX(2px);
          &[data-state='checked'] { transform: translateX(22px); background: ${({ theme }) => theme.colors.primaryForeground}; }
        `}
`;
function Switch({ size = "md", ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(StyledRoot$2, { $size: size, ...props, children: /* @__PURE__ */ jsxRuntime.jsx(StyledThumb$1, { $size: size }) });
}
const StyledRoot$1 = styled(RadixSlider__namespace.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  touch-action: none;
  user-select: none;
`;
const StyledTrack = styled(RadixSlider__namespace.Track)`
  background: ${({ theme }) => theme.colors.input};
  position: relative;
  flex-grow: 1;
  height: 6px;
  border-radius: ${({ theme }) => theme.radii.full};
`;
const StyledRange = styled(RadixSlider__namespace.Range)`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  border-radius: inherit;
`;
const StyledThumb = styled(RadixSlider__namespace.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: box-shadow 0.15s ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.ring};
  }
`;
function Slider(props) {
  return /* @__PURE__ */ jsxRuntime.jsxs(StyledRoot$1, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(StyledTrack, { children: /* @__PURE__ */ jsxRuntime.jsx(StyledRange, {}) }),
    (props.defaultValue || props.value || [0]).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(StyledThumb, {}, i))
  ] });
}
const Trigger$3 = styled(RadixPopover__namespace.Trigger)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  outline: none;

  &:focus { border-color: ${({ theme }) => theme.colors.ring}; }
  &[data-placeholder] { color: ${({ theme }) => theme.colors.mutedForeground}; }
`;
const Content$e = styled(RadixPopover__namespace.Content)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndex.popover};
`;
const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const NavButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;
const MonthLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  gap: 2px;
`;
const DayHeader = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-align: center;
  padding: 4px 0;
`;
const DayButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: inherit;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};
  background: ${({ $selected, theme }) => $selected ? theme.colors.primary : "transparent"};
  color: ${({ $selected, $outside, $disabled, theme }) => $selected ? theme.colors.primaryForeground : $disabled ? theme.colors.mutedForeground : $outside ? theme.colors.mutedForeground : theme.colors.foreground};
  opacity: ${({ $disabled }) => $disabled ? 0.4 : 1};

  ${({ $today, theme }) => $today && `font-weight: ${theme.typography.fontWeight.bold};`}

  &:hover:not(:disabled) {
    background: ${({ $selected, theme }) => $selected ? theme.colors.primary : theme.colors.accent};
  }
`;
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function DatePicker({ value, onChange, min, max, placeholder = "Pick a date", disabled }) {
  const [open, setOpen] = React.useState(false);
  const initialView = () => {
    if (value) return value;
    const now = /* @__PURE__ */ new Date();
    if (min && now < min) return min;
    if (max && now > max) return max;
    return now;
  };
  const [viewDate, setViewDate] = React.useState(initialView);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const days = React.useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();
    const result = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      result.push({ date: new Date(year, month - 1, daysInPrev - i), outside: true });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      result.push({ date: new Date(year, month, i), outside: false });
    }
    const remaining = 42 - result.length;
    for (let i = 1; i <= remaining; i++) {
      result.push({ date: new Date(year, month + 1, i), outside: true });
    }
    return result;
  }, [year, month]);
  const isDisabled = React.useCallback((date) => {
    if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
    if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
    return false;
  }, [min, max]);
  const today = /* @__PURE__ */ new Date();
  const isSameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  return /* @__PURE__ */ jsxRuntime.jsxs(RadixPopover__namespace.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Trigger$3, { disabled, children: value ? value.toLocaleDateString() : placeholder }),
    /* @__PURE__ */ jsxRuntime.jsx(RadixPopover__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(Content$e, { sideOffset: 4, align: "start", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(CalendarHeader, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(NavButton, { onClick: () => setViewDate(new Date(year, month - 1, 1)), children: "‹" }),
        /* @__PURE__ */ jsxRuntime.jsxs(MonthLabel, { children: [
          MONTHS[month],
          " ",
          year
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(NavButton, { onClick: () => setViewDate(new Date(year, month + 1, 1)), children: "›" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(DayGrid, { children: [
        DAYS.map((d) => /* @__PURE__ */ jsxRuntime.jsx(DayHeader, { children: d }, d)),
        days.map(({ date, outside }, i) => {
          const dis = isDisabled(date);
          const sel = value ? isSameDay(date, value) : false;
          return /* @__PURE__ */ jsxRuntime.jsx(
            DayButton,
            {
              $selected: sel,
              $today: isSameDay(date, today),
              $outside: outside,
              $disabled: dis,
              disabled: dis,
              onClick: () => {
                if (!dis) {
                  onChange == null ? void 0 : onChange(date);
                  setOpen(false);
                }
              },
              children: date.getDate()
            },
            i
          );
        })
      ] })
    ] }) })
  ] });
}
const MASKS = {
  cpf: { pattern: "999.999.999-99", placeholder: "000.000.000-00" },
  cnpj: { pattern: "99.999.999/9999-99", placeholder: "00.000.000/0000-00" },
  phone: { pattern: "(99) 9999-9999", placeholder: "(00) 0000-0000" },
  cellphone: { pattern: "(99) 99999-9999", placeholder: "(00) 00000-0000" },
  cep: { pattern: "99999-999", placeholder: "00000-000" },
  date: { pattern: "99/99/9999", placeholder: "DD/MM/AAAA" },
  time: { pattern: "99:99", placeholder: "HH:MM" },
  currency: { pattern: "", placeholder: "R$ 0,00" },
  // special handling
  creditcard: { pattern: "9999 9999 9999 9999", placeholder: "0000 0000 0000 0000" }
};
function applyMask(value, pattern) {
  const digits = value.replace(/\D/g, "");
  let result = "";
  let digitIdx = 0;
  for (let i = 0; i < pattern.length && digitIdx < digits.length; i++) {
    if (pattern[i] === "9") {
      result += digits[digitIdx];
      digitIdx++;
    } else {
      result += pattern[i];
      if (digits[digitIdx] === pattern[i]) {
        digitIdx++;
      }
    }
  }
  return result;
}
function applyCurrencyMask(value) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const num = parseInt(digits, 10);
  const formatted = (num / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `R$ ${formatted}`;
}
function unmask(value) {
  return value.replace(/\D/g, "");
}
const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.destructive};
  margin-top: 4px;
`;
const StyledInput$1 = styled.input`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme, $error }) => $error ? theme.colors.destructive : theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  outline: none;

  ${({ $sz }) => $sz === "sm" ? styled.css`height: 32px; padding: 0 10px;` : $sz === "lg" ? styled.css`height: 48px; padding: 0 16px; font-size: 1rem;` : styled.css`height: 40px; padding: 0 12px;`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:focus {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
const MaskedInput = React.forwardRef(
  ({ mask, size = "md", error, onChange, value, defaultValue, ...rest }, ref) => {
    const preset = mask && mask in MASKS ? MASKS[mask] : null;
    const pattern = preset ? preset.pattern : mask || "";
    const placeholderText = rest.placeholder || (preset ? preset.placeholder : void 0);
    const isCurrency = mask === "currency";
    const handleChange = React.useCallback(
      (e) => {
        const raw = e.target.value;
        let masked;
        if (isCurrency) {
          masked = applyCurrencyMask(raw);
        } else if (pattern) {
          masked = applyMask(raw, pattern);
        } else {
          masked = raw;
        }
        e.target.value = masked;
        onChange == null ? void 0 : onChange(e, unmask(raw));
      },
      [pattern, isCurrency, onChange]
    );
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        StyledInput$1,
        {
          ref,
          $sz: size,
          $error: !!error,
          placeholder: placeholderText,
          onChange: handleChange,
          "aria-invalid": !!error || void 0,
          inputMode: mask ? "numeric" : void 0,
          ...rest
        }
      ),
      error && /* @__PURE__ */ jsxRuntime.jsx(ErrorText, { children: error })
    ] });
  }
);
MaskedInput.displayName = "MaskedInput";
const spin$1 = styled.keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  background: transparent;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  gap: 6px;

  ${({ $sz }) => $sz === "sm" ? styled.css`height: 32px; padding: 0 10px;` : $sz === "lg" ? styled.css`height: 48px; padding: 0 14px;` : styled.css`height: 40px; padding: 0 12px;`}

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }

  &:has(input:disabled) { opacity: 0.5; }
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  ${({ $sz }) => styled.css`font-size: ${$sz === "sm" ? "14px" : $sz === "lg" ? "18px" : "16px"};`}
`;
const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.foreground};
  font-family: inherit;
  min-width: 0;

  ${({ $sz }) => $sz === "sm" ? styled.css`font-size: ${({ theme }) => theme.typography.fontSize.xs};` : $sz === "lg" ? styled.css`font-size: 1rem;` : styled.css`font-size: ${({ theme }) => theme.typography.fontSize.sm};`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:disabled { cursor: not-allowed; }
`;
const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1;
  font-size: 14px;
  transition: color 0.15s ease;

  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;
const ShortcutBadge = styled.kbd`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 2px 5px;
  font-size: 11px;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.mutedForeground};
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  line-height: 1.4;
  pointer-events: none;
`;
const SpinnerIcon = styled.div`
  width: 14px;
  height: 14px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 50%;
  flex-shrink: 0;
  animation: ${spin$1} 0.6s linear infinite;
`;
const SearchBar = React.forwardRef(
  ({ size = "md", shortcut, loading, onClear, value, onChange, ...rest }, ref) => {
    const hasValue = value !== void 0 ? String(value).length > 0 : false;
    return /* @__PURE__ */ jsxRuntime.jsxs(Wrapper, { $sz: size, children: [
      /* @__PURE__ */ jsxRuntime.jsx(SearchIcon, { $sz: size, children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        StyledInput,
        {
          ref,
          $sz: size,
          value,
          onChange,
          type: "search",
          autoComplete: "off",
          ...rest
        }
      ),
      loading && /* @__PURE__ */ jsxRuntime.jsx(SpinnerIcon, {}),
      !loading && hasValue && onClear && /* @__PURE__ */ jsxRuntime.jsx(ClearButton, { type: "button", onClick: onClear, "aria-label": "Clear search", tabIndex: -1, children: "✕" }),
      !loading && shortcut && !hasValue && /* @__PURE__ */ jsxRuntime.jsx(ShortcutBadge, { children: shortcut })
    ] });
  }
);
SearchBar.displayName = "SearchBar";
function resolveColor$1(theme, colorScheme) {
  if (!colorScheme) return theme.colors.foreground;
  const c = theme.colors[colorScheme];
  if (typeof c === "object" && c !== null && "DEFAULT" in c) return c.DEFAULT;
  if (typeof c === "string") return c;
  return theme.colors.foreground;
}
const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;

  ${({ $sz }) => $sz === "sm" ? styled.css`padding: 1px 8px; font-size: 0.6875rem;` : styled.css`padding: 2px 10px; font-size: 0.75rem;`}

  ${({ $v, $c, theme }) => {
  switch ($v) {
    case "outline":
      return styled.css`background: transparent; border: 1px solid ${$c}; color: ${$c};`;
    case "soft":
      return styled.css`background: ${$c}22; color: ${$c}; border: 1px solid transparent;`;
    default:
      return styled.css`background: ${$c}; color: ${theme.colors.background}; border: 1px solid transparent;`;
  }
}}

  ${({ $dot, $c }) => $dot && styled.css`
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${$c};
      }
    `}
`;
const Badge = React.forwardRef(
  ({ variant = "solid", colorScheme, size = "md", dot, children, ...rest }, ref) => {
    const theme = styled.useTheme();
    const color = resolveColor$1(theme, colorScheme);
    return /* @__PURE__ */ jsxRuntime.jsx(StyledBadge, { ref, $v: variant, $c: color, $sz: size, $dot: dot, ...rest, children });
  }
);
Badge.displayName = "Badge";
function getAlertColor(theme, variant) {
  const g = theme.colors[variant];
  return typeof g === "object" && "DEFAULT" in g ? g.DEFAULT : theme.colors.foreground;
}
const StyledAlert = styled.div`
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.5;
  border: 1px solid ${({ $c }) => $c}44;
  background: ${({ $c }) => $c}11;
  color: ${({ theme }) => theme.colors.foreground};
  position: relative;
`;
const AlertTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: 2px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mutedForeground};
  cursor: pointer;
  padding: 2px;
  font-size: 16px;
  line-height: 1;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;
const Alert = React.forwardRef(
  ({ variant = "info", closable, onClose, icon, children, ...rest }, ref) => {
    const theme = styled.useTheme();
    const color = getAlertColor(theme, variant);
    const [visible, setVisible] = React.useState(true);
    if (!visible) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs(StyledAlert, { ref, $c: color, role: "alert", ...rest, children: [
      icon && /* @__PURE__ */ jsxRuntime.jsx("span", { children: icon }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { style: { flex: 1 }, children }),
      closable && /* @__PURE__ */ jsxRuntime.jsx(CloseButton, { onClick: () => {
        setVisible(false);
        onClose == null ? void 0 : onClose();
      }, "aria-label": "Close", children: "×" })
    ] });
  }
);
Alert.displayName = "Alert";
const indeterminate = styled.keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`;
const Track = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  ${({ $sz }) => $sz === "sm" ? styled.css`height: 4px;` : $sz === "lg" ? styled.css`height: 12px;` : styled.css`height: 8px;`}
`;
const Fill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${({ $color, theme }) => $color || theme.colors.primary};
  transition: width 0.3s ease;

  ${({ $indeterminate, $value }) => $indeterminate ? styled.css`width: 25%; animation: ${indeterminate} 1.5s ease infinite;` : styled.css`width: ${$value}%;`}
`;
function Progress({ value = 0, size = "md", indeterminate: ind, color }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Track, { $sz: size, role: "progressbar", "aria-valuenow": ind ? void 0 : value, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ jsxRuntime.jsx(Fill, { $value: value, $indeterminate: ind, $color: color }) });
}
const spin = styled.keyframes`
  to { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.muted};
  border-top-color: ${({ $color, theme }) => $color || theme.colors.primary};
  animation: ${spin} 0.6s linear infinite;

  ${({ $size }) => {
  const s = $size === "sm" ? 16 : $size === "lg" ? 32 : $size === "xl" ? 48 : 24;
  return styled.css`width: ${s}px; height: ${s}px;`;
}}
`;
const shimmer = styled.keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
const Skeleton = styled.div`
  width: ${({ $w }) => typeof $w === "number" ? `${$w}px` : $w || "100%"};
  height: ${({ $h }) => typeof $h === "number" ? `${$h}px` : $h || "20px"};
  border-radius: ${({ $radius, theme }) => $radius || theme.radii.md};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.muted} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.muted} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease infinite;
`;
const slideIn = styled.keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;
const slideOut = styled.keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
`;
function getVariantColor(theme, variant) {
  if (variant === "default") return null;
  const g = theme.colors[variant];
  return typeof g === "object" && "DEFAULT" in g ? g.DEFAULT : null;
}
const StyledViewport = styled(RadixToast__namespace.Viewport)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 420px;
  max-width: 90vw;
  z-index: ${({ theme }) => theme.zIndex.toast};
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledRoot = styled(RadixToast__namespace.Root)`
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: 2px;

  &[data-state='open'] { animation: ${slideIn} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideOut} 0.2s ease; }

  ${({ $variant, theme }) => {
  if (!$variant || $variant === "default") return "";
  const c = getVariantColor(theme, $variant);
  return c ? styled.css`border-left: 3px solid ${c};` : "";
}}
`;
const StyledTitle = styled(RadixToast__namespace.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
`;
const StyledDescription = styled(RadixToast__namespace.Description)`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
const StyledAction = styled(RadixToast__namespace.Action)`
  all: unset;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-top: 8px;
  &:hover { text-decoration: underline; }
`;
const StyledClose = styled(RadixToast__namespace.Close)`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mutedForeground};
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;
const Toast = {
  Provider: RadixToast__namespace.Provider,
  Viewport: StyledViewport,
  Root: StyledRoot,
  Title: StyledTitle,
  Description: StyledDescription,
  Action: StyledAction,
  Close: StyledClose
};
const fadeIn$9 = styled.keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp$4 = styled.keyframes`from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); }`;
const Overlay$3 = styled(RadixDialog__namespace.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn$9} 0.15s ease;
`;
const Content$d = styled(RadixDialog__namespace.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  min-width: 400px;
  max-width: 90vw;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: ${slideUp$4} 0.2s ease;

  &:focus { outline: none; }
`;
const Title$3 = styled(RadixDialog__namespace.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;
const Description$2 = styled(RadixDialog__namespace.Description)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 20px;
  line-height: 1.5;
`;
const Footer$4 = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`;
const Close$1 = styled(RadixDialog__namespace.Close)`
  all: unset;
  cursor: pointer;
`;
const Dialog = {
  Root: RadixDialog__namespace.Root,
  Trigger: RadixDialog__namespace.Trigger,
  Portal: RadixDialog__namespace.Portal,
  Overlay: Overlay$3,
  Content: Content$d,
  Title: Title$3,
  Description: Description$2,
  Footer: Footer$4,
  Close: Close$1
};
const fadeIn$8 = styled.keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp$3 = styled.keyframes`from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); }`;
const Overlay$2 = styled(RadixAlertDialog__namespace.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn$8} 0.15s ease;
`;
const Content$c = styled(RadixAlertDialog__namespace.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  min-width: 400px;
  max-width: 90vw;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: ${slideUp$3} 0.2s ease;
  &:focus { outline: none; }
`;
const Title$2 = styled(RadixAlertDialog__namespace.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;
const Description$1 = styled(RadixAlertDialog__namespace.Description)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 20px;
  line-height: 1.5;
`;
const Footer$3 = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
const AlertDialog = {
  Root: RadixAlertDialog__namespace.Root,
  Trigger: RadixAlertDialog__namespace.Trigger,
  Portal: RadixAlertDialog__namespace.Portal,
  Overlay: Overlay$2,
  Content: Content$c,
  Title: Title$2,
  Description: Description$1,
  Footer: Footer$3,
  Cancel: RadixAlertDialog__namespace.Cancel,
  Action: RadixAlertDialog__namespace.Action
};
const fadeIn$7 = styled.keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideAnimations = {
  right: styled.keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`,
  left: styled.keyframes`from { transform: translateX(-100%); } to { transform: translateX(0); }`,
  top: styled.keyframes`from { transform: translateY(-100%); } to { transform: translateY(0); }`,
  bottom: styled.keyframes`from { transform: translateY(100%); } to { transform: translateY(0); }`
};
const Overlay$1 = styled(RadixDialog__namespace.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn$7} 0.15s ease;
`;
const Content$b = styled(RadixDialog__namespace.Content)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.card};
  padding: 24px;
  overflow-y: auto;
  outline: none;

  ${({ $side, theme }) => {
  const isHorizontal = $side === "left" || $side === "right";
  return styled.css`
      ${$side === "top" ? "top: 0; left: 0; right: 0;" : ""}
      ${$side === "bottom" ? "bottom: 0; left: 0; right: 0;" : ""}
      ${$side === "left" ? "top: 0; left: 0; bottom: 0;" : ""}
      ${$side === "right" ? "top: 0; right: 0; bottom: 0;" : ""}
      ${isHorizontal ? "width: 360px; max-width: 90vw; height: 100%;" : "height: 360px; max-height: 90vh; width: 100%;"}
      border-${$side === "right" ? "left" : $side === "left" ? "right" : $side === "top" ? "bottom" : "top"}: 1px solid ${theme.colors.border};
      animation: ${slideAnimations[$side]} 0.2s ease;
    `;
}}
`;
const Title$1 = styled(RadixDialog__namespace.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 16px;
`;
const Close = styled(RadixDialog__namespace.Close)`
  all: unset;
  cursor: pointer;
`;
const Drawer = {
  Root: RadixDialog__namespace.Root,
  Trigger: RadixDialog__namespace.Trigger,
  Portal: RadixDialog__namespace.Portal,
  Overlay: Overlay$1,
  Content: Content$b,
  Title: Title$1,
  Close
};
const fadeIn$6 = styled.keyframes`from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`;
const Content$a = styled(RadixPopover__namespace.Content)`
  z-index: ${({ theme }) => theme.zIndex.popover};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  min-width: 200px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$6} 0.15s ease;
  outline: none;
`;
const Arrow$2 = styled(RadixPopover__namespace.Arrow)`
  fill: ${({ theme }) => theme.colors.card};
`;
const Popover = {
  Root: RadixPopover__namespace.Root,
  Trigger: RadixPopover__namespace.Trigger,
  Anchor: RadixPopover__namespace.Anchor,
  Portal: RadixPopover__namespace.Portal,
  Content: Content$a,
  Arrow: Arrow$2,
  Close: RadixPopover__namespace.Close
};
const fadeIn$5 = styled.keyframes`from { opacity: 0; } to { opacity: 1; }`;
const Content$9 = styled(RadixTooltip__namespace.Content)`
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: 1;
  white-space: nowrap;
  animation: ${fadeIn$5} 0.1s ease;
  user-select: none;
`;
const Arrow$1 = styled(RadixTooltip__namespace.Arrow)`
  fill: ${({ theme }) => theme.colors.foreground};
`;
const Tooltip = {
  Provider: RadixTooltip__namespace.Provider,
  Root: RadixTooltip__namespace.Root,
  Trigger: RadixTooltip__namespace.Trigger,
  Portal: RadixTooltip__namespace.Portal,
  Content: Content$9,
  Arrow: Arrow$1
};
const fadeIn$4 = styled.keyframes`from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`;
const Content$8 = styled(RadixDropdown__namespace.Content)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$4} 0.15s ease;
`;
const Item$4 = styled(RadixDropdown__namespace.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &[data-disabled] { opacity: 0.5; pointer-events: none; }
`;
const CheckboxItem = styled(RadixDropdown__namespace.CheckboxItem)`
  padding: 8px 10px;
  padding-left: 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  position: relative;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;
const RadioItem = styled(RadixDropdown__namespace.RadioItem)`
  padding: 8px 10px;
  padding-left: 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  position: relative;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;
const Separator$3 = styled(RadixDropdown__namespace.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;
const Label = styled(RadixDropdown__namespace.Label)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const SubContent = styled(RadixDropdown__namespace.SubContent)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 160px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$4} 0.15s ease;
`;
const SubTrigger = styled(RadixDropdown__namespace.SubTrigger)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &::after { content: '›'; margin-left: 8px; }
`;
const DropdownMenu = {
  Root: RadixDropdown__namespace.Root,
  Trigger: RadixDropdown__namespace.Trigger,
  Portal: RadixDropdown__namespace.Portal,
  Content: Content$8,
  Item: Item$4,
  CheckboxItem,
  RadioItem,
  RadioGroup: RadixDropdown__namespace.RadioGroup,
  ItemIndicator: RadixDropdown__namespace.ItemIndicator,
  Separator: Separator$3,
  Label,
  Group: RadixDropdown__namespace.Group,
  Sub: RadixDropdown__namespace.Sub,
  SubTrigger,
  SubContent
};
const fadeIn$3 = styled.keyframes`from { opacity: 0; } to { opacity: 1; }`;
const Content$7 = styled(RadixContextMenu__namespace.Content)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$3} 0.1s ease;
`;
const Item$3 = styled(RadixContextMenu__namespace.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;
const Separator$2 = styled(RadixContextMenu__namespace.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;
const ContextMenu = {
  Root: RadixContextMenu__namespace.Root,
  Trigger: RadixContextMenu__namespace.Trigger,
  Portal: RadixContextMenu__namespace.Portal,
  Content: Content$7,
  Item: Item$3,
  Separator: Separator$2,
  Group: RadixContextMenu__namespace.Group,
  Label: RadixContextMenu__namespace.Label,
  Sub: RadixContextMenu__namespace.Sub,
  SubTrigger: RadixContextMenu__namespace.SubTrigger,
  SubContent: RadixContextMenu__namespace.SubContent
};
const List$1 = styled(RadixTabs__namespace.List)`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const Trigger$2 = styled(RadixTabs__namespace.Trigger)`
  all: unset;
  padding: 10px 16px;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s ease;

  &[data-state='active'] {
    color: ${({ theme }) => theme.colors.foreground};
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: -2px; }
`;
const Content$6 = styled(RadixTabs__namespace.Content)`
  padding: 16px 0;
  outline: none;
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
`;
const Tabs = {
  Root: RadixTabs__namespace.Root,
  List: List$1,
  Trigger: Trigger$2,
  Content: Content$6
};
const Root$9 = styled.aside`
  width: ${({ $collapsed, $width }) => $collapsed ? "60px" : $width || "240px"};
  background: ${({ theme }) => theme.colors.card};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: width 0.2s ease;
  overflow: hidden;
  flex-shrink: 0;
`;
const Header$3 = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
const SContent = styled.div`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`;
const Footer$2 = styled.div`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
const Item$2 = styled.div`
  padding: 10px 16px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ $active, theme }) => $active ? theme.colors.foreground : theme.colors.mutedForeground};
  background: ${({ $active, theme }) => $active ? theme.colors.accent : "transparent"};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.foreground};
  }
`;
const Group$1 = styled.div`
  &:not(:first-child) { margin-top: 8px; }
`;
const GroupLabel$1 = styled.div`
  padding: 4px 16px 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const Sidebar = {
  Root: Root$9,
  Header: Header$3,
  Content: SContent,
  Footer: Footer$2,
  Item: Item$2,
  Group: Group$1,
  GroupLabel: GroupLabel$1
};
const Root$8 = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
const BItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
const Link = styled.a`
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-decoration: none;
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; text-decoration: underline; }
`;
const Page = styled.span`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const Sep = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
const Breadcrumb = {
  Root: Root$8,
  Item: BItem,
  Link,
  Page,
  Separator: Sep
};
const Root$7 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const PageButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $active, theme }) => $active ? theme.colors.primary : "transparent"};
  color: ${({ $active, theme }) => $active ? theme.colors.primaryForeground : theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.accent};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
const Ellipsis = styled.span`
  padding: 0 4px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
function Pagination({ page, totalPages, siblings = 1, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || i >= page - siblings && i <= page + siblings) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Root$7, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(PageButton, { onClick: () => onPageChange(page - 1), disabled: page === 1, "aria-label": "Previous page", children: "‹" }),
    pages.map(
      (p, i) => p === "..." ? /* @__PURE__ */ jsxRuntime.jsx(Ellipsis, { children: "…" }, `e${i}`) : /* @__PURE__ */ jsxRuntime.jsx(PageButton, { $active: p === page, onClick: () => onPageChange(p), "aria-label": `Page ${p}`, "aria-current": p === page ? "page" : void 0, children: p }, p)
    ),
    /* @__PURE__ */ jsxRuntime.jsx(PageButton, { onClick: () => onPageChange(page + 1), disabled: page === totalPages, "aria-label": "Next page", children: "›" })
  ] });
}
const fadeIn$2 = styled.keyframes`from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); }`;
const Root$6 = styled(RadixNavigationMenu__namespace.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 10;
`;
const List = styled(RadixNavigationMenu__namespace.List)`
  display: flex;
  list-style: none;
  padding: 4px;
  margin: 0;
  gap: 2px;
`;
const Trigger$1 = styled(RadixNavigationMenu__namespace.Trigger)`
  all: unset;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover { background: ${({ theme }) => theme.colors.accent}; }
  &[data-state='open'] { background: ${({ theme }) => theme.colors.accent}; }
`;
const NLink = styled(RadixNavigationMenu__namespace.Link)`
  all: unset;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;
const Content$5 = styled(RadixNavigationMenu__namespace.Content)`
  position: absolute;
  top: 100%;
  left: 0;
  width: auto;
  min-width: 400px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$2} 0.2s ease;
`;
const Viewport$1 = styled(RadixNavigationMenu__namespace.Viewport)`
  position: relative;
  margin-top: 4px;
`;
const NavigationMenu = {
  Root: Root$6,
  List,
  Item: RadixNavigationMenu__namespace.Item,
  Trigger: Trigger$1,
  Link: NLink,
  Content: Content$5,
  Viewport: Viewport$1,
  Indicator: RadixNavigationMenu__namespace.Indicator
};
const Root$5 = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  th, td {
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    ${({ $compact }) => $compact ? styled.css`padding: 6px 10px;` : styled.css`padding: 10px 14px;`}
  }

  th {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.mutedForeground};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  ${({ $striped, theme }) => $striped && styled.css`tbody tr:nth-child(even) { background: ${theme.colors.muted}44; }`}

  ${({ $hoverable, theme }) => $hoverable && styled.css`tbody tr:hover { background: ${theme.colors.accent}; }`}
`;
const Header$2 = styled.thead``;
const Body = styled.tbody``;
const Footer$1 = styled.tfoot``;
const Row = styled.tr``;
const Head = styled.th``;
const Cell = styled.td``;
const Table = { Root: Root$5, Header: Header$2, Body, Footer: Footer$1, Row, Head, Cell };
const Root$4 = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  transition: all 0.2s ease;

  ${({ $variant, theme }) => {
  switch ($variant) {
    case "filled":
      return styled.css`background: ${theme.colors.muted}; border: 1px solid transparent;`;
    case "outline":
      return styled.css`background: ${theme.colors.card}; border: 1px solid ${theme.colors.border};`;
    default:
      return styled.css`background: ${theme.colors.card}; border: 1px solid ${theme.colors.border}; box-shadow: ${theme.shadows.md};`;
  }
}}

  ${({ $interactive, theme }) => $interactive && styled.css`
      cursor: pointer;
      &:hover { transform: translateY(-2px); box-shadow: ${theme.shadows.lg}; }
    `}
`;
const Header$1 = styled.div`padding: 20px 20px 0;`;
const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
`;
const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 4px;
`;
const Content$4 = styled.div`padding: 20px;`;
const Footer = styled.div`
  padding: 0 20px 20px;
  display: flex;
  gap: 8px;
`;
const Card = { Root: Root$4, Header: Header$1, Title, Description, Content: Content$4, Footer };
const sizes = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };
const Root$3 = styled(RadixAvatar__namespace.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  vertical-align: middle;

  ${({ $shape, theme }) => $shape === "square" ? styled.css`border-radius: ${theme.radii.md};` : styled.css`border-radius: 50%;`}

  ${({ $size }) => {
  const s = sizes[$size || "md"];
  return styled.css`width: ${s}px; height: ${s}px;`;
}}
`;
const Image = styled(RadixAvatar__namespace.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Fallback = styled(RadixAvatar__namespace.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ $size }) => {
  const s = sizes[$size || "md"];
  return `${s * 0.4}px`;
}};
`;
const Avatar = { Root: Root$3, Image, Fallback };
const slideDown$1 = styled.keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;
const slideUp$2 = styled.keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;
const Root$2 = styled(RadixAccordion__namespace.Root)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;
const Item$1 = styled(RadixAccordion__namespace.Item)`
  &:not(:last-child) { border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
`;
const Header = styled(RadixAccordion__namespace.Header)`
  display: flex;
`;
const Trigger = styled(RadixAccordion__namespace.Trigger)`
  all: unset;
  flex: 1;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  transition: background 0.15s ease;
  font-family: inherit;

  &:hover { background: ${({ theme }) => theme.colors.accent}; }

  &::after {
    content: '+';
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.mutedForeground};
    transition: transform 0.2s ease;
  }

  &[data-state='open']::after {
    content: '−';
  }
`;
const Content$3 = styled(RadixAccordion__namespace.Content)`
  overflow: hidden;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;

  &[data-state='open'] { animation: ${slideDown$1} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideUp$2} 0.3s ease; }
`;
const ContentInner = styled.div`
  padding: 0 16px 14px;
`;
const Accordion = { Root: Root$2, Item: Item$1, Header, Trigger, Content: Content$3, ContentInner };
function resolveColor(theme, cs) {
  if (!cs) return theme.colors.foreground;
  const c = theme.colors[cs];
  if (typeof c === "object" && c !== null && "DEFAULT" in c) return c.DEFAULT;
  if (typeof c === "string") return c;
  return theme.colors.foreground;
}
const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: default;

  ${({ $sz }) => $sz === "sm" ? styled.css`padding: 1px 8px; font-size: 0.6875rem;` : styled.css`padding: 3px 10px; font-size: 0.75rem;`}

  ${({ $v, $c, theme }) => {
  switch ($v) {
    case "outline":
      return styled.css`background: transparent; border: 1px solid ${$c}; color: ${$c};`;
    case "soft":
      return styled.css`background: ${$c}22; color: ${$c}; border: 1px solid transparent;`;
    default:
      return styled.css`background: ${$c}; color: ${theme.colors.background}; border: 1px solid transparent;`;
  }
}}
`;
const CloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: 2px;
  opacity: 0.7;
  font-size: 0.8em;
  &:hover { opacity: 1; }
`;
const Tag = React.forwardRef(
  ({ variant = "solid", colorScheme, size = "md", closable, onClose, children, ...rest }, ref) => {
    const theme = styled.useTheme();
    const color = resolveColor(theme, colorScheme);
    return /* @__PURE__ */ jsxRuntime.jsxs(StyledTag, { ref, $v: variant, $c: color, $sz: size, ...rest, children: [
      children,
      closable && /* @__PURE__ */ jsxRuntime.jsx(CloseBtn, { onClick: onClose, "aria-label": "Remove", children: "×" })
    ] });
  }
);
Tag.displayName = "Tag";
const ChartWrapper = styled.div`
  width: 100%;
  height: ${({ $h }) => $h || "300px"};
`;
const TooltipBox = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;
const TooltipLabel = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 4px;
`;
const TooltipValue = styled.div`
  color: ${({ $color, theme }) => $color || theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;
function CalangoTooltip({ active, payload, label }) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(TooltipBox, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipLabel, { children: label }),
    payload.map((p, i) => /* @__PURE__ */ jsxRuntime.jsxs(TooltipValue, { $color: p.color, children: [
      p.name,
      ": ",
      typeof p.value === "number" ? p.value.toLocaleString() : p.value
    ] }, i))
  ] });
}
function useChartTheme() {
  const theme = styled.useTheme();
  return {
    theme,
    grid: theme.colors.border,
    text: theme.colors.mutedForeground,
    primary: theme.colors.primary,
    bg: theme.colors.background,
    fontSize: 11,
    fontFamily: theme.typography.fontFamily.sans
  };
}
function BarChart({
  data,
  height,
  color,
  colors,
  horizontal = false,
  showGrid = true,
  showTooltip = true,
  showLegend = false,
  radius = 4,
  dataKeys
}) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(
    recharts.BarChart,
    {
      data,
      layout: horizontal ? "vertical" : "horizontal",
      margin: { top: 8, right: 8, bottom: 4, left: horizontal ? 40 : 0 },
      children: [
        showGrid && /* @__PURE__ */ jsxRuntime.jsx(recharts.CartesianGrid, { strokeDasharray: "3 3", stroke: ct.grid, vertical: !horizontal, horizontal: horizontal || true }),
        horizontal ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(recharts.XAxis, { type: "number", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntime.jsx(recharts.YAxis, { type: "category", dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 50 })
        ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(recharts.XAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsxRuntime.jsx(recharts.YAxis, { tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 40 })
        ] }),
        showTooltip && /* @__PURE__ */ jsxRuntime.jsx(recharts.Tooltip, { content: /* @__PURE__ */ jsxRuntime.jsx(CalangoTooltip, {}), cursor: { fill: `${ct.primary}08` } }),
        showLegend && /* @__PURE__ */ jsxRuntime.jsx(recharts.Legend, { wrapperStyle: { fontSize: ct.fontSize, fontFamily: ct.fontFamily } }),
        hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsxRuntime.jsx(recharts.Bar, { dataKey: dk.key, name: dk.name || dk.key, fill: dk.color, radius: [radius, radius, radius, radius] }, dk.key)) : /* @__PURE__ */ jsxRuntime.jsx(recharts.Bar, { dataKey: "value", radius: [radius, radius, radius, radius], children: data.map((entry, i) => /* @__PURE__ */ jsxRuntime.jsx(recharts.Cell, { fill: entry.color || (colors ? colors[i % colors.length] : color || ct.primary) }, i)) })
      ]
    }
  ) }) });
}
function LineChart({
  data,
  height,
  color,
  showGrid = true,
  showDots = true,
  showTooltip = true,
  curved = true,
  strokeWidth = 2,
  dataKeys
}) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(recharts.LineChart, { data, margin: { top: 8, right: 8, bottom: 4, left: 0 }, children: [
    showGrid && /* @__PURE__ */ jsxRuntime.jsx(recharts.CartesianGrid, { strokeDasharray: "3 3", stroke: ct.grid }),
    /* @__PURE__ */ jsxRuntime.jsx(recharts.XAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
    /* @__PURE__ */ jsxRuntime.jsx(recharts.YAxis, { tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 40 }),
    showTooltip && /* @__PURE__ */ jsxRuntime.jsx(recharts.Tooltip, { content: /* @__PURE__ */ jsxRuntime.jsx(CalangoTooltip, {}) }),
    hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsxRuntime.jsx(
      recharts.Line,
      {
        dataKey: dk.key,
        name: dk.name || dk.key,
        stroke: dk.color,
        strokeWidth,
        strokeDasharray: dk.dashed ? "5 5" : void 0,
        type: curved ? "monotone" : "linear",
        dot: showDots ? { r: 3, fill: ct.bg, stroke: dk.color, strokeWidth: 2 } : false,
        activeDot: { r: 5 }
      },
      dk.key
    )) : /* @__PURE__ */ jsxRuntime.jsx(
      recharts.Line,
      {
        dataKey: "value",
        stroke: color || ct.primary,
        strokeWidth,
        type: curved ? "monotone" : "linear",
        dot: showDots ? { r: 3, fill: ct.bg, stroke: color || ct.primary, strokeWidth: 2 } : false,
        activeDot: { r: 5 }
      }
    )
  ] }) }) });
}
function AreaChart({
  data,
  height,
  color,
  showGrid = true,
  showTooltip = true,
  stacked = false,
  dataKeys
}) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(recharts.AreaChart, { data, margin: { top: 8, right: 8, bottom: 4, left: 0 }, children: [
    showGrid && /* @__PURE__ */ jsxRuntime.jsx(recharts.CartesianGrid, { strokeDasharray: "3 3", stroke: ct.grid }),
    /* @__PURE__ */ jsxRuntime.jsx(recharts.XAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
    /* @__PURE__ */ jsxRuntime.jsx(recharts.YAxis, { tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 40 }),
    showTooltip && /* @__PURE__ */ jsxRuntime.jsx(recharts.Tooltip, { content: /* @__PURE__ */ jsxRuntime.jsx(CalangoTooltip, {}) }),
    hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsxRuntime.jsx(
      recharts.Area,
      {
        dataKey: dk.key,
        name: dk.name || dk.key,
        stroke: dk.color,
        fill: dk.color,
        fillOpacity: 0.15,
        strokeWidth: 2,
        type: "monotone",
        stackId: stacked ? "stack" : void 0
      },
      dk.key
    )) : /* @__PURE__ */ jsxRuntime.jsx(
      recharts.Area,
      {
        dataKey: "value",
        stroke: color || ct.primary,
        fill: color || ct.primary,
        fillOpacity: 0.15,
        strokeWidth: 2,
        type: "monotone"
      }
    )
  ] }) }) });
}
const defaultColors = ["#FFFFFF", "#A1A1AA", "#71717A", "#3F3F46", "#22C55E", "#3B82F6", "#F59E0B", "#EF4444", "#A855F7", "#EC4899"];
function DonutChart({
  data,
  height,
  donut = true,
  innerRadius = 60,
  showTooltip = true,
  showLegend = true,
  showLabels = false
}) {
  const ct = useChartTheme();
  return /* @__PURE__ */ jsxRuntime.jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(recharts.PieChart, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      recharts.Pie,
      {
        data,
        dataKey: "value",
        nameKey: "label",
        cx: "50%",
        cy: "50%",
        innerRadius: donut ? innerRadius : 0,
        outerRadius: 80,
        paddingAngle: donut ? 2 : 0,
        label: showLabels ? ({ label, percent }) => `${label} ${(percent * 100).toFixed(0)}%` : false,
        children: data.map((entry, i) => /* @__PURE__ */ jsxRuntime.jsx(recharts.Cell, { fill: entry.color || defaultColors[i % defaultColors.length], stroke: "transparent" }, i))
      }
    ),
    showTooltip && /* @__PURE__ */ jsxRuntime.jsx(recharts.Tooltip, { content: /* @__PURE__ */ jsxRuntime.jsx(CalangoTooltip, {}) }),
    showLegend && /* @__PURE__ */ jsxRuntime.jsx(recharts.Legend, { wrapperStyle: { fontSize: ct.fontSize, fontFamily: ct.fontFamily, color: ct.text } })
  ] }) }) });
}
function RadarChart({ data, height, color, showTooltip = true, dataKeys }) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(recharts.RadarChart, { data, cx: "50%", cy: "50%", outerRadius: "70%", children: [
    /* @__PURE__ */ jsxRuntime.jsx(recharts.PolarGrid, { stroke: ct.grid }),
    /* @__PURE__ */ jsxRuntime.jsx(recharts.PolarAngleAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize } }),
    /* @__PURE__ */ jsxRuntime.jsx(recharts.PolarRadiusAxis, { tick: { fill: ct.text, fontSize: 9 }, axisLine: false }),
    showTooltip && /* @__PURE__ */ jsxRuntime.jsx(recharts.Tooltip, { content: /* @__PURE__ */ jsxRuntime.jsx(CalangoTooltip, {}) }),
    hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsxRuntime.jsx(recharts.Radar, { dataKey: dk.key, name: dk.name || dk.key, stroke: dk.color, fill: dk.color, fillOpacity: 0.2 }, dk.key)) : /* @__PURE__ */ jsxRuntime.jsx(recharts.Radar, { dataKey: "value", stroke: color || ct.primary, fill: color || ct.primary, fillOpacity: 0.2 })
  ] }) }) });
}
function RadialBarChartComponent({ data, height, showLegend = true, showTooltip = true }) {
  const ct = useChartTheme();
  const formatted = data.map((d, i) => ({
    ...d,
    name: d.label,
    fill: d.color || defaultColors[i % defaultColors.length]
  }));
  return /* @__PURE__ */ jsxRuntime.jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntime.jsxs(
    recharts.RadialBarChart,
    {
      data: formatted,
      cx: "50%",
      cy: "50%",
      innerRadius: "20%",
      outerRadius: "90%",
      barSize: 12,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(recharts.RadialBar, { dataKey: "value", background: { fill: `${ct.grid}44` }, cornerRadius: 6 }),
        showTooltip && /* @__PURE__ */ jsxRuntime.jsx(recharts.Tooltip, { content: /* @__PURE__ */ jsxRuntime.jsx(CalangoTooltip, {}) }),
        showLegend && /* @__PURE__ */ jsxRuntime.jsx(recharts.Legend, { wrapperStyle: { fontSize: ct.fontSize, fontFamily: ct.fontFamily, color: ct.text } })
      ]
    }
  ) }) });
}
function SparkLine({ data, width = "120px", height = "32px", color, area = false }) {
  const ct = useChartTheme();
  const c = color || ct.primary;
  const chartData = data.map((value, i) => ({ value, i }));
  return /* @__PURE__ */ jsxRuntime.jsx("div", { style: { width, height }, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.ResponsiveContainer, { width: "100%", height: "100%", children: area ? /* @__PURE__ */ jsxRuntime.jsx(recharts.AreaChart, { data: chartData, margin: { top: 2, right: 2, bottom: 2, left: 2 }, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.Area, { dataKey: "value", stroke: c, fill: c, fillOpacity: 0.15, strokeWidth: 1.5, type: "monotone", dot: false }) }) : /* @__PURE__ */ jsxRuntime.jsx(recharts.LineChart, { data: chartData, margin: { top: 2, right: 2, bottom: 2, left: 2 }, children: /* @__PURE__ */ jsxRuntime.jsx(recharts.Line, { dataKey: "value", stroke: c, strokeWidth: 1.5, type: "monotone", dot: false }) }) }) });
}
const StatRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;
const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StatLbl = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const StatVal = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;
const StatTrend = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $positive, theme }) => $positive ? theme.colors.success.DEFAULT : theme.colors.error.DEFAULT};
`;
function StatCard({ label, value, trend, sparkData, sparkColor, icon }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(StatRoot, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(StatHeader, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(StatLbl, { children: label }),
      icon
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(StatVal, { children: value }),
    /* @__PURE__ */ jsxRuntime.jsxs(StatHeader, { children: [
      trend && /* @__PURE__ */ jsxRuntime.jsxs(StatTrend, { $positive: trend.positive, children: [
        trend.positive ? "↑" : "↓",
        " ",
        trend.value
      ] }),
      sparkData && /* @__PURE__ */ jsxRuntime.jsx(SparkLine, { data: sparkData, color: sparkColor, area: true })
    ] })
  ] });
}
const fadeIn$1 = styled.keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp$1 = styled.keyframes`from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); }`;
const Overlay = styled(RadixDialog__namespace.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh;
  animation: ${fadeIn$1} 0.1s ease;
`;
const Content$2 = styled(RadixDialog__namespace.Content)`
  width: 500px;
  max-width: 90vw;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: ${slideUp$1} 0.15s ease;
  outline: none;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: inherit;
  outline: none;
  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
`;
const Group = styled.div`padding: 8px;`;
const GroupLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  padding: 4px 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const Item = styled.div`
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ $selected, theme }) => $selected ? theme.colors.accent : "transparent"};
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;
const Shortcut = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;
const Empty = styled.div`
  padding: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
function CommandPalette({ open, onOpenChange, groups, placeholder = "Type a command or search..." }) {
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    if (!open) setSearch("");
  }, [open]);
  React.useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);
  const filtered = groups.map((g) => ({
    ...g,
    items: g.items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
  })).filter((g) => g.items.length > 0);
  return /* @__PURE__ */ jsxRuntime.jsx(RadixDialog__namespace.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsx(RadixDialog__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(Overlay, { children: /* @__PURE__ */ jsxRuntime.jsxs(Content$2, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(RadixDialog__namespace.Title, { style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }, children: "Command Palette" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      SearchInput,
      {
        placeholder,
        value: search,
        onChange: (e) => setSearch(e.target.value),
        autoFocus: true
      }
    ),
    filtered.map((group, gi) => /* @__PURE__ */ jsxRuntime.jsxs(Group, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(GroupLabel, { children: group.label }),
      group.items.map((item, ii) => /* @__PURE__ */ jsxRuntime.jsxs(Item, { onClick: () => {
        var _a;
        (_a = item.onSelect) == null ? void 0 : _a.call(item);
        onOpenChange(false);
      }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          item.icon,
          item.label
        ] }),
        item.shortcut && /* @__PURE__ */ jsxRuntime.jsx(Shortcut, { children: item.shortcut })
      ] }, ii))
    ] }, gi)),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntime.jsx(Empty, { children: "No results found." })
  ] }) }) }) });
}
const Root$1 = styled.div`
  display: flex;
  ${({ $vertical }) => $vertical ? styled.css`flex-direction: column;` : styled.css`flex-direction: row; align-items: flex-start;`}
`;
const StepContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ $vertical }) => $vertical ? styled.css`flex-direction: row; gap: 12px;` : styled.css`flex-direction: column; gap: 8px; flex: 1; text-align: center;`}
`;
const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  flex-shrink: 0;
  transition: all 0.2s ease;

  ${({ $status, theme }) => {
  switch ($status) {
    case "complete":
      return styled.css`background: ${theme.colors.primary}; color: ${theme.colors.primaryForeground};`;
    case "active":
      return styled.css`background: transparent; border: 2px solid ${theme.colors.primary}; color: ${theme.colors.primary};`;
    case "error":
      return styled.css`background: ${theme.colors.destructive}; color: ${theme.colors.destructiveForeground};`;
    default:
      return styled.css`background: ${theme.colors.muted}; color: ${theme.colors.mutedForeground};`;
  }
}}
`;
const StepLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ $active, theme }) => $active ? theme.colors.foreground : theme.colors.mutedForeground};
  white-space: nowrap;
`;
const Separator$1 = styled.div`
  ${({ $vertical }) => $vertical ? styled.css`width: 2px; height: 24px; margin-left: 15px;` : styled.css`height: 2px; flex: 1;`}
  background: ${({ $completed, theme }) => $completed ? theme.colors.primary : theme.colors.border};
  transition: background 0.2s ease;
`;
function Stepper({ steps, activeStep, orientation = "horizontal" }) {
  const vertical = orientation === "vertical";
  return /* @__PURE__ */ jsxRuntime.jsx(Root$1, { $vertical: vertical, children: steps.map((step, i) => {
    const status = step.status || (i < activeStep ? "complete" : i === activeStep ? "active" : "pending");
    return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(StepContainer, { $vertical: vertical, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Circle, { $status: status, children: status === "complete" ? "✓" : status === "error" ? "!" : i + 1 }),
        /* @__PURE__ */ jsxRuntime.jsx(StepLabel, { $active: status === "active" || status === "complete", children: step.label })
      ] }),
      i < steps.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(Separator$1, { $completed: i < activeStep, $vertical: vertical })
    ] }, i);
  }) });
}
const slideDown = styled.keyframes`
  from { height: 0; }
  to { height: var(--radix-collapsible-content-height); }
`;
const slideUp = styled.keyframes`
  from { height: var(--radix-collapsible-content-height); }
  to { height: 0; }
`;
const Content$1 = styled(RadixCollapsible__namespace.Content)`
  overflow: hidden;
  &[data-state='open'] { animation: ${slideDown} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideUp} 0.3s ease; }
`;
const Collapsible = {
  Root: RadixCollapsible__namespace.Root,
  Trigger: RadixCollapsible__namespace.Trigger,
  Content: Content$1
};
const fadeIn = styled.keyframes`from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); }`;
const Content = styled(RadixHoverCard__namespace.Content)`
  z-index: ${({ theme }) => theme.zIndex.popover};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  min-width: 280px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.2s ease;
`;
const Arrow = styled(RadixHoverCard__namespace.Arrow)`
  fill: ${({ theme }) => theme.colors.card};
`;
const HoverCard = {
  Root: RadixHoverCard__namespace.Root,
  Trigger: RadixHoverCard__namespace.Trigger,
  Portal: RadixHoverCard__namespace.Portal,
  Content,
  Arrow
};
const Root = styled(RadixScrollArea__namespace.Root)`
  overflow: hidden;
`;
const Viewport = styled(RadixScrollArea__namespace.Viewport)`
  width: 100%;
  height: 100%;
`;
const Scrollbar = styled(RadixScrollArea__namespace.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  transition: background 0.15s ease;

  &[data-orientation='vertical'] { width: 8px; }
  &[data-orientation='horizontal'] { flex-direction: column; height: 8px; }

  &:hover { background: ${({ theme }) => theme.colors.muted}; }
`;
const Thumb = styled(RadixScrollArea__namespace.Thumb)`
  flex: 1;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;
const Corner = styled(RadixScrollArea__namespace.Corner)`
  background: ${({ theme }) => theme.colors.muted};
`;
const ScrollArea = { Root, Viewport, Scrollbar, Thumb, Corner };
const Separator = styled(RadixSeparator__namespace.Root)`
  background: ${({ theme }) => theme.colors.border};
  &[data-orientation='horizontal'] { height: 1px; width: 100%; }
  &[data-orientation='vertical'] { width: 1px; height: 100%; }
`;
exports.colors = tokens.colors;
exports.radii = tokens.radii;
exports.shadows = tokens.shadows;
exports.spacing = tokens.spacing;
exports.typography = tokens.typography;
exports.zIndex = tokens.zIndex;
exports.CalangoUIProvider = createTheme.CalangoUIProvider;
exports.GlobalStyles = createTheme.GlobalStyles;
exports.createTheme = createTheme.createTheme;
exports.darkTheme = createTheme.darkTheme;
exports.lightTheme = createTheme.lightTheme;
exports.useTheme = createTheme.useTheme;
Object.defineProperty(exports, "AspectRatio", {
  enumerable: true,
  get: () => reactAspectRatio.AspectRatio
});
Object.defineProperty(exports, "FiActivity", {
  enumerable: true,
  get: () => fi.FiActivity
});
Object.defineProperty(exports, "FiAnchor", {
  enumerable: true,
  get: () => fi.FiAnchor
});
Object.defineProperty(exports, "FiBox", {
  enumerable: true,
  get: () => fi.FiBox
});
Object.defineProperty(exports, "FiCloudIcon", {
  enumerable: true,
  get: () => fi.FiCloud
});
Object.defineProperty(exports, "FiCloudLightning", {
  enumerable: true,
  get: () => fi.FiCloudLightning
});
Object.defineProperty(exports, "FiCloudRain", {
  enumerable: true,
  get: () => fi.FiCloudRain
});
Object.defineProperty(exports, "FiCloudSnow", {
  enumerable: true,
  get: () => fi.FiCloudSnow
});
Object.defineProperty(exports, "FiCodepen", {
  enumerable: true,
  get: () => fi.FiCodepen
});
Object.defineProperty(exports, "FiCoffee", {
  enumerable: true,
  get: () => fi.FiCoffee
});
Object.defineProperty(exports, "FiCompass", {
  enumerable: true,
  get: () => fi.FiCompass
});
Object.defineProperty(exports, "FiCopy", {
  enumerable: true,
  get: () => fi.FiCopy
});
Object.defineProperty(exports, "FiDatabase", {
  enumerable: true,
  get: () => fi.FiDatabase
});
Object.defineProperty(exports, "FiDownload", {
  enumerable: true,
  get: () => fi.FiDownload
});
Object.defineProperty(exports, "FiDribbble", {
  enumerable: true,
  get: () => fi.FiDribbble
});
Object.defineProperty(exports, "FiDroplet", {
  enumerable: true,
  get: () => fi.FiDroplet
});
Object.defineProperty(exports, "FiEdit3", {
  enumerable: true,
  get: () => fi.FiEdit3
});
Object.defineProperty(exports, "FiExternalLink", {
  enumerable: true,
  get: () => fi.FiExternalLink
});
Object.defineProperty(exports, "FiFacebook", {
  enumerable: true,
  get: () => fi.FiFacebook
});
Object.defineProperty(exports, "FiFeather", {
  enumerable: true,
  get: () => fi.FiFeather
});
Object.defineProperty(exports, "FiFigma", {
  enumerable: true,
  get: () => fi.FiFigma
});
Object.defineProperty(exports, "FiGithub", {
  enumerable: true,
  get: () => fi.FiGithub
});
Object.defineProperty(exports, "FiGitlab", {
  enumerable: true,
  get: () => fi.FiGitlab
});
Object.defineProperty(exports, "FiGrid", {
  enumerable: true,
  get: () => fi.FiGrid
});
Object.defineProperty(exports, "FiHardDrive", {
  enumerable: true,
  get: () => fi.FiHardDrive
});
Object.defineProperty(exports, "FiInstagram", {
  enumerable: true,
  get: () => fi.FiInstagram
});
Object.defineProperty(exports, "FiLayers", {
  enumerable: true,
  get: () => fi.FiLayers
});
Object.defineProperty(exports, "FiLinkedin", {
  enumerable: true,
  get: () => fi.FiLinkedin
});
Object.defineProperty(exports, "FiMaximize2", {
  enumerable: true,
  get: () => fi.FiMaximize2
});
Object.defineProperty(exports, "FiMinimize2", {
  enumerable: true,
  get: () => fi.FiMinimize2
});
Object.defineProperty(exports, "FiMonitor", {
  enumerable: true,
  get: () => fi.FiMonitor
});
Object.defineProperty(exports, "FiPackage", {
  enumerable: true,
  get: () => fi.FiPackage
});
Object.defineProperty(exports, "FiRefreshCw", {
  enumerable: true,
  get: () => fi.FiRefreshCw
});
Object.defineProperty(exports, "FiRotateCcw", {
  enumerable: true,
  get: () => fi.FiRotateCcw
});
Object.defineProperty(exports, "FiRotateCw", {
  enumerable: true,
  get: () => fi.FiRotateCw
});
Object.defineProperty(exports, "FiShare2", {
  enumerable: true,
  get: () => fi.FiShare2
});
Object.defineProperty(exports, "FiSidebar", {
  enumerable: true,
  get: () => fi.FiSidebar
});
Object.defineProperty(exports, "FiSlack", {
  enumerable: true,
  get: () => fi.FiSlack
});
Object.defineProperty(exports, "FiSmartphone", {
  enumerable: true,
  get: () => fi.FiSmartphone
});
Object.defineProperty(exports, "FiSunrise", {
  enumerable: true,
  get: () => fi.FiSunrise
});
Object.defineProperty(exports, "FiSunset", {
  enumerable: true,
  get: () => fi.FiSunset
});
Object.defineProperty(exports, "FiTablet", {
  enumerable: true,
  get: () => fi.FiTablet
});
Object.defineProperty(exports, "FiTerminal", {
  enumerable: true,
  get: () => fi.FiTerminal
});
Object.defineProperty(exports, "FiTrash2", {
  enumerable: true,
  get: () => fi.FiTrash2
});
Object.defineProperty(exports, "FiTrendingDown", {
  enumerable: true,
  get: () => fi.FiTrendingDown
});
Object.defineProperty(exports, "FiTrendingUp", {
  enumerable: true,
  get: () => fi.FiTrendingUp
});
Object.defineProperty(exports, "FiTwitch", {
  enumerable: true,
  get: () => fi.FiTwitch
});
Object.defineProperty(exports, "FiTwitter", {
  enumerable: true,
  get: () => fi.FiTwitter
});
Object.defineProperty(exports, "FiUmbrella", {
  enumerable: true,
  get: () => fi.FiUmbrella
});
Object.defineProperty(exports, "FiUpload", {
  enumerable: true,
  get: () => fi.FiUpload
});
Object.defineProperty(exports, "FiWind", {
  enumerable: true,
  get: () => fi.FiWind
});
Object.defineProperty(exports, "FiYoutube", {
  enumerable: true,
  get: () => fi.FiYoutube
});
Object.defineProperty(exports, "FiZap", {
  enumerable: true,
  get: () => fi.FiZap
});
Object.defineProperty(exports, "HiAcademicCap", {
  enumerable: true,
  get: () => hi2.HiAcademicCap
});
Object.defineProperty(exports, "HiAdjustmentsHorizontal", {
  enumerable: true,
  get: () => hi2.HiAdjustmentsHorizontal
});
Object.defineProperty(exports, "HiAdjustmentsVertical", {
  enumerable: true,
  get: () => hi2.HiAdjustmentsVertical
});
Object.defineProperty(exports, "HiArrowDown", {
  enumerable: true,
  get: () => hi2.HiArrowDown
});
Object.defineProperty(exports, "HiArrowLeft", {
  enumerable: true,
  get: () => hi2.HiArrowLeft
});
Object.defineProperty(exports, "HiArrowPath", {
  enumerable: true,
  get: () => hi2.HiArrowPath
});
Object.defineProperty(exports, "HiArrowRight", {
  enumerable: true,
  get: () => hi2.HiArrowRight
});
Object.defineProperty(exports, "HiArrowTopRightOnSquare", {
  enumerable: true,
  get: () => hi2.HiArrowTopRightOnSquare
});
Object.defineProperty(exports, "HiArrowUp", {
  enumerable: true,
  get: () => hi2.HiArrowUp
});
Object.defineProperty(exports, "HiArrowUpRight", {
  enumerable: true,
  get: () => hi2.HiArrowUpRight
});
Object.defineProperty(exports, "HiArrowUturnLeft", {
  enumerable: true,
  get: () => hi2.HiArrowUturnLeft
});
Object.defineProperty(exports, "HiArrowsPointingIn", {
  enumerable: true,
  get: () => hi2.HiArrowsPointingIn
});
Object.defineProperty(exports, "HiArrowsPointingOut", {
  enumerable: true,
  get: () => hi2.HiArrowsPointingOut
});
Object.defineProperty(exports, "HiArrowsUpDown", {
  enumerable: true,
  get: () => hi2.HiArrowsUpDown
});
Object.defineProperty(exports, "HiAtSymbol", {
  enumerable: true,
  get: () => hi2.HiAtSymbol
});
Object.defineProperty(exports, "HiBanknotes", {
  enumerable: true,
  get: () => hi2.HiBanknotes
});
Object.defineProperty(exports, "HiBars3", {
  enumerable: true,
  get: () => hi2.HiBars3
});
Object.defineProperty(exports, "HiBars3BottomLeft", {
  enumerable: true,
  get: () => hi2.HiBars3BottomLeft
});
Object.defineProperty(exports, "HiBattery100", {
  enumerable: true,
  get: () => hi2.HiBattery100
});
Object.defineProperty(exports, "HiBattery50", {
  enumerable: true,
  get: () => hi2.HiBattery50
});
Object.defineProperty(exports, "HiBeaker", {
  enumerable: true,
  get: () => hi2.HiBeaker
});
Object.defineProperty(exports, "HiBell", {
  enumerable: true,
  get: () => hi2.HiBell
});
Object.defineProperty(exports, "HiBellAlert", {
  enumerable: true,
  get: () => hi2.HiBellAlert
});
Object.defineProperty(exports, "HiBellSlash", {
  enumerable: true,
  get: () => hi2.HiBellSlash
});
Object.defineProperty(exports, "HiBolt", {
  enumerable: true,
  get: () => hi2.HiBolt
});
Object.defineProperty(exports, "HiBookOpen", {
  enumerable: true,
  get: () => hi2.HiBookOpen
});
Object.defineProperty(exports, "HiBookmark", {
  enumerable: true,
  get: () => hi2.HiBookmark
});
Object.defineProperty(exports, "HiBookmarkSquare", {
  enumerable: true,
  get: () => hi2.HiBookmarkSquare
});
Object.defineProperty(exports, "HiBugAnt", {
  enumerable: true,
  get: () => hi2.HiBugAnt
});
Object.defineProperty(exports, "HiBuildingLibrary", {
  enumerable: true,
  get: () => hi2.HiBuildingLibrary
});
Object.defineProperty(exports, "HiBuildingOffice", {
  enumerable: true,
  get: () => hi2.HiBuildingOffice
});
Object.defineProperty(exports, "HiBuildingOffice2", {
  enumerable: true,
  get: () => hi2.HiBuildingOffice2
});
Object.defineProperty(exports, "HiBuildingStorefront", {
  enumerable: true,
  get: () => hi2.HiBuildingStorefront
});
Object.defineProperty(exports, "HiCalculator", {
  enumerable: true,
  get: () => hi2.HiCalculator
});
Object.defineProperty(exports, "HiCalendar", {
  enumerable: true,
  get: () => hi2.HiCalendar
});
Object.defineProperty(exports, "HiCalendarDays", {
  enumerable: true,
  get: () => hi2.HiCalendarDays
});
Object.defineProperty(exports, "HiCamera", {
  enumerable: true,
  get: () => hi2.HiCamera
});
Object.defineProperty(exports, "HiChartBar", {
  enumerable: true,
  get: () => hi2.HiChartBar
});
Object.defineProperty(exports, "HiChartBarSquare", {
  enumerable: true,
  get: () => hi2.HiChartBarSquare
});
Object.defineProperty(exports, "HiChartPie", {
  enumerable: true,
  get: () => hi2.HiChartPie
});
Object.defineProperty(exports, "HiChatBubbleLeft", {
  enumerable: true,
  get: () => hi2.HiChatBubbleLeft
});
Object.defineProperty(exports, "HiChatBubbleLeftRight", {
  enumerable: true,
  get: () => hi2.HiChatBubbleLeftRight
});
Object.defineProperty(exports, "HiChatBubbleOvalLeft", {
  enumerable: true,
  get: () => hi2.HiChatBubbleOvalLeft
});
Object.defineProperty(exports, "HiCheck", {
  enumerable: true,
  get: () => hi2.HiCheck
});
Object.defineProperty(exports, "HiCheckBadge", {
  enumerable: true,
  get: () => hi2.HiCheckBadge
});
Object.defineProperty(exports, "HiCheckCircle", {
  enumerable: true,
  get: () => hi2.HiCheckCircle
});
Object.defineProperty(exports, "HiChevronDown", {
  enumerable: true,
  get: () => hi2.HiChevronDown
});
Object.defineProperty(exports, "HiChevronLeft", {
  enumerable: true,
  get: () => hi2.HiChevronLeft
});
Object.defineProperty(exports, "HiChevronRight", {
  enumerable: true,
  get: () => hi2.HiChevronRight
});
Object.defineProperty(exports, "HiChevronUp", {
  enumerable: true,
  get: () => hi2.HiChevronUp
});
Object.defineProperty(exports, "HiCircleStack", {
  enumerable: true,
  get: () => hi2.HiCircleStack
});
Object.defineProperty(exports, "HiClipboard", {
  enumerable: true,
  get: () => hi2.HiClipboard
});
Object.defineProperty(exports, "HiClipboardDocument", {
  enumerable: true,
  get: () => hi2.HiClipboardDocument
});
Object.defineProperty(exports, "HiClock", {
  enumerable: true,
  get: () => hi2.HiClock
});
Object.defineProperty(exports, "HiCloud", {
  enumerable: true,
  get: () => hi2.HiCloud
});
Object.defineProperty(exports, "HiCloudArrowDown", {
  enumerable: true,
  get: () => hi2.HiCloudArrowDown
});
Object.defineProperty(exports, "HiCloudArrowUp", {
  enumerable: true,
  get: () => hi2.HiCloudArrowUp
});
Object.defineProperty(exports, "HiCodeBracket", {
  enumerable: true,
  get: () => hi2.HiCodeBracket
});
Object.defineProperty(exports, "HiCodeBracketSquare", {
  enumerable: true,
  get: () => hi2.HiCodeBracketSquare
});
Object.defineProperty(exports, "HiCog6Tooth", {
  enumerable: true,
  get: () => hi2.HiCog6Tooth
});
Object.defineProperty(exports, "HiCog8Tooth", {
  enumerable: true,
  get: () => hi2.HiCog8Tooth
});
Object.defineProperty(exports, "HiCommandLine", {
  enumerable: true,
  get: () => hi2.HiCommandLine
});
Object.defineProperty(exports, "HiComputerDesktop", {
  enumerable: true,
  get: () => hi2.HiComputerDesktop
});
Object.defineProperty(exports, "HiCpuChip", {
  enumerable: true,
  get: () => hi2.HiCpuChip
});
Object.defineProperty(exports, "HiCreditCard", {
  enumerable: true,
  get: () => hi2.HiCreditCard
});
Object.defineProperty(exports, "HiCurrencyDollar", {
  enumerable: true,
  get: () => hi2.HiCurrencyDollar
});
Object.defineProperty(exports, "HiDevicePhoneMobile", {
  enumerable: true,
  get: () => hi2.HiDevicePhoneMobile
});
Object.defineProperty(exports, "HiDeviceTablet", {
  enumerable: true,
  get: () => hi2.HiDeviceTablet
});
Object.defineProperty(exports, "HiDocument", {
  enumerable: true,
  get: () => hi2.HiDocument
});
Object.defineProperty(exports, "HiDocumentArrowDown", {
  enumerable: true,
  get: () => hi2.HiDocumentArrowDown
});
Object.defineProperty(exports, "HiDocumentArrowUp", {
  enumerable: true,
  get: () => hi2.HiDocumentArrowUp
});
Object.defineProperty(exports, "HiDocumentDuplicate", {
  enumerable: true,
  get: () => hi2.HiDocumentDuplicate
});
Object.defineProperty(exports, "HiDocumentMinus", {
  enumerable: true,
  get: () => hi2.HiDocumentMinus
});
Object.defineProperty(exports, "HiDocumentPlus", {
  enumerable: true,
  get: () => hi2.HiDocumentPlus
});
Object.defineProperty(exports, "HiDocumentText", {
  enumerable: true,
  get: () => hi2.HiDocumentText
});
Object.defineProperty(exports, "HiEllipsisHorizontal", {
  enumerable: true,
  get: () => hi2.HiEllipsisHorizontal
});
Object.defineProperty(exports, "HiEllipsisVertical", {
  enumerable: true,
  get: () => hi2.HiEllipsisVertical
});
Object.defineProperty(exports, "HiEnvelope", {
  enumerable: true,
  get: () => hi2.HiEnvelope
});
Object.defineProperty(exports, "HiEnvelopeOpen", {
  enumerable: true,
  get: () => hi2.HiEnvelopeOpen
});
Object.defineProperty(exports, "HiExclamationCircle", {
  enumerable: true,
  get: () => hi2.HiExclamationCircle
});
Object.defineProperty(exports, "HiExclamationTriangle", {
  enumerable: true,
  get: () => hi2.HiExclamationTriangle
});
Object.defineProperty(exports, "HiEye", {
  enumerable: true,
  get: () => hi2.HiEye
});
Object.defineProperty(exports, "HiEyeDropper", {
  enumerable: true,
  get: () => hi2.HiEyeDropper
});
Object.defineProperty(exports, "HiEyeSlash", {
  enumerable: true,
  get: () => hi2.HiEyeSlash
});
Object.defineProperty(exports, "HiFaceFrown", {
  enumerable: true,
  get: () => hi2.HiFaceFrown
});
Object.defineProperty(exports, "HiFaceSmile", {
  enumerable: true,
  get: () => hi2.HiFaceSmile
});
Object.defineProperty(exports, "HiFilm", {
  enumerable: true,
  get: () => hi2.HiFilm
});
Object.defineProperty(exports, "HiFingerPrint", {
  enumerable: true,
  get: () => hi2.HiFingerPrint
});
Object.defineProperty(exports, "HiFire", {
  enumerable: true,
  get: () => hi2.HiFire
});
Object.defineProperty(exports, "HiFolder", {
  enumerable: true,
  get: () => hi2.HiFolder
});
Object.defineProperty(exports, "HiFolderMinus", {
  enumerable: true,
  get: () => hi2.HiFolderMinus
});
Object.defineProperty(exports, "HiFolderOpen", {
  enumerable: true,
  get: () => hi2.HiFolderOpen
});
Object.defineProperty(exports, "HiFolderPlus", {
  enumerable: true,
  get: () => hi2.HiFolderPlus
});
Object.defineProperty(exports, "HiFunnel", {
  enumerable: true,
  get: () => hi2.HiFunnel
});
Object.defineProperty(exports, "HiGift", {
  enumerable: true,
  get: () => hi2.HiGift
});
Object.defineProperty(exports, "HiGlobeAlt", {
  enumerable: true,
  get: () => hi2.HiGlobeAlt
});
Object.defineProperty(exports, "HiGlobeAmericas", {
  enumerable: true,
  get: () => hi2.HiGlobeAmericas
});
Object.defineProperty(exports, "HiGlobeAsiaAustralia", {
  enumerable: true,
  get: () => hi2.HiGlobeAsiaAustralia
});
Object.defineProperty(exports, "HiGlobeEuropeAfrica", {
  enumerable: true,
  get: () => hi2.HiGlobeEuropeAfrica
});
Object.defineProperty(exports, "HiHandRaised", {
  enumerable: true,
  get: () => hi2.HiHandRaised
});
Object.defineProperty(exports, "HiHandThumbDown", {
  enumerable: true,
  get: () => hi2.HiHandThumbDown
});
Object.defineProperty(exports, "HiHandThumbUp", {
  enumerable: true,
  get: () => hi2.HiHandThumbUp
});
Object.defineProperty(exports, "HiHashtag", {
  enumerable: true,
  get: () => hi2.HiHashtag
});
Object.defineProperty(exports, "HiHeart", {
  enumerable: true,
  get: () => hi2.HiHeart
});
Object.defineProperty(exports, "HiHome", {
  enumerable: true,
  get: () => hi2.HiHome
});
Object.defineProperty(exports, "HiHomeModern", {
  enumerable: true,
  get: () => hi2.HiHomeModern
});
Object.defineProperty(exports, "HiIdentification", {
  enumerable: true,
  get: () => hi2.HiIdentification
});
Object.defineProperty(exports, "HiInbox", {
  enumerable: true,
  get: () => hi2.HiInbox
});
Object.defineProperty(exports, "HiInboxStack", {
  enumerable: true,
  get: () => hi2.HiInboxStack
});
Object.defineProperty(exports, "HiInformationCircle", {
  enumerable: true,
  get: () => hi2.HiInformationCircle
});
Object.defineProperty(exports, "HiKey", {
  enumerable: true,
  get: () => hi2.HiKey
});
Object.defineProperty(exports, "HiLanguage", {
  enumerable: true,
  get: () => hi2.HiLanguage
});
Object.defineProperty(exports, "HiLink", {
  enumerable: true,
  get: () => hi2.HiLink
});
Object.defineProperty(exports, "HiListBullet", {
  enumerable: true,
  get: () => hi2.HiListBullet
});
Object.defineProperty(exports, "HiLockClosed", {
  enumerable: true,
  get: () => hi2.HiLockClosed
});
Object.defineProperty(exports, "HiLockOpen", {
  enumerable: true,
  get: () => hi2.HiLockOpen
});
Object.defineProperty(exports, "HiMagnifyingGlass", {
  enumerable: true,
  get: () => hi2.HiMagnifyingGlass
});
Object.defineProperty(exports, "HiMap", {
  enumerable: true,
  get: () => hi2.HiMap
});
Object.defineProperty(exports, "HiMapPin", {
  enumerable: true,
  get: () => hi2.HiMapPin
});
Object.defineProperty(exports, "HiMegaphone", {
  enumerable: true,
  get: () => hi2.HiMegaphone
});
Object.defineProperty(exports, "HiMicrophone", {
  enumerable: true,
  get: () => hi2.HiMicrophone
});
Object.defineProperty(exports, "HiMinus", {
  enumerable: true,
  get: () => hi2.HiMinus
});
Object.defineProperty(exports, "HiMoon", {
  enumerable: true,
  get: () => hi2.HiMoon
});
Object.defineProperty(exports, "HiMusicalNote", {
  enumerable: true,
  get: () => hi2.HiMusicalNote
});
Object.defineProperty(exports, "HiNewspaper", {
  enumerable: true,
  get: () => hi2.HiNewspaper
});
Object.defineProperty(exports, "HiNoSymbol", {
  enumerable: true,
  get: () => hi2.HiNoSymbol
});
Object.defineProperty(exports, "HiPaintBrush", {
  enumerable: true,
  get: () => hi2.HiPaintBrush
});
Object.defineProperty(exports, "HiPaperAirplane", {
  enumerable: true,
  get: () => hi2.HiPaperAirplane
});
Object.defineProperty(exports, "HiPaperClip", {
  enumerable: true,
  get: () => hi2.HiPaperClip
});
Object.defineProperty(exports, "HiPauseCircle", {
  enumerable: true,
  get: () => hi2.HiPauseCircle
});
Object.defineProperty(exports, "HiPencil", {
  enumerable: true,
  get: () => hi2.HiPencil
});
Object.defineProperty(exports, "HiPencilSquare", {
  enumerable: true,
  get: () => hi2.HiPencilSquare
});
Object.defineProperty(exports, "HiPhone", {
  enumerable: true,
  get: () => hi2.HiPhone
});
Object.defineProperty(exports, "HiPhoneArrowUpRight", {
  enumerable: true,
  get: () => hi2.HiPhoneArrowUpRight
});
Object.defineProperty(exports, "HiPhoto", {
  enumerable: true,
  get: () => hi2.HiPhoto
});
Object.defineProperty(exports, "HiPlayCircle", {
  enumerable: true,
  get: () => hi2.HiPlayCircle
});
Object.defineProperty(exports, "HiPlus", {
  enumerable: true,
  get: () => hi2.HiPlus
});
Object.defineProperty(exports, "HiPresentationChartBar", {
  enumerable: true,
  get: () => hi2.HiPresentationChartBar
});
Object.defineProperty(exports, "HiPresentationChartLine", {
  enumerable: true,
  get: () => hi2.HiPresentationChartLine
});
Object.defineProperty(exports, "HiPrinter", {
  enumerable: true,
  get: () => hi2.HiPrinter
});
Object.defineProperty(exports, "HiQuestionMarkCircle", {
  enumerable: true,
  get: () => hi2.HiQuestionMarkCircle
});
Object.defineProperty(exports, "HiQueueList", {
  enumerable: true,
  get: () => hi2.HiQueueList
});
Object.defineProperty(exports, "HiReceiptPercent", {
  enumerable: true,
  get: () => hi2.HiReceiptPercent
});
Object.defineProperty(exports, "HiRectangleGroup", {
  enumerable: true,
  get: () => hi2.HiRectangleGroup
});
Object.defineProperty(exports, "HiRectangleStack", {
  enumerable: true,
  get: () => hi2.HiRectangleStack
});
Object.defineProperty(exports, "HiScissors", {
  enumerable: true,
  get: () => hi2.HiScissors
});
Object.defineProperty(exports, "HiServer", {
  enumerable: true,
  get: () => hi2.HiServer
});
Object.defineProperty(exports, "HiServerStack", {
  enumerable: true,
  get: () => hi2.HiServerStack
});
Object.defineProperty(exports, "HiShieldCheck", {
  enumerable: true,
  get: () => hi2.HiShieldCheck
});
Object.defineProperty(exports, "HiShieldCheckDup", {
  enumerable: true,
  get: () => hi2.HiShieldCheck
});
Object.defineProperty(exports, "HiShieldExclamation", {
  enumerable: true,
  get: () => hi2.HiShieldExclamation
});
Object.defineProperty(exports, "HiShoppingBag", {
  enumerable: true,
  get: () => hi2.HiShoppingBag
});
Object.defineProperty(exports, "HiShoppingCart", {
  enumerable: true,
  get: () => hi2.HiShoppingCart
});
Object.defineProperty(exports, "HiSignal", {
  enumerable: true,
  get: () => hi2.HiSignal
});
Object.defineProperty(exports, "HiSparkles", {
  enumerable: true,
  get: () => hi2.HiSparkles
});
Object.defineProperty(exports, "HiSpeakerWave", {
  enumerable: true,
  get: () => hi2.HiSpeakerWave
});
Object.defineProperty(exports, "HiSpeakerXMark", {
  enumerable: true,
  get: () => hi2.HiSpeakerXMark
});
Object.defineProperty(exports, "HiSquares2X2", {
  enumerable: true,
  get: () => hi2.HiSquares2X2
});
Object.defineProperty(exports, "HiSquaresPlus", {
  enumerable: true,
  get: () => hi2.HiSquaresPlus
});
Object.defineProperty(exports, "HiStar", {
  enumerable: true,
  get: () => hi2.HiStar
});
Object.defineProperty(exports, "HiStopCircle", {
  enumerable: true,
  get: () => hi2.HiStopCircle
});
Object.defineProperty(exports, "HiSun", {
  enumerable: true,
  get: () => hi2.HiSun
});
Object.defineProperty(exports, "HiSwatch", {
  enumerable: true,
  get: () => hi2.HiSwatch
});
Object.defineProperty(exports, "HiTableCells", {
  enumerable: true,
  get: () => hi2.HiTableCells
});
Object.defineProperty(exports, "HiTag", {
  enumerable: true,
  get: () => hi2.HiTag
});
Object.defineProperty(exports, "HiTicket", {
  enumerable: true,
  get: () => hi2.HiTicket
});
Object.defineProperty(exports, "HiUser", {
  enumerable: true,
  get: () => hi2.HiUser
});
Object.defineProperty(exports, "HiUserCircle", {
  enumerable: true,
  get: () => hi2.HiUserCircle
});
Object.defineProperty(exports, "HiUserGroup", {
  enumerable: true,
  get: () => hi2.HiUserGroup
});
Object.defineProperty(exports, "HiUserMinus", {
  enumerable: true,
  get: () => hi2.HiUserMinus
});
Object.defineProperty(exports, "HiUserPlus", {
  enumerable: true,
  get: () => hi2.HiUserPlus
});
Object.defineProperty(exports, "HiUsers", {
  enumerable: true,
  get: () => hi2.HiUsers
});
Object.defineProperty(exports, "HiVideoCamera", {
  enumerable: true,
  get: () => hi2.HiVideoCamera
});
Object.defineProperty(exports, "HiVideoCameraSlash", {
  enumerable: true,
  get: () => hi2.HiVideoCameraSlash
});
Object.defineProperty(exports, "HiViewColumns", {
  enumerable: true,
  get: () => hi2.HiViewColumns
});
Object.defineProperty(exports, "HiViewfinderCircle", {
  enumerable: true,
  get: () => hi2.HiViewfinderCircle
});
Object.defineProperty(exports, "HiWifi", {
  enumerable: true,
  get: () => hi2.HiWifi
});
Object.defineProperty(exports, "HiWrench", {
  enumerable: true,
  get: () => hi2.HiWrench
});
Object.defineProperty(exports, "HiWrenchScrewdriver", {
  enumerable: true,
  get: () => hi2.HiWrenchScrewdriver
});
Object.defineProperty(exports, "HiXCircle", {
  enumerable: true,
  get: () => hi2.HiXCircle
});
Object.defineProperty(exports, "HiXMark", {
  enumerable: true,
  get: () => hi2.HiXMark
});
Object.defineProperty(exports, "SiAnthropic", {
  enumerable: true,
  get: () => si.SiAnthropic
});
Object.defineProperty(exports, "SiApple", {
  enumerable: true,
  get: () => si.SiApple
});
Object.defineProperty(exports, "SiBitbucket", {
  enumerable: true,
  get: () => si.SiBitbucket
});
Object.defineProperty(exports, "SiChromatic", {
  enumerable: true,
  get: () => si.SiChromatic
});
Object.defineProperty(exports, "SiDiscord", {
  enumerable: true,
  get: () => si.SiDiscord
});
Object.defineProperty(exports, "SiDocker", {
  enumerable: true,
  get: () => si.SiDocker
});
Object.defineProperty(exports, "SiEslint", {
  enumerable: true,
  get: () => si.SiEslint
});
Object.defineProperty(exports, "SiFigma", {
  enumerable: true,
  get: () => si.SiFigma
});
Object.defineProperty(exports, "SiFirebase", {
  enumerable: true,
  get: () => si.SiFirebase
});
Object.defineProperty(exports, "SiFramer", {
  enumerable: true,
  get: () => si.SiFramer
});
Object.defineProperty(exports, "SiGit", {
  enumerable: true,
  get: () => si.SiGit
});
Object.defineProperty(exports, "SiGithub", {
  enumerable: true,
  get: () => si.SiGithub
});
Object.defineProperty(exports, "SiGitlab", {
  enumerable: true,
  get: () => si.SiGitlab
});
Object.defineProperty(exports, "SiGo", {
  enumerable: true,
  get: () => si.SiGo
});
Object.defineProperty(exports, "SiGooglecloud", {
  enumerable: true,
  get: () => si.SiGooglecloud
});
Object.defineProperty(exports, "SiGraphql", {
  enumerable: true,
  get: () => si.SiGraphql
});
Object.defineProperty(exports, "SiJavascript", {
  enumerable: true,
  get: () => si.SiJavascript
});
Object.defineProperty(exports, "SiJest", {
  enumerable: true,
  get: () => si.SiJest
});
Object.defineProperty(exports, "SiJira", {
  enumerable: true,
  get: () => si.SiJira
});
Object.defineProperty(exports, "SiKotlin", {
  enumerable: true,
  get: () => si.SiKotlin
});
Object.defineProperty(exports, "SiKubernetes", {
  enumerable: true,
  get: () => si.SiKubernetes
});
Object.defineProperty(exports, "SiLinux", {
  enumerable: true,
  get: () => si.SiLinux
});
Object.defineProperty(exports, "SiMongodb", {
  enumerable: true,
  get: () => si.SiMongodb
});
Object.defineProperty(exports, "SiNetflix", {
  enumerable: true,
  get: () => si.SiNetflix
});
Object.defineProperty(exports, "SiNetlify", {
  enumerable: true,
  get: () => si.SiNetlify
});
Object.defineProperty(exports, "SiNextdotjs", {
  enumerable: true,
  get: () => si.SiNextdotjs
});
Object.defineProperty(exports, "SiNodedotjs", {
  enumerable: true,
  get: () => si.SiNodedotjs
});
Object.defineProperty(exports, "SiNotion", {
  enumerable: true,
  get: () => si.SiNotion
});
Object.defineProperty(exports, "SiNpm", {
  enumerable: true,
  get: () => si.SiNpm
});
Object.defineProperty(exports, "SiOpenai", {
  enumerable: true,
  get: () => si.SiOpenai
});
Object.defineProperty(exports, "SiPnpm", {
  enumerable: true,
  get: () => si.SiPnpm
});
Object.defineProperty(exports, "SiPostgresql", {
  enumerable: true,
  get: () => si.SiPostgresql
});
Object.defineProperty(exports, "SiPrettier", {
  enumerable: true,
  get: () => si.SiPrettier
});
Object.defineProperty(exports, "SiPrisma", {
  enumerable: true,
  get: () => si.SiPrisma
});
Object.defineProperty(exports, "SiPython", {
  enumerable: true,
  get: () => si.SiPython
});
Object.defineProperty(exports, "SiReact", {
  enumerable: true,
  get: () => si.SiReact
});
Object.defineProperty(exports, "SiRedis", {
  enumerable: true,
  get: () => si.SiRedis
});
Object.defineProperty(exports, "SiRust", {
  enumerable: true,
  get: () => si.SiRust
});
Object.defineProperty(exports, "SiSlack", {
  enumerable: true,
  get: () => si.SiSlack
});
Object.defineProperty(exports, "SiSpotify", {
  enumerable: true,
  get: () => si.SiSpotify
});
Object.defineProperty(exports, "SiStorybook", {
  enumerable: true,
  get: () => si.SiStorybook
});
Object.defineProperty(exports, "SiStripe", {
  enumerable: true,
  get: () => si.SiStripe
});
Object.defineProperty(exports, "SiSupabase", {
  enumerable: true,
  get: () => si.SiSupabase
});
Object.defineProperty(exports, "SiSwift", {
  enumerable: true,
  get: () => si.SiSwift
});
Object.defineProperty(exports, "SiTailwindcss", {
  enumerable: true,
  get: () => si.SiTailwindcss
});
Object.defineProperty(exports, "SiTypescript", {
  enumerable: true,
  get: () => si.SiTypescript
});
Object.defineProperty(exports, "SiVercel", {
  enumerable: true,
  get: () => si.SiVercel
});
Object.defineProperty(exports, "SiVite", {
  enumerable: true,
  get: () => si.SiVite
});
Object.defineProperty(exports, "SiVitest", {
  enumerable: true,
  get: () => si.SiVitest
});
Object.defineProperty(exports, "SiYarn", {
  enumerable: true,
  get: () => si.SiYarn
});
exports.Accordion = Accordion;
exports.Alert = Alert;
exports.AlertDialog = AlertDialog;
exports.AlertTitle = AlertTitle;
exports.AreaChart = AreaChart;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.BarChart = BarChart;
exports.Box = Box;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CommandPalette = CommandPalette;
exports.ContextMenu = ContextMenu;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.Divider = Divider;
exports.DonutChart = DonutChart;
exports.Drawer = Drawer;
exports.DropdownMenu = DropdownMenu;
exports.ErrorText = ErrorText$1;
exports.Flex = Flex;
exports.Grid = Grid;
exports.Heading = Heading;
exports.HoverCard = HoverCard;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.Label = Label$1;
exports.LineChart = LineChart;
exports.MaskedInput = MaskedInput;
exports.NavigationMenu = NavigationMenu;
exports.Pagination = Pagination;
exports.Popover = Popover;
exports.Progress = Progress;
exports.RadarChart = RadarChart;
exports.RadialBarChart = RadialBarChartComponent;
exports.RadioGroup = RadioGroup;
exports.RoundedIcon = RoundedIcon;
exports.ScrollArea = ScrollArea;
exports.SearchBar = SearchBar;
exports.Select = Select;
exports.Separator = Separator;
exports.Sidebar = Sidebar;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.SparkLine = SparkLine;
exports.Spinner = Spinner;
exports.Stack = Stack;
exports.StatCard = StatCard;
exports.Stepper = Stepper;
exports.Switch = Switch;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.Text = Text;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.cjs.map
