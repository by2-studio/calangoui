import { AnchorHTMLAttributes } from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { BaseObject } from 'styled-components/dist/types';
import { ChangeEvent } from 'react';
import { Component } from 'react';
import { default as default_2 } from 'react';
import { DetailedHTMLProps } from 'react';
import { ElementType } from 'react';
import { ExecutionProps } from 'styled-components';
import { FastOmit } from 'styled-components';
import { FC } from 'react';
import { FiActivity } from 'react-icons/fi';
import { FiAnchor } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import { FiCloud as FiCloudIcon } from 'react-icons/fi';
import { FiCloudLightning } from 'react-icons/fi';
import { FiCloudRain } from 'react-icons/fi';
import { FiCloudSnow } from 'react-icons/fi';
import { FiCodepen } from 'react-icons/fi';
import { FiCoffee } from 'react-icons/fi';
import { FiCompass } from 'react-icons/fi';
import { FiCopy } from 'react-icons/fi';
import { FiDatabase } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';
import { FiDroplet } from 'react-icons/fi';
import { FiEdit3 } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiFeather } from 'react-icons/fi';
import { FiFigma } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiGitlab } from 'react-icons/fi';
import { FiGrid } from 'react-icons/fi';
import { FiHardDrive } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLayers } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiMaximize2 } from 'react-icons/fi';
import { FiMinimize2 } from 'react-icons/fi';
import { FiMonitor } from 'react-icons/fi';
import { FiPackage } from 'react-icons/fi';
import { FiRefreshCw } from 'react-icons/fi';
import { FiRotateCcw } from 'react-icons/fi';
import { FiRotateCw } from 'react-icons/fi';
import { FiShare2 } from 'react-icons/fi';
import { FiSidebar } from 'react-icons/fi';
import { FiSlack } from 'react-icons/fi';
import { FiSmartphone } from 'react-icons/fi';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { FiTablet } from 'react-icons/fi';
import { FiTerminal } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { FiTrendingDown } from 'react-icons/fi';
import { FiTrendingUp } from 'react-icons/fi';
import { FiTwitch } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiUmbrella } from 'react-icons/fi';
import { FiUpload } from 'react-icons/fi';
import { FiWind } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FiZap } from 'react-icons/fi';
import { ForwardRefExoticComponent } from 'react';
import { HiAcademicCap } from 'react-icons/hi2';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { HiAdjustmentsVertical } from 'react-icons/hi2';
import { HiArrowDown } from 'react-icons/hi2';
import { HiArrowLeft } from 'react-icons/hi2';
import { HiArrowPath } from 'react-icons/hi2';
import { HiArrowRight } from 'react-icons/hi2';
import { HiArrowsPointingIn } from 'react-icons/hi2';
import { HiArrowsPointingOut } from 'react-icons/hi2';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { HiArrowUp } from 'react-icons/hi2';
import { HiArrowUpRight } from 'react-icons/hi2';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { HiAtSymbol } from 'react-icons/hi2';
import { HiBanknotes } from 'react-icons/hi2';
import { HiBars3 } from 'react-icons/hi2';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { HiBattery100 } from 'react-icons/hi2';
import { HiBattery50 } from 'react-icons/hi2';
import { HiBeaker } from 'react-icons/hi2';
import { HiBell } from 'react-icons/hi2';
import { HiBellAlert } from 'react-icons/hi2';
import { HiBellSlash } from 'react-icons/hi2';
import { HiBolt } from 'react-icons/hi2';
import { HiBookmark } from 'react-icons/hi2';
import { HiBookmarkSquare } from 'react-icons/hi2';
import { HiBookOpen } from 'react-icons/hi2';
import { HiBugAnt } from 'react-icons/hi2';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { HiBuildingOffice } from 'react-icons/hi2';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { HiCalculator } from 'react-icons/hi2';
import { HiCalendar } from 'react-icons/hi2';
import { HiCalendarDays } from 'react-icons/hi2';
import { HiCamera } from 'react-icons/hi2';
import { HiChartBar } from 'react-icons/hi2';
import { HiChartBarSquare } from 'react-icons/hi2';
import { HiChartPie } from 'react-icons/hi2';
import { HiChatBubbleLeft } from 'react-icons/hi2';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { HiChatBubbleOvalLeft } from 'react-icons/hi2';
import { HiCheck } from 'react-icons/hi2';
import { HiCheckBadge } from 'react-icons/hi2';
import { HiCheckCircle } from 'react-icons/hi2';
import { HiChevronDown } from 'react-icons/hi2';
import { HiChevronLeft } from 'react-icons/hi2';
import { HiChevronRight } from 'react-icons/hi2';
import { HiChevronUp } from 'react-icons/hi2';
import { HiCircleStack } from 'react-icons/hi2';
import { HiClipboard } from 'react-icons/hi2';
import { HiClipboardDocument } from 'react-icons/hi2';
import { HiClock } from 'react-icons/hi2';
import { HiCloud } from 'react-icons/hi2';
import { HiCloudArrowDown } from 'react-icons/hi2';
import { HiCloudArrowUp } from 'react-icons/hi2';
import { HiCodeBracket } from 'react-icons/hi2';
import { HiCodeBracketSquare } from 'react-icons/hi2';
import { HiCog6Tooth } from 'react-icons/hi2';
import { HiCog8Tooth } from 'react-icons/hi2';
import { HiCommandLine } from 'react-icons/hi2';
import { HiComputerDesktop } from 'react-icons/hi2';
import { HiCpuChip } from 'react-icons/hi2';
import { HiCreditCard } from 'react-icons/hi2';
import { HiCurrencyDollar } from 'react-icons/hi2';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { HiDeviceTablet } from 'react-icons/hi2';
import { HiDocument } from 'react-icons/hi2';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import { HiDocumentArrowUp } from 'react-icons/hi2';
import { HiDocumentDuplicate } from 'react-icons/hi2';
import { HiDocumentMinus } from 'react-icons/hi2';
import { HiDocumentPlus } from 'react-icons/hi2';
import { HiDocumentText } from 'react-icons/hi2';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { HiEnvelope } from 'react-icons/hi2';
import { HiEnvelopeOpen } from 'react-icons/hi2';
import { HiExclamationCircle } from 'react-icons/hi2';
import { HiExclamationTriangle } from 'react-icons/hi2';
import { HiEye } from 'react-icons/hi2';
import { HiEyeDropper } from 'react-icons/hi2';
import { HiEyeSlash } from 'react-icons/hi2';
import { HiFaceFrown } from 'react-icons/hi2';
import { HiFaceSmile } from 'react-icons/hi2';
import { HiFilm } from 'react-icons/hi2';
import { HiFingerPrint } from 'react-icons/hi2';
import { HiFire } from 'react-icons/hi2';
import { HiFolder } from 'react-icons/hi2';
import { HiFolderMinus } from 'react-icons/hi2';
import { HiFolderOpen } from 'react-icons/hi2';
import { HiFolderPlus } from 'react-icons/hi2';
import { HiFunnel } from 'react-icons/hi2';
import { HiGift } from 'react-icons/hi2';
import { HiGlobeAlt } from 'react-icons/hi2';
import { HiGlobeAmericas } from 'react-icons/hi2';
import { HiGlobeAsiaAustralia } from 'react-icons/hi2';
import { HiGlobeEuropeAfrica } from 'react-icons/hi2';
import { HiHandRaised } from 'react-icons/hi2';
import { HiHandThumbDown } from 'react-icons/hi2';
import { HiHandThumbUp } from 'react-icons/hi2';
import { HiHashtag } from 'react-icons/hi2';
import { HiHeart } from 'react-icons/hi2';
import { HiHome } from 'react-icons/hi2';
import { HiHomeModern } from 'react-icons/hi2';
import { HiIdentification } from 'react-icons/hi2';
import { HiInbox } from 'react-icons/hi2';
import { HiInboxStack } from 'react-icons/hi2';
import { HiInformationCircle } from 'react-icons/hi2';
import { HiKey } from 'react-icons/hi2';
import { HiLanguage } from 'react-icons/hi2';
import { HiLink } from 'react-icons/hi2';
import { HiListBullet } from 'react-icons/hi2';
import { HiLockClosed } from 'react-icons/hi2';
import { HiLockOpen } from 'react-icons/hi2';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiMap } from 'react-icons/hi2';
import { HiMapPin } from 'react-icons/hi2';
import { HiMegaphone } from 'react-icons/hi2';
import { HiMicrophone } from 'react-icons/hi2';
import { HiMinus } from 'react-icons/hi2';
import { HiMoon } from 'react-icons/hi2';
import { HiMusicalNote } from 'react-icons/hi2';
import { HiNewspaper } from 'react-icons/hi2';
import { HiNoSymbol } from 'react-icons/hi2';
import { HiPaintBrush } from 'react-icons/hi2';
import { HiPaperAirplane } from 'react-icons/hi2';
import { HiPaperClip } from 'react-icons/hi2';
import { HiPauseCircle } from 'react-icons/hi2';
import { HiPencil } from 'react-icons/hi2';
import { HiPencilSquare } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import { HiPhoneArrowUpRight } from 'react-icons/hi2';
import { HiPhoto } from 'react-icons/hi2';
import { HiPlayCircle } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';
import { HiPresentationChartBar } from 'react-icons/hi2';
import { HiPresentationChartLine } from 'react-icons/hi2';
import { HiPrinter } from 'react-icons/hi2';
import { HiQuestionMarkCircle } from 'react-icons/hi2';
import { HiQueueList } from 'react-icons/hi2';
import { HiReceiptPercent } from 'react-icons/hi2';
import { HiRectangleGroup } from 'react-icons/hi2';
import { HiRectangleStack } from 'react-icons/hi2';
import { HiScissors } from 'react-icons/hi2';
import { HiServer } from 'react-icons/hi2';
import { HiServerStack } from 'react-icons/hi2';
import { HiShieldCheck } from 'react-icons/hi2';
import { HiShieldExclamation } from 'react-icons/hi2';
import { HiShoppingBag } from 'react-icons/hi2';
import { HiShoppingCart } from 'react-icons/hi2';
import { HiSignal } from 'react-icons/hi2';
import { HiSparkles } from 'react-icons/hi2';
import { HiSpeakerWave } from 'react-icons/hi2';
import { HiSpeakerXMark } from 'react-icons/hi2';
import { HiSquares2X2 } from 'react-icons/hi2';
import { HiSquaresPlus } from 'react-icons/hi2';
import { HiStar } from 'react-icons/hi2';
import { HiStopCircle } from 'react-icons/hi2';
import { HiSun } from 'react-icons/hi2';
import { HiSwatch } from 'react-icons/hi2';
import { HiTableCells } from 'react-icons/hi2';
import { HiTag } from 'react-icons/hi2';
import { HiTicket } from 'react-icons/hi2';
import { HiUser } from 'react-icons/hi2';
import { HiUserCircle } from 'react-icons/hi2';
import { HiUserGroup } from 'react-icons/hi2';
import { HiUserMinus } from 'react-icons/hi2';
import { HiUserPlus } from 'react-icons/hi2';
import { HiUsers } from 'react-icons/hi2';
import { HiVideoCamera } from 'react-icons/hi2';
import { HiVideoCameraSlash } from 'react-icons/hi2';
import { HiViewColumns } from 'react-icons/hi2';
import { HiViewfinderCircle } from 'react-icons/hi2';
import { HiWifi } from 'react-icons/hi2';
import { HiWrench } from 'react-icons/hi2';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { HiXCircle } from 'react-icons/hi2';
import { HiXMark } from 'react-icons/hi2';
import { HTMLAttributes } from 'react';
import { IStyledComponentBase } from 'styled-components/dist/types';
import { JSX } from 'react/jsx-runtime';
import { NamedExoticComponent } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import * as RadixAvatar from '@radix-ui/react-avatar';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import * as RadixDialog from '@radix-ui/react-dialog';
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import * as RadixHoverCard from '@radix-ui/react-hover-card';
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import * as RadixPopover from '@radix-ui/react-popover';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import * as RadixSelect from '@radix-ui/react-select';
import * as RadixSeparator from '@radix-ui/react-separator';
import * as RadixSlider from '@radix-ui/react-slider';
import * as RadixSwitch from '@radix-ui/react-switch';
import * as RadixTabs from '@radix-ui/react-tabs';
import * as RadixToast from '@radix-ui/react-toast';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SiAnthropic } from 'react-icons/si';
import { SiApple } from 'react-icons/si';
import { SiBitbucket } from 'react-icons/si';
import { SiChromatic } from 'react-icons/si';
import { SiDiscord } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';
import { SiEslint } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiGitlab } from 'react-icons/si';
import { SiGo } from 'react-icons/si';
import { SiGooglecloud } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiJira } from 'react-icons/si';
import { SiKotlin } from 'react-icons/si';
import { SiKubernetes } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNetflix } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiNotion } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';
import { SiPnpm } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiPrettier } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedis } from 'react-icons/si';
import { SiRust } from 'react-icons/si';
import { SiSlack } from 'react-icons/si';
import { SiSpotify } from 'react-icons/si';
import { SiStorybook } from 'react-icons/si';
import { SiStripe } from 'react-icons/si';
import { SiSupabase } from 'react-icons/si';
import { SiSwift } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { SiVitest } from 'react-icons/si';
import { SiYarn } from 'react-icons/si';
import { Substitute } from 'styled-components/dist/types';
import { SVGAttributes } from 'react';
import { TableHTMLAttributes } from 'react';
import { TdHTMLAttributes } from 'react';
import { ThHTMLAttributes } from 'react';

