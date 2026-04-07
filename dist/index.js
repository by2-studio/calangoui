import { colors, radii, shadows, spacing, typography, zIndex } from "./tokens.js";
import { C, G, c, d, l, u } from "./createTheme-B7xWTe6p.js";
import * as RadixAccordion from "@radix-ui/react-accordion";
import styled, { css, keyframes, useTheme } from "styled-components";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { forwardRef, useState, useMemo, useCallback, useEffect } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { ResponsiveContainer, AreaChart as AreaChart$1, CartesianGrid, XAxis, YAxis, Tooltip as Tooltip$1, Area, BarChart as BarChart$1, Legend, Bar, Cell as Cell$1, PieChart, Pie, LineChart as LineChart$1, Line, RadarChart as RadarChart$1, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadialBarChart, RadialBar } from "recharts";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import * as RadixAvatar from "@radix-ui/react-avatar";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as RadixContextMenu from "@radix-ui/react-context-menu";
import * as RadixPopover from "@radix-ui/react-popover";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { FiActivity, FiAnchor, FiBox, FiCloud, FiCloudLightning, FiCloudRain, FiCloudSnow, FiCodepen, FiCoffee, FiCompass, FiCopy, FiDatabase, FiDownload, FiDribbble, FiDroplet, FiEdit3, FiExternalLink, FiFacebook, FiFeather, FiFigma, FiGithub, FiGitlab, FiGrid, FiHardDrive, FiInstagram, FiLayers, FiLinkedin, FiMaximize2, FiMinimize2, FiMonitor, FiPackage, FiRefreshCw, FiRotateCcw, FiRotateCw, FiShare2, FiSidebar, FiSlack, FiSmartphone, FiSunrise, FiSunset, FiTablet, FiTerminal, FiTrash2, FiTrendingDown, FiTrendingUp, FiTwitch, FiTwitter, FiUmbrella, FiUpload, FiWind, FiYoutube, FiZap } from "react-icons/fi";
import { HiAcademicCap, HiAdjustmentsHorizontal, HiAdjustmentsVertical, HiArrowDown, HiArrowLeft, HiArrowPath, HiArrowRight, HiArrowTopRightOnSquare, HiArrowUp, HiArrowUpRight, HiArrowUturnLeft, HiArrowsPointingIn, HiArrowsPointingOut, HiArrowsUpDown, HiAtSymbol, HiBanknotes, HiBars3, HiBars3BottomLeft, HiBattery100, HiBattery50, HiBeaker, HiBell, HiBellAlert, HiBellSlash, HiBolt, HiBookOpen, HiBookmark, HiBookmarkSquare, HiBugAnt, HiBuildingLibrary, HiBuildingOffice, HiBuildingOffice2, HiBuildingStorefront, HiCalculator, HiCalendar, HiCalendarDays, HiCamera, HiChartBar, HiChartBarSquare, HiChartPie, HiChatBubbleLeft, HiChatBubbleLeftRight, HiChatBubbleOvalLeft, HiCheck, HiCheckBadge, HiCheckCircle, HiChevronDown, HiChevronLeft, HiChevronRight, HiChevronUp, HiCircleStack, HiClipboard, HiClipboardDocument, HiClock, HiCloud, HiCloudArrowDown, HiCloudArrowUp, HiCodeBracket, HiCodeBracketSquare, HiCog6Tooth, HiCog8Tooth, HiCommandLine, HiComputerDesktop, HiCpuChip, HiCreditCard, HiCurrencyDollar, HiDevicePhoneMobile, HiDeviceTablet, HiDocument, HiDocumentArrowDown, HiDocumentArrowUp, HiDocumentDuplicate, HiDocumentMinus, HiDocumentPlus, HiDocumentText, HiEllipsisHorizontal, HiEllipsisVertical, HiEnvelope, HiEnvelopeOpen, HiExclamationCircle, HiExclamationTriangle, HiEye, HiEyeDropper, HiEyeSlash, HiFaceFrown, HiFaceSmile, HiFilm, HiFingerPrint, HiFire, HiFolder, HiFolderMinus, HiFolderOpen, HiFolderPlus, HiFunnel, HiGift, HiGlobeAlt, HiGlobeAmericas, HiGlobeAsiaAustralia, HiGlobeEuropeAfrica, HiHandRaised, HiHandThumbDown, HiHandThumbUp, HiHashtag, HiHeart, HiHome, HiHomeModern, HiIdentification, HiInbox, HiInboxStack, HiInformationCircle, HiKey, HiLanguage, HiLink, HiListBullet, HiLockClosed, HiLockOpen, HiMagnifyingGlass, HiMap, HiMapPin, HiMegaphone, HiMicrophone, HiMinus, HiMoon, HiMusicalNote, HiNewspaper, HiNoSymbol, HiPaintBrush, HiPaperAirplane, HiPaperClip, HiPauseCircle, HiPencil, HiPencilSquare, HiPhone, HiPhoneArrowUpRight, HiPhoto, HiPlayCircle, HiPlus, HiPresentationChartBar, HiPresentationChartLine, HiPrinter, HiQuestionMarkCircle, HiQueueList, HiReceiptPercent, HiRectangleGroup, HiRectangleStack, HiScissors, HiServer, HiServerStack, HiShieldCheck, HiShieldCheck as HiShieldCheck2, HiShieldExclamation, HiShoppingBag, HiShoppingCart, HiSignal, HiSparkles, HiSpeakerWave, HiSpeakerXMark, HiSquares2X2, HiSquaresPlus, HiStar, HiStopCircle, HiSun, HiSwatch, HiTableCells, HiTag, HiTicket, HiUser, HiUserCircle, HiUserGroup, HiUserMinus, HiUserPlus, HiUsers, HiVideoCamera, HiVideoCameraSlash, HiViewColumns, HiViewfinderCircle, HiWifi, HiWrench, HiWrenchScrewdriver, HiXCircle, HiXMark } from "react-icons/hi2";
import * as RadixHoverCard from "@radix-ui/react-hover-card";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import * as RadixSelect from "@radix-ui/react-select";
import * as RadixSeparator from "@radix-ui/react-separator";
import { SiAnthropic, SiApple, SiBitbucket, SiChromatic, SiDiscord, SiDocker, SiEslint, SiFigma, SiFirebase, SiFramer, SiGit, SiGithub, SiGitlab, SiGo, SiGooglecloud, SiGraphql, SiJavascript, SiJest, SiJira, SiKotlin, SiKubernetes, SiLinux, SiMongodb, SiNetflix, SiNetlify, SiNextdotjs, SiNodedotjs, SiNotion, SiNpm, SiOpenai, SiPnpm, SiPostgresql, SiPrettier, SiPrisma, SiPython, SiReact, SiRedis, SiRust, SiSlack, SiSpotify, SiStorybook, SiStripe, SiSupabase, SiSwift, SiTailwindcss, SiTypescript, SiVercel, SiVite, SiVitest, SiYarn } from "react-icons/si";
import * as RadixSlider from "@radix-ui/react-slider";
import * as RadixSwitch from "@radix-ui/react-switch";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as RadixToast from "@radix-ui/react-toast";
import * as RadixTooltip from "@radix-ui/react-tooltip";
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
const Box = forwardRef(
  ({ as, p, px, py, pt, pb, m, mx, my, bg, color, radius, shadow, border, w, h, minW, minH, maxW, display, overflow, ...rest }, ref) => /* @__PURE__ */ jsx(
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
  ${({ $s }) => $s.truncate && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;
const Text = forwardRef(
  ({ as, size, weight, color, align, truncate, mono, lineHeight, ...rest }, ref) => /* @__PURE__ */ jsx(StyledText, { ref, as, $s: { size, weight, color, align, truncate, mono, lineHeight }, ...rest })
);
Text.displayName = "Text";
const StyledHeading = styled.h2`
  font-size: ${({ $s, theme }) => $s.size || theme.typography.fontSize["2xl"]};
  font-weight: ${({ $s, theme }) => $s.weight || theme.typography.fontWeight.bold};
  color: ${({ $s }) => $s.color};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;
const Heading = forwardRef(
  ({ as, size, weight, color, ...rest }, ref) => /* @__PURE__ */ jsx(StyledHeading, { ref, as, $s: { size, weight, color }, ...rest })
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
const Icon = forwardRef(
  ({ icon: IconComponent, size, color, ...rest }, ref) => /* @__PURE__ */ jsx(IconWrapper, { ref, $size: size, $color: color, children: /* @__PURE__ */ jsx(IconComponent, { ...rest }) })
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
  return css`
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
  const c2 = $color || theme.colors.primary;
  switch ($variant) {
    case "solid":
      return css`
          background: ${c2};
          color: ${theme.colors.primaryForeground};
        `;
    case "soft":
      return css`
          background: ${c2}18;
          color: ${c2};
        `;
    case "outline":
      return css`
          background: transparent;
          color: ${c2};
          border: 1.5px solid ${c2}44;
        `;
    case "ghost":
      return css`
          background: transparent;
          color: ${c2};
        `;
  }
}}

  svg {
    width: 1em;
    height: 1em;
  }
`;
const RoundedIcon = forwardRef(
  ({ icon, size = "md", variant = "soft", color, radius = "full", ...rest }, ref) => /* @__PURE__ */ jsx(
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
const spin$2 = keyframes`
  to { transform: rotate(360deg); }
`;
const sizeMap = {
  sm: css`height: 32px; padding: 0 12px; font-size: 0.8125rem; gap: 6px;`,
  md: css`height: 40px; padding: 0 16px; font-size: 0.875rem; gap: 8px;`,
  lg: css`height: 48px; padding: 0 24px; font-size: 1rem; gap: 10px;`
};
const variantMap = (t) => ({
  solid: css`background: ${t.colors.primary}; color: ${t.colors.primaryForeground};
    &:hover:not(:disabled) { opacity: 0.9; }`,
  outline: css`background: transparent; color: ${t.colors.foreground}; border: 1px solid ${t.colors.border};
    &:hover:not(:disabled) { background: ${t.colors.accent}; }`,
  ghost: css`background: transparent; color: ${t.colors.foreground};
    &:hover:not(:disabled) { background: ${t.colors.accent}; }`,
  link: css`background: transparent; color: ${t.colors.foreground}; padding: 0; height: auto;
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

  ${({ $loading, theme }) => $loading && css`
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
const Button = forwardRef(
  ({ variant = "solid", size = "md", loading, leftIcon, rightIcon, children, disabled, ...rest }, ref) => /* @__PURE__ */ jsxs(StyledButton, { ref, $v: variant, $sz: size, $loading: loading, disabled: disabled || loading, "aria-busy": loading || void 0, ...rest, children: [
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

  ${({ $sz }) => $sz === "sm" ? css`height: 32px; padding: 0 10px;` : $sz === "lg" ? css`height: 48px; padding: 0 16px; font-size: 1rem;` : css`height: 40px; padding: 0 12px;`}

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
const Input = forwardRef(
  ({ size = "md", error, leftElement, rightElement, id, ...rest }, ref) => {
    const errorId = error && id ? `${id}-error` : void 0;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(InputWrapper, { $error: !!error, children: [
        leftElement && /* @__PURE__ */ jsx(SideElement, { children: leftElement }),
        /* @__PURE__ */ jsx(StyledInput$2, { ref, $sz: size, id, "aria-describedby": errorId, "aria-invalid": !!error || void 0, ...rest }),
        rightElement && /* @__PURE__ */ jsx(SideElement, { children: rightElement })
      ] }),
      error && /* @__PURE__ */ jsx(ErrorText$1, { id: errorId, children: error })
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
const Textarea = forwardRef(
  ({ error, resize, ...rest }, ref) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(StyledTextarea, { ref, $error: !!error, $resize: resize, "aria-invalid": !!error || void 0, ...rest }),
    error && /* @__PURE__ */ jsx(ErrorText$1, { children: error })
  ] })
);
Textarea.displayName = "Textarea";
const SelectTrigger = styled(RadixSelect.Trigger)`
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
const SelectContent = styled(RadixSelect.Content)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndex.popover};
  min-width: var(--radix-select-trigger-width);
  overflow: hidden;
`;
const SelectItem = styled(RadixSelect.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;

  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &[data-disabled] { opacity: 0.5; pointer-events: none; }
`;
const SelectGroupLabel = styled(RadixSelect.Label)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const SelectSeparator = styled(RadixSelect.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;
const Select = {
  Root: RadixSelect.Root,
  Trigger: SelectTrigger,
  Value: RadixSelect.Value,
  Icon: RadixSelect.Icon,
  Portal: RadixSelect.Portal,
  Content: SelectContent,
  Viewport: RadixSelect.Viewport,
  Item: SelectItem,
  ItemText: RadixSelect.ItemText,
  Group: RadixSelect.Group,
  Label: SelectGroupLabel,
  Separator: SelectSeparator
};
const StyledRoot$4 = styled(RadixCheckbox.Root)`
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
const StyledIndicator$1 = styled(RadixCheckbox.Indicator)`
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Checkbox = forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(StyledRoot$4, { ref, ...props, children: /* @__PURE__ */ jsx(StyledIndicator$1, { children: props.checked === "indeterminate" ? "−" : "✓" }) })
);
Checkbox.displayName = "Checkbox";
const StyledRoot$3 = styled(RadixRadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledItem = styled(RadixRadioGroup.Item)`
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
const StyledIndicator = styled(RadixRadioGroup.Indicator)`
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
const StyledRoot$2 = styled(RadixSwitch.Root)`
  all: unset;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;
  transition: background 0.2s ease;
  flex-shrink: 0;

  ${({ $size }) => $size === "sm" ? css`width: 36px; height: 20px;` : css`width: 44px; height: 24px;`}

  background: ${({ theme }) => theme.colors.input};
  &[data-state='checked'] { background: ${({ theme }) => theme.colors.primary}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;
const StyledThumb$1 = styled(RadixSwitch.Thumb)`
  display: block;
  border-radius: 50%;
  transition: transform 0.2s ease;
  background: ${({ theme }) => theme.colors.foreground};

  ${({ $size }) => $size === "sm" ? css`
          width: 16px; height: 16px;
          transform: translateX(2px);
          &[data-state='checked'] { transform: translateX(18px); background: ${({ theme }) => theme.colors.primaryForeground}; }
        ` : css`
          width: 20px; height: 20px;
          transform: translateX(2px);
          &[data-state='checked'] { transform: translateX(22px); background: ${({ theme }) => theme.colors.primaryForeground}; }
        `}
`;
function Switch({ size = "md", ...props }) {
  return /* @__PURE__ */ jsx(StyledRoot$2, { $size: size, ...props, children: /* @__PURE__ */ jsx(StyledThumb$1, { $size: size }) });
}
const StyledRoot$1 = styled(RadixSlider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  touch-action: none;
  user-select: none;
`;
const StyledTrack = styled(RadixSlider.Track)`
  background: ${({ theme }) => theme.colors.input};
  position: relative;
  flex-grow: 1;
  height: 6px;
  border-radius: ${({ theme }) => theme.radii.full};
`;
const StyledRange = styled(RadixSlider.Range)`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  border-radius: inherit;
`;
const StyledThumb = styled(RadixSlider.Thumb)`
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
  return /* @__PURE__ */ jsxs(StyledRoot$1, { ...props, children: [
    /* @__PURE__ */ jsx(StyledTrack, { children: /* @__PURE__ */ jsx(StyledRange, {}) }),
    (props.defaultValue || props.value || [0]).map((_, i) => /* @__PURE__ */ jsx(StyledThumb, {}, i))
  ] });
}
const Trigger$3 = styled(RadixPopover.Trigger)`
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
const Content$e = styled(RadixPopover.Content)`
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
  const [open, setOpen] = useState(false);
  const initialView = () => {
    if (value) return value;
    const now = /* @__PURE__ */ new Date();
    if (min && now < min) return min;
    if (max && now > max) return max;
    return now;
  };
  const [viewDate, setViewDate] = useState(initialView);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const days = useMemo(() => {
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
  const isDisabled = useCallback((date) => {
    if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
    if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
    return false;
  }, [min, max]);
  const today = /* @__PURE__ */ new Date();
  const isSameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  return /* @__PURE__ */ jsxs(RadixPopover.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(Trigger$3, { disabled, children: value ? value.toLocaleDateString() : placeholder }),
    /* @__PURE__ */ jsx(RadixPopover.Portal, { children: /* @__PURE__ */ jsxs(Content$e, { sideOffset: 4, align: "start", children: [
      /* @__PURE__ */ jsxs(CalendarHeader, { children: [
        /* @__PURE__ */ jsx(NavButton, { onClick: () => setViewDate(new Date(year, month - 1, 1)), children: "‹" }),
        /* @__PURE__ */ jsxs(MonthLabel, { children: [
          MONTHS[month],
          " ",
          year
        ] }),
        /* @__PURE__ */ jsx(NavButton, { onClick: () => setViewDate(new Date(year, month + 1, 1)), children: "›" })
      ] }),
      /* @__PURE__ */ jsxs(DayGrid, { children: [
        DAYS.map((d2) => /* @__PURE__ */ jsx(DayHeader, { children: d2 }, d2)),
        days.map(({ date, outside }, i) => {
          const dis = isDisabled(date);
          const sel = value ? isSameDay(date, value) : false;
          return /* @__PURE__ */ jsx(
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

  ${({ $sz }) => $sz === "sm" ? css`height: 32px; padding: 0 10px;` : $sz === "lg" ? css`height: 48px; padding: 0 16px; font-size: 1rem;` : css`height: 40px; padding: 0 12px;`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:focus {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
const MaskedInput = forwardRef(
  ({ mask, size = "md", error, onChange, value, defaultValue, ...rest }, ref) => {
    const preset = mask && mask in MASKS ? MASKS[mask] : null;
    const pattern = preset ? preset.pattern : mask || "";
    const placeholderText = rest.placeholder || (preset ? preset.placeholder : void 0);
    const isCurrency = mask === "currency";
    const handleChange = useCallback(
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
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
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
      error && /* @__PURE__ */ jsx(ErrorText, { children: error })
    ] });
  }
);
MaskedInput.displayName = "MaskedInput";
const spin$1 = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  background: transparent;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  gap: 6px;

  ${({ $sz }) => $sz === "sm" ? css`height: 32px; padding: 0 10px;` : $sz === "lg" ? css`height: 48px; padding: 0 14px;` : css`height: 40px; padding: 0 12px;`}

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
  ${({ $sz }) => css`font-size: ${$sz === "sm" ? "14px" : $sz === "lg" ? "18px" : "16px"};`}
`;
const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.foreground};
  font-family: inherit;
  min-width: 0;

  ${({ $sz }) => $sz === "sm" ? css`font-size: ${({ theme }) => theme.typography.fontSize.xs};` : $sz === "lg" ? css`font-size: 1rem;` : css`font-size: ${({ theme }) => theme.typography.fontSize.sm};`}

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
const SearchBar = forwardRef(
  ({ size = "md", shortcut, loading, onClear, value, onChange, ...rest }, ref) => {
    const hasValue = value !== void 0 ? String(value).length > 0 : false;
    return /* @__PURE__ */ jsxs(Wrapper, { $sz: size, children: [
      /* @__PURE__ */ jsx(SearchIcon, { $sz: size, children: /* @__PURE__ */ jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ] }) }),
      /* @__PURE__ */ jsx(
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
      loading && /* @__PURE__ */ jsx(SpinnerIcon, {}),
      !loading && hasValue && onClear && /* @__PURE__ */ jsx(ClearButton, { type: "button", onClick: onClear, "aria-label": "Clear search", tabIndex: -1, children: "✕" }),
      !loading && shortcut && !hasValue && /* @__PURE__ */ jsx(ShortcutBadge, { children: shortcut })
    ] });
  }
);
SearchBar.displayName = "SearchBar";
function resolveColor$1(theme, colorScheme) {
  if (!colorScheme) return theme.colors.foreground;
  const c2 = theme.colors[colorScheme];
  if (typeof c2 === "object" && c2 !== null && "DEFAULT" in c2) return c2.DEFAULT;
  if (typeof c2 === "string") return c2;
  return theme.colors.foreground;
}
const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;

  ${({ $sz }) => $sz === "sm" ? css`padding: 1px 8px; font-size: 0.6875rem;` : css`padding: 2px 10px; font-size: 0.75rem;`}

  ${({ $v, $c, theme }) => {
  switch ($v) {
    case "outline":
      return css`background: transparent; border: 1px solid ${$c}; color: ${$c};`;
    case "soft":
      return css`background: ${$c}22; color: ${$c}; border: 1px solid transparent;`;
    default:
      return css`background: ${$c}; color: ${theme.colors.background}; border: 1px solid transparent;`;
  }
}}

  ${({ $dot, $c }) => $dot && css`
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${$c};
      }
    `}
