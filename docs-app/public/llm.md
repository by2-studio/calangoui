# calangoui — AI First Design System

> This document is the complete reference for the calangoui design system. Read it fully to understand all available components, tokens, and patterns. Always import from '@by2-ai/calangoui'.

## Quick Start

```bash
npm install @by2-ai/calangoui styled-components recharts react-icons
```

```tsx
import { CalangoUIProvider } from '@by2-ai/calangoui';

function App() {
  return (
    <CalangoUIProvider>
      <YourApp />
    </CalangoUIProvider>
  );
}
```

### Peer Dependencies

- `react` >= 18
- `react-dom` >= 18
- `styled-components` >= 6
- `recharts` (for charts)
- `react-icons` (for icons)

---

## Design Tokens

### Colors

```ts
import { colors } from '@by2-ai/calangoui';

// Base
colors.black    // '#000000'
colors.white    // '#FFFFFF'

// Gray Scale (11 steps)
colors.gray[50]   // '#FAFAFA'
colors.gray[100]  // '#F4F4F5'
colors.gray[200]  // '#E4E4E7'
colors.gray[300]  // '#D4D4D8'
colors.gray[400]  // '#A1A1AA'
colors.gray[500]  // '#71717A'
colors.gray[600]  // '#52525B'
colors.gray[700]  // '#3F3F46'
colors.gray[800]  // '#27272A'
colors.gray[900]  // '#18181B'
colors.gray[950]  // '#09090B'

// Semantic Colors (each has light, DEFAULT, dark)
colors.success.light    // '#4ADE80'
colors.success.DEFAULT  // '#22C55E'
colors.success.dark     // '#16A34A'

colors.error.light      // '#F87171'
colors.error.DEFAULT    // '#EF4444'
colors.error.dark       // '#DC2626'

colors.warning.light    // '#FBBF24'
colors.warning.DEFAULT  // '#F59E0B'
colors.warning.dark     // '#D97706'

colors.info.light       // '#60A5FA'
colors.info.DEFAULT     // '#3B82F6'
colors.info.dark        // '#2563EB'
```

### Typography

```ts
import { typography } from '@by2-ai/calangoui';

typography.fontFamily.sans  // '"Geist Sans", "Inter", -apple-system, ...'
typography.fontFamily.mono  // '"Geist Mono", "Fira Code", ...'

// Font Sizes
typography.fontSize.xs    // '0.75rem'
typography.fontSize.sm    // '0.875rem'
typography.fontSize.base  // '1rem'
typography.fontSize.lg    // '1.125rem'
typography.fontSize.xl    // '1.25rem'
typography.fontSize['2xl'] // '1.5rem'
typography.fontSize['3xl'] // '1.875rem'
typography.fontSize['4xl'] // '2.25rem'

// Font Weights
typography.fontWeight.light    // 300
typography.fontWeight.normal   // 400
typography.fontWeight.medium   // 500
typography.fontWeight.semibold // 600
typography.fontWeight.bold     // 700

// Line Heights
typography.lineHeight.tight    // 1.25
typography.lineHeight.normal   // 1.5
typography.lineHeight.relaxed  // 1.75
```

### Spacing (base 4px)

```ts
import { spacing } from '@by2-ai/calangoui';

spacing[0]    // '0px'
spacing[0.5]  // '2px'
spacing[1]    // '4px'
spacing[1.5]  // '6px'
spacing[2]    // '8px'
spacing[2.5]  // '10px'
spacing[3]    // '12px'
spacing[4]    // '16px'
spacing[5]    // '20px'
spacing[6]    // '24px'
spacing[8]    // '32px'
spacing[10]   // '40px'
spacing[12]   // '48px'
spacing[16]   // '64px'
spacing[20]   // '80px'
spacing[24]   // '96px'
```

### Border Radius

```ts
import { radii } from '@by2-ai/calangoui';

radii.none  // '0px'
radii.sm    // '4px'
radii.md    // '8px'
radii.lg    // '12px'
radii.xl    // '16px'
radii['2xl'] // '24px'
radii.full  // '9999px'
```

### Shadows

