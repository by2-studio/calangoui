import type React from 'react';
import { forwardRef } from 'react';
import styled, { css, useTheme } from 'styled-components';
import type { CalangoUITheme } from '../../theme/themes';

export type TagVariant = 'solid' | 'outline' | 'soft';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  colorScheme?: string;
  size?: 'sm' | 'md';
  closable?: boolean;
  onClose?: () => void;
}

function resolveColor(theme: CalangoUITheme, cs?: string): string {
  if (!cs) return theme.colors.foreground;
  const c = (theme.colors as any)[cs];
  if (typeof c === 'object' && c !== null && 'DEFAULT' in c) return c.DEFAULT;
  if (typeof c === 'string') return c;
  return theme.colors.foreground;
}

const StyledTag = styled.span<{ $v: TagVariant; $c: string; $sz: string }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: default;

  ${({ $sz }) =>
    $sz === 'sm'
      ? css`padding: 1px 8px; font-size: 0.6875rem;`
      : css`padding: 3px 10px; font-size: 0.75rem;`}

  ${({ $v, $c, theme }) => {
    switch ($v) {
      case 'outline': return css`background: transparent; border: 1px solid ${$c}; color: ${$c};`;
      case 'soft': return css`background: ${$c}22; color: ${$c}; border: 1px solid transparent;`;
      default: return css`background: ${$c}; color: ${theme.colors.background}; border: 1px solid transparent;`;
    }
  }}
`;

const CloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: 2px;
  opacity: 0.7;
  font-size: 0.8em;
  &:hover { opacity: 1; }
`;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = 'solid', colorScheme, size = 'md', closable, onClose, children, ...rest }, ref) => {
    const theme = useTheme() as CalangoUITheme;
    const color = resolveColor(theme, colorScheme);

    return (
      <StyledTag ref={ref} $v={variant} $c={color} $sz={size} {...rest}>
        {children}
        {closable && <CloseBtn onClick={onClose} aria-label="Remove">×</CloseBtn>}
      </StyledTag>
    );
  }
);
Tag.displayName = 'Tag';
