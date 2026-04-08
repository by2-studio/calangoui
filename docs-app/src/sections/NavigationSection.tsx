import { useState } from 'react';
import { Tabs, Breadcrumb, Pagination, Sidebar, NavTopBar, Stack, Text, Button, useTheme } from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

export function NavigationSection() {
  const { theme } = useTheme();
  const [page, setPage] = useState(5);

  return (
    <Section id="navigation">
      <SectionTitle>Navigation Components</SectionTitle>
      <SectionDesc>
        Tabs, Breadcrumb, Pagination e Sidebar. Todos com Radix UI.
      </SectionDesc>

      <SubTitle>NavTopBar</SubTitle>
      <DemoWithCode code={`<NavTopBar
  logo={<span>MyApp</span>}
  links={[
    { label: 'Dashboard', active: true },
    { label: 'Analytics' },
    { label: 'Settings' },
  ]}
  actions={<Button size="sm" variant="outline">Sign in</Button>}
/>`}>
        <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radii.md, overflow: 'hidden' }}>
          <NavTopBar
            logo={<span style={{ fontWeight: 600 }}>MyApp</span>}
            links={[
              { label: 'Dashboard', active: true },
              { label: 'Analytics' },
              { label: 'Customers' },
              { label: 'Settings' },
            ]}
            actions={
              <>
                <Button size="sm" variant="ghost">Docs</Button>
                <Button size="sm" variant="outline">Sign in</Button>
              </>
            }
          />
        </div>
      </DemoWithCode>

      <SubTitle>NavTopBar — Sticky + Logo</SubTitle>
      <DemoWithCode code={`<NavTopBar
  sticky
  logo={<><LogoIcon /><span>calangoui</span></>}
  links={[{ label: 'Components' }, { label: 'Tokens' }]}
  actions={<Button size="sm">Get started</Button>}
/>`}>
        <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radii.md, overflow: 'hidden' }}>
          <NavTopBar
            sticky
            logo={
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: theme.colors.primary, display: 'inline-block' }} />
                <span>calangoui</span>
              </span>
            }
            links={[
              { label: 'Components' },
              { label: 'Tokens' },
              { label: 'For AI', active: true },
            ]}
            actions={<Button size="sm" variant="solid">Get started</Button>}
          />
        </div>
      </DemoWithCode>

      <SubTitle>Tabs (Radix)</SubTitle>
      <DemoWithCode code={`<Tabs.Root defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">Overview content</Tabs.Content>
  <Tabs.Content value="analytics">Analytics content</Tabs.Content>
  <Tabs.Content value="settings">Settings content</Tabs.Content>
</Tabs.Root>`}>
        <Tabs.Root defaultValue="overview">
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">
            <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
              This is the overview tab content. It shows a general summary of the data.
            </Text>
          </Tabs.Content>
          <Tabs.Content value="analytics">
            <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
              Analytics data and charts would appear here.
            </Text>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
              Configuration options for the dashboard.
            </Text>
          </Tabs.Content>
        </Tabs.Root>
      </DemoWithCode>

      <SubTitle>Breadcrumb</SubTitle>
      <DemoWithCode code={`<Breadcrumb.Root aria-label="Breadcrumb">
  <Breadcrumb.Item><Breadcrumb.Link href="#">Home</Breadcrumb.Link></Breadcrumb.Item>
  <Breadcrumb.Separator>/</Breadcrumb.Separator>
  <Breadcrumb.Item><Breadcrumb.Link href="#">Products</Breadcrumb.Link></Breadcrumb.Item>
  <Breadcrumb.Separator>/</Breadcrumb.Separator>
  <Breadcrumb.Item><Breadcrumb.Page aria-current="page">Electronics</Breadcrumb.Page></Breadcrumb.Item>
</Breadcrumb.Root>`}>
        <Stack $spacing="12px">
          <Breadcrumb.Root aria-label="Breadcrumb">
            <Breadcrumb.Item><Breadcrumb.Link href="#">Home</Breadcrumb.Link></Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item><Breadcrumb.Link href="#">Products</Breadcrumb.Link></Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item><Breadcrumb.Link href="#">Categories</Breadcrumb.Link></Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item><Breadcrumb.Page aria-current="page">Electronics</Breadcrumb.Page></Breadcrumb.Item>
          </Breadcrumb.Root>
        </Stack>
      </DemoWithCode>

      <SubTitle>Pagination</SubTitle>
      <DemoWithCode code={`<Pagination page={page} totalPages={20} onPageChange={setPage} />`}>
        <Stack $spacing="16px">
          <Pagination page={page} totalPages={20} onPageChange={setPage} />
          <Text size={theme.typography.fontSize.xs} color={theme.colors.mutedForeground}>
            Current page: {page}
          </Text>
        </Stack>
      </DemoWithCode>

      <SubTitle>Sidebar</SubTitle>
      <DemoWithCode code={`<Sidebar.Root>
  <Sidebar.Header>calangoui</Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Item $active>Dashboard</Sidebar.Item>
    <Sidebar.Item>Analytics</Sidebar.Item>
    <Sidebar.Item>Settings</Sidebar.Item>
  </Sidebar.Content>
</Sidebar.Root>`}>
        <div style={{ display: 'flex', height: '280px', border: `1px solid ${theme.colors.border}`, borderRadius: theme.radii.md, overflow: 'hidden' }}>
          <Sidebar.Root>
            <Sidebar.Header>calangoui</Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Item $active>Dashboard</Sidebar.Item>
              <Sidebar.Item>Analytics</Sidebar.Item>
              <Sidebar.Item>Customers</Sidebar.Item>
              <Sidebar.Item>Products</Sidebar.Item>
              <Sidebar.Item>Settings</Sidebar.Item>
            </Sidebar.Content>
          </Sidebar.Root>
          <div style={{ flex: 1, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text size={theme.typography.fontSize.sm} color={theme.colors.mutedForeground}>
              Main content area
            </Text>
          </div>
        </div>
      </DemoWithCode>
    </Section>
  );
}