export declare const Accordion: {
    Root: IStyledComponentBase<"web", Substitute<(RadixAccordion.AccordionSingleProps & RefAttributes<HTMLDivElement>) | (RadixAccordion.AccordionMultipleProps & RefAttributes<HTMLDivElement>), BaseObject>> & string & Omit<ForwardRefExoticComponent<(RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps) & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Item: IStyledComponentBase<"web", FastOmit<RadixAccordion.AccordionItemProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAccordion.AccordionItemProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Header: IStyledComponentBase<"web", FastOmit<RadixAccordion.AccordionHeaderProps & RefAttributes<HTMLHeadingElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAccordion.AccordionHeaderProps & RefAttributes<HTMLHeadingElement>>, keyof Component<any, {}, any>>;
    Trigger: IStyledComponentBase<"web", FastOmit<RadixAccordion.AccordionTriggerProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAccordion.AccordionTriggerProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
    Content: IStyledComponentBase<"web", FastOmit<RadixAccordion.AccordionContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAccordion.AccordionContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    ContentInner: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};

export declare const Alert: default_2.ForwardRefExoticComponent<AlertProps & default_2.RefAttributes<HTMLDivElement>>;

export declare const AlertDialog: {
    Root: FC<RadixAlertDialog.AlertDialogProps>;
    Trigger: ForwardRefExoticComponent<RadixAlertDialog.AlertDialogTriggerProps & RefAttributes<HTMLButtonElement>>;
    Portal: FC<RadixAlertDialog.AlertDialogPortalProps>;
    Overlay: IStyledComponentBase<"web", FastOmit<RadixAlertDialog.AlertDialogOverlayProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAlertDialog.AlertDialogOverlayProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Content: IStyledComponentBase<"web", FastOmit<RadixAlertDialog.AlertDialogContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAlertDialog.AlertDialogContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Title: IStyledComponentBase<"web", FastOmit<RadixAlertDialog.AlertDialogTitleProps & RefAttributes<HTMLHeadingElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAlertDialog.AlertDialogTitleProps & RefAttributes<HTMLHeadingElement>>, keyof Component<any, {}, any>>;
    Description: IStyledComponentBase<"web", FastOmit<RadixAlertDialog.AlertDialogDescriptionProps & RefAttributes<HTMLParagraphElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAlertDialog.AlertDialogDescriptionProps & RefAttributes<HTMLParagraphElement>>, keyof Component<any, {}, any>>;
    Footer: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Cancel: ForwardRefExoticComponent<RadixAlertDialog.AlertDialogCancelProps & RefAttributes<HTMLButtonElement>>;
    Action: ForwardRefExoticComponent<RadixAlertDialog.AlertDialogActionProps & RefAttributes<HTMLButtonElement>>;
};