```ts
import { shadows } from '@by2-ai/calangoui';

shadows.none  // 'none'
shadows.sm    // '0 1px 2px rgba(0,0,0,0.4)'
shadows.md    // '0 4px 6px rgba(0,0,0,0.4)'
shadows.lg    // '0 10px 15px rgba(0,0,0,0.4)'
shadows.xl    // '0 20px 25px rgba(0,0,0,0.4)'
shadows['2xl'] // '0 25px 50px rgba(0,0,0,0.5)'
```

### Z-Index

```ts
import { zIndex } from '@by2-ai/calangoui';

zIndex.base      // 0
zIndex.dropdown  // 1000
zIndex.sticky    // 1100
zIndex.overlay   // 1300
zIndex.modal     // 1400
zIndex.popover   // 1500
zIndex.toast     // 1600
zIndex.tooltip   // 1700
```

---

## Theme Engine

### CalangoUIProvider

Wrap your app. Dark theme is the default.

```tsx
import { CalangoUIProvider } from '@by2-ai/calangoui';

<CalangoUIProvider>                           {/* dark by default */}
<CalangoUIProvider defaultTheme="light">      {/* light mode */}
<CalangoUIProvider theme={customTheme}>       {/* custom theme */}
```

### useTheme Hook

```tsx
import { useTheme } from '@by2-ai/calangoui';

const { theme, isDark, toggleTheme } = useTheme();

// Access semantic colors resolved by theme:
theme.colors.background       // dark: '#000000', light: '#FFFFFF'
theme.colors.foreground        // dark: '#FAFAFA', light: '#09090B'
theme.colors.muted             // dark: '#18181B', light: '#F4F4F5'
theme.colors.mutedForeground   // dark: '#A1A1AA', light: '#71717A'
theme.colors.border            // dark: '#27272A', light: '#E4E4E7'
theme.colors.primary           // dark: '#FFFFFF', light: '#000000'
theme.colors.primaryForeground // dark: '#000000', light: '#FFFFFF'
theme.colors.card              // dark: '#09090B', light: '#FFFFFF'
theme.colors.destructive       // '#EF4444'
theme.colors.accent            // dark: '#27272A', light: '#F4F4F5'
```

### createTheme

```tsx
import { createTheme } from '@by2-ai/calangoui';

const myTheme = createTheme({
  colors: { primary: '#FF0000', primaryForeground: '#FFFFFF' },
});

<CalangoUIProvider theme={myTheme}>
```

### GlobalStyles

Automatically included in CalangoUIProvider. Applies CSS reset, font setup, and base styles.

---

## Primitive Components

### Box

Polymorphic layout primitive.

```tsx
import { Box } from '@by2-ai/calangoui';

<Box p="16px" bg={theme.colors.muted} radius={theme.radii.md} shadow={theme.shadows.md}>
  content
</Box>

// Props: as, p, px, py, pt, pb, m, mx, my, bg, color, radius, shadow, border, w, h, minW, minH, maxW, display, overflow
```

### Text

```tsx
import { Text } from '@by2-ai/calangoui';

<Text size={theme.typography.fontSize.sm} weight={500} color={theme.colors.mutedForeground}>
  text
</Text>
<Text truncate>long text that gets ellipsis...</Text>
<Text mono>monospace text</Text>

// Props: as, size, weight, color, align, truncate, mono, lineHeight
```

### Heading

```tsx
import { Heading } from '@by2-ai/calangoui';

<Heading>Default h2</Heading>
<Heading as="h1" size={theme.typography.fontSize['4xl']}>Big</Heading>

// Props: as, size, weight, color
```

### Flex

```tsx
import { Flex } from '@by2-ai/calangoui';

<Flex $gap="12px" $align="center" $justify="space-between" $wrap="wrap" $direction="row">
  <div>A</div>
  <div>B</div>
</Flex>

// Transient props (styled-components): $direction, $align, $justify, $wrap, $gap, $inline
```

### Stack

```tsx
import { Stack } from '@by2-ai/calangoui';

<Stack $spacing="8px" $align="stretch">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

### Grid

```tsx
import { Grid } from '@by2-ai/calangoui';

<Grid $columns={3} $gap="16px">...</Grid>
<Grid $columns="repeat(auto-fill, minmax(200px, 1fr))" $gap="12px">...</Grid>

