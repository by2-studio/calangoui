
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); }`;

const Root = styled(RadixNavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const List = styled(RadixNavigationMenu.List)`
  display: flex;
  list-style: none;
  padding: 4px;
  margin: 0;
  gap: 2px;
`;

const Trigger = styled(RadixNavigationMenu.Trigger)`
  all: unset;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover { background: ${({ theme }) => theme.colors.accent}; }
  &[data-state='open'] { background: ${({ theme }) => theme.colors.accent}; }
`;

const NLink = styled(RadixNavigationMenu.Link)`
  all: unset;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;

const Content = styled(RadixNavigationMenu.Content)`
  position: absolute;
  top: 100%;
  left: 0;
  width: auto;
  min-width: 400px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.2s ease;
`;

const Viewport = styled(RadixNavigationMenu.Viewport)`
  position: relative;
  margin-top: 4px;
`;

export const NavigationMenu = {
  Root,
  List,
  Item: RadixNavigationMenu.Item,
  Trigger,
  Link: NLink,
  Content,
  Viewport,
  Indicator: RadixNavigationMenu.Indicator,
};
