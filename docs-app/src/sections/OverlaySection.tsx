import { useState } from 'react';
import {
  Button, Dialog, Drawer, Tooltip, Popover, DropdownMenu, Toast,
  Stack, Flex, Text, useTheme,
} from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function OverlaySection() {
  const { theme } = useTheme();
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <Section id="overlay">
      <SectionTitle>Overlay Components</SectionTitle>
      <SectionDesc>
        Dialog, Drawer, Tooltip, Popover, DropdownMenu e Toast. Todos baseados em Radix UI.
      </SectionDesc>

      <SubTitle>Dialog (Radix)</SubTitle>
      <DemoWithCode code={`<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>Delete item?</Dialog.Title>
      <Dialog.Description>This action cannot be undone.</Dialog.Description>
      <Dialog.Footer>
        <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
        <Dialog.Close asChild><Button>Confirm</Button></Dialog.Close>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Delete item?</Dialog.Title>
              <Dialog.Description>
                This action cannot be undone. This will permanently delete the item from your account.
              </Dialog.Description>
              <Dialog.Footer>
                <Dialog.Close asChild>
                  <Button variant="ghost">Cancel</Button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Button>Confirm</Button>
                </Dialog.Close>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </DemoWithCode>

      <SubTitle>Drawer (Radix)</SubTitle>
      <DemoWithCode code={`<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Drawer.Overlay />
    <Drawer.Content $side="right">
      <Drawer.Title>Settings</Drawer.Title>
      <Drawer.Close asChild><Button variant="outline">Close</Button></Drawer.Close>
    </Drawer.Content>
  </Dialog.Portal>
</Dialog.Root>`}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Drawer.Overlay />
            <Drawer.Content $side="right">
              <Drawer.Title>Settings</Drawer.Title>
              <Stack $spacing="12px">
                <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
                  Configure your preferences here. This panel slides in from the right side.
                </Text>
                <Drawer.Close asChild>
                  <Button variant="outline">Close</Button>
                </Drawer.Close>
              </Stack>
            </Drawer.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </DemoWithCode>

      <SubTitle>Tooltip (Radix)</SubTitle>
      <DemoWithCode code={`<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      <Button variant="outline">Hover me</Button>
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content side="top" sideOffset={4}>
        This is a tooltip!
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>`}>
        <Tooltip.Provider>
          <Flex $gap="16px">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button variant="outline">Hover me (top)</Button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side="top" sideOffset={4}>
                  This is a tooltip!
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button variant="ghost">Hover me (bottom)</Button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side="bottom" sideOffset={4}>
                  Bottom tooltip
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Flex>
        </Tooltip.Provider>
      </DemoWithCode>

      <SubTitle>Popover (Radix)</SubTitle>
      <DemoWithCode code={`<Popover.Root>
  <Popover.Trigger asChild>
    <Button variant="outline">Open Popover</Button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content sideOffset={4}>
      <Stack $spacing="8px">
        <Text weight={theme.typography.fontWeight.semibold}>Dimensions</Text>
        <Text>Set the dimensions for the layer.</Text>
      </Stack>
      <Popover.Arrow />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>`}>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="outline">Open Popover</Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content sideOffset={4}>
              <Stack $spacing="8px">
                <Text size={theme.typography.fontSize.sm} weight={theme.typography.fontWeight.semibold}>Dimensions</Text>
                <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
                  Set the dimensions for the layer.
                </Text>
                <Flex $gap="8px" style={{ marginTop: '8px' }}>
                  <Button size="sm" variant="outline">Width: 100%</Button>
                  <Button size="sm" variant="outline">Height: 25px</Button>
                </Flex>
              </Stack>
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </DemoWithCode>

      <SubTitle>Dropdown Menu (Radix)</SubTitle>
      <DemoWithCode code={`<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <Button variant="outline">Actions ▾</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content sideOffset={4}>
      <DropdownMenu.Item>Edit</DropdownMenu.Item>
      <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Delete</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>`}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="outline">Actions ▾</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content sideOffset={4}>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
              <DropdownMenu.Item>Archive</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item style={{ color: theme.colors.destructive }}>Delete</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </DemoWithCode>

      <SubTitle>Toast (Radix)</SubTitle>
      <DemoWithCode code={`<Toast.Provider>
  <Button variant="outline" onClick={() => setToastOpen(true)}>
    Show Toast
  </Button>
  <Toast.Root open={toastOpen} onOpenChange={setToastOpen} $variant="success">
    <Toast.Title>Saved successfully</Toast.Title>
    <Toast.Description>Your changes have been saved.</Toast.Description>
  </Toast.Root>
  <Toast.Viewport />
</Toast.Provider>`}>
        <Toast.Provider>
          <Button variant="outline" onClick={() => setToastOpen(true)}>
            Show Toast
          </Button>
          <Toast.Root open={toastOpen} onOpenChange={setToastOpen} $variant="success">
            <Toast.Title>Saved successfully</Toast.Title>
            <Toast.Description>Your changes have been saved.</Toast.Description>
          </Toast.Root>
          <Toast.Viewport />
        </Toast.Provider>
      </DemoWithCode>
    </Section>
  );
}