// Props: $columns (number | string), $rows, $gap, $areas
```

### Divider

```tsx
import { Divider } from '@by2-ai/calangoui';

<Divider />                              {/* horizontal */}
<Divider $orientation="vertical" />      {/* vertical */}
<Divider $color={theme.colors.primary} />
```

### Icon

```tsx
import { Icon } from '@by2-ai/calangoui';

<Icon icon={SomeSvgComponent} size={24} color={theme.colors.primary} />
```

### RoundedIcon

Icon with styled background.

```tsx
import { RoundedIcon, HiSparkles } from '@by2-ai/calangoui';

<RoundedIcon icon={<HiSparkles />} variant="soft" size="lg" color={theme.colors.info.DEFAULT} />
<RoundedIcon icon={<HiSparkles />} variant="solid" size="md" />
<RoundedIcon icon={<HiSparkles />} variant="outline" size="xl" radius="md" />

// variant: 'solid' | 'soft' | 'outline' | 'ghost'
// size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
// radius: 'sm' | 'md' | 'lg' | 'full'
// color: any CSS color string
```

---

## Input Components

### Button

```tsx
import { Button } from '@by2-ai/calangoui';

<Button variant="solid">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button leftIcon={<HiPlus />}>With Icon</Button>

// variant: 'solid' | 'outline' | 'ghost' | 'link'
// size: 'sm' | 'md' | 'lg'
// Props: variant, size, loading, disabled, leftIcon, rightIcon
```

### IconButton

```tsx
import { IconButton } from '@by2-ai/calangoui';

<IconButton $v="outline" $sz="md" aria-label="Settings">⚙</IconButton>
```

### Input

```tsx
import { Input, InputGroup, Label, ErrorText } from '@by2-ai/calangoui';

<InputGroup>
  <Label>Email</Label>
  <Input placeholder="you@example.com" />
</InputGroup>

<Input size="sm" />
<Input size="lg" />
<Input error="This field is required" />
<Input disabled />
<Input leftElement={<HiMagnifyingGlass />} />
<Input rightElement={<Button size="sm">Go</Button>} />

// size: 'sm' | 'md' | 'lg'
// Props: size, error (string), leftElement, rightElement, disabled
```

### Textarea

```tsx
import { Textarea } from '@by2-ai/calangoui';

<Textarea placeholder="Write..." />
<Textarea error="Too short" resize="none" />

// Props: error (string), resize ('none' | 'vertical' | 'horizontal' | 'both')
```

### Select (Radix)

Compound component based on Radix Select.

```tsx
import { Select } from '@by2-ai/calangoui';

<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="Choose..." />
    <Select.Icon> ▾</Select.Icon>
  </Select.Trigger>
  <Select.Portal>
    <Select.Content position="popper" sideOffset={4}>
      <Select.Viewport>
        <Select.Group>
          <Select.Label>Category</Select.Label>
          <Select.Item value="a"><Select.ItemText>Option A</Select.ItemText></Select.Item>
          <Select.Item value="b"><Select.ItemText>Option B</Select.ItemText></Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Other</Select.Label>
          <Select.Item value="c"><Select.ItemText>Option C</Select.ItemText></Select.Item>
        </Select.Group>
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>
```

### Checkbox (Radix)

```tsx
import { Checkbox } from '@by2-ai/calangoui';

<Checkbox checked={val} onCheckedChange={setVal} />
<Checkbox defaultChecked />
<Checkbox checked="indeterminate" />
<Checkbox disabled />
```

### RadioGroup (Radix)

```tsx
import { RadioGroup } from '@by2-ai/calangoui';

<RadioGroup.Root defaultValue="a" onValueChange={setValue}>
  <RadioGroup.Item value="a"><RadioGroup.Indicator /></RadioGroup.Item>
  <RadioGroup.Item value="b"><RadioGroup.Indicator /></RadioGroup.Item>
</RadioGroup.Root>
```

### Switch (Radix)

```tsx
import { Switch } from '@by2-ai/calangoui';

<Switch checked={on} onCheckedChange={setOn} />
<Switch size="sm" />
<Switch defaultChecked />
<Switch disabled />

