
import styled, { css, keyframes } from 'styled-components';

const indeterminate = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`;

export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps {
  value?: number;
  size?: ProgressSize;
  indeterminate?: boolean;
  color?: string;
}

const Track = styled.div<{ $sz: ProgressSize }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  ${({ $sz }) =>
    $sz === 'sm' ? css`height: 4px;` : $sz === 'lg' ? css`height: 12px;` : css`height: 8px;`}
`;

const Fill = styled.div<{ $value: number; $indeterminate?: boolean; $color?: string }>`
  height: 100%;
  border-radius: inherit;
  background: ${({ $color, theme }) => $color || theme.colors.primary};
  transition: width 0.3s ease;

  ${({ $indeterminate, $value }) =>
    $indeterminate
      ? css`width: 25%; animation: ${indeterminate} 1.5s ease infinite;`
      : css`width: ${$value}%;`}
`;

export function Progress({ value = 0, size = 'md', indeterminate: ind, color }: ProgressProps) {
  return (
    <Track $sz={size} role="progressbar" aria-valuenow={ind ? undefined : value} aria-valuemin={0} aria-valuemax={100}>
      <Fill $value={value} $indeterminate={ind} $color={color} />
    </Track>
  );
}
