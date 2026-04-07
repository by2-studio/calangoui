import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

const Wrapper = styled.div<{ $sz: string }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.input};
  border-radius: ${({ theme }) => theme.radii.md};
  background: transparent;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  gap: 6px;

  ${({ $sz }) =>
    $sz === 'sm'
      ? css`height: 32px; padding: 0 10px;`
      : $sz === 'lg'
        ? css`height: 48px; padding: 0 14px;`
        : css`height: 40px; padding: 0 12px;`}

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }

  &:has(input:disabled) { opacity: 0.5; }
`;

const SearchIcon = styled.div<{ $sz: string }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  ${({ $sz }) => css`font-size: ${$sz === 'sm' ? '14px' : $sz === 'lg' ? '18px' : '16px'};`}
`;

const StyledInput = styled.input<{ $sz: string }>`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.foreground};
  font-family: inherit;
  min-width: 0;

  ${({ $sz }) =>
    $sz === 'sm'
      ? css`font-size: ${({ theme }) => theme.typography.fontSize.xs};`
      : $sz === 'lg'
        ? css`font-size: 1rem;`
        : css`font-size: ${({ theme }) => theme.typography.fontSize.sm};`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:disabled { cursor: not-allowed; }
`;

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1;
  font-size: 14px;
  transition: color 0.15s ease;

  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;

const ShortcutBadge = styled.kbd`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 2px 5px;
  font-size: 11px;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  color: ${({ theme }) => theme.colors.mutedForeground};
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  line-height: 1.4;
  pointer-events: none;
`;

const SpinnerIcon = styled.div`
  width: 14px;
  height: 14px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 50%;
  flex-shrink: 0;
  animation: ${spin} 0.6s linear infinite;
`;

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  shortcut?: string;
  loading?: boolean;
  onClear?: () => void;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ size = 'md', shortcut, loading, onClear, value, onChange, ...rest }, ref) => {
    const hasValue = value !== undefined ? String(value).length > 0 : false;

    return (
      <Wrapper $sz={size}>
        <SearchIcon $sz={size}>
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </SearchIcon>
        <StyledInput
          ref={ref}
          $sz={size}
          value={value}
          onChange={onChange}
          type="search"
          autoComplete="off"
          {...rest}
        />
        {loading && <SpinnerIcon />}
        {!loading && hasValue && onClear && (
          <ClearButton type="button" onClick={onClear} aria-label="Clear search" tabIndex={-1}>
            ✕
          </ClearButton>
        )}
        {!loading && shortcut && !hasValue && (
          <ShortcutBadge>{shortcut}</ShortcutBadge>
        )}
      </Wrapper>
    );
  }
);
SearchBar.displayName = 'SearchBar';