// size: 'sm' | 'md'
```

### Slider (Radix)

```tsx
import { Slider } from '@by2-ai/calangoui';

<Slider value={[50]} onValueChange={setVal} max={100} step={1} />
<Slider defaultValue={[20, 80]} />  {/* range mode */}
```

### DatePicker

Calendar popover component.

```tsx
import { DatePicker } from '@by2-ai/calangoui';

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Pick a date"
  min={new Date(2024, 0, 1)}
  max={new Date(2026, 11, 31)}
  disabled={false}
/>
```

### MaskedInput

Input with preset masks for Brazilian formats.

```tsx
import { MaskedInput } from '@by2-ai/calangoui';

<MaskedInput mask="cpf" />          {/* 000.000.000-00 */}
<MaskedInput mask="cnpj" />         {/* 00.000.000/0000-00 */}
<MaskedInput mask="cellphone" />    {/* (00) 00000-0000 */}
<MaskedInput mask="phone" />        {/* (00) 0000-0000 */}
<MaskedInput mask="cep" />          {/* 00000-000 */}
<MaskedInput mask="currency" />     {/* R$ 1.234,56 */}
<MaskedInput mask="creditcard" />   {/* 0000 0000 0000 0000 */}
<MaskedInput mask="date" />         {/* DD/MM/AAAA */}
<MaskedInput mask="time" />         {/* HH:MM */}

<MaskedInput mask="cpf" error="CPF inválido" />
<MaskedInput mask="cpf" size="sm" />

// mask: 'cpf' | 'cnpj' | 'phone' | 'cellphone' | 'cep' | 'date' | 'time' | 'currency' | 'creditcard' | custom pattern
// Custom: mask="99/99" where 9 = digit
// onChange receives (event, rawValue) where rawValue has only digits
```

---

## Feedback Components

### Badge

```tsx
import { Badge } from '@by2-ai/calangoui';

<Badge>Default</Badge>
<Badge colorScheme="success">Success</Badge>
<Badge colorScheme="error">Error</Badge>
<Badge colorScheme="warning">Warning</Badge>
<Badge colorScheme="info">Info</Badge>

<Badge variant="outline" colorScheme="success">Outline</Badge>
<Badge variant="soft" colorScheme="info">Soft</Badge>
<Badge size="sm">Small</Badge>
<Badge dot>With dot</Badge>

// variant: 'solid' | 'outline' | 'soft'
// colorScheme: 'success' | 'error' | 'warning' | 'info' | any theme color key
// size: 'sm' | 'md'
```

### Alert

```tsx
import { Alert, AlertTitle } from '@by2-ai/calangoui';

<Alert variant="info">
  <div>
    <AlertTitle>Info</AlertTitle>
    Your account has been updated.
  </div>
</Alert>

<Alert variant="success">...</Alert>
<Alert variant="warning" closable onClose={() => {}}>...</Alert>
<Alert variant="error">...</Alert>

// variant: 'info' | 'success' | 'warning' | 'error'
// closable: boolean, onClose: () => void, icon: ReactNode
```

### Progress

```tsx
import { Progress } from '@by2-ai/calangoui';

<Progress value={60} />
<Progress value={25} size="sm" />
<Progress value={90} size="lg" />
<Progress indeterminate />

// size: 'sm' | 'md' | 'lg'
// Props: value (0-100), size, indeterminate, color
```

### Spinner

```tsx
import { Spinner } from '@by2-ai/calangoui';

<Spinner $size="sm" />
<Spinner $size="md" />
<Spinner $size="lg" />
<Spinner $size="xl" />

// $size: 'sm' (16px) | 'md' (24px) | 'lg' (32px) | 'xl' (48px)
```

### Skeleton

```tsx
import { Skeleton } from '@by2-ai/calangoui';

<Skeleton $w={200} $h={20} />
<Skeleton $w="100%" $h={16} />
<Skeleton $w={48} $h={48} $radius="9999px" />  {/* circle */}
```

### Toast (Radix)

```tsx
import { Toast } from '@by2-ai/calangoui';

<Toast.Provider>
  <Toast.Root open={open} onOpenChange={setOpen} $variant="success">
    <Toast.Title>Saved</Toast.Title>
    <Toast.Description>Changes saved successfully.</Toast.Description>
    <Toast.Action altText="Undo">Undo</Toast.Action>
  </Toast.Root>
  <Toast.Viewport />