`;
const Badge = forwardRef(
  ({ variant = "solid", colorScheme, size = "md", dot, children, ...rest }, ref) => {
    const theme = useTheme();
    const color = resolveColor$1(theme, colorScheme);
    return /* @__PURE__ */ jsx(StyledBadge, { ref, $v: variant, $c: color, $sz: size, $dot: dot, ...rest, children });
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
const Alert = forwardRef(
  ({ variant = "info", closable, onClose, icon, children, ...rest }, ref) => {
    const theme = useTheme();
    const color = getAlertColor(theme, variant);
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return /* @__PURE__ */ jsxs(StyledAlert, { ref, $c: color, role: "alert", ...rest, children: [
      icon && /* @__PURE__ */ jsx("span", { children: icon }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children }),
      closable && /* @__PURE__ */ jsx(CloseButton, { onClick: () => {
        setVisible(false);
        onClose == null ? void 0 : onClose();
      }, "aria-label": "Close", children: "×" })
    ] });
  }
);
Alert.displayName = "Alert";
const indeterminate = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`;
const Track = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  ${({ $sz }) => $sz === "sm" ? css`height: 4px;` : $sz === "lg" ? css`height: 12px;` : css`height: 8px;`}
`;
const Fill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${({ $color, theme }) => $color || theme.colors.primary};
  transition: width 0.3s ease;

  ${({ $indeterminate, $value }) => $indeterminate ? css`width: 25%; animation: ${indeterminate} 1.5s ease infinite;` : css`width: ${$value}%;`}
`;
function Progress({ value = 0, size = "md", indeterminate: ind, color }) {
  return /* @__PURE__ */ jsx(Track, { $sz: size, role: "progressbar", "aria-valuenow": ind ? void 0 : value, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ jsx(Fill, { $value: value, $indeterminate: ind, $color: color }) });
}
const spin = keyframes`
  to { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.muted};
  border-top-color: ${({ $color, theme }) => $color || theme.colors.primary};
  animation: ${spin} 0.6s linear infinite;

  ${({ $size }) => {
  const s = $size === "sm" ? 16 : $size === "lg" ? 32 : $size === "xl" ? 48 : 24;
  return css`width: ${s}px; height: ${s}px;`;
}}
`;
const shimmer = keyframes`
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
const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;
const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
`;
function getVariantColor(theme, variant) {
  if (variant === "default") return null;
  const g = theme.colors[variant];
  return typeof g === "object" && "DEFAULT" in g ? g.DEFAULT : null;
}
const StyledViewport = styled(RadixToast.Viewport)`
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
const StyledRoot = styled(RadixToast.Root)`
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
  const c2 = getVariantColor(theme, $variant);
  return c2 ? css`border-left: 3px solid ${c2};` : "";
}}
`;
const StyledTitle = styled(RadixToast.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
`;
const StyledDescription = styled(RadixToast.Description)`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
const StyledAction = styled(RadixToast.Action)`
  all: unset;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-top: 8px;
  &:hover { text-decoration: underline; }
