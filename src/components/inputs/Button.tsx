import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import type { CalangoUITheme } from '../../theme/themes';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeMap = {
  sm: css`height: 32px; padding: 0 12px; font-size: 0.8125rem; gap: 6px;`,
  md: css`height: 40px; padding: 0 16px; font-size: 0.875rem; gap: 8px;`,
  lg: css`height: 48px; padding: 0 24px; font-size: 1rem; gap: 10px;`,
};

const variantMap = (t: CalangoUITheme) => ({
  solid: css`background: ${t.colors.primary}; color: ${t.colors.primaryForeground};
    &:hover:not(:disabled) { opacity: 0.9; }`,
  outline: css`background: transparent; color: ${t.colors.foreground}; border: 1px solid ${t.colors.border};
    &:hover:not(:disabled) { background: ${t.colors.accent}; }`,
  ghost: css`background: transparent; color: ${t.colors.foreground};
    &:hover:not(:disabled) { background: ${t.colors.accent}; }`,
  link: css`background: transparent; color: ${t.colors.foreground}; padding: 0; height: auto;
    text-decoration: underline; text-underline-offset: 4px;
    &:hover:not(:disabled) { opacity: 0.8; }`,
});

const StyledButton = styled.button<{ $v: ButtonVariant; $sz: ButtonSize; $loading?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  position: relative;

  ${({ $sz }) => sizeMap[$sz]}
  ${({ $v, theme }) => variantMap(theme)[$v]}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }

  ${({ $loading, theme }) =>
    $loading &&
    css`
      color: transparent;
      pointer-events: none;
      &::after {
        content: '';
        position: absolute;
        width: 16px; height: 16px;
        border: 2px solid ${theme.colors.mutedForeground};
        border-right-color: transparent;
        border-radius: 50%;
        animation: ${spin} 0.6s linear infinite;
      }
    `}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', size = 'md', loading, leftIcon, rightIcon, children, disabled, ...rest }, ref) => (
    <StyledButton ref={ref} $v={variant} $sz={size} $loading={loading} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  )
);
Button.displayName = 'Button';

export const IconButton = styled(StyledButton)`
  width: ${({ $sz }) => ($sz === 'sm' ? '32px' : $sz === 'lg' ? '48px' : '40px')};
  padding: 0;
`;
