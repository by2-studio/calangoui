import React, { forwardRef, type ElementType } from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
  as?: ElementType;
  size?: string;
  weight?: number;
  color?: string;
  align?: string;
  truncate?: boolean;
  mono?: boolean;
  lineHeight?: string | number;
}

const StyledText = styled.span<{ $s: TextProps }>`
  font-size: ${({ $s }) => $s.size};
  font-weight: ${({ $s }) => $s.weight};
  color: ${({ $s }) => $s.color};
  text-align: ${({ $s }) => $s.align};
  line-height: ${({ $s }) => $s.lineHeight};
  font-family: ${({ $s, theme }) => ($s.mono ? theme.typography.fontFamily.mono : 'inherit')};
  ${({ $s }) =>
    $s.truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export const Text = forwardRef<HTMLSpanElement, TextProps & Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>>(
  ({ as, size, weight, color, align, truncate, mono, lineHeight, ...rest }, ref) => (
    <StyledText ref={ref} as={as} $s={{ size, weight, color, align, truncate, mono, lineHeight }} {...rest} />
  )
);
Text.displayName = 'Text';

export interface HeadingProps {
  as?: ElementType;
  size?: string;
  weight?: number;
  color?: string;
}

const StyledHeading = styled.h2<{ $s: HeadingProps }>`
  font-size: ${({ $s, theme }) => $s.size || theme.typography.fontSize['2xl']};
  font-weight: ${({ $s, theme }) => $s.weight || theme.typography.fontWeight.bold};
  color: ${({ $s }) => $s.color};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps & Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>>(
  ({ as, size, weight, color, ...rest }, ref) => (
    <StyledHeading ref={ref} as={as} $s={{ size, weight, color }} {...rest} />
  )
);
Heading.displayName = 'Heading';