export declare interface AlertProps extends default_2.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    closable?: boolean;
    onClose?: () => void;
    icon?: default_2.ReactNode;
}

export declare const AlertTitle: IStyledComponentBase<"web", FastOmit<default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;

export declare type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export declare function AreaChart({ data, height, color, showGrid, showTooltip, stacked, dataKeys, }: AreaChartProps): JSX.Element;

export declare interface AreaChartProps {
    data: ChartDataPoint[];
    height?: string;
    color?: string;
    showGrid?: boolean;
    showTooltip?: boolean;
    stacked?: boolean;
    dataKeys?: {
        key: string;
        color: string;
        name?: string;
    }[];
}

export { AspectRatio }

export declare const Avatar: {
    Root: IStyledComponentBase<"web", Substitute<RadixAvatar.AvatarProps & RefAttributes<HTMLSpanElement>, {
    $size?: AvatarSize;
    $shape?: AvatarShape;
    }>> & string & Omit<ForwardRefExoticComponent<RadixAvatar.AvatarProps & RefAttributes<HTMLSpanElement>>, keyof Component<any, {}, any>>;
    Image: IStyledComponentBase<"web", FastOmit<RadixAvatar.AvatarImageProps & RefAttributes<HTMLImageElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixAvatar.AvatarImageProps & RefAttributes<HTMLImageElement>>, keyof Component<any, {}, any>>;
    Fallback: IStyledComponentBase<"web", Substitute<RadixAvatar.AvatarFallbackProps & RefAttributes<HTMLSpanElement>, {
    $size?: AvatarSize;
    }>> & string & Omit<ForwardRefExoticComponent<RadixAvatar.AvatarFallbackProps & RefAttributes<HTMLSpanElement>>, keyof Component<any, {}, any>>;
};

export declare type AvatarShape = 'circle' | 'square';

export declare type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export declare const Badge: default_2.ForwardRefExoticComponent<BadgeProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    colorScheme?: string;
    size?: BadgeSize;
    dot?: boolean;
}

export declare type BadgeSize = 'sm' | 'md';

export declare type BadgeVariant = 'solid' | 'outline' | 'soft';

export declare function BarChart({ data, height, color, colors, horizontal, showGrid, showTooltip, showLegend, radius, dataKeys, }: BarChartProps): JSX.Element;

export declare interface BarChartProps {
    data: ChartDataPoint[];
    height?: string;
    color?: string;
    colors?: string[];
    horizontal?: boolean;
    showGrid?: boolean;
    showTooltip?: boolean;
    showLegend?: boolean;
    radius?: number;
    dataKeys?: {
        key: string;
        color: string;
        name?: string;
    }[];
}

export declare const Box: default_2.ForwardRefExoticComponent<BoxProps & Omit<default_2.HTMLAttributes<HTMLDivElement>, "color"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface BoxProps {
    as?: ElementType;
    p?: string;
    px?: string;
    py?: string;
    pt?: string;
    pb?: string;
    m?: string;
    mx?: string;
    my?: string;
    bg?: string;
    color?: string;
    radius?: string;
    shadow?: string;
    border?: string;
    w?: string;
    h?: string;
    minW?: string;
    minH?: string;
    maxW?: string;
    display?: string;
    overflow?: string;
}

export declare const Breadcrumb: {
    Root: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, never>> & string;
    Item: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
    Link: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>> & string;
    Page: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
    Separator: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
};

export declare const Button: default_2.ForwardRefExoticComponent<ButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: default_2.ReactNode;
    rightIcon?: default_2.ReactNode;
}

