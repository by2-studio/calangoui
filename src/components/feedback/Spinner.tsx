import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
}

export const Spinner = styled.div<{ $size?: SpinnerSize; $color?: string }>`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.muted};
  border-top-color: ${({ $color, theme }) => $color || theme.colors.primary};
  animation: ${spin} 0.6s linear infinite;

  ${({ $size }) => {
    const s = $size === 'sm' ? 16 : $size === 'lg' ? 32 : $size === 'xl' ? 48 : 24;
    return css`width: ${s}px; height: ${s}px;`;
  }}
`;
