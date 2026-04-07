
import * as RadixDialog from '@radix-ui/react-dialog';
import styled, { keyframes, css } from 'styled-components';

export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const slideAnimations: Record<DrawerSide, ReturnType<typeof keyframes>> = {
  right: keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`,
  left: keyframes`from { transform: translateX(-100%); } to { transform: translateX(0); }`,
  top: keyframes`from { transform: translateY(-100%); } to { transform: translateY(0); }`,
  bottom: keyframes`from { transform: translateY(100%); } to { transform: translateY(0); }`,
};

const Overlay = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn} 0.15s ease;
`;

const Content = styled(RadixDialog.Content)<{ $side: DrawerSide }>`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.card};
  padding: 24px;
  overflow-y: auto;
  outline: none;

  ${({ $side, theme }) => {
    const isHorizontal = $side === 'left' || $side === 'right';
    return css`
      ${$side === 'top' ? 'top: 0; left: 0; right: 0;' : ''}
      ${$side === 'bottom' ? 'bottom: 0; left: 0; right: 0;' : ''}
      ${$side === 'left' ? 'top: 0; left: 0; bottom: 0;' : ''}
      ${$side === 'right' ? 'top: 0; right: 0; bottom: 0;' : ''}
      ${isHorizontal ? 'width: 360px; max-width: 90vw; height: 100%;' : 'height: 360px; max-height: 90vh; width: 100%;'}
      border-${$side === 'right' ? 'left' : $side === 'left' ? 'right' : $side === 'top' ? 'bottom' : 'top'}: 1px solid ${theme.colors.border};
      animation: ${slideAnimations[$side]} 0.2s ease;
    `;
  }}
`;

const Title = styled(RadixDialog.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 16px;
`;

const Close = styled(RadixDialog.Close)`
  all: unset;
  cursor: pointer;
`;

export const Drawer = {
  Root: RadixDialog.Root,
  Trigger: RadixDialog.Trigger,
  Portal: RadixDialog.Portal,
  Overlay,
  Content,
  Title,
  Close,
};
