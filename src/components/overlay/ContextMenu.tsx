
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const Content = styled(RadixContextMenu.Content)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.1s ease;
`;

const Item = styled(RadixContextMenu.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;

const Separator = styled(RadixContextMenu.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;

export const ContextMenu = {
  Root: RadixContextMenu.Root,
  Trigger: RadixContextMenu.Trigger,
  Portal: RadixContextMenu.Portal,
  Content,
  Item,
  Separator,
  Group: RadixContextMenu.Group,
  Label: RadixContextMenu.Label,
  Sub: RadixContextMenu.Sub,
  SubTrigger: RadixContextMenu.SubTrigger,
  SubContent: RadixContextMenu.SubContent,
};
