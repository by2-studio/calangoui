
import * as RadixTooltip from '@radix-ui/react-tooltip';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const Content = styled(RadixTooltip.Content)`
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: 1;
  white-space: nowrap;
  animation: ${fadeIn} 0.1s ease;
  user-select: none;
`;

const Arrow = styled(RadixTooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.foreground};
`;

export const Tooltip = {
  Provider: RadixTooltip.Provider,
  Root: RadixTooltip.Root,
  Trigger: RadixTooltip.Trigger,
  Portal: RadixTooltip.Portal,
  Content,
  Arrow,
};