</Toast.Provider>

// $variant: 'default' | 'success' | 'error' | 'warning' | 'info'
```

---

## Overlay Components

### Dialog (Radix)

```tsx
import { Dialog, Button } from '@by2-ai/calangoui';

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description text.</Dialog.Description>
      <Dialog.Footer>
        <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
        <Dialog.Close asChild><Button>Confirm</Button></Dialog.Close>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### AlertDialog (Radix)

Same as Dialog but backdrop click does NOT close it.

```tsx
import { AlertDialog, Button } from '@by2-ai/calangoui';

<AlertDialog.Root>
  <AlertDialog.Trigger asChild><Button>Delete</Button></AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content>
      <AlertDialog.Title>Are you sure?</AlertDialog.Title>
      <AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
      <AlertDialog.Footer>
        <AlertDialog.Cancel asChild><Button variant="ghost">Cancel</Button></AlertDialog.Cancel>
        <AlertDialog.Action asChild><Button>Delete</Button></AlertDialog.Action>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
```

### Drawer (Radix)

Slides in from a side.

```tsx
import { Dialog, Drawer, Button } from '@by2-ai/calangoui';

<Dialog.Root>
  <Dialog.Trigger asChild><Button>Open Drawer</Button></Dialog.Trigger>
  <Dialog.Portal>
    <Drawer.Overlay />
    <Drawer.Content $side="right">     {/* 'left' | 'right' | 'top' | 'bottom' */}
      <Drawer.Title>Settings</Drawer.Title>
      <p>Content here</p>
      <Drawer.Close asChild><Button variant="outline">Close</Button></Drawer.Close>
    </Drawer.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### Popover (Radix)

```tsx
import { Popover, Button } from '@by2-ai/calangoui';

<Popover.Root>
  <Popover.Trigger asChild><Button>Open</Button></Popover.Trigger>
  <Popover.Portal>
    <Popover.Content sideOffset={4}>
      <p>Content</p>
      <Popover.Arrow />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>
```

### Tooltip (Radix)

```tsx
import { Tooltip, Button } from '@by2-ai/calangoui';

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger asChild><Button>Hover me</Button></Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content side="top" sideOffset={4}>
        Tooltip text
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>
```

### DropdownMenu (Radix)

```tsx
import { DropdownMenu, Button } from '@by2-ai/calangoui';

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild><Button>Actions ▾</Button></DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content sideOffset={4}>
      <DropdownMenu.Label>Actions</DropdownMenu.Label>
      <DropdownMenu.Item>Edit</DropdownMenu.Item>
      <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Delete</DropdownMenu.Item>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>Archive</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
```

### ContextMenu (Radix)

```tsx
import { ContextMenu } from '@by2-ai/calangoui';

<ContextMenu.Root>
  <ContextMenu.Trigger>Right-click this area</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Item>Cut</ContextMenu.Item>
      <ContextMenu.Item>Copy</ContextMenu.Item>
      <ContextMenu.Item>Paste</ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>
```

---

## Navigation Components

### Tabs (Radix)

```tsx
import { Tabs } from '@by2-ai/calangoui';

<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs.Root>
```

### Sidebar

```tsx
import { Sidebar } from '@by2-ai/calangoui';

<Sidebar.Root $collapsed={false} $width="240px">
  <Sidebar.Header>App Name</Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>SECTION</Sidebar.GroupLabel>
      <Sidebar.Item $active>Dashboard</Sidebar.Item>
      <Sidebar.Item>Settings</Sidebar.Item>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Footer>Footer</Sidebar.Footer>
</Sidebar.Root>
```

### Breadcrumb

```tsx
import { Breadcrumb } from '@by2-ai/calangoui';

<Breadcrumb.Root aria-label="Breadcrumb">
  <Breadcrumb.Item><Breadcrumb.Link href="/">Home</Breadcrumb.Link></Breadcrumb.Item>
  <Breadcrumb.Separator>/</Breadcrumb.Separator>
  <Breadcrumb.Item><Breadcrumb.Link href="/products">Products</Breadcrumb.Link></Breadcrumb.Item>
  <Breadcrumb.Separator>/</Breadcrumb.Separator>
  <Breadcrumb.Item><Breadcrumb.Page aria-current="page">Details</Breadcrumb.Page></Breadcrumb.Item>
