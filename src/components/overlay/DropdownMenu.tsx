
import * as RadixDropdown from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); }`;

const Content = styled(RadixDropdown.Content)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.15s ease;
`;

const Item = styled(RadixDropdown.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &[data-disabled] { opacity: 0.5; pointer-events: none; }
`;

const CheckboxItem = styled(RadixDropdown.CheckboxItem)`
  padding: 8px 10px;
  padding-left: 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  position: relative;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;

const RadioItem = styled(RadixDropdown.RadioItem)`
  padding: 8px 10px;
  padding-left: 24px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  position: relative;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
`;

const Separator = styled(RadixDropdown.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;

const Label = styled(RadixDropdown.Label)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const SubContent = styled(RadixDropdown.SubContent)`
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  min-width: 160px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} 0.15s ease;
`;

const SubTrigger = styled(RadixDropdown.SubTrigger)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &::after { content: '›'; margin-left: 8px; }
`;

export const DropdownMenu = {
  Root: RadixDropdown.Root,
  Trigger: RadixDropdown.Trigger,
  Portal: RadixDropdown.Portal,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  RadioGroup: RadixDropdown.RadioGroup,
  ItemIndicator: RadixDropdown.ItemIndicator,
  Separator,
  Label,
  Group: RadixDropdown.Group,
  Sub: RadixDropdown.Sub,
  SubTrigger,
  SubContent,
};
