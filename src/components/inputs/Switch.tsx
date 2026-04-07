
import * as RadixSwitch from '@radix-ui/react-switch';
import styled, { css } from 'styled-components';

export type SwitchSize = 'sm' | 'md';

const StyledRoot = styled(RadixSwitch.Root)<{ $size?: SwitchSize }>`
  all: unset;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;
  transition: background 0.2s ease;
  flex-shrink: 0;

  ${({ $size }) =>
    $size === 'sm'
      ? css`width: 36px; height: 20px;`
      : css`width: 44px; height: 24px;`}

  background: ${({ theme }) => theme.colors.input};
  &[data-state='checked'] { background: ${({ theme }) => theme.colors.primary}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;

const StyledThumb = styled(RadixSwitch.Thumb)<{ $size?: SwitchSize }>`
  display: block;
  border-radius: 50%;
  transition: transform 0.2s ease;
  background: ${({ theme }) => theme.colors.foreground};

  ${({ $size }) =>
    $size === 'sm'
      ? css`
          width: 16px; height: 16px;
          transform: translateX(2px);
          &[data-state='checked'] { transform: translateX(18px); background: ${({ theme }) => theme.colors.primaryForeground}; }
        `
      : css`
          width: 20px; height: 20px;
          transform: translateX(2px);
          &[data-state='checked'] { transform: translateX(22px); background: ${({ theme }) => theme.colors.primaryForeground}; }
        `}
`;

export interface SwitchProps extends RadixSwitch.SwitchProps {
  size?: SwitchSize;
}

export function Switch({ size = 'md', ...props }: SwitchProps) {
  return (
    <StyledRoot $size={size} {...props}>
      <StyledThumb $size={size} />
    </StyledRoot>
  );
}
