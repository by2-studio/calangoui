import type React from 'react';
import { forwardRef, type SVGAttributes } from 'react';
import styled from 'styled-components';

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: React.ComponentType<SVGAttributes<SVGElement>>;
  size?: number | string;
  color?: string;
}

const IconWrapper = styled.span<{ $size?: number | string; $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size || '20px')};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size || '20px')};
  color: ${({ $color }) => $color || 'currentColor'};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ icon: IconComponent, size, color, ...rest }, ref) => (
    <IconWrapper ref={ref} $size={size} $color={color}>
      <IconComponent {...rest} />
    </IconWrapper>
  )
);
Icon.displayName = 'Icon';