export declare type ButtonSize = 'sm' | 'md' | 'lg';

export declare type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';

export declare function CalangoUIProvider({ children, defaultTheme, theme: customTheme }: CalangoUIProviderProps): JSX.Element;

export declare interface CalangoUIProviderProps {
    children: ReactNode;
    defaultTheme?: 'dark' | 'light' | 'system';
    theme?: CalangoUITheme;
}

export declare interface CalangoUITheme {
    name: string;
    colors: typeof colors & SemanticColors;
    typography: typeof typography;
    spacing: typeof spacing;
    radii: typeof radii;
    shadows: {
        [K in keyof typeof shadows]: string;
    };
    zIndex: typeof zIndex;
}

export declare const Card: {
    Root: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: CardVariant;
    $interactive?: boolean;
    }>> & string;
    Header: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Title: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
    Description: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
    Content: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Footer: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};

export declare type CardVariant = 'elevated' | 'outline' | 'filled';

export declare interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
    [key: string]: unknown;
}

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLButtonElement>>;

export declare interface CheckboxProps extends RadixCheckbox.CheckboxProps {
}

export declare const Collapsible: {
    Root: ForwardRefExoticComponent<RadixCollapsible.CollapsibleProps & RefAttributes<HTMLDivElement>>;
    Trigger: ForwardRefExoticComponent<RadixCollapsible.CollapsibleTriggerProps & RefAttributes<HTMLButtonElement>>;
    Content: IStyledComponentBase<"web", FastOmit<RadixCollapsible.CollapsibleContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixCollapsible.CollapsibleContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
};

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

export declare interface CommandGroup {
    label: string;
    items: CommandItem[];
}

export declare interface CommandItem {
    label: string;
    shortcut?: string;
    icon?: default_2.ReactNode;
    onSelect?: () => void;
}

export declare function CommandPalette({ open, onOpenChange, groups, placeholder }: CommandPaletteProps): JSX.Element;

export declare interface CommandPaletteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    groups: CommandGroup[];
    placeholder?: string;
}

export declare const ContextMenu: {
    Root: FC<RadixContextMenu.ContextMenuProps>;
    Trigger: ForwardRefExoticComponent<RadixContextMenu.ContextMenuTriggerProps & RefAttributes<HTMLSpanElement>>;
    Portal: FC<RadixContextMenu.ContextMenuPortalProps>;
    Content: IStyledComponentBase<"web", FastOmit<RadixContextMenu.ContextMenuContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixContextMenu.ContextMenuContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Item: IStyledComponentBase<"web", FastOmit<RadixContextMenu.ContextMenuItemProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixContextMenu.ContextMenuItemProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Separator: IStyledComponentBase<"web", FastOmit<RadixContextMenu.ContextMenuSeparatorProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixContextMenu.ContextMenuSeparatorProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Group: ForwardRefExoticComponent<RadixContextMenu.ContextMenuGroupProps & RefAttributes<HTMLDivElement>>;
    Label: ForwardRefExoticComponent<RadixContextMenu.ContextMenuLabelProps & RefAttributes<HTMLDivElement>>;
    Sub: FC<RadixContextMenu.ContextMenuSubProps>;
    SubTrigger: ForwardRefExoticComponent<RadixContextMenu.ContextMenuSubTriggerProps & RefAttributes<HTMLDivElement>>;
    SubContent: ForwardRefExoticComponent<RadixContextMenu.ContextMenuSubContentProps & RefAttributes<HTMLDivElement>>;
};

export declare function createTheme(overrides: DeepPartial<CalangoUITheme>, base?: CalangoUITheme): CalangoUITheme;

export declare const darkTheme: CalangoUITheme;

export declare function DatePicker({ value, onChange, min, max, placeholder, disabled }: DatePickerProps): JSX.Element;

export declare interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date) => void;
    min?: Date;
    max?: Date;
    placeholder?: string;
    disabled?: boolean;
}

declare type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export declare const Dialog: {
    Root: FC<RadixDialog.DialogProps>;
    Trigger: ForwardRefExoticComponent<RadixDialog.DialogTriggerProps & RefAttributes<HTMLButtonElement>>;
    Portal: FC<RadixDialog.DialogPortalProps>;
    Overlay: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogOverlayProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogOverlayProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Content: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Title: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogTitleProps & RefAttributes<HTMLHeadingElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogTitleProps & RefAttributes<HTMLHeadingElement>>, keyof Component<any, {}, any>>;
    Description: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogDescriptionProps & RefAttributes<HTMLParagraphElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogDescriptionProps & RefAttributes<HTMLParagraphElement>>, keyof Component<any, {}, any>>;
    Footer: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Close: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogCloseProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogCloseProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
};

export declare const Divider: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>, DividerProps>> & string;

export declare interface DividerProps {
    $orientation?: 'horizontal' | 'vertical';
    $color?: string;
}

export declare function DonutChart({ data, height, donut, innerRadius, showTooltip, showLegend, showLabels, }: DonutChartProps): JSX.Element;

export declare interface DonutChartProps {
    data: ChartDataPoint[];
    height?: string;
    donut?: boolean;
    innerRadius?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    showLabels?: boolean;
}

export declare const Drawer: {
    Root: FC<RadixDialog.DialogProps>;
    Trigger: ForwardRefExoticComponent<RadixDialog.DialogTriggerProps & RefAttributes<HTMLButtonElement>>;
    Portal: FC<RadixDialog.DialogPortalProps>;
    Overlay: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogOverlayProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogOverlayProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Content: IStyledComponentBase<"web", Substitute<RadixDialog.DialogContentProps & RefAttributes<HTMLDivElement>, {
    $side: DrawerSide;
    }>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Title: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogTitleProps & RefAttributes<HTMLHeadingElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogTitleProps & RefAttributes<HTMLHeadingElement>>, keyof Component<any, {}, any>>;
    Close: IStyledComponentBase<"web", FastOmit<RadixDialog.DialogCloseProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDialog.DialogCloseProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
};

export declare type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

