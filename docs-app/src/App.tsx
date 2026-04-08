import { useState, type ReactNode } from 'react';
import styled from 'styled-components';
import { CalangoUIProvider, useTheme, Button } from 'calangoui';
import { TokensSection } from './sections/TokensSection';
import { ThemeSection } from './sections/ThemeSection';
import { PrimitivesSection } from './sections/PrimitivesSection';
import { InputsSection } from './sections/InputsSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { OverlaySection } from './sections/OverlaySection';
import { NavigationSection } from './sections/NavigationSection';
import { DataSection } from './sections/DataSection';
import { AdvancedSection } from './sections/AdvancedSection';
import { IconsSection } from './sections/IconsSection';
import { ChartsSection } from './sections/ChartsSection';
import { LlmPage } from './sections/LlmPage';
import { DocsCommandPalette } from './components/DocsCommandPalette';
import { SearchBar } from 'calangoui';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Nav = styled.nav`
  width: 220px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.card};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px 0;
  overflow-y: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

const NavLogo = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 8px;
  cursor: pointer;
`;

const LogoText = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: -0.02em;
`;

const LogoSub = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 2px;
`;

const NavGroup = styled.div`
  padding: 4px 0;
`;

const NavGroupLabel = styled.div`
  padding: 16px 20px 6px;
  font-size: 9px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.info.DEFAULT};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const NavItem = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ $active, theme }) => ($active ? theme.colors.foreground : theme.colors.mutedForeground)};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  background: ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  font-weight: ${({ $active, theme }) => ($active ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal)};
  border: none;
  text-align: left;
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const NavSpacer = styled.div`
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  margin-left: 220px;
  padding: 40px 48px;
  max-width: 920px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 16px;
`;

const HeroDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
  max-width: 560px;
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.mutedForeground};
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-bottom: 20px;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 32px;
`;

const StatItem = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 4px;
`;

interface NavSection {
  id: string;
  label: string;
  group: string;
}

const navSections: NavSection[] = [
  { id: 'home', label: 'Overview', group: 'Getting Started' },
  { id: 'tokens', label: 'Design Tokens', group: 'Getting Started' },
  { id: 'theme', label: 'Theme Engine', group: 'Getting Started' },
  { id: 'llm', label: '✦ MCP Server', group: 'Getting Started' },
  { id: 'primitives', label: 'Primitives', group: 'Components' },
  { id: 'inputs', label: 'Inputs', group: 'Components' },
  { id: 'feedback', label: 'Feedback', group: 'Components' },
  { id: 'overlay', label: 'Overlay', group: 'Components' },
  { id: 'navigation', label: 'Navigation', group: 'Components' },
  { id: 'data', label: 'Data Display', group: 'Components' },
  { id: 'charts', label: 'Charts', group: 'Components' },
  { id: 'icons', label: 'Icons', group: 'Components' },
  { id: 'advanced', label: 'Advanced', group: 'Components' },
];

const sectionComponents: Record<string, ReactNode> = {
  tokens: <TokensSection />,
  theme: <ThemeSection />,
  primitives: <PrimitivesSection />,
  inputs: <InputsSection />,
  feedback: <FeedbackSection />,
  overlay: <OverlaySection />,
  navigation: <NavigationSection />,
  data: <DataSection />,
  charts: <ChartsSection />,
  icons: <IconsSection />,
  advanced: <AdvancedSection />,
};

function HomePage({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div>
      <HeroBadge>v0.1.0 — AI First Design System</HeroBadge>
      <HeroTitle>calangoui</HeroTitle>
      <HeroDesc>
        A React design system built for the AI era. Every component ships with a machine-readable spec,
        making it trivial for LLMs to generate correct, on-brand UI from natural language.
        Built with styled-components, Radix UI, and TypeScript — with a native MCP server so any AI agent
        can query components, tokens and examples directly.
      </HeroDesc>
      <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="solid" size="sm">npm i @by2-ai/calangoui</Button>
        <a href="https://github.com/by2-studio/calangoui" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="outline" size="sm">GitHub</Button></a>
        <Button
          variant="solid"
          size="sm"
          onClick={() => onNavigate('llm')}
          style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', border: 'none', gap: '6px' }}
        >
          ✦ For AI
        </Button>
      </div>
      <StatGrid>
        <StatItem>
          <StatNumber>40+</StatNumber>
          <StatLabel>Components</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>200+</StatNumber>
          <StatLabel>Icons</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>6</StatNumber>
          <StatLabel>Chart Types</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>100%</StatNumber>
          <StatLabel>TypeScript</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>A11y</StatNumber>
          <StatLabel>Radix UI</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>MCP</StatNumber>
          <StatLabel>AI Native</StatLabel>
        </StatItem>
      </StatGrid>
    </div>
  );
}

function DocsContent() {
  const { theme, isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const [paletteOpen, setPaletteOpen] = useState(false);
  const groups = [...new Set(navSections.map(s => s.group))];

  return (
    <Layout>
      <DocsCommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onNavigate={(section) => { setActiveSection(section); setPaletteOpen(false); }}
      />
      <Nav>
        <NavLogo onClick={() => setActiveSection('home')}>
          <LogoText>calangoui</LogoText>
          <LogoSub>AI First Design System</LogoSub>
        </NavLogo>
        <div style={{ padding: '0 12px 12px' }}>
          <SearchBar
            placeholder="Search..."
            shortcut="⌘K"
            size="sm"
            readOnly
            onClick={() => setPaletteOpen(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {groups.map(group => (
          <NavGroup key={group}>
            <NavGroupLabel>{group}</NavGroupLabel>
            {navSections.filter(s => s.group === group).map(s => (
              <NavItem
                key={s.id}
                $active={activeSection === s.id}
                onClick={() => setActiveSection(s.id)}
              >
                {s.label}
              </NavItem>
            ))}
          </NavGroup>
        ))}
        <NavSpacer />
        <div style={{ padding: '8px 16px', borderTop: `1px solid ${theme.colors.border}`, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveSection('llm')}
            style={{ width: '100%', justifyContent: 'center', gap: '6px', color: theme.colors.info.DEFAULT, borderColor: `${theme.colors.info.DEFAULT}44` }}
          >
            ✦ For AI
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
          >
            {isDark ? '☀ Switch to Light' : '🌙 Switch to Dark'}
          </Button>
        </div>
      </Nav>
      <Main>
        {activeSection === 'llm'
          ? <LlmPage />
          : activeSection === 'home'
            ? <HomePage onNavigate={setActiveSection} />
            : sectionComponents[activeSection]}
      </Main>
    </Layout>
  );
}

export default function App() {
  return (
    <CalangoUIProvider>
      <DocsContent />
    </CalangoUIProvider>
  );
}
