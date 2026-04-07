import { CommandPalette } from 'calangoui';

interface DocEntry {
  label: string;
  section: string;
  keywords: string[];
}

const DOCS: DocEntry[] = [
  // Getting Started
  { label: 'Overview', section: 'home', keywords: ['home', 'start', 'intro', 'welcome'] },
  { label: 'Design Tokens', section: 'tokens', keywords: ['colors', 'spacing', 'radii', 'typography', 'shadows', 'z-index', 'tokens'] },
  { label: 'Theme Engine', section: 'theme', keywords: ['dark', 'light', 'useTheme', 'CalangoUIProvider', 'theme', 'mode'] },

  // Primitives
  { label: 'Box', section: 'primitives', keywords: ['layout', 'wrapper', 'container', 'div'] },
  { label: 'Text', section: 'primitives', keywords: ['typography', 'paragraph', 'span', 'font'] },
  { label: 'Heading', section: 'primitives', keywords: ['h1', 'h2', 'title', 'typography'] },
  { label: 'Flex', section: 'primitives', keywords: ['flexbox', 'row', 'column', 'layout', 'align', 'justify'] },
  { label: 'Stack', section: 'primitives', keywords: ['vertical', 'spacing', 'layout', 'gap'] },
  { label: 'Grid', section: 'primitives', keywords: ['grid', 'columns', 'layout', 'css grid'] },
  { label: 'Divider', section: 'primitives', keywords: ['separator', 'hr', 'rule', 'line'] },
  { label: 'Icon', section: 'primitives', keywords: ['react-icons', 'symbol', 'svg'] },

  // Inputs
  { label: 'Button', section: 'inputs', keywords: ['action', 'click', 'submit', 'cta', 'primary', 'outline', 'ghost'] },
  { label: 'Input', section: 'inputs', keywords: ['text field', 'form', 'email', 'password', 'text'] },
  { label: 'Textarea', section: 'inputs', keywords: ['multiline', 'text area', 'form', 'comment'] },
  { label: 'Select', section: 'inputs', keywords: ['dropdown', 'picker', 'options', 'choose'] },
  { label: 'Checkbox', section: 'inputs', keywords: ['toggle', 'boolean', 'check', 'mark'] },
  { label: 'Radio Group', section: 'inputs', keywords: ['radio', 'options', 'select one', 'group'] },
  { label: 'Switch', section: 'inputs', keywords: ['toggle', 'on off', 'boolean'] },
  { label: 'Slider', section: 'inputs', keywords: ['range', 'value', 'knob', 'drag'] },
  { label: 'Date Picker', section: 'inputs', keywords: ['calendar', 'date', 'picker', 'time'] },
  { label: 'Masked Input', section: 'inputs', keywords: ['phone', 'cpf', 'cnpj', 'format', 'mask'] },
  { label: 'Search Bar', section: 'inputs', keywords: ['search', 'filter', 'find', 'query', 'lookup'] },

  // Feedback
  { label: 'Badge', section: 'feedback', keywords: ['label', 'tag', 'status', 'count', 'dot'] },
  { label: 'Alert', section: 'feedback', keywords: ['notification', 'warning', 'error', 'success', 'info', 'message'] },
  { label: 'Progress', section: 'feedback', keywords: ['loading', 'bar', 'percentage', 'progress'] },
  { label: 'Spinner', section: 'feedback', keywords: ['loading', 'rotating', 'wait'] },
  { label: 'Skeleton', section: 'feedback', keywords: ['placeholder', 'loading state', 'shimmer'] },
  { label: 'Toast', section: 'feedback', keywords: ['notification', 'snackbar', 'message', 'alert'] },

  // Overlay
  { label: 'Dialog', section: 'overlay', keywords: ['modal', 'popup', 'overlay', 'window'] },
  { label: 'Alert Dialog', section: 'overlay', keywords: ['confirm', 'destructive', 'modal', 'danger'] },
  { label: 'Drawer', section: 'overlay', keywords: ['side panel', 'slide', 'panel', 'sheet'] },
  { label: 'Popover', section: 'overlay', keywords: ['floating', 'popup', 'context', 'tooltip'] },
  { label: 'Tooltip', section: 'overlay', keywords: ['hint', 'help', 'label', 'hover'] },
  { label: 'Dropdown Menu', section: 'overlay', keywords: ['menu', 'context', 'actions', 'items'] },
  { label: 'Context Menu', section: 'overlay', keywords: ['right click', 'menu', 'actions'] },

  // Navigation
  { label: 'Tabs', section: 'navigation', keywords: ['panels', 'router', 'content', 'tab'] },
  { label: 'Sidebar', section: 'navigation', keywords: ['nav', 'drawer', 'menu', 'navigation'] },
  { label: 'Breadcrumb', section: 'navigation', keywords: ['path', 'navigation', 'trail', 'location'] },
  { label: 'Pagination', section: 'navigation', keywords: ['pages', 'list', 'table', 'next', 'prev'] },
  { label: 'Navigation Menu', section: 'navigation', keywords: ['links', 'header', 'menu', 'nav'] },

  // Data Display
  { label: 'Table', section: 'data', keywords: ['grid', 'rows', 'data', 'columns', 'list'] },
  { label: 'Card', section: 'data', keywords: ['container', 'panel', 'paper', 'surface'] },
  { label: 'Avatar', section: 'data', keywords: ['user', 'profile', 'image', 'photo'] },
  { label: 'Accordion', section: 'data', keywords: ['collapse', 'expand', 'faq', 'details'] },
  { label: 'Tag', section: 'data', keywords: ['label', 'chip', 'category', 'keyword'] },

  // Charts
  { label: 'Bar Chart', section: 'charts', keywords: ['bar graph', 'data viz', 'chart', 'visualization'] },
  { label: 'Line Chart', section: 'charts', keywords: ['trend', 'time series', 'chart', 'line'] },
  { label: 'Area Chart', section: 'charts', keywords: ['area graph', 'chart', 'fill'] },
  { label: 'Donut Chart', section: 'charts', keywords: ['pie chart', 'ring', 'donut', 'circle'] },
  { label: 'Radar Chart', section: 'charts', keywords: ['spider web', 'radar', 'polygon'] },
  { label: 'Radial Bar Chart', section: 'charts', keywords: ['circular', 'radial', 'bar'] },
  { label: 'SparkLine', section: 'charts', keywords: ['mini chart', 'inline', 'trend'] },
  { label: 'StatCard', section: 'charts', keywords: ['metric', 'kpi', 'number', 'stat'] },

  // Advanced
  { label: 'Command Palette', section: 'advanced', keywords: ['search', 'shortcut', 'cmd k', 'command'] },
  { label: 'Stepper', section: 'advanced', keywords: ['wizard', 'steps', 'flow', 'progress'] },
  { label: 'Collapsible', section: 'advanced', keywords: ['collapse', 'toggle', 'expand', 'hide'] },
  { label: 'HoverCard', section: 'advanced', keywords: ['preview', 'floating', 'hover', 'card'] },
  { label: 'Scroll Area', section: 'advanced', keywords: ['custom scrollbar', 'overflow', 'scroll'] },
  { label: 'Aspect Ratio', section: 'advanced', keywords: ['responsive', 'image', 'ratio', '16:9'] },
  { label: 'Separator', section: 'advanced', keywords: ['divider', 'hr', 'line', 'rule'] },
];

const SECTION_LABELS: Record<string, string> = {
  home: 'Getting Started',
  tokens: 'Getting Started',
  theme: 'Getting Started',
  primitives: 'Primitives',
  inputs: 'Inputs',
  feedback: 'Feedback',
  overlay: 'Overlay',
  navigation: 'Navigation',
  data: 'Data Display',
  charts: 'Charts',
  advanced: 'Advanced',
};

interface DocsCommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (section: string) => void;
}

export function DocsCommandPalette({ open, onOpenChange, onNavigate }: DocsCommandPaletteProps) {
  const groups = Object.entries(
    DOCS.reduce<Record<string, typeof DOCS>>((acc, entry) => {
      const group = SECTION_LABELS[entry.section] ?? entry.section;
      if (!acc[group]) acc[group] = [];
      acc[group].push(entry);
      return acc;
    }, {})
  ).map(([label, entries]) => ({
    label,
    items: entries.map((e) => ({
      label: e.label,
      onSelect: () => onNavigate(e.section),
    })),
  }));

  return (
    <CommandPalette
      open={open}
      onOpenChange={onOpenChange}
      groups={groups}
      placeholder="Search components, tokens, guides..."
    />
  );
}
