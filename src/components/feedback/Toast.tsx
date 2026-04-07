
import * as RadixToast from '@radix-ui/react-toast';
import styled, { css, keyframes } from 'styled-components';
import type { CalangoUITheme } from '../../theme/themes';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
`;

function getVariantColor(theme: CalangoUITheme, variant: ToastVariant): string | null {
  if (variant === 'default') return null;
  const g = theme.colors[variant];
  return typeof g === 'object' && 'DEFAULT' in g ? g.DEFAULT : null;
}

const StyledViewport = styled(RadixToast.Viewport)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 420px;
  max-width: 90vw;
  z-index: ${({ theme }) => theme.zIndex.toast};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledRoot = styled(RadixToast.Root)<{ $variant?: ToastVariant }>`
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: 2px;

  &[data-state='open'] { animation: ${slideIn} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideOut} 0.2s ease; }

  ${({ $variant, theme }) => {
    if (!$variant || $variant === 'default') return '';
    const c = getVariantColor(theme, $variant);
    return c ? css`border-left: 3px solid ${c};` : '';
  }}
`;

const StyledTitle = styled(RadixToast.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
`;

const StyledDescription = styled(RadixToast.Description)`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const StyledAction = styled(RadixToast.Action)`
  all: unset;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-top: 8px;
  &:hover { text-decoration: underline; }
`;

const StyledClose = styled(RadixToast.Close)`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mutedForeground};
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;

export const Toast = {
  Provider: RadixToast.Provider,
  Viewport: StyledViewport,
  Root: StyledRoot,
  Title: StyledTitle,
  Description: StyledDescription,
  Action: StyledAction,
  Close: StyledClose,
};
