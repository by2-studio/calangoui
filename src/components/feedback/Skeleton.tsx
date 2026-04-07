import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export interface SkeletonProps {
  $w?: string | number;
  $h?: string | number;
  $radius?: string;
  $animate?: boolean;
}

export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ $w }) => (typeof $w === 'number' ? `${$w}px` : $w || '100%')};
  height: ${({ $h }) => (typeof $h === 'number' ? `${$h}px` : $h || '20px')};
  border-radius: ${({ $radius, theme }) => $radius || theme.radii.md};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.muted} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.muted} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease infinite;
`;
