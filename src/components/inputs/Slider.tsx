
import * as RadixSlider from '@radix-ui/react-slider';
import styled from 'styled-components';

const StyledRoot = styled(RadixSlider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  touch-action: none;
  user-select: none;
`;

const StyledTrack = styled(RadixSlider.Track)`
  background: ${({ theme }) => theme.colors.input};
  position: relative;
  flex-grow: 1;
  height: 6px;
  border-radius: ${({ theme }) => theme.radii.full};
`;

const StyledRange = styled(RadixSlider.Range)`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  border-radius: inherit;
`;

const StyledThumb = styled(RadixSlider.Thumb)`
  display: block;
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: box-shadow 0.15s ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.ring};
  }
`;

export interface SliderProps extends RadixSlider.SliderProps {}

export function Slider(props: SliderProps) {
  return (
    <StyledRoot {...props}>
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      {(props.defaultValue || props.value || [0]).map((_, i) => (
        <StyledThumb key={i} />
      ))}
    </StyledRoot>
  );
}
