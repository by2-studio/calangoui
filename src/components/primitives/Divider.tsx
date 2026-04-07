import styled from 'styled-components';

export interface DividerProps {
  $orientation?: 'horizontal' | 'vertical';
  $color?: string;
}

export const Divider = styled.hr<DividerProps>`
  border: none;
  background: ${({ $color, theme }) => $color || theme.colors.border};
  ${({ $orientation }) =>
    $orientation === 'vertical'
      ? `width: 1px; height: 100%; min-height: 20px;`
      : `height: 1px; width: 100%;`}
`;
