import type React from 'react';
import { useState, useEffect } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); }`;

const Overlay = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh;
  animation: ${fadeIn} 0.1s ease;
`;

const Content = styled(RadixDialog.Content)`
  width: 500px;
  max-width: 90vw;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: ${slideUp} 0.15s ease;
  outline: none;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: inherit;
  outline: none;
  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
`;

const Group = styled.div`padding: 8px;`;

const GroupLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  padding: 4px 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Item = styled.div<{ $selected?: boolean }>`
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ $selected, theme }) => ($selected ? theme.colors.accent : 'transparent')};
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;

const Shortcut = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const Empty = styled.div`
  padding: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export interface CommandGroup {
  label: string;
  items: CommandItem[];
}

export interface CommandItem {
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groups: CommandGroup[];
  placeholder?: string;
}

export function CommandPalette({ open, onOpenChange, groups, placeholder = 'Type a command or search...' }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!open) setSearch('');
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);

  const filtered = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase())),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <Overlay>
          <Content>
            <RadixDialog.Title style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Command Palette
            </RadixDialog.Title>
            <SearchInput
              placeholder={placeholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            {filtered.map((group, gi) => (
              <Group key={gi}>
                <GroupLabel>{group.label}</GroupLabel>
                {group.items.map((item, ii) => (
                  <Item key={ii} onClick={() => { item.onSelect?.(); onOpenChange(false); }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.icon}
                      {item.label}
                    </span>
                    {item.shortcut && <Shortcut>{item.shortcut}</Shortcut>}
                  </Item>
                ))}
              </Group>
            ))}
            {filtered.length === 0 && <Empty>No results found.</Empty>}
          </Content>
        </Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
