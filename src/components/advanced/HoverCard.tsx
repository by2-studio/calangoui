
import * as RadixHoverCard from '@radix-ui/react-hover-card';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); }`;

const Content = styled(RadixHoverCard.Content)`
  z-index: ${({ theme }) => theme.zIndex.popover};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 16px;
  min-width: 280px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.2s ease;
`;

const Arrow = styled(RadixHoverCard.Arrow)`
  fill: ${({ theme }) => theme.colors.card};
`;

export const HoverCard = {
  Root: RadixHoverCard.Root,
  Trigger: RadixHoverCard.Trigger,
  Portal: RadixHoverCard.Portal,
  Content,
  Arrow,
};
