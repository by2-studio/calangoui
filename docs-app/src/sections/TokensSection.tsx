import styled from 'styled-components';
import { colors, typography, spacing, radii } from 'calangoui';
import { Section, SectionTitle, SectionDesc, SubTitle, DemoWithCode } from './DocSection';

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;
`;

const ColorSwatch = styled.div<{ $color: string; $name: string }>`
  background: ${({ $color }) => $color};
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4px;
  &::after {
    content: '${({ $color }) => $color}';
    font-size: 8px;
    font-family: monospace;
    color: ${({ $color }) => {
      const r = parseInt($color.slice(1, 3), 16);
      const g = parseInt($color.slice(3, 5), 16);
      const b = parseInt($color.slice(5, 7), 16);
      return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000' : '#fff';
    }};
    opacity: 0.8;
  }
`;

const SwatchName = styled.span<{ $color: string }>`
  font-size: 8px;
  font-family: monospace;
  font-weight: 600;
  color: ${({ $color }) => {
    const r = parseInt($color.slice(1, 3), 16);
    const g = parseInt($color.slice(3, 5), 16);
    const b = parseInt($color.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 128 ? '#000' : '#fff';
  }};
  opacity: 0.9;
  line-height: 1.2;
`;

const SpacingBar = styled.div<{ $w: string }>`
  width: ${({ $w }) => $w};
  height: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.sm};
  min-width: 2px;
`;

const RadiusBox = styled.div<{ $r: string }>`
  width: 60px;
  height: 60px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ $r }) => $r};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const TypeRow = styled.div<{ $size: string }>`
  font-size: ${({ $size }) => $size};
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export function TokensSection() {
  return (
    <Section id="tokens">
      <SectionTitle>Design Tokens</SectionTitle>
      <SectionDesc>
        A fundacao do calangoui. Tokens definem cores, tipografia, espacamento e mais.
        Tudo tipado em TypeScript.
      </SectionDesc>

      <SubTitle>Colors — B&W + Gray Scale</SubTitle>
      <DemoWithCode code={`import { colors } from 'calangoui';

colors.black       // '${colors.black}'
colors.white       // '${colors.white}'
colors.gray[50]    // '${colors.gray[50]}'
colors.gray[100]   // '${colors.gray[100]}'
colors.gray[800]   // '${colors.gray[800]}'`}>
        <ColorGrid>
          <ColorSwatch $color={colors.black} $name="black">
            <SwatchName $color={colors.black}>black</SwatchName>
          </ColorSwatch>
          <ColorSwatch $color={colors.white} $name="white">
            <SwatchName $color={colors.white}>white</SwatchName>
          </ColorSwatch>
          {Object.entries(colors.gray).map(([k, v]) => (
            <ColorSwatch key={k} $color={v} $name={`gray.${k}`}>
              <SwatchName $color={v}>gray.{k}</SwatchName>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </DemoWithCode>

      <SubTitle>Colors — Semantic</SubTitle>
      <DemoWithCode code={`import { colors } from 'calangoui';

colors.success.DEFAULT  // '${colors.success.DEFAULT}'
colors.success.light    // '${colors.success.light}'
colors.error.DEFAULT    // '${colors.error.DEFAULT}'
colors.warning.dark     // '${colors.warning.dark}'
colors.info.DEFAULT     // '${colors.info.DEFAULT}'`}>
        <ColorGrid>
          {(['success', 'error', 'warning', 'info'] as const).map((name) =>
            (['light', 'DEFAULT', 'dark'] as const).map((variant) => (
              <ColorSwatch key={`${name}-${variant}`} $color={colors[name][variant]} $name={`${name}.${variant}`}>
                <SwatchName $color={colors[name][variant]}>{name}.{variant}</SwatchName>
              </ColorSwatch>
            ))
          )}
        </ColorGrid>
      </DemoWithCode>

      <SubTitle>Typography — Geist Sans</SubTitle>
      <DemoWithCode code={`import { typography } from 'calangoui';

typography.fontFamily.sans   // 'Geist Sans, ...'
typography.fontSize.lg       // '1.125rem'
typography.fontWeight.bold   // 700`}>
        {Object.entries(typography.fontSize).map(([key, val]) => (
          <TypeRow key={key} $size={val}>
            {key} — {val} — The quick brown fox jumps over the lazy dog
          </TypeRow>
        ))}
      </DemoWithCode>

      <SubTitle>Spacing — Base 4px</SubTitle>
      <DemoWithCode code={`import { spacing } from 'calangoui';

spacing[1]   // '4px'
spacing[2]   // '8px'
spacing[4]   // '16px'
spacing[8]   // '32px'`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {Object.entries(spacing).slice(1, 12).map(([key, val]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', fontSize: '12px', fontFamily: 'monospace', opacity: 0.6 }}>{key}</span>
              <SpacingBar $w={val} />
              <span style={{ fontSize: '11px', fontFamily: 'monospace', opacity: 0.4 }}>{val}</span>
            </div>
          ))}
        </div>
      </DemoWithCode>

      <SubTitle>Border Radius</SubTitle>
      <DemoWithCode code={`import { radii } from 'calangoui';

radii.sm    // '${radii.sm}'
radii.md    // '${radii.md}'
radii.lg    // '${radii.lg}'
radii.full  // '${radii.full}'`}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Object.entries(radii).map(([key, val]) => (
            <RadiusBox key={key} $r={val}>{key}</RadiusBox>
          ))}
        </div>
      </DemoWithCode>
    </Section>
  );
}