export declare const DropdownMenu: {
    Root: FC<RadixDropdown.DropdownMenuProps>;
    Trigger: ForwardRefExoticComponent<RadixDropdown.DropdownMenuTriggerProps & RefAttributes<HTMLButtonElement>>;
    Portal: FC<RadixDropdown.DropdownMenuPortalProps>;
    Content: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Item: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuItemProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuItemProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    CheckboxItem: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuCheckboxItemProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuCheckboxItemProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    RadioItem: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuRadioItemProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuRadioItemProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    RadioGroup: ForwardRefExoticComponent<RadixDropdown.DropdownMenuRadioGroupProps & RefAttributes<HTMLDivElement>>;
    ItemIndicator: ForwardRefExoticComponent<RadixDropdown.DropdownMenuItemIndicatorProps & RefAttributes<HTMLSpanElement>>;
    Separator: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuSeparatorProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuSeparatorProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Label: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuLabelProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuLabelProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Group: ForwardRefExoticComponent<RadixDropdown.DropdownMenuGroupProps & RefAttributes<HTMLDivElement>>;
    Sub: FC<RadixDropdown.DropdownMenuSubProps>;
    SubTrigger: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuSubTriggerProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuSubTriggerProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    SubContent: IStyledComponentBase<"web", FastOmit<RadixDropdown.DropdownMenuSubContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixDropdown.DropdownMenuSubContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
};

export declare const ErrorText: IStyledComponentBase<"web", FastOmit<default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;

export { FiActivity }

export { FiAnchor }

export { FiBox }

export { FiCloudIcon }

export { FiCloudLightning }

export { FiCloudRain }

export { FiCloudSnow }

export { FiCodepen }

export { FiCoffee }

export { FiCompass }

export { FiCopy }

export { FiDatabase }

export { FiDownload }

export { FiDribbble }

export { FiDroplet }

export { FiEdit3 }

export { FiExternalLink }

export { FiFacebook }

export { FiFeather }

export { FiFigma }

export { FiGithub }

export { FiGitlab }

export { FiGrid }

export { FiHardDrive }

export { FiInstagram }

export { FiLayers }

export { FiLinkedin }

export { FiMaximize2 }

export { FiMinimize2 }

export { FiMonitor }

export { FiPackage }

export { FiRefreshCw }

export { FiRotateCcw }

export { FiRotateCw }

export { FiShare2 }

export { FiSidebar }

export { FiSlack }

export { FiSmartphone }

export { FiSunrise }

export { FiSunset }

export { FiTablet }

export { FiTerminal }

export { FiTrash2 }

export { FiTrendingDown }

export { FiTrendingUp }

export { FiTwitch }

export { FiTwitter }

export { FiUmbrella }

export { FiUpload }

export { FiWind }

export { FiYoutube }

export { FiZap }

export declare const Flex: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FlexProps>> & string;

export declare interface FlexProps {
    $direction?: string;
    $align?: string;
    $justify?: string;
    $wrap?: string;
    $gap?: string;
    $inline?: boolean;
}

export declare const GlobalStyles: NamedExoticComponent<ExecutionProps & {
theme?: CalangoUITheme;
}>;

export declare const Grid: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, GridProps>> & string;

export declare interface GridProps {
    $columns?: number | string;
    $rows?: string;
    $gap?: string;
    $areas?: string;
}

export declare const Heading: default_2.ForwardRefExoticComponent<HeadingProps & Omit<default_2.HTMLAttributes<HTMLHeadingElement>, "color"> & default_2.RefAttributes<HTMLHeadingElement>>;

export declare interface HeadingProps {
    as?: ElementType;
    size?: string;
    weight?: number;
    color?: string;
}

export { HiAcademicCap }

export { HiAdjustmentsHorizontal }

export { HiAdjustmentsVertical }

export { HiArrowDown }

export { HiArrowLeft }

export { HiArrowPath }

export { HiArrowRight }

export { HiArrowsPointingIn }

export { HiArrowsPointingOut }

export { HiArrowsUpDown }

export { HiArrowTopRightOnSquare }

export { HiArrowUp }

export { HiArrowUpRight }

export { HiArrowUturnLeft }

export { HiAtSymbol }

export { HiBanknotes }

export { HiBars3 }

export { HiBars3BottomLeft }

export { HiBattery100 }

export { HiBattery50 }

export { HiBeaker }

export { HiBell }

export { HiBellAlert }

export { HiBellSlash }

export { HiBolt }

export { HiBookmark }

export { HiBookmarkSquare }

export { HiBookOpen }

export { HiBugAnt }

export { HiBuildingLibrary }

export { HiBuildingOffice }

export { HiBuildingOffice2 }

export { HiBuildingStorefront }

export { HiCalculator }

export { HiCalendar }

export { HiCalendarDays }

export { HiCamera }

export { HiChartBar }

export { HiChartBarSquare }

export { HiChartPie }

export { HiChatBubbleLeft }

export { HiChatBubbleLeftRight }

export { HiChatBubbleOvalLeft }

export { HiCheck }

export { HiCheckBadge }

export { HiCheckCircle }

export { HiChevronDown }

export { HiChevronLeft }

export { HiChevronRight }

export { HiChevronUp }

export { HiCircleStack }

export { HiClipboard }

export { HiClipboardDocument }

export { HiClock }

export { HiCloud }

export { HiCloudArrowDown }

export { HiCloudArrowUp }

export { HiCodeBracket }

export { HiCodeBracketSquare }

export { HiCog6Tooth }

export { HiCog8Tooth }

export { HiCommandLine }

export { HiComputerDesktop }

export { HiCpuChip }

export { HiCreditCard }

export { HiCurrencyDollar }

export { HiDevicePhoneMobile }

export { HiDeviceTablet }

export { HiDocument }

export { HiDocumentArrowDown }

export { HiDocumentArrowUp }

export { HiDocumentDuplicate }

export { HiDocumentMinus }

export { HiDocumentPlus }

export { HiDocumentText }

export { HiEllipsisHorizontal }

export { HiEllipsisVertical }

export { HiEnvelope }

export { HiEnvelopeOpen }

export { HiExclamationCircle }

export { HiExclamationTriangle }

export { HiEye }

export { HiEyeDropper }

export { HiEyeSlash }

export { HiFaceFrown }

export { HiFaceSmile }

export { HiFilm }

export { HiFingerPrint }

export { HiFire }

export { HiFolder }

export { HiFolderMinus }

export { HiFolderOpen }

export { HiFolderPlus }

export { HiFunnel }

export { HiGift }

export { HiGlobeAlt }

export { HiGlobeAmericas }

export { HiGlobeAsiaAustralia }

export { HiGlobeEuropeAfrica }

export { HiHandRaised }

export { HiHandThumbDown }

export { HiHandThumbUp }

export { HiHashtag }

export { HiHeart }

export { HiHome }

export { HiHomeModern }

export { HiIdentification }

export { HiInbox }

export { HiInboxStack }

export { HiInformationCircle }

export { HiKey }

export { HiLanguage }

export { HiLink }

export { HiListBullet }

export { HiLockClosed }

export { HiLockOpen }

export { HiMagnifyingGlass }

export { HiMap }

export { HiMapPin }

export { HiMegaphone }

