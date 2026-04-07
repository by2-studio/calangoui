import { useState } from 'react';
import {
  Stepper, CommandPalette, Collapsible, HoverCard, ScrollArea,
  Button, Flex, Stack, Text, useTheme, Avatar,
} from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function AdvancedSection() {
  const { theme } = useTheme();
  const [cmdOpen, setCmdOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Section id="advanced">
      <SectionTitle>Advanced Components</SectionTitle>
      <SectionDesc>
        Command Palette, Stepper, Collapsible, HoverCard e ScrollArea.
      </SectionDesc>

      <SubTitle>Command Palette</SubTitle>
      <DemoWithCode code={`<CommandPalette
  open={open}
  onOpenChange={setOpen}
  groups={[
    {
      label: 'Actions',
      items: [
        { label: 'New File', shortcut: '\u2318N' },
        { label: 'Open Settings', shortcut: '\u2318,' },
      ],
    },
  ]}
/>`}>
        <Stack $spacing="8px">
          <Button variant="outline" onClick={() => setCmdOpen(true)}>
            Open Command Palette (or press Cmd+K)
          </Button>
          <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
            Try searching for "theme", "new", or "settings"
          </Text>
        </Stack>
        <CommandPalette
          open={cmdOpen}
          onOpenChange={setCmdOpen}
          groups={[
            {
              label: 'Actions',
              items: [
                { label: 'New File', shortcut: '\u2318N' },
                { label: 'New Folder', shortcut: '\u2318\u21e7N' },
                { label: 'Open Settings', shortcut: '\u2318,' },
              ],
            },
            {
              label: 'Theme',
              items: [
                { label: 'Toggle Dark Mode', shortcut: '\u2318\u21e7D' },
                { label: 'Reset to Default Theme' },
              ],
            },
            {
              label: 'Navigation',
              items: [
                { label: 'Go to Dashboard' },
                { label: 'Go to Settings' },
                { label: 'Go to Profile' },
              ],
            },
          ]}
        />
      </DemoWithCode>

      <SubTitle>Stepper — Horizontal</SubTitle>
      <DemoWithCode code={`<Stepper
  activeStep={1}
  steps={[
    { label: 'Account' },
    { label: 'Profile' },
    { label: 'Review' },
    { label: 'Complete' },
  ]}
/>`}>
        <Stack $spacing="16px">
          <Stepper
            activeStep={activeStep}
            steps={[
              { label: 'Account' },
              { label: 'Profile' },
              { label: 'Review' },
              { label: 'Complete' },
            ]}
          />
          <Flex $gap="8px" $justify="center">
            <Button size="sm" variant="outline" onClick={() => setActiveStep(Math.max(0, activeStep - 1))}>
              Back
            </Button>
            <Button size="sm" onClick={() => setActiveStep(Math.min(3, activeStep + 1))}>
              Next
            </Button>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>Stepper — Vertical with Error</SubTitle>
      <DemoWithCode code={`<Stepper
  activeStep={2}
  orientation="vertical"
  steps={[
    { label: 'Create account', status: 'complete' },
    { label: 'Verify email', status: 'complete' },
    { label: 'Payment failed', status: 'error' },
    { label: 'Done', status: 'pending' },
  ]}
/>`}>
        <Stepper
          activeStep={2}
          orientation="vertical"
          steps={[
            { label: 'Create account', status: 'complete' },
            { label: 'Verify email', status: 'complete' },
            { label: 'Payment failed', status: 'error' },
            { label: 'Done', status: 'pending' },
          ]}
        />
      </DemoWithCode>

      <SubTitle>Collapsible (Radix)</SubTitle>
      <DemoWithCode code={`<Collapsible.Root>
  <Collapsible.Trigger asChild>
    <Button variant="outline" size="sm">Toggle Details</Button>
  </Collapsible.Trigger>
  <Collapsible.Content>
    <Text>Hidden content here...</Text>
  </Collapsible.Content>
</Collapsible.Root>`}>
        <Collapsible.Root>
          <Collapsible.Trigger asChild>
            <Button variant="outline" size="sm">Toggle Details</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div style={{ padding: '12px 0' }}>
              <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
                This content is hidden by default and can be toggled with the button above.
                It animates smoothly between collapsed and expanded states.
              </Text>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </DemoWithCode>

      <SubTitle>HoverCard (Radix)</SubTitle>
      <DemoWithCode code={`<HoverCard.Root openDelay={200} closeDelay={100}>
  <HoverCard.Trigger asChild>
    <Text style={{ cursor: 'pointer', textDecoration: 'underline' }}>
      @calangoui
    </Text>
  </HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content sideOffset={4}>
      <Flex $gap="12px">
        <Avatar.Root $size="md">
          <Avatar.Fallback $size="md">OL</Avatar.Fallback>
        </Avatar.Root>
        <Stack $spacing="4px">
          <Text weight={theme.typography.fontWeight.semibold}>calangoui</Text>
          <Text>Dark-first design system for React.</Text>
        </Stack>
      </Flex>
      <HoverCard.Arrow />
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard.Root>`}>
        <HoverCard.Root openDelay={200} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <Text
              size={theme.typography.fontSize.sm}
              color={theme.colors.info.DEFAULT}
              style={{ cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              @calangoui
            </Text>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content sideOffset={4}>
              <Flex $gap="12px" $align="flex-start">
                <Avatar.Root $size="md">
                  <Avatar.Fallback $size="md">OL</Avatar.Fallback>
                </Avatar.Root>
                <Stack $spacing="4px">
                  <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.semibold}>calangoui</Text>
                  <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
                    Dark-first design system for React. Minimalist OLED aesthetics.
                  </Text>
                  <Flex $gap="12px" style={{ marginTop: '4px' }}>
                    <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
                      <strong style={{ color: theme.colors.foreground }}>40+</strong> components
                    </Text>
                    <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
                      <strong style={{ color: theme.colors.foreground }}>100%</strong> TypeScript
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
              <HoverCard.Arrow />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </DemoWithCode>

      <SubTitle>ScrollArea (Radix)</SubTitle>
      <DemoWithCode code={`<ScrollArea.Root style={{ maxHeight: '160px' }}>
  <ScrollArea.Viewport style={{ maxHeight: '160px' }}>
    {items.map((item) => <div key={item}>...</div>)}
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>`}>
        <ScrollArea.Root style={{ maxHeight: '160px' }}>
          <ScrollArea.Viewport style={{ maxHeight: '160px' }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} style={{ padding: '8px 0', borderBottom: `1px solid ${theme.colors.border}`, fontSize: theme.typography.fontSize.sm }}>
                Item {i + 1} — Scrollable content with custom themed scrollbar
              </div>
            ))}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </DemoWithCode>
    </Section>
  );
}
