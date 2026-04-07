
import styled from 'styled-components';

const Root = styled.aside<{ $collapsed?: boolean; $width?: string }>`
  width: ${({ $collapsed, $width }) => ($collapsed ? '60px' : $width || '240px')};
  background: ${({ theme }) => theme.colors.card};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: width 0.2s ease;
  overflow: hidden;
  flex-shrink: 0;
`;

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const SContent = styled.div`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`;

const Footer = styled.div`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Item = styled.div<{ $active?: boolean }>`
  padding: 10px 16px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ $active, theme }) => ($active ? theme.colors.foreground : theme.colors.mutedForeground)};
  background: ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const Group = styled.div`
  &:not(:first-child) { margin-top: 8px; }
`;

const GroupLabel = styled.div`
  padding: 4px 16px 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Sidebar = {
  Root,
  Header,
  Content: SContent,
  Footer,
  Item,
  Group,
  GroupLabel,
};
