import styled from 'styled-components';

export interface FlexProps {
  $direction?: string;
  $align?: string;
  $justify?: string;
  $wrap?: string;
  $gap?: string;
  $inline?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ $direction }) => $direction || 'row'};
  align-items: ${({ $align }) => $align || 'stretch'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  gap: ${({ $gap }) => $gap || '0'};
`;

export interface StackProps {
  $spacing?: string;
  $align?: string;
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $spacing }) => $spacing || '0'};
  align-items: ${({ $align }) => $align};
`;

export interface GridProps {
  $columns?: number | string;
  $rows?: string;
  $gap?: string;
  $areas?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    typeof $columns === 'number' ? `repeat(${$columns}, 1fr)` : $columns || '1fr'};
  grid-template-rows: ${({ $rows }) => $rows};
  gap: ${({ $gap }) => $gap || '0'};
  grid-template-areas: ${({ $areas }) => $areas};
`;
