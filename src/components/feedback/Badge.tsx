import type React from 'react';
import { forwardRef } from 'react';
import styled, { css, useTheme } from 'styled-components';
import type { CalangoUITheme } from '../../theme/themes';

export type BadgeVariant = 'solid' | 'outline' | 'soft';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  colorScheme?: string;
  size?: BadgeSize;
  dot?: boolean;
}

function resolveColor(theme: CalangoUITheme, colorScheme?: string): string {
  if (!colorScheme) return theme.colors.foreground;
  const c = (theme.colors as any)[colorScheme];
  if (typeof c === 'object' && c !== null && 'DEFAULT' in c) return c.DEFAULT;
  if (typeof c === 'string') return c;
  return theme.colors.foreground;
}

const StyledBadge = styled.span<{ $v: BadgeVariant; $c: string; $sz: BadgeSize; $dot?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;

  ${({ $sz }) =>
    $sz === 'sm'
      ? css`padding: 1px 8px; font-size: 0.6875rem;`
      : css`padding: 2px 10px; font-size: 0.75rem;`}

  ${({ $v, $c, theme }) => {
    switch ($v) {
      case 'outline': return css`background: transparent; border: 1px solid ${$c}; color: ${$c};`;
      case 'soft': return css`background: ${$c}22; color: ${$c}; border: 1px solid transparent;`;
      default: return css`background: ${$c}; color: ${theme.colors.background}; border: 1px solid transparent;`;
    }
  }}

  ${({ $dot, $c }) =>
    $dot &&
    css`
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${$c};
      }
    `}
`;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'solid', colorScheme, size = 'md', dot, children, ...rest }, ref) => {
    const theme = useTheme() as CalangoUITheme;
    const color = resolveColor(theme, colorScheme);

    return (
      <StyledBadge ref={ref} $v={variant} $c={color} $sz={size} $dot={dot} {...rest}>
        {children}
      </StyledBadge>
    );
  }
);
Badge.displayName = 'Badge';
