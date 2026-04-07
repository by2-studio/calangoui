
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

const StyledRoot = styled(RadixRadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledItem = styled(RadixRadioGroup.Item)`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: border-color 0.15s ease;

  &[data-state='checked'] { border-color: ${({ theme }) => theme.colors.primary}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;

const StyledIndicator = styled(RadixRadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const RadioGroup = {
  Root: StyledRoot,
  Item: StyledItem,
  Indicator: StyledIndicator,
};
