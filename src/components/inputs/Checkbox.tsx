import { forwardRef } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';

const StyledRoot = styled(RadixCheckbox.Root)`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;

  &[data-state='checked'], &[data-state='indeterminate'] {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;

const StyledIndicator = styled(RadixCheckbox.Indicator)`
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => (
    <StyledRoot ref={ref} {...props}>
      <StyledIndicator>
        {props.checked === 'indeterminate' ? '−' : '✓'}
      </StyledIndicator>
    </StyledRoot>
  )
);
Checkbox.displayName = 'Checkbox';