</Breadcrumb.Root>
```

### Pagination

```tsx
import { Pagination } from '@by2-ai/calangoui';

<Pagination page={5} totalPages={20} onPageChange={setPage} siblings={1} />
```

### NavigationMenu (Radix)

```tsx
import { NavigationMenu } from '@by2-ai/calangoui';

<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <p>Mega menu content</p>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```

---

## Data Display Components

### Table

```tsx
import { Table } from '@by2-ai/calangoui';

<Table.Root $striped $hoverable $compact>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Status</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice</Table.Cell>
      <Table.Cell>Active</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Row><Table.Cell colSpan={2}>Total: 1</Table.Cell></Table.Row>
  </Table.Footer>
</Table.Root>
```

### Card

```tsx
import { Card, Button } from '@by2-ai/calangoui';

<Card.Root $variant="elevated">       {/* 'elevated' | 'outline' | 'filled' */}
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>Content here</Card.Content>
  <Card.Footer>
    <Button size="sm">Action</Button>
  </Card.Footer>
</Card.Root>

<Card.Root $variant="filled" $interactive>  {/* hover lift effect */}
```

### Avatar (Radix)

```tsx
import { Avatar } from '@by2-ai/calangoui';

<Avatar.Root $size="md" $shape="circle">   {/* size: xs|sm|md|lg|xl, shape: circle|square */}
  <Avatar.Image src="https://..." alt="User" />
  <Avatar.Fallback $size="md">JD</Avatar.Fallback>
</Avatar.Root>
```

### Accordion (Radix)

```tsx
import { Accordion } from '@by2-ai/calangoui';

<Accordion.Root type="single" defaultValue="item-1" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger>Question 1?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <Accordion.ContentInner>Answer here.</Accordion.ContentInner>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>

// type: 'single' | 'multiple'
```

### Tag

```tsx
import { Tag } from '@by2-ai/calangoui';

<Tag>Default</Tag>
<Tag variant="outline" colorScheme="success">Success</Tag>
<Tag variant="soft" colorScheme="error">Error</Tag>
<Tag closable onClose={() => {}}>Removable</Tag>

// variant: 'solid' | 'outline' | 'soft'
// colorScheme: 'success' | 'error' | 'warning' | 'info'
```

---

## Charts (Recharts-based)

All charts auto-theme with calangoui. Requires `recharts` as peer dependency.

### BarChart

```tsx
import { BarChart } from '@by2-ai/calangoui';

<BarChart
  data={[
    { label: 'Mon', value: 45 },
    { label: 'Tue', value: 72 },
  ]}
  height="300px"
/>

<BarChart data={data} horizontal />

<BarChart
  data={data}
  dataKeys={[
    { key: 'revenue', color: '#FFF', name: 'Revenue' },
    { key: 'costs', color: '#71717A', name: 'Costs' },
  ]}
  showLegend
/>

// Props: data, height, color, colors, horizontal, showGrid, showTooltip, showLegend, radius, dataKeys
```

### LineChart

```tsx
import { LineChart } from '@by2-ai/calangoui';

<LineChart data={data} />
<LineChart data={data} showDots={false} curved={false} color="#3B82F6" />

<LineChart
  data={data}
  dataKeys={[
    { key: 'revenue', color: '#FFF', name: 'Revenue' },
    { key: 'costs', color: '#EF4444', name: 'Costs', dashed: true },
  ]}
/>

// Props: data, height, color, showGrid, showDots, showTooltip, curved, strokeWidth, dataKeys
```

### AreaChart

```tsx
import { AreaChart } from '@by2-ai/calangoui';

<AreaChart data={data} color="#3B82F6" />

<AreaChart
  data={data}
  stacked
  dataKeys={[
    { key: 'mobile', color: '#3B82F6', name: 'Mobile' },
    { key: 'desktop', color: '#FFF', name: 'Desktop' },
  ]}
/>

