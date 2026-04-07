
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-collapsible-content-height); }
`;

const slideUp = keyframes`
  from { height: var(--radix-collapsible-content-height); }
  to { height: 0; }
`;

const Content = styled(RadixCollapsible.Content)`
  overflow: hidden;
  &[data-state='open'] { animation: ${slideDown} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideUp} 0.3s ease; }
`;

export const Collapsible = {
  Root: RadixCollapsible.Root,
  Trigger: RadixCollapsible.Trigger,
  Content,
};
