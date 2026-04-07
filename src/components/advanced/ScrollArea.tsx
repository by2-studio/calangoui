
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import styled from 'styled-components';

const Root = styled(RadixScrollArea.Root)`
  overflow: hidden;
`;

const Viewport = styled(RadixScrollArea.Viewport)`
  width: 100%;
  height: 100%;
`;

const Scrollbar = styled(RadixScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  transition: background 0.15s ease;

  &[data-orientation='vertical'] { width: 8px; }
  &[data-orientation='horizontal'] { flex-direction: column; height: 8px; }

  &:hover { background: ${({ theme }) => theme.colors.muted}; }
`;

const Thumb = styled(RadixScrollArea.Thumb)`
  flex: 1;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;

const Corner = styled(RadixScrollArea.Corner)`
  background: ${({ theme }) => theme.colors.muted};
`;

export const ScrollArea = { Root, Viewport, Scrollbar, Thumb, Corner };