// Props: data, height, color, showGrid, showTooltip, stacked, dataKeys
```

### DonutChart / PieChart

```tsx
import { DonutChart } from '@by2-ai/calangoui';

<DonutChart
  data={[
    { label: 'Desktop', value: 45, color: '#FFF' },
    { label: 'Mobile', value: 30, color: '#71717A' },
  ]}
  showLegend
/>

<DonutChart data={data} donut={false} />  {/* pie chart */}

// Props: data, height, donut, innerRadius, showTooltip, showLegend, showLabels
```

### RadarChart

```tsx
import { RadarChart } from '@by2-ai/calangoui';

<RadarChart
  data={[
    { label: 'Speed', value: 85 },
    { label: 'Safety', value: 95 },
  ]}
  color="#3B82F6"
/>
```

### RadialBarChart

```tsx
import { RadialBarChart } from '@by2-ai/calangoui';

<RadialBarChart
  data={[
    { label: 'React', value: 85, color: '#61DAFB' },
    { label: 'TypeScript', value: 72, color: '#3178C6' },
  ]}
/>
```

### SparkLine

Inline mini chart for tables and cards.

```tsx
import { SparkLine } from '@by2-ai/calangoui';

<SparkLine data={[12, 18, 14, 22, 19, 28]} />
<SparkLine data={data} area color="#22C55E" />
<SparkLine data={data} width="160px" height="40px" />
```

### StatCard

KPI card with trend and sparkline.

```tsx
import { StatCard, HiCurrencyDollar } from '@by2-ai/calangoui';

<StatCard
  label="Revenue"
  value="$45,231"
  trend={{ value: '+20.1%', positive: true }}
  sparkData={[12, 18, 14, 22, 19, 28]}
  sparkColor="#22C55E"
  icon={<HiCurrencyDollar size={16} />}
/>
```

---

## Advanced Components

### CommandPalette

```tsx
import { CommandPalette } from '@by2-ai/calangoui';

<CommandPalette
  open={open}
  onOpenChange={setOpen}
  groups={[
    {
      label: 'Actions',
      items: [
        { label: 'New File', shortcut: '⌘N', onSelect: () => {} },
        { label: 'Settings', shortcut: '⌘,' },
      ],
    },
  ]}
  placeholder="Type a command..."
/>

// Automatically opens with Cmd+K / Ctrl+K
```

### Stepper

```tsx
import { Stepper } from '@by2-ai/calangoui';

<Stepper
  activeStep={1}
  steps={[
    { label: 'Account' },
    { label: 'Profile' },
    { label: 'Complete' },
  ]}
/>

<Stepper
  activeStep={2}
  orientation="vertical"
  steps={[
    { label: 'Done', status: 'complete' },
    { label: 'In progress', status: 'active' },
    { label: 'Failed', status: 'error' },
    { label: 'Pending', status: 'pending' },
  ]}
/>

// orientation: 'horizontal' | 'vertical'
// step.status: 'complete' | 'active' | 'pending' | 'error'
```

### Collapsible (Radix)

```tsx
import { Collapsible, Button } from '@by2-ai/calangoui';

<Collapsible.Root>
  <Collapsible.Trigger asChild>
    <Button variant="outline">Toggle</Button>
  </Collapsible.Trigger>
  <Collapsible.Content>
    Hidden content with animated expand/collapse.
  </Collapsible.Content>
</Collapsible.Root>
```

### HoverCard (Radix)

```tsx
import { HoverCard } from '@by2-ai/calangoui';

<HoverCard.Root openDelay={200}>
  <HoverCard.Trigger asChild><span>@username</span></HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content sideOffset={4}>
      <p>User profile card content</p>
      <HoverCard.Arrow />
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard.Root>
```

### ScrollArea (Radix)

```tsx
import { ScrollArea } from '@by2-ai/calangoui';

<ScrollArea.Root style={{ maxHeight: '200px' }}>
  <ScrollArea.Viewport style={{ maxHeight: '200px' }}>
    {/* scrollable content */}
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>
```

### AspectRatio (Radix)

```tsx
import { AspectRatio } from '@by2-ai/calangoui';

<AspectRatio ratio={16 / 9}>
  <img src="..." style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
</AspectRatio>
```

### Separator (Radix)

```tsx
import { Separator } from '@by2-ai/calangoui';

