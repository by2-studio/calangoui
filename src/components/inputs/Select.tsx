
import * as RadixSelect from '@radix-ui/react-select';
import styled from 'styled-components';

const SelectTrigger = styled(RadixSelect.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  outline: none;
  gap: 8px;

  &:focus { border-color: ${({ theme }) => theme.colors.ring}; box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33; }
  &[data-placeholder] { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &[data-disabled] { opacity: 0.5; cursor: not-allowed; }
`;

const SelectContent = styled(RadixSelect.Content)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndex.popover};
  min-width: var(--radix-select-trigger-width);
  overflow: hidden;
`;

const SelectItem = styled(RadixSelect.Item)`
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  outline: none;

  &[data-highlighted] { background: ${({ theme }) => theme.colors.accent}; }
  &[data-disabled] { opacity: 0.5; pointer-events: none; }
`;

const SelectGroupLabel = styled(RadixSelect.Label)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const SelectSeparator = styled(RadixSelect.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 4px 0;
`;

export const Select = {
  Root: RadixSelect.Root,
  Trigger: SelectTrigger,
  Value: RadixSelect.Value,
  Icon: RadixSelect.Icon,
  Portal: RadixSelect.Portal,
  Content: SelectContent,
  Viewport: RadixSelect.Viewport,
  Item: SelectItem,
  ItemText: RadixSelect.ItemText,
  Group: RadixSelect.Group,
  Label: SelectGroupLabel,
  Separator: SelectSeparator,
};