export { HiMicrophone }

export { HiMinus }

export { HiMoon }

export { HiMusicalNote }

export { HiNewspaper }

export { HiNoSymbol }

export { HiPaintBrush }

export { HiPaperAirplane }

export { HiPaperClip }

export { HiPauseCircle }

export { HiPencil }

export { HiPencilSquare }

export { HiPhone }

export { HiPhoneArrowUpRight }

export { HiPhoto }

export { HiPlayCircle }

export { HiPlus }

export { HiPresentationChartBar }

export { HiPresentationChartLine }

export { HiPrinter }

export { HiQuestionMarkCircle }

export { HiQueueList }

export { HiReceiptPercent }

export { HiRectangleGroup }

export { HiRectangleStack }

export { HiScissors }

export { HiServer }

export { HiServerStack }

export { HiShieldCheck }
export { HiShieldCheck as HiShieldCheckDup }

export { HiShieldExclamation }

export { HiShoppingBag }

export { HiShoppingCart }

export { HiSignal }

export { HiSparkles }

export { HiSpeakerWave }

export { HiSpeakerXMark }

export { HiSquares2X2 }

export { HiSquaresPlus }

export { HiStar }

export { HiStopCircle }

export { HiSun }

export { HiSwatch }

export { HiTableCells }

export { HiTag }

export { HiTicket }

export { HiUser }

export { HiUserCircle }

export { HiUserGroup }

export { HiUserMinus }

export { HiUserPlus }

export { HiUsers }

export { HiVideoCamera }

export { HiVideoCameraSlash }

export { HiViewColumns }

export { HiViewfinderCircle }

export { HiWifi }

export { HiWrench }

export { HiWrenchScrewdriver }

export { HiXCircle }

export { HiXMark }

export declare const HoverCard: {
    Root: FC<RadixHoverCard.HoverCardProps>;
    Trigger: ForwardRefExoticComponent<RadixHoverCard.HoverCardTriggerProps & RefAttributes<HTMLAnchorElement>>;
    Portal: FC<RadixHoverCard.HoverCardPortalProps>;
    Content: IStyledComponentBase<"web", FastOmit<RadixHoverCard.HoverCardContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixHoverCard.HoverCardContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Arrow: IStyledComponentBase<"web", FastOmit<RadixHoverCard.HoverCardArrowProps & RefAttributes<SVGSVGElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixHoverCard.HoverCardArrowProps & RefAttributes<SVGSVGElement>>, keyof Component<any, {}, any>>;
};

export declare const Icon: default_2.ForwardRefExoticComponent<IconProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare const IconButton: IStyledComponentBase<"web", FastOmit<FastOmit<default_2.DetailedHTMLProps<default_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$v" | "$sz" | "$loading"> & {
$v: ButtonVariant;
$sz: ButtonSize;
$loading?: boolean;
}, never>> & string;

export declare interface IconProps extends SVGAttributes<SVGElement> {
    icon: default_2.ComponentType<SVGAttributes<SVGElement>>;
    size?: number | string;
    color?: string;
}

export declare const Input: default_2.ForwardRefExoticComponent<InputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare const InputGroup: IStyledComponentBase<"web", FastOmit<default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;

export declare interface InputProps extends Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    error?: string;
    leftElement?: default_2.ReactNode;
    rightElement?: default_2.ReactNode;
}

export declare const Label: IStyledComponentBase<"web", FastOmit<default_2.DetailedHTMLProps<default_2.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>> & string;

export declare const lightTheme: CalangoUITheme;

export declare function LineChart({ data, height, color, showGrid, showDots, showTooltip, curved, strokeWidth, dataKeys, }: LineChartProps): JSX.Element;

export declare interface LineChartProps {
    data: ChartDataPoint[];
    height?: string;
    color?: string;
    showGrid?: boolean;
    showDots?: boolean;
    showTooltip?: boolean;
    curved?: boolean;
    strokeWidth?: number;
    dataKeys?: {
        key: string;
        color: string;
        name?: string;
        dashed?: boolean;
    }[];
}

export declare const MaskedInput: ForwardRefExoticComponent<MaskedInputProps & RefAttributes<HTMLInputElement>>;

export declare interface MaskedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    mask?: MaskPreset | string;
    size?: 'sm' | 'md' | 'lg';
    error?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>, rawValue: string) => void;
}

export declare type MaskPreset = 'cpf' | 'cnpj' | 'phone' | 'cellphone' | 'cep' | 'date' | 'time' | 'currency' | 'creditcard';

export declare const NavigationMenu: {
    Root: IStyledComponentBase<"web", FastOmit<RadixNavigationMenu.NavigationMenuProps & RefAttributes<HTMLElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuProps & RefAttributes<HTMLElement>>, keyof Component<any, {}, any>>;
    List: IStyledComponentBase<"web", FastOmit<RadixNavigationMenu.NavigationMenuListProps & RefAttributes<HTMLUListElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuListProps & RefAttributes<HTMLUListElement>>, keyof Component<any, {}, any>>;
    Item: ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuItemProps & RefAttributes<HTMLLIElement>>;
    Trigger: IStyledComponentBase<"web", FastOmit<RadixNavigationMenu.NavigationMenuTriggerProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuTriggerProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
    Link: IStyledComponentBase<"web", FastOmit<RadixNavigationMenu.NavigationMenuLinkProps & RefAttributes<HTMLAnchorElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuLinkProps & RefAttributes<HTMLAnchorElement>>, keyof Component<any, {}, any>>;
    Content: IStyledComponentBase<"web", FastOmit<RadixNavigationMenu.NavigationMenuContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Viewport: IStyledComponentBase<"web", FastOmit<RadixNavigationMenu.NavigationMenuViewportProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuViewportProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Indicator: ForwardRefExoticComponent<RadixNavigationMenu.NavigationMenuIndicatorProps & RefAttributes<HTMLDivElement>>;
};

export declare function Pagination({ page, totalPages, siblings, onPageChange }: PaginationProps): JSX.Element;

export declare interface PaginationProps {
    page: number;
    totalPages: number;
    siblings?: number;
    onPageChange: (page: number) => void;
}

export declare const Popover: {
    Root: FC<RadixPopover.PopoverProps>;
    Trigger: ForwardRefExoticComponent<RadixPopover.PopoverTriggerProps & RefAttributes<HTMLButtonElement>>;
    Anchor: ForwardRefExoticComponent<RadixPopover.PopoverAnchorProps & RefAttributes<HTMLDivElement>>;
    Portal: FC<RadixPopover.PopoverPortalProps>;
    Content: IStyledComponentBase<"web", FastOmit<RadixPopover.PopoverContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixPopover.PopoverContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Arrow: IStyledComponentBase<"web", FastOmit<RadixPopover.PopoverArrowProps & RefAttributes<SVGSVGElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixPopover.PopoverArrowProps & RefAttributes<SVGSVGElement>>, keyof Component<any, {}, any>>;
    Close: ForwardRefExoticComponent<RadixPopover.PopoverCloseProps & RefAttributes<HTMLButtonElement>>;
};

