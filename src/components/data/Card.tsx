import styled, { css } from 'styled-components';

export type CardVariant = 'elevated' | 'outline' | 'filled';

const Root = styled.div<{ $variant?: CardVariant; $interactive?: boolean }>`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  transition: all 0.2s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'filled': return css`background: ${theme.colors.muted}; border: 1px solid transparent;`;
      case 'outline': return css`background: ${theme.colors.card}; border: 1px solid ${theme.colors.border};`;
      default: return css`background: ${theme.colors.card}; border: 1px solid ${theme.colors.border}; box-shadow: ${theme.shadows.md};`;
    }
  }}

  ${({ $interactive, theme }) =>
    $interactive &&
    css`
      cursor: pointer;
      &:hover { transform: translateY(-2px); box-shadow: ${theme.shadows.lg}; }
    `}
`;

const Header = styled.div`padding: 20px 20px 0;`;
const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
`;
const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 4px;
`;
const Content = styled.div`padding: 20px;`;
const Footer = styled.div`
  padding: 0 20px 20px;
  display: flex;
  gap: 8px;
`;

export const Card = { Root, Header, Title, Description, Content, Footer };
