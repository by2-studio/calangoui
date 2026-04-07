
import * as RadixSeparator from '@radix-ui/react-separator';
import styled from 'styled-components';

export const Separator = styled(RadixSeparator.Root)`
  background: ${({ theme }) => theme.colors.border};
  &[data-orientation='horizontal'] { height: 1px; width: 100%; }
  &[data-orientation='vertical'] { width: 1px; height: 100%; }
`;
