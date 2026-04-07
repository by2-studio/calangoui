
import * as RadixPopover from '@radix-ui/react-popover';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`;

const Content = styled(RadixPopover.Content)`
  z-index: ${({ theme }) => theme.zIndex.popover};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  min-width: 200px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.15s ease;
  outline: none;
`;

const Arrow = styled(RadixPopover.Arrow)`
  fill: ${({ theme }) => theme.colors.card};
`;

export const Popover = {
  Root: RadixPopover.Root,
  Trigger: RadixPopover.Trigger,
  Anchor: RadixPopover.Anchor,
  Portal: RadixPopover.Portal,
  Content,
  Arrow,
  Close: RadixPopover.Close,
};
