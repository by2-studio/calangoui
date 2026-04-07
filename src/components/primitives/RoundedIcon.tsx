import { forwardRef, type ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type RoundedIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type RoundedIconVariant = 'solid' | 'soft' | 'outline' | 'ghost';

export interface RoundedIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  size?: RoundedIconSize;
  variant?: RoundedIconVariant;
  color?: string;
  radius?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeMap: Record<RoundedIconSize, { box: number; icon: number }> = {
  xs: { box: 24, icon: 12 },
  sm: { box: 32, icon: 16 },
  md: { box: 40, icon: 20 },
  lg: { box: 48, icon: 24 },
  xl: { box: 56, icon: 28 },
  '2xl': { box: 72, icon: 36 },
};

const StyledRoundedIcon = styled.div<{
  $size: RoundedIconSize;
  $variant: RoundedIconVariant;
  $color?: string;
  $radius: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;

  ${({ $size }) => {
    const s = sizeMap[$size];
    return css`
      width: ${s.box}px;
      height: ${s.box}px;
      font-size: ${s.icon}px;
    `;
  }}

  border-radius: ${({ $radius, theme }) => {
    switch ($radius) {
      case 'sm': return theme.radii.sm;
      case 'md': return theme.radii.md;
      case 'lg': return theme.radii.lg;
      default: return theme.radii.full;
    }
  }};

  ${({ $variant, $color, theme }) => {
    const c = $color || theme.colors.primary;
    switch ($variant) {
      case 'solid':
        return css`
          background: ${c};
          color: ${theme.colors.primaryForeground};
        `;
      case 'soft':
        return css`
          background: ${c}18;
          color: ${c};
        `;
      case 'outline':
        return css`
          background: transparent;
          color: ${c};
          border: 1.5px solid ${c}44;
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${c};
        `;
    }
  }}

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const RoundedIcon = forwardRef<HTMLDivElement, RoundedIconProps>(
  ({ icon, size = 'md', variant = 'soft', color, radius = 'full', ...rest }, ref) => (
    <StyledRoundedIcon
      ref={ref}
      $size={size}
      $variant={variant}
      $color={color}
      $radius={radius}
      {...rest}
    >
      {icon}
    </StyledRoundedIcon>
  )
);
RoundedIcon.displayName = 'RoundedIcon';