export declare function Progress({ value, size, indeterminate: ind, color }: ProgressProps): JSX.Element;

export declare interface ProgressProps {
    value?: number;
    size?: ProgressSize;
    indeterminate?: boolean;
    color?: string;
}

export declare type ProgressSize = 'sm' | 'md' | 'lg';

export declare function RadarChart({ data, height, color, showTooltip, dataKeys }: RadarChartProps): JSX.Element;

export declare interface RadarChartProps {
    data: ChartDataPoint[];
    height?: string;
    color?: string;
    showTooltip?: boolean;
    dataKeys?: {
        key: string;
        color: string;
        name?: string;
    }[];
}

export declare function RadialBarChart({ data, height, showLegend, showTooltip }: RadialBarChartProps): JSX.Element;

export declare interface RadialBarChartProps {
    data: ChartDataPoint[];
    height?: string;
    showLegend?: boolean;
    showTooltip?: boolean;
}

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

export declare const RadioGroup: {
    Root: IStyledComponentBase<"web", FastOmit<RadixRadioGroup.RadioGroupProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixRadioGroup.RadioGroupProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Item: IStyledComponentBase<"web", FastOmit<RadixRadioGroup.RadioGroupItemProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixRadioGroup.RadioGroupItemProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
    Indicator: IStyledComponentBase<"web", FastOmit<RadixRadioGroup.RadioGroupIndicatorProps & RefAttributes<HTMLSpanElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixRadioGroup.RadioGroupIndicatorProps & RefAttributes<HTMLSpanElement>>, keyof Component<any, {}, any>>;
};

export declare const RoundedIcon: ForwardRefExoticComponent<RoundedIconProps & RefAttributes<HTMLDivElement>>;

export declare interface RoundedIconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    size?: RoundedIconSize;
    variant?: RoundedIconVariant;
    color?: string;
    radius?: 'sm' | 'md' | 'lg' | 'full';
}

export declare type RoundedIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export declare type RoundedIconVariant = 'solid' | 'soft' | 'outline' | 'ghost';

export declare const ScrollArea: {
    Root: IStyledComponentBase<"web", FastOmit<RadixScrollArea.ScrollAreaProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixScrollArea.ScrollAreaProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Viewport: IStyledComponentBase<"web", FastOmit<RadixScrollArea.ScrollAreaViewportProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixScrollArea.ScrollAreaViewportProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Scrollbar: IStyledComponentBase<"web", FastOmit<RadixScrollArea.ScrollAreaScrollbarProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixScrollArea.ScrollAreaScrollbarProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Thumb: IStyledComponentBase<"web", FastOmit<RadixScrollArea.ScrollAreaThumbProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixScrollArea.ScrollAreaThumbProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Corner: IStyledComponentBase<"web", FastOmit<RadixScrollArea.ScrollAreaCornerProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixScrollArea.ScrollAreaCornerProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
};

export declare const SearchBar: default_2.ForwardRefExoticComponent<SearchBarProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface SearchBarProps extends Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    shortcut?: string;
    loading?: boolean;
    onClear?: () => void;
}

export declare const Select: {
    Root: FC<RadixSelect.SelectProps>;
    Trigger: IStyledComponentBase<"web", FastOmit<RadixSelect.SelectTriggerProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixSelect.SelectTriggerProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
    Value: ForwardRefExoticComponent<RadixSelect.SelectValueProps & RefAttributes<HTMLSpanElement>>;
    Icon: ForwardRefExoticComponent<RadixSelect.SelectIconProps & RefAttributes<HTMLSpanElement>>;
    Portal: FC<RadixSelect.SelectPortalProps>;
    Content: IStyledComponentBase<"web", FastOmit<RadixSelect.SelectContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixSelect.SelectContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Viewport: ForwardRefExoticComponent<RadixSelect.SelectViewportProps & RefAttributes<HTMLDivElement>>;
    Item: IStyledComponentBase<"web", FastOmit<RadixSelect.SelectItemProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixSelect.SelectItemProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    ItemText: ForwardRefExoticComponent<RadixSelect.SelectItemTextProps & RefAttributes<HTMLSpanElement>>;
    Group: ForwardRefExoticComponent<RadixSelect.SelectGroupProps & RefAttributes<HTMLDivElement>>;
    Label: IStyledComponentBase<"web", FastOmit<RadixSelect.SelectLabelProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixSelect.SelectLabelProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Separator: IStyledComponentBase<"web", FastOmit<RadixSelect.SelectSeparatorProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixSelect.SelectSeparatorProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
};

export declare interface SemanticColors {
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

export declare const Separator: IStyledComponentBase<"web", FastOmit<RadixSeparator.SeparatorProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixSeparator.SeparatorProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;

export declare type Shadows = typeof shadows;

export declare const shadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px rgba(0, 0, 0, 0.4)";
    readonly md: "0 4px 6px rgba(0, 0, 0, 0.4)";
    readonly lg: "0 10px 15px rgba(0, 0, 0, 0.4)";
    readonly xl: "0 20px 25px rgba(0, 0, 0, 0.4)";
    readonly '2xl': "0 25px 50px rgba(0, 0, 0, 0.5)";
};

export { SiAnthropic }

export { SiApple }

export { SiBitbucket }

export { SiChromatic }

export declare const Sidebar: {
    Root: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, {
    $collapsed?: boolean;
    $width?: string;
    }>> & string;
    Header: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Content: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Footer: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Item: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $active?: boolean;
    }>> & string;
    Group: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    GroupLabel: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
};

export { SiDiscord }

export { SiDocker }

export { SiEslint }

export { SiFigma }

export { SiFirebase }

export { SiFramer }

export { SiGit }

export { SiGithub }

export { SiGitlab }

export { SiGo }

export { SiGooglecloud }

export { SiGraphql }

export { SiJavascript }

export { SiJest }

export { SiJira }

export { SiKotlin }

export { SiKubernetes }

export { SiLinux }

export { SiMongodb }

export { SiNetflix }

export { SiNetlify }

export { SiNextdotjs }

export { SiNodedotjs }

export { SiNotion }

export { SiNpm }

export { SiOpenai }

export { SiPnpm }

export { SiPostgresql }

