export interface Prop {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface Example {
  label: string;
  code: string;
}

export interface ComponentSpec {
  name: string;
  category: string;
  import: string;
  description: string;
  keywords: string[];
  props: Prop[];
  variants: string[];
  examples: Example[];
}

export const components: ComponentSpec[] = [
  // ─── PRIMITIVES ──────────────────────────────────────────────────────────────
  {
    name: 'Box',
    category: 'primitives',
    import: "import { Box } from '@by2-ai/calangoui'",
    description: 'Generic layout primitive. A div with theme-aware styling props.',
    keywords: ['layout', 'wrapper', 'container', 'div', 'block'],
    props: [
      { name: 'as', type: 'React.ElementType', required: false, default: 'div', description: 'Polymorphic element type' },
      { name: 'children', type: 'React.ReactNode', required: false, description: 'Child content' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Box style={{ padding: '16px' }}>Content</Box>` },
    ],
  },
  {
    name: 'Text',
    category: 'primitives',
    import: "import { Text } from '@by2-ai/calangoui'",
    description: 'Inline text component with typography token support.',
    keywords: ['typography', 'paragraph', 'span', 'font', 'body'],
    props: [
      { name: 'size', type: "'xs' | 'sm' | 'base' | 'lg' | 'xl'", required: false, default: 'base', description: 'Font size token' },
      { name: 'weight', type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'", required: false, default: 'normal', description: 'Font weight' },
      { name: 'color', type: 'string', required: false, description: 'Text color (CSS value or theme token)' },
      { name: 'as', type: 'React.ElementType', required: false, default: 'span', description: 'Polymorphic element type' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Text size="sm" weight="medium">Hello world</Text>` },
    ],
  },
  {
    name: 'Heading',
    category: 'primitives',
    import: "import { Heading } from '@by2-ai/calangoui'",
    description: 'Semantic heading with bold typography. Use the "as" prop to control h1–h6 element.',
    keywords: ['h1', 'h2', 'h3', 'title', 'header', 'typography'],
    props: [
      { name: 'as', type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'", required: false, default: 'h2', description: 'Underlying HTML element — this is how you set heading level, NOT a "level" prop' },
      { name: 'size', type: 'string', required: false, description: 'Override font size (e.g. theme.typography.fontSize["3xl"])' },
      { name: 'weight', type: 'number', required: false, description: 'Override font weight' },
      { name: 'color', type: 'string', required: false, description: 'Text color' },
    ],
    variants: [],
    examples: [
      { label: 'h1', code: `<Heading as="h1">Page Title</Heading>` },
      { label: 'h2 with size', code: `<Heading as="h2" size="1.5rem">Section Title</Heading>` },
    ],
  },
  {
    name: 'Flex',
    category: 'primitives',
    import: "import { Flex } from '@by2-ai/calangoui'",
    description: 'Flexbox layout container with shorthand props.',
    keywords: ['flexbox', 'row', 'column', 'layout', 'align', 'justify', 'gap'],
    props: [
      { name: '$direction', type: "'row' | 'column' | 'row-reverse' | 'column-reverse'", required: false, default: 'row', description: 'flex-direction' },
      { name: '$align', type: "'flex-start' | 'center' | 'flex-end' | 'stretch'", required: false, description: 'align-items' },
      { name: '$justify', type: "'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'", required: false, description: 'justify-content' },
      { name: '$gap', type: 'string', required: false, description: 'gap (CSS value, e.g. "8px")' },
      { name: '$wrap', type: "'wrap' | 'nowrap'", required: false, description: 'flex-wrap' },
    ],
    variants: [],
    examples: [
      { label: 'Row with gap', code: `<Flex $gap="8px" $align="center">\n  <Button>One</Button>\n  <Button>Two</Button>\n</Flex>` },
      { label: 'Column', code: `<Flex $direction="column" $gap="16px">\n  <Input />\n  <Button>Submit</Button>\n</Flex>` },
    ],
  },
  {
    name: 'Stack',
    category: 'primitives',
    import: "import { Stack } from '@by2-ai/calangoui'",
    description: 'Vertical flex stack with consistent spacing between children.',
    keywords: ['vertical', 'spacing', 'layout', 'gap', 'stack'],
    props: [
      { name: '$spacing', type: 'string', required: false, default: '16px', description: 'Gap between children (CSS value)' },
    ],
    variants: [],
    examples: [
      { label: 'Form stack', code: `<Stack $spacing="12px">\n  <Input placeholder="Name" />\n  <Input placeholder="Email" />\n  <Button>Submit</Button>\n</Stack>` },
    ],
  },
  {
    name: 'Grid',
    category: 'primitives',
    import: "import { Grid } from '@by2-ai/calangoui'",
    description: 'CSS Grid layout container.',
    keywords: ['grid', 'columns', 'layout', 'css grid', 'template'],
    props: [
      { name: '$columns', type: 'string', required: false, description: 'grid-template-columns (e.g. "repeat(3, 1fr)")' },
      { name: '$gap', type: 'string', required: false, description: 'gap (CSS value)' },
      { name: '$rows', type: 'string', required: false, description: 'grid-template-rows' },
    ],
    variants: [],
    examples: [
      { label: '3-column grid', code: `<Grid $columns="repeat(3, 1fr)" $gap="16px">\n  <Card.Root>A</Card.Root>\n  <Card.Root>B</Card.Root>\n  <Card.Root>C</Card.Root>\n</Grid>` },
    ],
  },
  {
    name: 'Divider',
    category: 'primitives',
    import: "import { Divider } from '@by2-ai/calangoui'",
    description: 'Horizontal or vertical separator line using theme border color.',
    keywords: ['separator', 'hr', 'rule', 'line', 'divider'],
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", required: false, default: 'horizontal', description: 'Divider direction' },
    ],
    variants: [],
    examples: [
      { label: 'Horizontal', code: `<Divider />` },
      { label: 'Vertical', code: `<Flex $align="center" style={{ height: '40px' }}>\n  <span>Left</span>\n  <Divider orientation="vertical" />\n  <span>Right</span>\n</Flex>` },
    ],
  },
  {
    name: 'Icon',
    category: 'primitives',
    import: "import { Icon } from '@by2-ai/calangoui'",
    description: 'Wrapper for react-icons with consistent sizing and color.',
    keywords: ['react-icons', 'symbol', 'svg', 'icon'],
    props: [
      { name: 'icon', type: 'React.ComponentType', required: true, description: 'Icon component from react-icons' },
      { name: 'size', type: 'number | string', required: false, default: '16', description: 'Icon size in px' },
      { name: 'color', type: 'string', required: false, description: 'Icon color' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `import { FiSearch } from '@by2-ai/calangoui'\n<Icon icon={FiSearch} size={20} />` },
    ],
  },

  // ─── INPUTS ──────────────────────────────────────────────────────────────────
  {
    name: 'Button',
    category: 'inputs',
    import: "import { Button } from '@by2-ai/calangoui'",
    description: 'Primary action element with multiple variants and sizes.',
    keywords: ['action', 'click', 'submit', 'cta', 'primary', 'outline', 'ghost', 'link'],
    props: [
      { name: 'variant', type: "'solid' | 'outline' | 'ghost' | 'link'", required: false, default: 'solid', description: 'Visual style' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: 'md', description: 'Button size' },
      { name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Shows spinner, disables interaction' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the button' },
      { name: 'leftIcon', type: 'React.ReactNode', required: false, description: 'Icon before label' },
      { name: 'rightIcon', type: 'React.ReactNode', required: false, description: 'Icon after label' },
      { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
    ],
    variants: ['solid', 'outline', 'ghost', 'link'],
    examples: [
      { label: 'Variants', code: `<Button variant="solid">Solid</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>` },
      { label: 'Sizes', code: `<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>` },
      { label: 'Loading', code: `<Button loading>Saving...</Button>` },
    ],
  },
  {
    name: 'Input',
    category: 'inputs',
    import: "import { Input, InputGroup, Label, ErrorText } from '@by2-ai/calangoui'",
    description: 'Text input with optional left/right elements, error state, and sizes.',
    keywords: ['text field', 'form', 'email', 'password', 'text', 'input'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: 'md', description: 'Input height size' },
      { name: 'error', type: 'string', required: false, description: 'Error message shown below input' },
      { name: 'leftElement', type: 'React.ReactNode', required: false, description: 'Element rendered on the left' },
      { name: 'rightElement', type: 'React.ReactNode', required: false, description: 'Element rendered on the right' },
      { name: 'placeholder', type: 'string', required: false, description: 'Placeholder text' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the input' },
    ],
    variants: [],
    examples: [
      { label: 'With label', code: `<InputGroup>\n  <Label>Email</Label>\n  <Input placeholder="you@example.com" />\n</InputGroup>` },
      { label: 'With error', code: `<Input error="Required field" placeholder="Name" />` },
      { label: 'With icon', code: `<Input leftElement={<FiSearch />} placeholder="Search..." />` },
    ],
  },
  {
    name: 'Textarea',
    category: 'inputs',
    import: "import { Textarea } from '@by2-ai/calangoui'",
    description: 'Multi-line text input with resize control and error state.',
    keywords: ['multiline', 'text area', 'form', 'comment', 'description'],
    props: [
      { name: 'error', type: 'string', required: false, description: 'Error message' },
      { name: 'resize', type: "'none' | 'vertical' | 'horizontal' | 'both'", required: false, default: 'vertical', description: 'CSS resize behavior' },
      { name: 'placeholder', type: 'string', required: false, description: 'Placeholder text' },
      { name: 'rows', type: 'number', required: false, description: 'Initial visible rows' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Textarea placeholder="Write a message..." rows={4} />` },
    ],
  },
  {
    name: 'Select',
    category: 'inputs',
    import: "import { Select } from '@by2-ai/calangoui'",
    description: 'Compound Radix UI select with keyboard navigation and theming. No single-wrapper API — must compose Root+Trigger+Value+Portal+Content+Viewport+Item.',
    keywords: ['dropdown', 'picker', 'options', 'choose', 'select'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<Select.Root value={val} onValueChange={setVal}>\n  <Select.Trigger>\n    <Select.Value placeholder="Choose option" />\n    <Select.Icon />\n  </Select.Trigger>\n  <Select.Portal>\n    <Select.Content>\n      <Select.Viewport>\n        <Select.Item value="a"><Select.ItemText>Option A</Select.ItemText></Select.Item>\n        <Select.Item value="b"><Select.ItemText>Option B</Select.ItemText></Select.Item>\n      </Select.Viewport>\n    </Select.Content>\n  </Select.Portal>\n</Select.Root>` },
      { label: 'With groups', code: `<Select.Root>\n  <Select.Trigger><Select.Value placeholder="Pick fruit" /><Select.Icon /></Select.Trigger>\n  <Select.Portal>\n    <Select.Content>\n      <Select.Viewport>\n        <Select.Group>\n          <Select.Label>Citrus</Select.Label>\n          <Select.Item value="orange"><Select.ItemText>Orange</Select.ItemText></Select.Item>\n          <Select.Item value="lemon"><Select.ItemText>Lemon</Select.ItemText></Select.Item>\n        </Select.Group>\n        <Select.Separator />\n        <Select.Group>\n          <Select.Label>Berries</Select.Label>\n          <Select.Item value="strawberry"><Select.ItemText>Strawberry</Select.ItemText></Select.Item>\n        </Select.Group>\n      </Select.Viewport>\n    </Select.Content>\n  </Select.Portal>\n</Select.Root>` },
      { label: 'Sub-components available', code: `// Select.Root — Radix Root (value, onValueChange, defaultValue, disabled, open, onOpenChange)\n// Select.Trigger — styled trigger button\n// Select.Value — displays selected value or placeholder\n// Select.Icon — dropdown chevron icon\n// Select.Portal — renders outside DOM tree\n// Select.Content — styled dropdown panel\n// Select.Viewport — scroll container for items\n// Select.Item — styled option item (value prop required)\n// Select.ItemText — text inside an item\n// Select.Group — groups items together\n// Select.Label — group label\n// Select.Separator — horizontal divider` },
    ],
  },
  {
    name: 'Checkbox',
    category: 'inputs',
    import: "import { Checkbox } from '@by2-ai/calangoui'",
    description: 'Accessible checkbox supporting checked, unchecked, and indeterminate states.',
    keywords: ['toggle', 'boolean', 'check', 'mark', 'select'],
    props: [
      { name: 'checked', type: "boolean | 'indeterminate'", required: false, description: 'Controlled checked state' },
      { name: 'onCheckedChange', type: "(checked: boolean | 'indeterminate') => void", required: false, description: 'Change handler' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the checkbox' },
      { name: 'label', type: 'string', required: false, description: 'Label text' },
    ],
    variants: [],
    examples: [
      { label: 'Controlled', code: `const [checked, setChecked] = useState(false)\n<Checkbox checked={checked} onCheckedChange={setChecked} label="Accept terms" />` },
    ],
  },
  {
    name: 'RadioGroup',
    category: 'inputs',
    import: "import { RadioGroup } from '@by2-ai/calangoui'",
    description: 'Compound Radix radio group for single-selection. No options[] prop — compose Root+Item+Indicator manually.',
    keywords: ['radio', 'options', 'select one', 'group', 'choice'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<RadioGroup.Root value={val} onValueChange={setVal}>\n  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>\n    <RadioGroup.Item value="a" id="r-a">\n      <RadioGroup.Indicator />\n    </RadioGroup.Item>\n    <label htmlFor="r-a">Option A</label>\n  </div>\n  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>\n    <RadioGroup.Item value="b" id="r-b">\n      <RadioGroup.Indicator />\n    </RadioGroup.Item>\n    <label htmlFor="r-b">Option B</label>\n  </div>\n</RadioGroup.Root>` },
      { label: 'Sub-components', code: `// RadioGroup.Root — styled column flex container (value, onValueChange, defaultValue, disabled)\n// RadioGroup.Item — styled radio circle (value prop required, id for label association)\n// RadioGroup.Indicator — the inner dot shown when checked` },
    ],
  },
  {
    name: 'Switch',
    category: 'inputs',
    import: "import { Switch } from '@by2-ai/calangoui'",
    description: 'Toggle switch for boolean on/off states.',
    keywords: ['toggle', 'on off', 'boolean', 'switch'],
    props: [
      { name: 'checked', type: 'boolean', required: false, description: 'Controlled state' },
      { name: 'onCheckedChange', type: '(checked: boolean) => void', required: false, description: 'Change handler' },
      { name: 'size', type: "'sm' | 'md'", required: false, default: 'md', description: 'Switch size — only sm or md, no lg' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the switch' },
    ],
    variants: [],
    examples: [
      { label: 'Controlled', code: `const [on, setOn] = useState(false)\n<Switch checked={on} onCheckedChange={setOn} />` },
      { label: 'With label', code: `<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>\n  <Switch id="notif" checked={on} onCheckedChange={setOn} />\n  <label htmlFor="notif">Enable notifications</label>\n</div>` },
    ],
  },
  {
    name: 'Slider',
    category: 'inputs',
    import: "import { Slider } from '@by2-ai/calangoui'",
    description: 'Range slider for numeric value selection.',
    keywords: ['range', 'value', 'knob', 'drag', 'slider', 'numeric'],
    props: [
      { name: 'value', type: 'number[]', required: false, description: 'Controlled value array (supports range)' },
      { name: 'onValueChange', type: '(value: number[]) => void', required: false, description: 'Change handler' },
      { name: 'min', type: 'number', required: false, default: '0', description: 'Minimum value' },
      { name: 'max', type: 'number', required: false, default: '100', description: 'Maximum value' },
      { name: 'step', type: 'number', required: false, default: '1', description: 'Step increment' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `const [val, setVal] = useState([50])\n<Slider value={val} onValueChange={setVal} min={0} max={100} />` },
    ],
  },
  {
    name: 'DatePicker',
    category: 'inputs',
    import: "import { DatePicker } from '@by2-ai/calangoui'",
    description: 'Calendar-based date picker with single date and range modes.',
    keywords: ['calendar', 'date', 'picker', 'time', 'schedule'],
    props: [
      { name: 'value', type: 'Date | undefined', required: false, description: 'Selected date' },
      { name: 'onChange', type: '(date: Date | undefined) => void', required: false, description: 'Change handler' },
      { name: 'placeholder', type: 'string', required: false, description: 'Placeholder text' },
      { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disables the picker' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `const [date, setDate] = useState<Date | undefined>()\n<DatePicker value={date} onChange={setDate} placeholder="Pick a date" />` },
    ],
  },
  {
    name: 'MaskedInput',
    category: 'inputs',
    import: "import { MaskedInput } from '@by2-ai/calangoui'",
    description: 'Input with built-in masks for phone, CPF, CNPJ, date, and time.',
    keywords: ['phone', 'cpf', 'cnpj', 'format', 'mask', 'brazil'],
    props: [
      { name: 'mask', type: "'phone' | 'cpf' | 'cnpj' | 'date' | 'time' | string", required: true, description: 'Mask preset or custom pattern' },
      { name: 'value', type: 'string', required: false, description: 'Controlled value' },
      { name: 'onChange', type: '(e: React.ChangeEvent<HTMLInputElement>) => void', required: false, description: 'Change handler' },
      { name: 'error', type: 'string', required: false, description: 'Error message' },
    ],
    variants: [],
    examples: [
      { label: 'CPF', code: `<MaskedInput mask="cpf" placeholder="000.000.000-00" />` },
      { label: 'Phone', code: `<MaskedInput mask="phone" placeholder="(00) 00000-0000" />` },
    ],
  },
  {
    name: 'SearchBar',
    category: 'inputs',
    import: "import { SearchBar } from '@by2-ai/calangoui'",
    description: 'Search input with embedded icon, keyboard shortcut badge, clear button, and loading state.',
    keywords: ['search', 'filter', 'find', 'query', 'lookup', 'cmd k'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: 'md', description: 'Input size' },
      { name: 'shortcut', type: 'string', required: false, description: 'Keyboard shortcut badge (e.g. "⌘K"), shown when empty' },
      { name: 'loading', type: 'boolean', required: false, default: 'false', description: 'Shows spinner' },
      { name: 'onClear', type: '() => void', required: false, description: 'Shows × button when value is non-empty' },
      { name: 'value', type: 'string', required: false, description: 'Controlled value' },
      { name: 'onChange', type: '(e: React.ChangeEvent<HTMLInputElement>) => void', required: false, description: 'Change handler' },
      { name: 'placeholder', type: 'string', required: false, description: 'Placeholder text' },
    ],
    variants: [],
    examples: [
      { label: 'With shortcut', code: `<SearchBar placeholder="Search..." shortcut="⌘K" />` },
      { label: 'Controlled with clear', code: `const [q, setQ] = useState('')\n<SearchBar value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} placeholder="Type to search..." />` },
      { label: 'As palette trigger', code: `<SearchBar placeholder="Search..." shortcut="⌘K" readOnly onClick={() => setOpen(true)} style={{ cursor: 'pointer' }} />` },
    ],
  },

  // ─── FEEDBACK ────────────────────────────────────────────────────────────────
  {
    name: 'Badge',
    category: 'feedback',
    import: "import { Badge } from '@by2-ai/calangoui'",
    description: 'Small status label. Uses "variant" for style and "colorScheme" for semantic color.',
    keywords: ['label', 'tag', 'status', 'count', 'dot', 'chip'],
    props: [
      { name: 'variant', type: "'solid' | 'outline' | 'soft'", required: false, default: 'solid', description: 'Visual style — NOT a color. solid=filled, outline=bordered, soft=tinted' },
      { name: 'colorScheme', type: 'string', required: false, description: 'Semantic color key from theme: "success", "error", "warning", "info", or any theme color key' },
      { name: 'size', type: "'sm' | 'md'", required: false, default: 'md', description: 'Badge size' },
      { name: 'dot', type: 'boolean', required: false, default: 'false', description: 'Shows a colored dot before label' },
    ],
    variants: ['solid', 'outline', 'soft'],
    examples: [
      { label: 'Semantic colors', code: `<Badge colorScheme="success">Active</Badge>\n<Badge colorScheme="error">Failed</Badge>\n<Badge colorScheme="warning">Pending</Badge>` },
      { label: 'Style variants', code: `<Badge variant="solid" colorScheme="info">Solid</Badge>\n<Badge variant="outline" colorScheme="info">Outline</Badge>\n<Badge variant="soft" colorScheme="info">Soft</Badge>` },
      { label: 'With dot', code: `<Badge colorScheme="success" dot>Online</Badge>` },
    ],
  },
  {
    name: 'Alert',
    category: 'feedback',
    import: "import { Alert, AlertTitle } from '@by2-ai/calangoui'",
    description: 'Contextual message block. Use AlertTitle for the heading inside children — there is no title prop.',
    keywords: ['notification', 'warning', 'error', 'success', 'info', 'message', 'alert'],
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", required: false, default: 'info', description: 'Color variant' },
      { name: 'closable', type: 'boolean', required: false, default: 'false', description: 'Shows a × close button that hides the alert' },
      { name: 'onClose', type: '() => void', required: false, description: 'Called when close button is clicked' },
      { name: 'icon', type: 'React.ReactNode', required: false, description: 'Custom icon rendered on the left' },
      { name: 'children', type: 'React.ReactNode', required: false, description: 'Alert body — use AlertTitle for heading' },
    ],
    variants: ['info', 'success', 'warning', 'error'],
    examples: [
      { label: 'Basic', code: `<Alert variant="error">\n  <AlertTitle>Something went wrong</AlertTitle>\n  Please try again later.\n</Alert>` },
      { label: 'Closable with icon', code: `<Alert variant="success" closable onClose={() => console.log('closed')} icon={<FiCheckCircle />}>\n  <AlertTitle>Saved!</AlertTitle>\n  Your changes have been saved.\n</Alert>` },
    ],
  },
  {
    name: 'Progress',
    category: 'feedback',
    import: "import { Progress } from '@by2-ai/calangoui'",
    description: 'Horizontal progress bar with percentage fill.',
    keywords: ['loading', 'bar', 'percentage', 'progress', 'step'],
    props: [
      { name: 'value', type: 'number', required: true, description: 'Progress value (0–100)' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: 'md', description: 'Bar height' },
      { name: 'color', type: 'string', required: false, description: 'Fill color override' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Progress value={65} />` },
    ],
  },
  {
    name: 'Spinner',
    category: 'feedback',
    import: "import { Spinner } from '@by2-ai/calangoui'",
    description: 'Animated loading spinner.',
    keywords: ['loading', 'rotating', 'wait', 'spinner'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: 'md', description: 'Spinner size' },
      { name: 'color', type: 'string', required: false, description: 'Spinner color override' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Spinner size="md" />` },
    ],
  },
  {
    name: 'Skeleton',
    category: 'feedback',
    import: "import { Skeleton } from '@by2-ai/calangoui'",
    description: 'Animated placeholder for loading states.',
    keywords: ['placeholder', 'loading state', 'shimmer', 'skeleton'],
    props: [
      { name: 'width', type: 'string | number', required: false, description: 'Width of the skeleton' },
      { name: 'height', type: 'string | number', required: false, default: '20px', description: 'Height of the skeleton' },
      { name: 'borderRadius', type: 'string', required: false, description: 'Border radius override' },
    ],
    variants: [],
    examples: [
      { label: 'Text line', code: `<Skeleton width="200px" height="16px" />` },
      { label: 'Avatar', code: `<Skeleton width="40px" height="40px" borderRadius="50%" />` },
    ],
  },
  {
    name: 'Toast',
    category: 'feedback',
    import: "import { Toast } from '@by2-ai/calangoui'",
    description: 'Compound Radix toast system. Requires Toast.Provider at app root and Toast.Viewport for the render target. No single-wrapper shorthand.',
    keywords: ['notification', 'snackbar', 'message', 'alert', 'toast'],
    props: [],
    variants: ['default', 'success', 'error', 'warning', 'info'],
    examples: [
      { label: 'Provider setup (app root, once)', code: `// In your app root or layout:\n<Toast.Provider swipeDirection="right">\n  <App />\n  <Toast.Viewport />\n</Toast.Provider>` },
      { label: 'Rendering a toast', code: `const [open, setOpen] = useState(false)\n\n<Toast.Root $variant="success" open={open} onOpenChange={setOpen} duration={4000}>\n  <Toast.Title>Saved!</Toast.Title>\n  <Toast.Description>Your changes have been saved.</Toast.Description>\n  <Toast.Action altText="Undo" asChild>\n    <button onClick={handleUndo}>Undo</button>\n  </Toast.Action>\n  <Toast.Close />\n</Toast.Root>` },
      { label: 'Sub-components', code: `// Toast.Provider — wraps app (swipeDirection, duration defaults)\n// Toast.Viewport — fixed container at bottom-right of screen\n// Toast.Root — individual toast ($variant: 'default'|'success'|'error'|'warning'|'info')\n// Toast.Title — bold heading text\n// Toast.Description — muted body text\n// Toast.Action — action link (altText required for a11y)\n// Toast.Close — × close button` },
    ],
  },

  // ─── OVERLAY ─────────────────────────────────────────────────────────────────
  {
    name: 'Dialog',
    category: 'overlay',
    import: "import { Dialog } from '@by2-ai/calangoui'",
    description: 'Compound modal dialog built on Radix UI. Must use Portal+Overlay+Content pattern — there is no single wrapper component.',
    keywords: ['modal', 'popup', 'overlay', 'window', 'dialog'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<Dialog.Root>\n  <Dialog.Trigger asChild>\n    <Button>Open</Button>\n  </Dialog.Trigger>\n  <Dialog.Portal>\n    <Dialog.Overlay />\n    <Dialog.Content>\n      <Dialog.Title>Title</Dialog.Title>\n      <Dialog.Description>Description text</Dialog.Description>\n      <p>Body content here</p>\n      <Dialog.Footer>\n        <Dialog.Close asChild>\n          <Button variant="outline">Cancel</Button>\n        </Dialog.Close>\n        <Button variant="solid">Confirm</Button>\n      </Dialog.Footer>\n    </Dialog.Content>\n  </Dialog.Portal>\n</Dialog.Root>` },
      { label: 'Sub-components available', code: `// Dialog.Root — Radix Root (open, onOpenChange, defaultOpen)\n// Dialog.Trigger — Radix Trigger (use asChild to wrap a Button)\n// Dialog.Portal — Radix Portal (renders outside DOM tree)\n// Dialog.Overlay — styled backdrop (must be inside Portal)\n// Dialog.Content — styled modal box (must be inside Portal)\n// Dialog.Title — styled h2 heading\n// Dialog.Description — styled muted paragraph\n// Dialog.Footer — flex row for action buttons\n// Dialog.Close — Radix Close (use asChild to wrap a Button)` },
    ],
  },
  {
    name: 'AlertDialog',
    category: 'overlay',
    import: "import { AlertDialog } from '@by2-ai/calangoui'",
    description: 'Compound confirmation dialog for destructive actions. Cannot be dismissed by backdrop click. No onConfirm prop — use onClick on AlertDialog.Action.',
    keywords: ['confirm', 'destructive', 'modal', 'danger', 'delete'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<AlertDialog.Root>\n  <AlertDialog.Trigger asChild>\n    <Button variant="outline">Delete</Button>\n  </AlertDialog.Trigger>\n  <AlertDialog.Portal>\n    <AlertDialog.Overlay />\n    <AlertDialog.Content>\n      <AlertDialog.Title>Are you sure?</AlertDialog.Title>\n      <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>\n      <AlertDialog.Footer>\n        <AlertDialog.Cancel asChild>\n          <Button variant="outline">Cancel</Button>\n        </AlertDialog.Cancel>\n        <AlertDialog.Action asChild>\n          <Button variant="solid" onClick={handleDelete}>Delete</Button>\n        </AlertDialog.Action>\n      </AlertDialog.Footer>\n    </AlertDialog.Content>\n  </AlertDialog.Portal>\n</AlertDialog.Root>` },
      { label: 'Sub-components', code: `// AlertDialog.Root — Radix Root (open, onOpenChange, defaultOpen)\n// AlertDialog.Trigger — use asChild to wrap a Button\n// AlertDialog.Portal — renders outside DOM tree\n// AlertDialog.Overlay — styled backdrop\n// AlertDialog.Content — styled dialog box\n// AlertDialog.Title — heading text\n// AlertDialog.Description — body text\n// AlertDialog.Footer — flex row for actions\n// AlertDialog.Cancel — closes without action (use asChild + Button)\n// AlertDialog.Action — confirms action (use asChild + Button, add onClick)` },
    ],
  },
  {
    name: 'Drawer',
    category: 'overlay',
    import: "import { Drawer } from '@by2-ai/calangoui'",
    description: 'Compound side panel that slides in from any edge. The $side transient prop goes on Drawer.Content, not Root. Must use Portal+Overlay+Content pattern.',
    keywords: ['side panel', 'slide', 'panel', 'sheet', 'drawer'],
    props: [],
    variants: ['left', 'right', 'top', 'bottom'],
    examples: [
      { label: 'Full composition (required pattern)', code: `<Drawer.Root>\n  <Drawer.Trigger asChild>\n    <Button>Open Drawer</Button>\n  </Drawer.Trigger>\n  <Drawer.Portal>\n    <Drawer.Overlay />\n    <Drawer.Content $side="right">\n      <Drawer.Title>Drawer Title</Drawer.Title>\n      <p>Drawer content here</p>\n      <Drawer.Close asChild>\n        <Button variant="outline">Close</Button>\n      </Drawer.Close>\n    </Drawer.Content>\n  </Drawer.Portal>\n</Drawer.Root>` },
      { label: 'Sub-components', code: `// Drawer.Root — Radix Dialog.Root (open, onOpenChange, defaultOpen)\n// Drawer.Trigger — use asChild to wrap a Button\n// Drawer.Portal — renders outside DOM tree\n// Drawer.Overlay — styled backdrop\n// Drawer.Content — styled panel ($side: 'left'|'right'|'top'|'bottom' — transient, $ prefix required)\n// Drawer.Title — heading text\n// Drawer.Close — close button (use asChild + Button)` },
    ],
  },
  {
    name: 'Popover',
    category: 'overlay',
    import: "import { Popover } from '@by2-ai/calangoui'",
    description: 'Compound floating panel anchored to a trigger element.',
    keywords: ['floating', 'popup', 'context', 'tooltip', 'popover'],
    props: [],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Popover.Root>\n  <Popover.Trigger asChild>\n    <Button>Open</Button>\n  </Popover.Trigger>\n  <Popover.Portal>\n    <Popover.Content side="bottom" sideOffset={8}>\n      Popover content here\n      <Popover.Arrow />\n    </Popover.Content>\n  </Popover.Portal>\n</Popover.Root>` },
      { label: 'With close button', code: `<Popover.Root>\n  <Popover.Trigger asChild><Button>Settings</Button></Popover.Trigger>\n  <Popover.Portal>\n    <Popover.Content>\n      <p>Settings content</p>\n      <Popover.Close asChild>\n        <Button size="sm" variant="ghost">Close</Button>\n      </Popover.Close>\n    </Popover.Content>\n  </Popover.Portal>\n</Popover.Root>` },
      { label: 'Sub-components', code: `// Popover.Root — Radix Root (open, onOpenChange, defaultOpen)\n// Popover.Trigger — use asChild to wrap a Button\n// Popover.Anchor — optional custom anchor (when trigger ≠ anchor)\n// Popover.Portal — renders outside DOM tree\n// Popover.Content — styled panel (side, sideOffset, align props from Radix)\n// Popover.Arrow — styled SVG arrow\n// Popover.Close — close button (use asChild + Button)` },
    ],
  },
  {
    name: 'Tooltip',
    category: 'overlay',
    import: "import { Tooltip } from '@by2-ai/calangoui'",
    description: 'Compound tooltip built on Radix UI. Requires Provider at app root. No single-wrapper API — must compose Root+Trigger+Portal+Content.',
    keywords: ['hint', 'help', 'label', 'hover', 'tooltip'],
    props: [],
    variants: [],
    examples: [
      { label: 'Provider setup (app root, once)', code: `<Tooltip.Provider delayDuration={400}>\n  <App />\n</Tooltip.Provider>` },
      { label: 'Full composition (required pattern)', code: `<Tooltip.Root>\n  <Tooltip.Trigger asChild>\n    <Button variant="ghost">Hover me</Button>\n  </Tooltip.Trigger>\n  <Tooltip.Portal>\n    <Tooltip.Content side="top" sideOffset={4}>\n      Delete this item\n      <Tooltip.Arrow />\n    </Tooltip.Content>\n  </Tooltip.Portal>\n</Tooltip.Root>` },
      { label: 'Sub-components available', code: `// Tooltip.Provider — wraps app, sets delayDuration\n// Tooltip.Root — Radix Root (open, defaultOpen, onOpenChange)\n// Tooltip.Trigger — use asChild to avoid extra DOM wrapper\n// Tooltip.Portal — renders content outside DOM tree\n// Tooltip.Content — styled popup (side, sideOffset, align props)\n// Tooltip.Arrow — styled SVG arrow` },
    ],
  },
  {
    name: 'DropdownMenu',
    category: 'overlay',
    import: "import { DropdownMenu } from '@by2-ai/calangoui'",
    description: 'Compound accessible dropdown menu triggered by a button.',
    keywords: ['menu', 'context', 'actions', 'items', 'dropdown'],
    props: [],
    variants: [],
    examples: [
      { label: 'Basic', code: `<DropdownMenu.Root>\n  <DropdownMenu.Trigger asChild>\n    <Button>Options ▾</Button>\n  </DropdownMenu.Trigger>\n  <DropdownMenu.Portal>\n    <DropdownMenu.Content>\n      <DropdownMenu.Label>Actions</DropdownMenu.Label>\n      <DropdownMenu.Item onSelect={handleEdit}>Edit</DropdownMenu.Item>\n      <DropdownMenu.Item onSelect={handleDuplicate}>Duplicate</DropdownMenu.Item>\n      <DropdownMenu.Separator />\n      <DropdownMenu.Item onSelect={handleDelete}>Delete</DropdownMenu.Item>\n    </DropdownMenu.Content>\n  </DropdownMenu.Portal>\n</DropdownMenu.Root>` },
      { label: 'With submenu', code: `<DropdownMenu.Root>\n  <DropdownMenu.Trigger asChild><Button>More ▾</Button></DropdownMenu.Trigger>\n  <DropdownMenu.Portal>\n    <DropdownMenu.Content>\n      <DropdownMenu.Item>Profile</DropdownMenu.Item>\n      <DropdownMenu.Sub>\n        <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>\n        <DropdownMenu.Portal>\n          <DropdownMenu.SubContent>\n            <DropdownMenu.Item>Email</DropdownMenu.Item>\n            <DropdownMenu.Item>Copy Link</DropdownMenu.Item>\n          </DropdownMenu.SubContent>\n        </DropdownMenu.Portal>\n      </DropdownMenu.Sub>\n    </DropdownMenu.Content>\n  </DropdownMenu.Portal>\n</DropdownMenu.Root>` },
      { label: 'Sub-components', code: `// DropdownMenu.Root — Radix Root (open, onOpenChange)\n// DropdownMenu.Trigger — use asChild to wrap a Button\n// DropdownMenu.Portal — renders outside DOM tree\n// DropdownMenu.Content — styled dropdown panel\n// DropdownMenu.Item — styled menu item (onSelect, disabled)\n// DropdownMenu.CheckboxItem — item with checkbox\n// DropdownMenu.RadioGroup — group for radio items\n// DropdownMenu.RadioItem — item with radio indicator\n// DropdownMenu.ItemIndicator — checkmark for Checkbox/RadioItem\n// DropdownMenu.Label — group heading (not interactive)\n// DropdownMenu.Separator — horizontal divider\n// DropdownMenu.Group — logical group wrapper\n// DropdownMenu.Sub — sub-menu root\n// DropdownMenu.SubTrigger — styled item that opens sub-menu\n// DropdownMenu.SubContent — styled sub-menu panel` },
    ],
  },
  {
    name: 'ContextMenu',
    category: 'overlay',
    import: "import { ContextMenu } from '@by2-ai/calangoui'",
    description: 'Compound right-click contextual menu.',
    keywords: ['right click', 'menu', 'actions', 'context', 'contextmenu'],
    props: [],
    variants: [],
    examples: [
      { label: 'Basic', code: `<ContextMenu.Root>\n  <ContextMenu.Trigger>\n    <div style={{ padding: '40px', border: '1px dashed' }}>Right-click me</div>\n  </ContextMenu.Trigger>\n  <ContextMenu.Portal>\n    <ContextMenu.Content>\n      <ContextMenu.Item onSelect={handleCopy}>Copy</ContextMenu.Item>\n      <ContextMenu.Item onSelect={handlePaste}>Paste</ContextMenu.Item>\n      <ContextMenu.Separator />\n      <ContextMenu.Item onSelect={handleDelete}>Delete</ContextMenu.Item>\n    </ContextMenu.Content>\n  </ContextMenu.Portal>\n</ContextMenu.Root>` },
      { label: 'Sub-components', code: `// ContextMenu.Root — Radix Root\n// ContextMenu.Trigger — wraps the right-clickable area\n// ContextMenu.Portal — renders outside DOM tree\n// ContextMenu.Content — styled menu panel\n// ContextMenu.Item — styled menu item (onSelect, disabled)\n// ContextMenu.Separator — horizontal divider\n// ContextMenu.Group — logical group wrapper\n// ContextMenu.Label — group heading\n// ContextMenu.Sub — sub-menu root\n// ContextMenu.SubTrigger — item that opens sub-menu (from Radix, unstyled)\n// ContextMenu.SubContent — sub-menu panel (from Radix, unstyled)` },
    ],
  },

  // ─── NAVIGATION ──────────────────────────────────────────────────────────────
  {
    name: 'Tabs',
    category: 'navigation',
    import: "import { Tabs } from '@by2-ai/calangoui'",
    description: 'Tab panels with keyboard navigation.',
    keywords: ['panels', 'router', 'content', 'tab', 'navigation'],
    props: [
      { name: 'value', type: 'string', required: false, description: 'Controlled active tab' },
      { name: 'onValueChange', type: '(value: string) => void', required: false, description: 'Change handler' },
      { name: 'defaultValue', type: 'string', required: false, description: 'Default active tab' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Tabs.Root defaultValue="overview">\n  <Tabs.List>\n    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>\n    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>\n  </Tabs.List>\n  <Tabs.Content value="overview">Overview content</Tabs.Content>\n  <Tabs.Content value="settings">Settings content</Tabs.Content>\n</Tabs.Root>` },
    ],
  },
  {
    name: 'Breadcrumb',
    category: 'navigation',
    import: "import { Breadcrumb } from '@by2-ai/calangoui'",
    description: 'Compound navigation trail. No items[] prop — compose Root+Item+Link/Page+Separator manually.',
    keywords: ['path', 'navigation', 'trail', 'location', 'breadcrumb'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<Breadcrumb.Root aria-label="Breadcrumb">\n  <Breadcrumb.Item>\n    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>\n  </Breadcrumb.Item>\n  <Breadcrumb.Separator>/</Breadcrumb.Separator>\n  <Breadcrumb.Item>\n    <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>\n  </Breadcrumb.Item>\n  <Breadcrumb.Separator>/</Breadcrumb.Separator>\n  <Breadcrumb.Item>\n    <Breadcrumb.Page aria-current="page">Item 42</Breadcrumb.Page>\n  </Breadcrumb.Item>\n</Breadcrumb.Root>` },
      { label: 'Sub-components', code: `// Breadcrumb.Root — styled nav element (pass aria-label)\n// Breadcrumb.Item — styled span wrapper for each crumb\n// Breadcrumb.Link — styled <a> for clickable crumbs (href prop)\n// Breadcrumb.Page — styled span for the current/last crumb (not a link)\n// Breadcrumb.Separator — styled span for divider text (e.g. "/" or "›")` },
    ],
  },
  {
    name: 'Pagination',
    category: 'navigation',
    import: "import { Pagination } from '@by2-ai/calangoui'",
    description: 'Page navigation for lists and tables.',
    keywords: ['pages', 'list', 'table', 'next', 'prev', 'pagination'],
    props: [
      { name: 'page', type: 'number', required: true, description: 'Current page (1-indexed)' },
      { name: 'totalPages', type: 'number', required: true, description: 'Total number of pages' },
      { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Page change handler' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Pagination page={currentPage} totalPages={10} onPageChange={setCurrentPage} />` },
    ],
  },
  {
    name: 'Sidebar',
    category: 'navigation',
    import: "import { Sidebar } from '@by2-ai/calangoui'",
    description: 'Compound vertical sidebar. Composed with Root, Header, Content, Group, GroupLabel, Item, Footer — no single-prop API.',
    keywords: ['nav', 'drawer', 'menu', 'navigation', 'sidebar'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition', code: `<Sidebar.Root>\n  <Sidebar.Header>MyApp</Sidebar.Header>\n  <Sidebar.Content>\n    <Sidebar.Group>\n      <Sidebar.GroupLabel>Main</Sidebar.GroupLabel>\n      <Sidebar.Item $active>Dashboard</Sidebar.Item>\n      <Sidebar.Item>Analytics</Sidebar.Item>\n    </Sidebar.Group>\n    <Sidebar.Group>\n      <Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>\n      <Sidebar.Item>Profile</Sidebar.Item>\n    </Sidebar.Group>\n  </Sidebar.Content>\n  <Sidebar.Footer>Footer content</Sidebar.Footer>\n</Sidebar.Root>` },
      { label: 'Root props (transient)', code: `// Sidebar.Root — styled aside\n//   $collapsed?: boolean — collapses to 60px icon-only width\n//   $width?: string — custom width (default "240px")\n// Sidebar.Item — styled div\n//   $active?: boolean — highlights item (transient prop, $ prefix required)` },
    ],
  },
  {
    name: 'NavigationMenu',
    category: 'navigation',
    import: "import { NavigationMenu } from '@by2-ai/calangoui'",
    description: 'Horizontal top navigation with dropdown submenus.',
    keywords: ['links', 'header', 'menu', 'nav', 'horizontal'],
    props: [],
    variants: [],
    examples: [
      { label: 'Basic', code: `<NavigationMenu.Root>\n  <NavigationMenu.List>\n    <NavigationMenu.Item>\n      <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>\n      <NavigationMenu.Content>Submenu here</NavigationMenu.Content>\n    </NavigationMenu.Item>\n  </NavigationMenu.List>\n</NavigationMenu.Root>` },
    ],
  },

  {
    name: 'NavTopBar',
    category: 'navigation',
    import: "import { NavTopBar } from '@by2-ai/calangoui'",
    description: 'Horizontal top navigation bar with logo, nav links, and an actions slot.',
    keywords: ['header', 'topbar', 'navbar', 'navigation', 'links', 'logo', 'sticky'],
    props: [
      { name: 'logo', type: 'ReactNode', required: false, description: 'Brand/logo content on the left' },
      { name: 'links', type: 'NavTopBarLink[]', required: false, description: 'Nav links: { label, href?, active?, icon?, onClick? }' },
      { name: 'actions', type: 'ReactNode', required: false, description: 'Right-side slot for buttons, avatar, theme toggle, etc.' },
      { name: 'sticky', type: 'boolean', required: false, default: 'false', description: 'Stick to top of viewport (z-index 40)' },
    ],
    variants: [],
    examples: [
      {
        label: 'Basic',
        code: `<NavTopBar\n  logo={<span>MyApp</span>}\n  links={[\n    { label: 'Dashboard', active: true },\n    { label: 'Analytics' },\n    { label: 'Settings' },\n  ]}\n  actions={<Button size="sm" variant="outline">Sign in</Button>}\n/>`,
      },
      {
        label: 'Sticky with logo',
        code: `<NavTopBar\n  sticky\n  logo={<><LogoIcon /><span>calangoui</span></>}\n  links={[{ label: 'Components' }, { label: 'Tokens' }, { label: 'For AI', active: true }]}\n  actions={<Button size="sm">Get started</Button>}\n/>`,
      },
    ],
  },

  // ─── DATA DISPLAY ────────────────────────────────────────────────────────────
  {
    name: 'Table',
    category: 'data',
    import: "import { Table } from '@by2-ai/calangoui'",
    description: 'Compound HTML table with styled sub-components. No columns/data props — you compose the markup yourself.',
    keywords: ['grid', 'rows', 'data', 'columns', 'list', 'table'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<Table.Root $striped $hoverable>\n  <Table.Header>\n    <Table.Row>\n      <Table.Head>Name</Table.Head>\n      <Table.Head>Email</Table.Head>\n      <Table.Head>Role</Table.Head>\n    </Table.Row>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>Alice</Table.Cell>\n      <Table.Cell>alice@example.com</Table.Cell>\n      <Table.Cell>Admin</Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table.Root>` },
      { label: 'Root props (transient)', code: `// Table.Root — styled table\n//   $striped?: boolean — zebra stripes on even rows\n//   $hoverable?: boolean — highlight row on hover\n//   $compact?: boolean — reduced cell padding\n// Sub-components: Table.Header, Table.Body, Table.Footer, Table.Row, Table.Head, Table.Cell` },
    ],
  },
  {
    name: 'Card',
    category: 'data',
    import: "import { Card } from '@by2-ai/calangoui'",
    description: 'Compound card. Sub-components are Root, Header, Title, Description, Content, Footer. There is NO Card.Body — use Card.Content.',
    keywords: ['container', 'panel', 'paper', 'surface', 'card'],
    props: [],
    variants: ['elevated', 'outline', 'filled'],
    examples: [
      { label: 'Full composition', code: `<Card.Root $variant="outline">\n  <Card.Header>\n    <Card.Title>Card Title</Card.Title>\n    <Card.Description>Supporting description text</Card.Description>\n  </Card.Header>\n  <Card.Content>\n    <p>Main body content goes here.</p>\n  </Card.Content>\n  <Card.Footer>\n    <Button size="sm" variant="outline">Cancel</Button>\n    <Button size="sm" variant="solid">Save</Button>\n  </Card.Footer>\n</Card.Root>` },
      { label: 'Root props (transient)', code: `// Card.Root — styled div\n//   $variant?: 'elevated' | 'outline' | 'filled' — (default: elevated)\n//   $interactive?: boolean — adds hover lift effect\n// Sub-components: Card.Header, Card.Title, Card.Description, Card.Content, Card.Footer\n// IMPORTANT: use Card.Content NOT Card.Body (Body does not exist)` },
    ],
  },
  {
    name: 'Avatar',
    category: 'data',
    import: "import { Avatar } from '@by2-ai/calangoui'",
    description: 'User avatar with image, fallback initials, and status indicator.',
    keywords: ['user', 'profile', 'image', 'photo', 'avatar'],
    props: [
      { name: 'src', type: 'string', required: false, description: 'Image URL' },
      { name: 'fallback', type: 'string', required: false, description: 'Fallback text (initials)' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", required: false, default: 'md', description: 'Avatar size' },
      { name: 'shape', type: "'circle' | 'square'", required: false, default: 'circle', description: 'Avatar shape' },
      { name: 'status', type: "'online' | 'offline' | 'away'", required: false, description: 'Status indicator dot' },
    ],
    variants: [],
    examples: [
      { label: 'With image', code: `<Avatar src="/avatar.jpg" fallback="AB" size="md" />` },
      { label: 'With status', code: `<Avatar fallback="JD" status="online" />` },
    ],
  },
  {
    name: 'Accordion',
    category: 'data',
    import: "import { Accordion } from '@by2-ai/calangoui'",
    description: 'Compound collapsible sections for FAQs or grouped content. No items[] prop — compose Root+Item+Header+Trigger+Content+ContentInner.',
    keywords: ['collapse', 'expand', 'faq', 'details', 'accordion'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition (required pattern)', code: `<Accordion.Root type="single" collapsible defaultValue="item-1">\n  <Accordion.Item value="item-1">\n    <Accordion.Header>\n      <Accordion.Trigger>What is calangoui?</Accordion.Trigger>\n    </Accordion.Header>\n    <Accordion.Content>\n      <Accordion.ContentInner>\n        A React design system built for the AI era.\n      </Accordion.ContentInner>\n    </Accordion.Content>\n  </Accordion.Item>\n  <Accordion.Item value="item-2">\n    <Accordion.Header>\n      <Accordion.Trigger>Is it free?</Accordion.Trigger>\n    </Accordion.Header>\n    <Accordion.Content>\n      <Accordion.ContentInner>\n        Yes, MIT licensed.\n      </Accordion.ContentInner>\n    </Accordion.Content>\n  </Accordion.Item>\n</Accordion.Root>` },
      { label: 'Sub-components', code: `// Accordion.Root — styled Radix Root (type: 'single'|'multiple', collapsible, defaultValue)\n// Accordion.Item — styled Radix Item (value prop required)\n// Accordion.Header — styled Radix Header (flex container)\n// Accordion.Trigger — styled button with +/- indicator\n// Accordion.Content — styled Radix Content with slide animation\n// Accordion.ContentInner — inner div with padding (place content here)` },
    ],
  },
  {
    name: 'Tag',
    category: 'data',
    import: "import { Tag } from '@by2-ai/calangoui'",
    description: 'Removable or static tag/chip for categories and labels.',
    keywords: ['label', 'chip', 'category', 'keyword', 'tag'],
    props: [
      { name: 'variant', type: "'default' | 'outline' | 'solid'", required: false, default: 'default', description: 'Tag style' },
      { name: 'onRemove', type: '() => void', required: false, description: 'Shows × button if provided' },
      { name: 'children', type: 'React.ReactNode', required: true, description: 'Tag content' },
    ],
    variants: ['default', 'outline', 'solid'],
    examples: [
      { label: 'Static', code: `<Tag>TypeScript</Tag>` },
      { label: 'Removable', code: `<Tag onRemove={() => removeTag('react')}>React</Tag>` },
    ],
  },

  // ─── ADVANCED ────────────────────────────────────────────────────────────────
  {
    name: 'CommandPalette',
    category: 'advanced',
    import: "import { CommandPalette } from '@by2-ai/calangoui'",
    description: 'Full-screen command palette with search, grouped items, and ⌘K shortcut.',
    keywords: ['search', 'shortcut', 'cmd k', 'command', 'palette', 'spotlight'],
    props: [
      { name: 'open', type: 'boolean', required: true, description: 'Controlled open state' },
      { name: 'onOpenChange', type: '(open: boolean) => void', required: true, description: 'Open change handler' },
      { name: 'groups', type: 'CommandGroup[]', required: true, description: 'Grouped items to display' },
      { name: 'placeholder', type: 'string', required: false, default: 'Type a command or search...', description: 'Search placeholder' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `const [open, setOpen] = useState(false)\n<CommandPalette\n  open={open}\n  onOpenChange={setOpen}\n  groups={[\n    {\n      label: 'Navigation',\n      items: [\n        { label: 'Go to Dashboard', onSelect: () => router.push('/') },\n        { label: 'Go to Settings', onSelect: () => router.push('/settings') },\n      ],\n    },\n  ]}\n/>` },
    ],
  },
  {
    name: 'Stepper',
    category: 'advanced',
    import: "import { Stepper } from '@by2-ai/calangoui'",
    description: 'Multi-step wizard indicator with status tracking.',
    keywords: ['wizard', 'steps', 'flow', 'progress', 'stepper', 'onboarding'],
    props: [
      { name: 'steps', type: 'StepItem[]', required: true, description: 'Array of step definitions' },
      { name: 'current', type: 'number', required: true, description: 'Current step index (0-indexed)' },
      { name: 'orientation', type: "'horizontal' | 'vertical'", required: false, default: 'horizontal', description: 'Stepper layout' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Stepper\n  current={1}\n  steps={[\n    { label: 'Account', status: 'complete' },\n    { label: 'Profile', status: 'current' },\n    { label: 'Billing', status: 'pending' },\n  ]}\n/>` },
    ],
  },
  {
    name: 'Collapsible',
    category: 'advanced',
    import: "import { Collapsible } from '@by2-ai/calangoui'",
    description: 'Single collapsible section with animated height transition.',
    keywords: ['collapse', 'toggle', 'expand', 'hide', 'show', 'collapsible'],
    props: [],
    variants: [],
    examples: [
      { label: 'Basic', code: `<Collapsible.Root>\n  <Collapsible.Trigger asChild>\n    <Button variant="ghost">Show details ▾</Button>\n  </Collapsible.Trigger>\n  <Collapsible.Content>\n    Hidden content here\n  </Collapsible.Content>\n</Collapsible.Root>` },
      { label: 'Controlled', code: `const [open, setOpen] = useState(false)\n<Collapsible.Root open={open} onOpenChange={setOpen}>\n  <Collapsible.Trigger asChild>\n    <Button variant="ghost">{open ? 'Hide' : 'Show'} details</Button>\n  </Collapsible.Trigger>\n  <Collapsible.Content>\n    <p>Content with animated height transition</p>\n  </Collapsible.Content>\n</Collapsible.Root>` },
      { label: 'Sub-components', code: `// Collapsible.Root — Radix Root (open, onOpenChange, defaultOpen, disabled)\n// Collapsible.Trigger — Radix Trigger (use asChild to wrap a Button)\n// Collapsible.Content — styled Radix Content with slide animation` },
    ],
  },
  {
    name: 'HoverCard',
    category: 'advanced',
    import: "import { HoverCard } from '@by2-ai/calangoui'",
    description: 'Compound rich preview card shown on hover after a delay.',
    keywords: ['preview', 'floating', 'hover', 'card', 'tooltip'],
    props: [],
    variants: [],
    examples: [
      { label: 'Full composition', code: `<HoverCard.Root openDelay={400} closeDelay={200}>\n  <HoverCard.Trigger asChild>\n    <a href="#">@username</a>\n  </HoverCard.Trigger>\n  <HoverCard.Portal>\n    <HoverCard.Content side="bottom" sideOffset={8}>\n      <Avatar fallback="U" />\n      <Text weight="bold">Username</Text>\n      <HoverCard.Arrow />\n    </HoverCard.Content>\n  </HoverCard.Portal>\n</HoverCard.Root>` },
      { label: 'Sub-components', code: `// HoverCard.Root — Radix Root (openDelay, closeDelay, open, onOpenChange)\n// HoverCard.Trigger — use asChild to avoid extra DOM wrapper\n// HoverCard.Portal — renders outside DOM tree\n// HoverCard.Content — styled panel (side, sideOffset, align from Radix)\n// HoverCard.Arrow — styled SVG arrow` },
    ],
  },
  {
    name: 'ScrollArea',
    category: 'advanced',
    import: "import { ScrollArea } from '@by2-ai/calangoui'",
    description: 'Custom-styled scrollable container with themed scrollbar.',
    keywords: ['custom scrollbar', 'overflow', 'scroll', 'scrollable'],
    props: [
      { name: 'height', type: 'string', required: false, description: 'Fixed height for the scroll container' },
      { name: 'width', type: 'string', required: false, description: 'Fixed width for the scroll container' },
    ],
    variants: [],
    examples: [
      { label: 'Basic', code: `<ScrollArea height="300px">\n  {longContentHere}\n</ScrollArea>` },
    ],
  },
  {
    name: 'AspectRatio',
    category: 'advanced',
    import: "import { AspectRatio } from '@by2-ai/calangoui'",
    description: 'Constrains children to a specific aspect ratio.',
    keywords: ['responsive', 'image', 'ratio', '16:9', 'video', 'aspect'],
    props: [
      { name: 'ratio', type: 'number', required: false, default: '1', description: 'Width/height ratio (e.g. 16/9)' },
    ],
    variants: [],
    examples: [
      { label: '16:9 video', code: `<AspectRatio ratio={16/9}>\n  <img src="/banner.jpg" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />\n</AspectRatio>` },
    ],
  },
  {
    name: 'Separator',
    category: 'advanced',
    import: "import { Separator } from '@by2-ai/calangoui'",
    description: 'Radix UI semantic separator for visual and structural dividing.',
    keywords: ['divider', 'hr', 'line', 'rule', 'separator'],
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", required: false, default: 'horizontal', description: 'Separator orientation' },
      { name: 'decorative', type: 'boolean', required: false, default: 'true', description: 'If true, hidden from accessibility tree' },
    ],
    variants: [],
    examples: [
      { label: 'Horizontal', code: `<Separator />` },
      { label: 'Vertical', code: `<Flex $align="center" style={{ height: '24px', gap: '8px' }}>\n  <span>Left</span>\n  <Separator orientation="vertical" />\n  <span>Right</span>\n</Flex>` },
    ],
  },
];
