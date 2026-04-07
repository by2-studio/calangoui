
import * as RadixTabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

const List = styled(RadixTabs.List)`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Trigger = styled(RadixTabs.Trigger)`
  all: unset;
  padding: 10px 16px;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s ease;

  &[data-state='active'] {
    color: ${({ theme }) => theme.colors.foreground};
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: -2px; }
`;

const Content = styled(RadixTabs.Content)`
  padding: 16px 0;
  outline: none;
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.ring}; outline-offset: 2px; }
`;

export const Tabs = {
  Root: RadixTabs.Root,
  List,
  Trigger,
  Content,
};
