import type React from 'react';
import { forwardRef, type ElementType } from 'react';
import styled from 'styled-components';

export interface BoxProps {
  as?: ElementType;
  p?: string;
  px?: string;
  py?: string;
  pt?: string;
  pb?: string;
  m?: string;
  mx?: string;
  my?: string;
  bg?: string;
  color?: string;
  radius?: string;
  shadow?: string;
  border?: string;
  w?: string;
  h?: string;
  minW?: string;
  minH?: string;
  maxW?: string;
  display?: string;
  overflow?: string;
}

const StyledBox = styled.div<{ $styles: BoxProps }>`
  padding: ${({ $styles }) => $styles.p};
  padding-inline: ${({ $styles }) => $styles.px};
  padding-block: ${({ $styles }) => $styles.py};
  padding-top: ${({ $styles }) => $styles.pt};
  padding-bottom: ${({ $styles }) => $styles.pb};
  margin: ${({ $styles }) => $styles.m};
  margin-inline: ${({ $styles }) => $styles.mx};
  margin-block: ${({ $styles }) => $styles.my};
  background: ${({ $styles }) => $styles.bg};
  color: ${({ $styles }) => $styles.color};
  border-radius: ${({ $styles }) => $styles.radius};
  box-shadow: ${({ $styles }) => $styles.shadow};
  border: ${({ $styles }) => $styles.border};
  width: ${({ $styles }) => $styles.w};
  height: ${({ $styles }) => $styles.h};
  min-width: ${({ $styles }) => $styles.minW};
  min-height: ${({ $styles }) => $styles.minH};
  max-width: ${({ $styles }) => $styles.maxW};
  display: ${({ $styles }) => $styles.display};
  overflow: ${({ $styles }) => $styles.overflow};
`;

export const Box = forwardRef<HTMLDivElement, BoxProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>>(
  ({ as, p, px, py, pt, pb, m, mx, my, bg, color, radius, shadow, border, w, h, minW, minH, maxW, display, overflow, ...rest }, ref) => (
    <StyledBox
      ref={ref}
      as={as}
      $styles={{ p, px, py, pt, pb, m, mx, my, bg, color, radius, shadow, border, w, h, minW, minH, maxW, display, overflow }}
      {...rest}
    />
  )
);
Box.displayName = 'Box';
