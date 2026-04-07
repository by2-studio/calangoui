import styled from 'styled-components';
import { useState, type ReactNode } from 'react';

const Section = styled.section`
  margin-bottom: 56px;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;

const SectionDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 24px;
  max-width: 600px;
  line-height: 1.6;
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 12px;
  margin-top: 28px;
`;

const DemoBox = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.card};
  margin-bottom: 16px;
`;

const CodeBlock = styled.pre`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.muted};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  overflow-x: auto;
  line-height: 1.6;
  margin-bottom: 16px;
`;

/* ── DemoWithCode ─────────────────────────────────────────────── */

const DemoWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const DemoContent = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.card};
`;

const ToggleCodeBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.mutedForeground};
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  line-height: 1.4;
  transition: color 0.15s ease, border-color 0.15s ease;
  z-index: 1;
  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    border-color: ${({ theme }) => theme.colors.foreground};
  }
`;

const CollapsibleCode = styled.pre`
  margin-top: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.muted};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  overflow-x: auto;
  line-height: 1.6;
`;

interface DemoWithCodeProps {
  children: ReactNode;
  code: string;
}

function DemoWithCode({ children, code }: DemoWithCodeProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <DemoWrapper>
      <DemoContent>{children}</DemoContent>
      <ToggleCodeBtn onClick={() => setShowCode((v) => !v)}>
        {showCode ? 'Hide' : '</>'}
      </ToggleCodeBtn>
      {showCode && <CollapsibleCode>{code}</CollapsibleCode>}
    </DemoWrapper>
  );
}

export { Section, SectionTitle, SectionDesc, SubTitle, DemoBox, CodeBlock, DemoWithCode };