<Separator orientation="horizontal" />
<Separator orientation="vertical" decorative />
```

---

## Icons

200+ curated icons from `react-icons`, re-exported from calangoui. Requires `react-icons` as peer dependency.

### Usage

```tsx
import { HiSparkles, HiCheck, FiGithub, SiReact } from '@by2-ai/calangoui';

<HiSparkles size={24} />
<FiGithub size={20} />
<SiReact size={16} />
```

### Categories

| Prefix | Source | Examples |
|--------|--------|---------|
| `Hi*` | Heroicons 2 | HiArrowRight, HiCheck, HiPlus, HiXMark, HiMagnifyingGlass, HiBell, HiUser, HiCog6Tooth, HiHome, HiHeart, HiStar |
| `Fi*` | Feather Icons | FiGithub, FiTwitter, FiLinkedin, FiTerminal, FiPackage, FiLayers, FiZap, FiActivity |
| `Si*` | Simple Icons | SiReact, SiTypescript, SiNextdotjs, SiVite, SiDocker, SiFirebase, SiStripe, SiOpenai, SiAnthropic |

### With RoundedIcon

```tsx
import { RoundedIcon, HiCheckCircle } from '@by2-ai/calangoui';

<RoundedIcon icon={<HiCheckCircle />} variant="soft" color="#22C55E" size="lg" />
```

---

## Common Patterns

### Form with validation

```tsx
<Stack $spacing="16px">
  <InputGroup>
    <Label>Name</Label>
    <Input placeholder="Full name" error={errors.name} />
  </InputGroup>
  <InputGroup>
    <Label>CPF</Label>
    <MaskedInput mask="cpf" error={errors.cpf} />
  </InputGroup>
  <InputGroup>
    <Label>Phone</Label>
    <MaskedInput mask="cellphone" />
  </InputGroup>
  <Button variant="solid" size="lg">Submit</Button>
</Stack>
```

### Dashboard layout

```tsx
<Flex style={{ height: '100vh' }}>
  <Sidebar.Root>
    <Sidebar.Header>App</Sidebar.Header>
    <Sidebar.Content>
      <Sidebar.Item $active>Dashboard</Sidebar.Item>
      <Sidebar.Item>Settings</Sidebar.Item>
    </Sidebar.Content>
  </Sidebar.Root>
  <Stack $spacing="24px" style={{ flex: 1, padding: '24px' }}>
    <Grid $columns={3} $gap="16px">
      <StatCard label="Revenue" value="$45K" trend={{ value: '+20%', positive: true }} sparkData={[...]} />
    </Grid>
    <Card.Root $variant="outline">
      <Card.Content>
        <AreaChart data={monthlyData} color={theme.colors.primary} />
      </Card.Content>
    </Card.Root>
  </Stack>
</Flex>
```

### Data table with tags

```tsx
<Table.Root $striped $hoverable>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Status</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {data.map(row => (
      <Table.Row key={row.id}>
        <Table.Cell>{row.name}</Table.Cell>
        <Table.Cell>
          <Tag variant="soft" colorScheme={row.active ? 'success' : 'error'}>
            {row.active ? 'Active' : 'Inactive'}
          </Tag>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
```

---

## TypeScript

All components are fully typed. Key types:

```ts
import type {
  CalangoUITheme, SemanticColors, CalangoUIProviderProps,
  ButtonProps, ButtonVariant, ButtonSize,
  InputProps, TextareaProps, MaskedInputProps, MaskPreset,
  BadgeProps, AlertProps, ProgressProps, SpinnerProps, SkeletonProps,
  TagProps, CardVariant, AvatarSize, PaginationProps,
  BarChartProps, LineChartProps, AreaChartProps, DonutChartProps,
  RadarChartProps, StatCardProps, SparkLineProps, ChartDataPoint,
  CommandPaletteProps, StepperProps, StepItem, StepStatus,
  RoundedIconProps, RoundedIconSize, RoundedIconVariant,
  DatePickerProps,
} from '@by2-ai/calangoui';
```

---

*calangoui v0.1.0 — AI First Design System*
*Built with styled-components, Radix UI, Recharts, and TypeScript.*