`;
const StyledClose = styled(RadixToast.Close)`
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
  Provider: RadixToast.Provider,
  Viewport: StyledViewport,
  Root: StyledRoot,
  Title: StyledTitle,
  Description: StyledDescription,
  Action: StyledAction,
  Close: StyledClose
};
const fadeIn$9 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp$4 = keyframes`from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); }`;
const Overlay$3 = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn$9} 0.15s ease;
`;
const Content$d = styled(RadixDialog.Content)`
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
const Title$3 = styled(RadixDialog.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;
const Description$2 = styled(RadixDialog.Description)`
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
const Close$1 = styled(RadixDialog.Close)`
  all: unset;
  cursor: pointer;
`;
const Dialog = {
  Root: RadixDialog.Root,
  Trigger: RadixDialog.Trigger,
  Portal: RadixDialog.Portal,
  Overlay: Overlay$3,
  Content: Content$d,
  Title: Title$3,
  Description: Description$2,
  Footer: Footer$4,
  Close: Close$1
};
const fadeIn$8 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp$3 = keyframes`from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); }`;
const Overlay$2 = styled(RadixAlertDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn$8} 0.15s ease;
`;
const Content$c = styled(RadixAlertDialog.Content)`
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
const Title$2 = styled(RadixAlertDialog.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;
const Description$1 = styled(RadixAlertDialog.Description)`
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
  Root: RadixAlertDialog.Root,
  Trigger: RadixAlertDialog.Trigger,
  Portal: RadixAlertDialog.Portal,
  Overlay: Overlay$2,
  Content: Content$c,
  Title: Title$2,
  Description: Description$1,
  Footer: Footer$3,
  Cancel: RadixAlertDialog.Cancel,
  Action: RadixAlertDialog.Action
};
const fadeIn$7 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideAnimations = {
  right: keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`,
  left: keyframes`from { transform: translateX(-100%); } to { transform: translateX(0); }`,
  top: keyframes`from { transform: translateY(-100%); } to { transform: translateY(0); }`,
  bottom: keyframes`from { transform: translateY(100%); } to { transform: translateY(0); }`
};
const Overlay$1 = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn$7} 0.15s ease;
`;
const Content$b = styled(RadixDialog.Content)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.card};
  padding: 24px;
  overflow-y: auto;
  outline: none;

  ${({ $side, theme }) => {
  const isHorizontal = $side === "left" || $side === "right";
  return css`
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
const Title$1 = styled(RadixDialog.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 16px;
`;
const Close = styled(RadixDialog.Close)`
  all: unset;
  cursor: pointer;
`;
const Drawer = {
  Root: RadixDialog.Root,
  Trigger: RadixDialog.Trigger,
  Portal: RadixDialog.Portal,
  Overlay: Overlay$1,
  Content: Content$b,
  Title: Title$1,
  Close
};
const fadeIn$6 = keyframes`from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`;
const Content$a = styled(RadixPopover.Content)`
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
const Arrow$2 = styled(RadixPopover.Arrow)`
  fill: ${({ theme }) => theme.colors.card};
`;
const Popover = {
  Root: RadixPopover.Root,
  Trigger: RadixPopover.Trigger,
  Anchor: RadixPopover.Anchor,
  Portal: RadixPopover.Portal,
  Content: Content$a,
  Arrow: Arrow$2,
  Close: RadixPopover.Close
};
const fadeIn$5 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const Content$9 = styled(RadixTooltip.Content)`
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
const Arrow$1 = styled(RadixTooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.foreground};
`;
const Tooltip = {
  Provider: RadixTooltip.Provider,
  Root: RadixTooltip.Root,
  Trigger: RadixTooltip.Trigger,
  Portal: RadixTooltip.Portal,
  Content: Content$9,
  Arrow: Arrow$1
};
const fadeIn$4 = keyframes`from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`;
const Content$8 = styled(RadixDropdown.Content)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$4} 0.15s ease;
`;
const Item$4 = styled(RadixDropdown.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &[data-disabled] { opacity: 0.5; pointer-events: none; }
`;
const CheckboxItem = styled(RadixDropdown.CheckboxItem)`
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
const RadioItem = styled(RadixDropdown.RadioItem)`
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
const Separator$3 = styled(RadixDropdown.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;
const Label = styled(RadixDropdown.Label)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
const SubContent = styled(RadixDropdown.SubContent)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 160px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$4} 0.15s ease;
`;
const SubTrigger = styled(RadixDropdown.SubTrigger)`
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
  Root: RadixDropdown.Root,
  Trigger: RadixDropdown.Trigger,
  Portal: RadixDropdown.Portal,
  Content: Content$8,
  Item: Item$4,
  CheckboxItem,
  RadioItem,
  RadioGroup: RadixDropdown.RadioGroup,
  ItemIndicator: RadixDropdown.ItemIndicator,
  Separator: Separator$3,
  Label,
  Group: RadixDropdown.Group,
  Sub: RadixDropdown.Sub,
  SubTrigger,
  SubContent
};
const fadeIn$3 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const Content$7 = styled(RadixContextMenu.Content)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn$3} 0.1s ease;
`;
const Item$3 = styled(RadixContextMenu.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;
const Separator$2 = styled(RadixContextMenu.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;
const ContextMenu = {
  Root: RadixContextMenu.Root,
  Trigger: RadixContextMenu.Trigger,
  Portal: RadixContextMenu.Portal,
  Content: Content$7,
  Item: Item$3,
  Separator: Separator$2,
  Group: RadixContextMenu.Group,
  Label: RadixContextMenu.Label,
  Sub: RadixContextMenu.Sub,
  SubTrigger: RadixContextMenu.SubTrigger,
  SubContent: RadixContextMenu.SubContent
};
const List$1 = styled(RadixTabs.List)`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const Trigger$2 = styled(RadixTabs.Trigger)`
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
const Content$6 = styled(RadixTabs.Content)`
  padding: 16px 0;
  outline: none;
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
`;
const Tabs = {
  Root: RadixTabs.Root,
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
  return /* @__PURE__ */ jsxs(Root$7, { children: [
    /* @__PURE__ */ jsx(PageButton, { onClick: () => onPageChange(page - 1), disabled: page === 1, "aria-label": "Previous page", children: "‹" }),
    pages.map(
      (p, i) => p === "..." ? /* @__PURE__ */ jsx(Ellipsis, { children: "…" }, `e${i}`) : /* @__PURE__ */ jsx(PageButton, { $active: p === page, onClick: () => onPageChange(p), "aria-label": `Page ${p}`, "aria-current": p === page ? "page" : void 0, children: p }, p)
    ),
    /* @__PURE__ */ jsx(PageButton, { onClick: () => onPageChange(page + 1), disabled: page === totalPages, "aria-label": "Next page", children: "›" })
  ] });
}
const fadeIn$2 = keyframes`from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); }`;
const Root$6 = styled(RadixNavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 10;
`;
const List = styled(RadixNavigationMenu.List)`
  display: flex;
  list-style: none;
  padding: 4px;
  margin: 0;
  gap: 2px;
`;
const Trigger$1 = styled(RadixNavigationMenu.Trigger)`
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
const NLink = styled(RadixNavigationMenu.Link)`
  all: unset;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;
const Content$5 = styled(RadixNavigationMenu.Content)`
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
const Viewport$1 = styled(RadixNavigationMenu.Viewport)`
  position: relative;
  margin-top: 4px;
`;
const NavigationMenu = {
  Root: Root$6,
  List,
  Item: RadixNavigationMenu.Item,
  Trigger: Trigger$1,
  Link: NLink,
  Content: Content$5,
  Viewport: Viewport$1,
  Indicator: RadixNavigationMenu.Indicator
};
const Root$5 = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  th, td {
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    ${({ $compact }) => $compact ? css`padding: 6px 10px;` : css`padding: 10px 14px;`}
  }

  th {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.mutedForeground};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  ${({ $striped, theme }) => $striped && css`tbody tr:nth-child(even) { background: ${theme.colors.muted}44; }`}

  ${({ $hoverable, theme }) => $hoverable && css`tbody tr:hover { background: ${theme.colors.accent}; }`}
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
      return css`background: ${theme.colors.muted}; border: 1px solid transparent;`;
    case "outline":
      return css`background: ${theme.colors.card}; border: 1px solid ${theme.colors.border};`;
    default:
      return css`background: ${theme.colors.card}; border: 1px solid ${theme.colors.border}; box-shadow: ${theme.shadows.md};`;
  }
}}

  ${({ $interactive, theme }) => $interactive && css`
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
const Root$3 = styled(RadixAvatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  vertical-align: middle;

  ${({ $shape, theme }) => $shape === "square" ? css`border-radius: ${theme.radii.md};` : css`border-radius: 50%;`}

  ${({ $size }) => {
  const s = sizes[$size || "md"];
  return css`width: ${s}px; height: ${s}px;`;
}}
`;
const Image = styled(RadixAvatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Fallback = styled(RadixAvatar.Fallback)`
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
const slideDown$1 = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;
const slideUp$2 = keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;
const Root$2 = styled(RadixAccordion.Root)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;
const Item$1 = styled(RadixAccordion.Item)`
  &:not(:last-child) { border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
`;
const Header = styled(RadixAccordion.Header)`
  display: flex;
`;
const Trigger = styled(RadixAccordion.Trigger)`
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
const Content$3 = styled(RadixAccordion.Content)`
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
  const c2 = theme.colors[cs];
  if (typeof c2 === "object" && c2 !== null && "DEFAULT" in c2) return c2.DEFAULT;
  if (typeof c2 === "string") return c2;
  return theme.colors.foreground;
}
const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: default;

  ${({ $sz }) => $sz === "sm" ? css`padding: 1px 8px; font-size: 0.6875rem;` : css`padding: 3px 10px; font-size: 0.75rem;`}

  ${({ $v, $c, theme }) => {
  switch ($v) {
    case "outline":
      return css`background: transparent; border: 1px solid ${$c}; color: ${$c};`;
    case "soft":
      return css`background: ${$c}22; color: ${$c}; border: 1px solid transparent;`;
    default:
      return css`background: ${$c}; color: ${theme.colors.background}; border: 1px solid transparent;`;
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
const Tag = forwardRef(
  ({ variant = "solid", colorScheme, size = "md", closable, onClose, children, ...rest }, ref) => {
    const theme = useTheme();
    const color = resolveColor(theme, colorScheme);
    return /* @__PURE__ */ jsxs(StyledTag, { ref, $v: variant, $c: color, $sz: size, ...rest, children: [
      children,
      closable && /* @__PURE__ */ jsx(CloseBtn, { onClick: onClose, "aria-label": "Remove", children: "×" })
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
  return /* @__PURE__ */ jsxs(TooltipBox, { children: [
    /* @__PURE__ */ jsx(TooltipLabel, { children: label }),
    payload.map((p, i) => /* @__PURE__ */ jsxs(TooltipValue, { $color: p.color, children: [
      p.name,
      ": ",
      typeof p.value === "number" ? p.value.toLocaleString() : p.value
    ] }, i))
  ] });
}
function useChartTheme() {
  const theme = useTheme();
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
  colors: colors2,
  horizontal = false,
  showGrid = true,
  showTooltip = true,
  showLegend = false,
  radius = 4,
  dataKeys
}) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;
  return /* @__PURE__ */ jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(
    BarChart$1,
    {
      data,
      layout: horizontal ? "vertical" : "horizontal",
      margin: { top: 8, right: 8, bottom: 4, left: horizontal ? 40 : 0 },
      children: [
        showGrid && /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: ct.grid, vertical: !horizontal, horizontal: horizontal || true }),
        horizontal ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(XAxis, { type: "number", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsx(YAxis, { type: "category", dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 50 })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(XAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
          /* @__PURE__ */ jsx(YAxis, { tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 40 })
        ] }),
        showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(CalangoTooltip, {}), cursor: { fill: `${ct.primary}08` } }),
        showLegend && /* @__PURE__ */ jsx(Legend, { wrapperStyle: { fontSize: ct.fontSize, fontFamily: ct.fontFamily } }),
        hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsx(Bar, { dataKey: dk.key, name: dk.name || dk.key, fill: dk.color, radius: [radius, radius, radius, radius] }, dk.key)) : /* @__PURE__ */ jsx(Bar, { dataKey: "value", radius: [radius, radius, radius, radius], children: data.map((entry, i) => /* @__PURE__ */ jsx(Cell$1, { fill: entry.color || (colors2 ? colors2[i % colors2.length] : color || ct.primary) }, i)) })
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
  return /* @__PURE__ */ jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(LineChart$1, { data, margin: { top: 8, right: 8, bottom: 4, left: 0 }, children: [
    showGrid && /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: ct.grid }),
    /* @__PURE__ */ jsx(XAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
    /* @__PURE__ */ jsx(YAxis, { tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 40 }),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(CalangoTooltip, {}) }),
    hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsx(
      Line,
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
    )) : /* @__PURE__ */ jsx(
      Line,
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
  return /* @__PURE__ */ jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(AreaChart$1, { data, margin: { top: 8, right: 8, bottom: 4, left: 0 }, children: [
    showGrid && /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: ct.grid }),
    /* @__PURE__ */ jsx(XAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false }),
    /* @__PURE__ */ jsx(YAxis, { tick: { fill: ct.text, fontSize: ct.fontSize }, axisLine: false, tickLine: false, width: 40 }),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(CalangoTooltip, {}) }),
    hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsx(
      Area,
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
    )) : /* @__PURE__ */ jsx(
      Area,
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
  return /* @__PURE__ */ jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(PieChart, { children: [
    /* @__PURE__ */ jsx(
      Pie,
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
        children: data.map((entry, i) => /* @__PURE__ */ jsx(Cell$1, { fill: entry.color || defaultColors[i % defaultColors.length], stroke: "transparent" }, i))
      }
    ),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(CalangoTooltip, {}) }),
    showLegend && /* @__PURE__ */ jsx(Legend, { wrapperStyle: { fontSize: ct.fontSize, fontFamily: ct.fontFamily, color: ct.text } })
  ] }) }) });
}
function RadarChart({ data, height, color, showTooltip = true, dataKeys }) {
  const ct = useChartTheme();
  const hasMultipleKeys = dataKeys && dataKeys.length > 0;
  return /* @__PURE__ */ jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(RadarChart$1, { data, cx: "50%", cy: "50%", outerRadius: "70%", children: [
    /* @__PURE__ */ jsx(PolarGrid, { stroke: ct.grid }),
    /* @__PURE__ */ jsx(PolarAngleAxis, { dataKey: "label", tick: { fill: ct.text, fontSize: ct.fontSize } }),
    /* @__PURE__ */ jsx(PolarRadiusAxis, { tick: { fill: ct.text, fontSize: 9 }, axisLine: false }),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(CalangoTooltip, {}) }),
    hasMultipleKeys ? dataKeys.map((dk) => /* @__PURE__ */ jsx(Radar, { dataKey: dk.key, name: dk.name || dk.key, stroke: dk.color, fill: dk.color, fillOpacity: 0.2 }, dk.key)) : /* @__PURE__ */ jsx(Radar, { dataKey: "value", stroke: color || ct.primary, fill: color || ct.primary, fillOpacity: 0.2 })
  ] }) }) });
}
function RadialBarChartComponent({ data, height, showLegend = true, showTooltip = true }) {
  const ct = useChartTheme();
  const formatted = data.map((d2, i) => ({
    ...d2,
    name: d2.label,
    fill: d2.color || defaultColors[i % defaultColors.length]
  }));
  return /* @__PURE__ */ jsx(ChartWrapper, { $h: height, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(
    RadialBarChart,
    {
      data: formatted,
      cx: "50%",
      cy: "50%",
      innerRadius: "20%",
      outerRadius: "90%",
      barSize: 12,
      children: [
        /* @__PURE__ */ jsx(RadialBar, { dataKey: "value", background: { fill: `${ct.grid}44` }, cornerRadius: 6 }),
        showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(CalangoTooltip, {}) }),
        showLegend && /* @__PURE__ */ jsx(Legend, { wrapperStyle: { fontSize: ct.fontSize, fontFamily: ct.fontFamily, color: ct.text } })
      ]
    }
  ) }) });
}
function SparkLine({ data, width = "120px", height = "32px", color, area = false }) {
  const ct = useChartTheme();
  const c2 = color || ct.primary;
  const chartData = data.map((value, i) => ({ value, i }));
  return /* @__PURE__ */ jsx("div", { style: { width, height }, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: area ? /* @__PURE__ */ jsx(AreaChart$1, { data: chartData, margin: { top: 2, right: 2, bottom: 2, left: 2 }, children: /* @__PURE__ */ jsx(Area, { dataKey: "value", stroke: c2, fill: c2, fillOpacity: 0.15, strokeWidth: 1.5, type: "monotone", dot: false }) }) : /* @__PURE__ */ jsx(LineChart$1, { data: chartData, margin: { top: 2, right: 2, bottom: 2, left: 2 }, children: /* @__PURE__ */ jsx(Line, { dataKey: "value", stroke: c2, strokeWidth: 1.5, type: "monotone", dot: false }) }) }) });
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
  return /* @__PURE__ */ jsxs(StatRoot, { children: [
    /* @__PURE__ */ jsxs(StatHeader, { children: [
      /* @__PURE__ */ jsx(StatLbl, { children: label }),
      icon
    ] }),
    /* @__PURE__ */ jsx(StatVal, { children: value }),
    /* @__PURE__ */ jsxs(StatHeader, { children: [
      trend && /* @__PURE__ */ jsxs(StatTrend, { $positive: trend.positive, children: [
        trend.positive ? "↑" : "↓",
        " ",
        trend.value
      ] }),
      sparkData && /* @__PURE__ */ jsx(SparkLine, { data: sparkData, color: sparkColor, area: true })
    ] })
  ] });
}
const fadeIn$1 = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp$1 = keyframes`from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); }`;
const Overlay = styled(RadixDialog.Overlay)`
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
const Content$2 = styled(RadixDialog.Content)`
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
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!open) setSearch("");
  }, [open]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(RadixDialog.Root, { open, onOpenChange, children: /* @__PURE__ */ jsx(RadixDialog.Portal, { children: /* @__PURE__ */ jsx(Overlay, { children: /* @__PURE__ */ jsxs(Content$2, { children: [
    /* @__PURE__ */ jsx(RadixDialog.Title, { style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }, children: "Command Palette" }),
    /* @__PURE__ */ jsx(
      SearchInput,
      {
        placeholder,
        value: search,
        onChange: (e) => setSearch(e.target.value),
        autoFocus: true
      }
    ),
    filtered.map((group, gi) => /* @__PURE__ */ jsxs(Group, { children: [
      /* @__PURE__ */ jsx(GroupLabel, { children: group.label }),
      group.items.map((item, ii) => /* @__PURE__ */ jsxs(Item, { onClick: () => {
        var _a;
        (_a = item.onSelect) == null ? void 0 : _a.call(item);
        onOpenChange(false);
      }, children: [
        /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          item.icon,
          item.label
        ] }),
        item.shortcut && /* @__PURE__ */ jsx(Shortcut, { children: item.shortcut })
      ] }, ii))
    ] }, gi)),
    filtered.length === 0 && /* @__PURE__ */ jsx(Empty, { children: "No results found." })
  ] }) }) }) });
}
const Root$1 = styled.div`
  display: flex;
  ${({ $vertical }) => $vertical ? css`flex-direction: column;` : css`flex-direction: row; align-items: flex-start;`}
`;
const StepContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ $vertical }) => $vertical ? css`flex-direction: row; gap: 12px;` : css`flex-direction: column; gap: 8px; flex: 1; text-align: center;`}
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
      return css`background: ${theme.colors.primary}; color: ${theme.colors.primaryForeground};`;
    case "active":
      return css`background: transparent; border: 2px solid ${theme.colors.primary}; color: ${theme.colors.primary};`;
    case "error":
      return css`background: ${theme.colors.destructive}; color: ${theme.colors.destructiveForeground};`;
    default:
      return css`background: ${theme.colors.muted}; color: ${theme.colors.mutedForeground};`;
  }
}}
`;
const StepLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ $active, theme }) => $active ? theme.colors.foreground : theme.colors.mutedForeground};
  white-space: nowrap;
`;
const Separator$1 = styled.div`
  ${({ $vertical }) => $vertical ? css`width: 2px; height: 24px; margin-left: 15px;` : css`height: 2px; flex: 1;`}
  background: ${({ $completed, theme }) => $completed ? theme.colors.primary : theme.colors.border};
  transition: background 0.2s ease;
`;
function Stepper({ steps, activeStep, orientation = "horizontal" }) {
  const vertical = orientation === "vertical";
  return /* @__PURE__ */ jsx(Root$1, { $vertical: vertical, children: steps.map((step, i) => {
    const status = step.status || (i < activeStep ? "complete" : i === activeStep ? "active" : "pending");
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxs(StepContainer, { $vertical: vertical, children: [
        /* @__PURE__ */ jsx(Circle, { $status: status, children: status === "complete" ? "✓" : status === "error" ? "!" : i + 1 }),
        /* @__PURE__ */ jsx(StepLabel, { $active: status === "active" || status === "complete", children: step.label })
      ] }),
      i < steps.length - 1 && /* @__PURE__ */ jsx(Separator$1, { $completed: i < activeStep, $vertical: vertical })
    ] }, i);
  }) });
}
const slideDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-collapsible-content-height); }
`;
const slideUp = keyframes`
  from { height: var(--radix-collapsible-content-height); }
  to { height: 0; }
`;
const Content$1 = styled(RadixCollapsible.Content)`
  overflow: hidden;
  &[data-state='open'] { animation: ${slideDown} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideUp} 0.3s ease; }
`;
const Collapsible = {
  Root: RadixCollapsible.Root,
  Trigger: RadixCollapsible.Trigger,
  Content: Content$1
};
const fadeIn = keyframes`from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); }`;
const Content = styled(RadixHoverCard.Content)`
  z-index: ${({ theme }) => theme.zIndex.popover};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  min-width: 280px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.2s ease;
`;
const Arrow = styled(RadixHoverCard.Arrow)`
  fill: ${({ theme }) => theme.colors.card};
`;
const HoverCard = {
  Root: RadixHoverCard.Root,
  Trigger: RadixHoverCard.Trigger,
  Portal: RadixHoverCard.Portal,
  Content,
  Arrow
};
const Root = styled(RadixScrollArea.Root)`
  overflow: hidden;
`;
const Viewport = styled(RadixScrollArea.Viewport)`
  width: 100%;
  height: 100%;
`;
const Scrollbar = styled(RadixScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  transition: background 0.15s ease;

  &[data-orientation='vertical'] { width: 8px; }
  &[data-orientation='horizontal'] { flex-direction: column; height: 8px; }

  &:hover { background: ${({ theme }) => theme.colors.muted}; }
`;
const Thumb = styled(RadixScrollArea.Thumb)`
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
const Corner = styled(RadixScrollArea.Corner)`
  background: ${({ theme }) => theme.colors.muted};
`;
const ScrollArea = { Root, Viewport, Scrollbar, Thumb, Corner };
const Separator = styled(RadixSeparator.Root)`
  background: ${({ theme }) => theme.colors.border};
  &[data-orientation='horizontal'] { height: 1px; width: 100%; }
  &[data-orientation='vertical'] { width: 1px; height: 100%; }
`;
export {
  Accordion,
  Alert,
  AlertDialog,
  AlertTitle,
  AreaChart,
  AspectRatio,
  Avatar,
  Badge,
  BarChart,
  Box,
  Breadcrumb,
  Button,
  C as CalangoUIProvider,
  Card,
  Checkbox,
  Collapsible,
  CommandPalette,
  ContextMenu,
  DatePicker,
  Dialog,
  Divider,
  DonutChart,
  Drawer,
  DropdownMenu,
  ErrorText$1 as ErrorText,
  FiActivity,
  FiAnchor,
  FiBox,
  FiCloud as FiCloudIcon,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCodepen,
  FiCoffee,
  FiCompass,
  FiCopy,
  FiDatabase,
  FiDownload,
  FiDribbble,
  FiDroplet,
  FiEdit3,
  FiExternalLink,
  FiFacebook,
  FiFeather,
  FiFigma,
  FiGithub,
  FiGitlab,
  FiGrid,
  FiHardDrive,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMaximize2,
  FiMinimize2,
  FiMonitor,
  FiPackage,
  FiRefreshCw,
  FiRotateCcw,
  FiRotateCw,
  FiShare2,
  FiSidebar,
  FiSlack,
  FiSmartphone,
  FiSunrise,
  FiSunset,
  FiTablet,
  FiTerminal,
  FiTrash2,
  FiTrendingDown,
  FiTrendingUp,
  FiTwitch,
  FiTwitter,
  FiUmbrella,
  FiUpload,
  FiWind,
  FiYoutube,
  FiZap,
  Flex,
  G as GlobalStyles,
  Grid,
  Heading,
  HiAcademicCap,
  HiAdjustmentsHorizontal,
  HiAdjustmentsVertical,
  HiArrowDown,
  HiArrowLeft,
  HiArrowPath,
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiArrowUp,
  HiArrowUpRight,
  HiArrowUturnLeft,
  HiArrowsPointingIn,
  HiArrowsPointingOut,
  HiArrowsUpDown,
  HiAtSymbol,
  HiBanknotes,
  HiBars3,
  HiBars3BottomLeft,
  HiBattery100,
  HiBattery50,
  HiBeaker,
  HiBell,
  HiBellAlert,
  HiBellSlash,
  HiBolt,
  HiBookOpen,
  HiBookmark,
  HiBookmarkSquare,
  HiBugAnt,
  HiBuildingLibrary,
  HiBuildingOffice,
  HiBuildingOffice2,
  HiBuildingStorefront,
  HiCalculator,
  HiCalendar,
  HiCalendarDays,
  HiCamera,
  HiChartBar,
  HiChartBarSquare,
  HiChartPie,
  HiChatBubbleLeft,
  HiChatBubbleLeftRight,
  HiChatBubbleOvalLeft,
  HiCheck,
  HiCheckBadge,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiCircleStack,
  HiClipboard,
  HiClipboardDocument,
  HiClock,
  HiCloud,
  HiCloudArrowDown,
  HiCloudArrowUp,
  HiCodeBracket,
  HiCodeBracketSquare,
  HiCog6Tooth,
  HiCog8Tooth,
  HiCommandLine,
  HiComputerDesktop,
  HiCpuChip,
  HiCreditCard,
  HiCurrencyDollar,
  HiDevicePhoneMobile,
  HiDeviceTablet,
  HiDocument,
  HiDocumentArrowDown,
  HiDocumentArrowUp,
  HiDocumentDuplicate,
  HiDocumentMinus,
  HiDocumentPlus,
  HiDocumentText,
  HiEllipsisHorizontal,
  HiEllipsisVertical,
  HiEnvelope,
  HiEnvelopeOpen,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiEye,
  HiEyeDropper,
  HiEyeSlash,
  HiFaceFrown,
  HiFaceSmile,
  HiFilm,
  HiFingerPrint,
  HiFire,
  HiFolder,
  HiFolderMinus,
  HiFolderOpen,
  HiFolderPlus,
  HiFunnel,
  HiGift,
  HiGlobeAlt,
  HiGlobeAmericas,
  HiGlobeAsiaAustralia,
  HiGlobeEuropeAfrica,
  HiHandRaised,
  HiHandThumbDown,
  HiHandThumbUp,
  HiHashtag,
  HiHeart,
  HiHome,
  HiHomeModern,
  HiIdentification,
  HiInbox,
  HiInboxStack,
  HiInformationCircle,
  HiKey,
  HiLanguage,
  HiLink,
  HiListBullet,
  HiLockClosed,
  HiLockOpen,
  HiMagnifyingGlass,
  HiMap,
  HiMapPin,
  HiMegaphone,
  HiMicrophone,
  HiMinus,
  HiMoon,
  HiMusicalNote,
  HiNewspaper,
  HiNoSymbol,
  HiPaintBrush,
  HiPaperAirplane,
  HiPaperClip,
  HiPauseCircle,
  HiPencil,
  HiPencilSquare,
  HiPhone,
  HiPhoneArrowUpRight,
  HiPhoto,
  HiPlayCircle,
  HiPlus,
  HiPresentationChartBar,
  HiPresentationChartLine,
  HiPrinter,
  HiQuestionMarkCircle,
  HiQueueList,
  HiReceiptPercent,
  HiRectangleGroup,
  HiRectangleStack,
  HiScissors,
  HiServer,
  HiServerStack,
  HiShieldCheck,
  HiShieldCheck2 as HiShieldCheckDup,
  HiShieldExclamation,
  HiShoppingBag,
  HiShoppingCart,
  HiSignal,
  HiSparkles,
  HiSpeakerWave,
  HiSpeakerXMark,
  HiSquares2X2,
  HiSquaresPlus,
  HiStar,
  HiStopCircle,
  HiSun,
  HiSwatch,
  HiTableCells,
  HiTag,
  HiTicket,
  HiUser,
  HiUserCircle,
  HiUserGroup,
  HiUserMinus,
  HiUserPlus,
  HiUsers,
  HiVideoCamera,
  HiVideoCameraSlash,
  HiViewColumns,
  HiViewfinderCircle,
  HiWifi,
  HiWrench,
  HiWrenchScrewdriver,
  HiXCircle,
  HiXMark,
  HoverCard,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Label$1 as Label,
  LineChart,
  MaskedInput,
  NavigationMenu,
  Pagination,
  Popover,
  Progress,
  RadarChart,
  RadialBarChartComponent as RadialBarChart,
  RadioGroup,
  RoundedIcon,
  ScrollArea,
  SearchBar,
  Select,
  Separator,
  SiAnthropic,
  SiApple,
  SiBitbucket,
  SiChromatic,
  SiDiscord,
  SiDocker,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJira,
  SiKotlin,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNetflix,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiOpenai,
  SiPnpm,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSlack,
  SiSpotify,
  SiStorybook,
  SiStripe,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiYarn,
  Sidebar,
  Skeleton,
  Slider,
  SparkLine,
  Spinner,
  Stack,
  StatCard,
  Stepper,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  Textarea,
  Toast,
  Tooltip,
  colors,
  c as createTheme,
  d as darkTheme,
  l as lightTheme,
  radii,
  shadows,
  spacing,
  typography,
  u as useTheme,
  zIndex
};
//# sourceMappingURL=index.js.map
