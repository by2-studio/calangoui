import { Table, Card, Avatar, Accordion, Tag, Button, Flex, Stack, Text, useTheme } from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function DataSection() {
  const { theme } = useTheme();

  return (
    <Section id="data">
      <SectionTitle>Data Display Components</SectionTitle>
      <SectionDesc>
        Table, Card, Avatar, Accordion e Tag. Com Radix UI.
      </SectionDesc>

      <SubTitle>Table</SubTitle>
      <DemoWithCode code={`<Table.Root $striped $hoverable>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Role</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice Johnson</Table.Cell>
      <Table.Cell><Tag colorScheme="success">Active</Tag></Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>`}>
        <Table.Root $striped $hoverable>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>Role</Table.Head>
              <Table.Head>Email</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {[
              { name: 'Alice Johnson', status: 'Active', role: 'Admin', email: 'alice@calangoui.dev' },
              { name: 'Bob Smith', status: 'Inactive', role: 'Editor', email: 'bob@calangoui.dev' },
              { name: 'Carol White', status: 'Active', role: 'Viewer', email: 'carol@calangoui.dev' },
              { name: 'Dave Brown', status: 'Active', role: 'Editor', email: 'dave@calangoui.dev' },
            ].map((row) => (
              <Table.Row key={row.name}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>
                  <Tag variant="soft" colorScheme={row.status === 'Active' ? 'success' : 'error'}>
                    {row.status}
                  </Tag>
                </Table.Cell>
                <Table.Cell>{row.role}</Table.Cell>
                <Table.Cell style={{ opacity: 0.6 }}>{row.email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </DemoWithCode>

      <SubTitle>Card</SubTitle>
      <DemoWithCode code={`<Card.Root $variant="elevated">
  <Card.Header>
    <Card.Title>Elevated Card</Card.Title>
    <Card.Description>With shadow elevation</Card.Description>
  </Card.Header>
  <Card.Content>
    <Text>This card has a subtle shadow for depth.</Text>
  </Card.Content>
  <Card.Footer>
    <Button size="sm">Action</Button>
    <Button size="sm" variant="outline">Cancel</Button>
  </Card.Footer>
</Card.Root>

<Card.Root $variant="outline">...</Card.Root>
<Card.Root $variant="filled" $interactive>...</Card.Root>`}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          <Card.Root $variant="elevated">
            <Card.Header>
              <Card.Title>Elevated Card</Card.Title>
              <Card.Description>With shadow elevation</Card.Description>
            </Card.Header>
            <Card.Content>
              <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
                This card has a subtle shadow for depth.
              </Text>
            </Card.Content>
            <Card.Footer>
              <Button size="sm">Action</Button>
              <Button size="sm" variant="outline">Cancel</Button>
            </Card.Footer>
          </Card.Root>

          <Card.Root $variant="outline">
            <Card.Header>
              <Card.Title>Outline Card</Card.Title>
              <Card.Description>Border only, no shadow</Card.Description>
            </Card.Header>
            <Card.Content>
              <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
                Clean and minimal with just a border.
              </Text>
            </Card.Content>
          </Card.Root>

          <Card.Root $variant="filled" $interactive>
            <Card.Header>
              <Card.Title>Interactive Card</Card.Title>
              <Card.Description>Hover for effect</Card.Description>
            </Card.Header>
            <Card.Content>
              <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
                This card responds to hover with a lift effect.
              </Text>
            </Card.Content>
          </Card.Root>
        </div>
      </DemoWithCode>

      <SubTitle>Avatar (Radix)</SubTitle>
      <DemoWithCode code={`<Avatar.Root $size="md">
  <Avatar.Image src="https://..." alt="avatar" />
  <Avatar.Fallback $size="md">JD</Avatar.Fallback>
</Avatar.Root>

// Sizes: xs, sm, md, lg, xl
// Shapes: circle (default), square`}>
        <Stack $spacing="16px">
          <Flex $gap="8px" $align="center">
            <Avatar.Root $size="xs"><Avatar.Fallback>A</Avatar.Fallback></Avatar.Root>
            <Avatar.Root $size="sm"><Avatar.Fallback>B</Avatar.Fallback></Avatar.Root>
            <Avatar.Root $size="md"><Avatar.Fallback $size="md">CD</Avatar.Fallback></Avatar.Root>
            <Avatar.Root $size="lg"><Avatar.Fallback $size="lg">EF</Avatar.Fallback></Avatar.Root>
            <Avatar.Root $size="xl"><Avatar.Fallback $size="xl">GH</Avatar.Fallback></Avatar.Root>
          </Flex>
          <Flex $gap="8px" $align="center">
            <Avatar.Root $size="md" $shape="square"><Avatar.Fallback $size="md">SQ</Avatar.Fallback></Avatar.Root>
            <Avatar.Root $size="md">
              <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=calangoui" alt="avatar" />
              <Avatar.Fallback $size="md">OL</Avatar.Fallback>
            </Avatar.Root>
          </Flex>
        </Stack>
      </DemoWithCode>

      <SubTitle>Accordion (Radix)</SubTitle>
      <DemoWithCode code={`<Accordion.Root type="single" defaultValue="item-0" collapsible>
  <Accordion.Item value="item-0">
    <Accordion.Header>
      <Accordion.Trigger>What is calangoui?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <Accordion.ContentInner>Answer here...</Accordion.ContentInner>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}>
        <Accordion.Root type="single" defaultValue="item-0" collapsible>
          {['What is calangoui?', 'Is it accessible?', 'Can I customize the theme?'].map((q, i) => (
            <Accordion.Item key={i} value={`item-${i}`}>
              <Accordion.Header>
                <Accordion.Trigger>{q}</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <Accordion.ContentInner>
                  {i === 0 && 'calangoui is a dark-first, minimalist React design system with OLED aesthetics. Built with styled-components and Radix UI.'}
                  {i === 1 && 'Yes! All interactive components are built on top of Radix UI primitives, which provide full WAI-ARIA compliance, keyboard navigation, and screen reader support.'}
                  {i === 2 && 'Absolutely. Use the createTheme function to override any token, or pass a custom theme to CalangoUIProvider.'}
                </Accordion.ContentInner>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </DemoWithCode>

      <SubTitle>Tag / Chip</SubTitle>
      <DemoWithCode code={`<Tag>Default</Tag>
<Tag colorScheme="success">Success</Tag>
<Tag variant="outline" colorScheme="info">Info</Tag>
<Tag variant="soft" colorScheme="warning">Warning</Tag>
<Tag variant="outline" closable onClose={() => {}}>Removable</Tag>`}>
        <Flex $gap="8px" $wrap="wrap">
          <Tag>Default</Tag>
          <Tag colorScheme="success">Success</Tag>
          <Tag variant="outline" colorScheme="info">Info</Tag>
          <Tag variant="soft" colorScheme="warning">Warning</Tag>
          <Tag variant="soft" colorScheme="error">Error</Tag>
          <Tag variant="outline">React</Tag>
          <Tag variant="outline">TypeScript</Tag>
          <Tag variant="outline" closable onClose={() => {}}>Removable</Tag>
        </Flex>
      </DemoWithCode>
    </Section>
  );
}
