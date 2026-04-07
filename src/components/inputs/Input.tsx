import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const InputWrapper = styled.div<{ $error?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.destructive : theme.colors.input)};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  background: transparent;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }

  &:has(input:disabled) { opacity: 0.5; }
`;

const StyledInput = styled.input<{ $sz: string }>`
  flex: 1;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  outline: none;
  width: 100%;

  ${({ $sz }) =>
    $sz === 'sm'
      ? css`height: 32px; padding: 0 10px;`
      : $sz === 'lg'
        ? css`height: 48px; padding: 0 16px; font-size: 1rem;`
        : css`height: 40px; padding: 0 12px;`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:disabled { cursor: not-allowed; }
`;

const SideElement = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.destructive};
  margin-top: 4px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', error, leftElement, rightElement, id, ...rest }, ref) => {
    const errorId = error && id ? `${id}-error` : undefined;
    return (
      <div>
        <InputWrapper $error={!!error}>
          {leftElement && <SideElement>{leftElement}</SideElement>}
          <StyledInput ref={ref} $sz={size} id={id} aria-describedby={errorId} aria-invalid={!!error || undefined} {...rest} />
          {rightElement && <SideElement>{rightElement}</SideElement>}
        </InputWrapper>
        {error && <ErrorText id={errorId}>{error}</ErrorText>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const StyledTextarea = styled.textarea<{ $error?: boolean; $resize?: string }>`
  width: 100%;
  min-height: 80px;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.destructive : theme.colors.input)};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: 10px 12px;
  resize: ${({ $resize }) => $resize || 'vertical'};
  transition: border-color 0.15s ease;
  outline: none;

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:focus {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, resize, ...rest }, ref) => (
    <div>
      <StyledTextarea ref={ref} $error={!!error} $resize={resize} aria-invalid={!!error || undefined} {...rest} />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  )
);
Textarea.displayName = 'Textarea';