export { SiPrettier }

export { SiPrisma }

export { SiPython }

export { SiReact }

export { SiRedis }

export { SiRust }

export { SiSlack }

export { SiSpotify }

export { SiStorybook }

export { SiStripe }

export { SiSupabase }

export { SiSwift }

export { SiTailwindcss }

export { SiTypescript }

export { SiVercel }

export { SiVite }

export { SiVitest }

export { SiYarn }

export declare const Skeleton: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SkeletonProps>> & string;

export declare interface SkeletonProps {
    $w?: string | number;
    $h?: string | number;
    $radius?: string;
    $animate?: boolean;
}

export declare function Slider(props: SliderProps): JSX.Element;

export declare interface SliderProps extends RadixSlider.SliderProps {
}

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

export declare function SparkLine({ data, width, height, color, area }: SparkLineProps): JSX.Element;

export declare interface SparkLineProps {
    data: number[];
    width?: string;
    height?: string;
    color?: string;
    area?: boolean;
}

export declare const Spinner: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
$size?: SpinnerSize;
$color?: string;
}>> & string;

export declare interface SpinnerProps {
    size?: SpinnerSize;
    color?: string;
}

export declare type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export declare const Stack: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StackProps>> & string;

export declare interface StackProps {
    $spacing?: string;
    $align?: string;
}

export declare function StatCard({ label, value, trend, sparkData, sparkColor, icon }: StatCardProps): JSX.Element;

export declare interface StatCardProps {
    label: string;
    value: string;
    trend?: {
        value: string;
        positive: boolean;
    };
    sparkData?: number[];
    sparkColor?: string;
    icon?: ReactNode;
}

export declare interface StepItem {
    label: string;
    description?: string;
    status?: StepStatus;
}

export declare function Stepper({ steps, activeStep, orientation }: StepperProps): JSX.Element;

export declare interface StepperProps {
    steps: StepItem[];
    activeStep: number;
    orientation?: 'horizontal' | 'vertical';
}

export declare type StepStatus = 'complete' | 'active' | 'pending' | 'error';

export declare function Switch({ size, ...props }: SwitchProps): JSX.Element;

export declare interface SwitchProps extends RadixSwitch.SwitchProps {
    size?: SwitchSize;
}

export declare type SwitchSize = 'sm' | 'md';

export declare const Table: {
    Root: IStyledComponentBase<"web", Substitute<DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TableRootProps>> & string;
    Header: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, never>> & string;
    Body: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, never>> & string;
    Footer: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, never>> & string;
    Row: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, never>> & string;
    Head: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, never>> & string;
    Cell: IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>> & string;
};

export declare interface TableRootProps {
    $striped?: boolean;
    $hoverable?: boolean;
    $compact?: boolean;
}

export declare const Tabs: {
    Root: ForwardRefExoticComponent<RadixTabs.TabsProps & RefAttributes<HTMLDivElement>>;
    List: IStyledComponentBase<"web", FastOmit<RadixTabs.TabsListProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixTabs.TabsListProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Trigger: IStyledComponentBase<"web", FastOmit<RadixTabs.TabsTriggerProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixTabs.TabsTriggerProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
    Content: IStyledComponentBase<"web", FastOmit<RadixTabs.TabsContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixTabs.TabsContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
};

export declare const Tag: default_2.ForwardRefExoticComponent<TagProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare interface TagProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    variant?: TagVariant;
    colorScheme?: string;
    size?: 'sm' | 'md';
    closable?: boolean;
    onClose?: () => void;
}

export declare type TagVariant = 'solid' | 'outline' | 'soft';

declare const Text_2: default_2.ForwardRefExoticComponent<TextProps & Omit<default_2.HTMLAttributes<HTMLSpanElement>, "color"> & default_2.RefAttributes<HTMLSpanElement>>;
export { Text_2 as Text }

export declare const Textarea: default_2.ForwardRefExoticComponent<TextareaProps & default_2.RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends default_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export declare interface TextProps {
    as?: ElementType;
    size?: string;
    weight?: number;
    color?: string;
    align?: string;
    truncate?: boolean;
    mono?: boolean;
    lineHeight?: string | number;
}

declare interface ThemeContextValue {
    theme: CalangoUITheme;
    isDark: boolean;
    toggleTheme: () => void;
}

export declare const Toast: {
    Provider: FC<RadixToast.ToastProviderProps>;
    Viewport: IStyledComponentBase<"web", FastOmit<RadixToast.ToastViewportProps & RefAttributes<HTMLOListElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixToast.ToastViewportProps & RefAttributes<HTMLOListElement>>, keyof Component<any, {}, any>>;
    Root: IStyledComponentBase<"web", Substitute<RadixToast.ToastProps & RefAttributes<HTMLLIElement>, {
    $variant?: ToastVariant;
    }>> & string & Omit<ForwardRefExoticComponent<RadixToast.ToastProps & RefAttributes<HTMLLIElement>>, keyof Component<any, {}, any>>;
    Title: IStyledComponentBase<"web", FastOmit<RadixToast.ToastTitleProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixToast.ToastTitleProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Description: IStyledComponentBase<"web", FastOmit<RadixToast.ToastDescriptionProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixToast.ToastDescriptionProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Action: IStyledComponentBase<"web", FastOmit<RadixToast.ToastActionProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixToast.ToastActionProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
    Close: IStyledComponentBase<"web", FastOmit<RadixToast.ToastCloseProps & RefAttributes<HTMLButtonElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixToast.ToastCloseProps & RefAttributes<HTMLButtonElement>>, keyof Component<any, {}, any>>;
};

export declare type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export declare const Tooltip: {
    Provider: FC<RadixTooltip.TooltipProviderProps>;
    Root: FC<RadixTooltip.TooltipProps>;
    Trigger: ForwardRefExoticComponent<RadixTooltip.TooltipTriggerProps & RefAttributes<HTMLButtonElement>>;
    Portal: FC<RadixTooltip.TooltipPortalProps>;
    Content: IStyledComponentBase<"web", FastOmit<RadixTooltip.TooltipContentProps & RefAttributes<HTMLDivElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixTooltip.TooltipContentProps & RefAttributes<HTMLDivElement>>, keyof Component<any, {}, any>>;
    Arrow: IStyledComponentBase<"web", FastOmit<RadixTooltip.TooltipArrowProps & RefAttributes<SVGSVGElement>, never>> & string & Omit<ForwardRefExoticComponent<RadixTooltip.TooltipArrowProps & RefAttributes<SVGSVGElement>>, keyof Component<any, {}, any>>;
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

export declare function useTheme(): ThemeContextValue;

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
