import styled from 'styled-components';
import { useTheme, Button } from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
`;

const ThemeToken = styled.div<{ $bg: string; $fg: string }>`
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $bg }) => $bg};
  color: ${({ $fg }) => $fg};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export function ThemeSection() {
  const { theme, isDark, toggleTheme } = useTheme();

  const semanticTokens = [
    { name: 'background', bg: theme.colors.background, fg: theme.colors.foreground },
    { name: 'foreground', bg: theme.colors.foreground, fg: theme.colors.background },
    { name: 'muted', bg: theme.colors.muted, fg: theme.colors.mutedForeground },
    { name: 'card', bg: theme.colors.card, fg: theme.colors.cardForeground },
    { name: 'primary', bg: theme.colors.primary, fg: theme.colors.primaryForeground },
    { name: 'secondary', bg: theme.colors.secondary, fg: theme.colors.secondaryForeground },
    { name: 'accent', bg: theme.colors.accent, fg: theme.colors.accentForeground },
    { name: 'destructive', bg: theme.colors.destructive, fg: theme.colors.destructiveForeground },
    { name: 'border', bg: theme.colors.border, fg: theme.colors.foreground },
    { name: 'input', bg: theme.colors.input, fg: theme.colors.foreground },
  ];

  return (
    <Section id="theme">
      <SectionTitle>Theme Engine</SectionTitle>
      <SectionDesc>
        Dark-first com suporte a light mode. CalangoUIProvider gerencia o tema,
        useTheme() da acesso e toggle.
      </SectionDesc>

      <DemoWithCode code={`import { CalangoUIProvider, useTheme } from 'calangoui';

// Wrap your app
<CalangoUIProvider>
  <App />
</CalangoUIProvider>

// Use in components
const { theme, isDark, toggleTheme } = useTheme();`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <Button variant="outline" onClick={toggleTheme}>
            {isDark ? 'Switch to Light' : 'Switch to Dark'}
          </Button>
          <span style={{ fontSize: '0.875rem', opacity: 0.6 }}>
            Current: <strong>{theme.name}</strong>
          </span>
        </div>

        <SubTitle>Semantic Tokens</SubTitle>
        <ThemeGrid>
          {semanticTokens.map((t) => (
            <ThemeToken key={t.name} $bg={t.bg} $fg={t.fg}>
              {t.name}
            </ThemeToken>
          ))}
        </ThemeGrid>
      </DemoWithCode>
    </Section>
  );
}
