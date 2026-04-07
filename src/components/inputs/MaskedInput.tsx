import { forwardRef, useCallback, type ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

export type MaskPreset = 'cpf' | 'cnpj' | 'phone' | 'cellphone' | 'cep' | 'date' | 'time' | 'currency' | 'creditcard';

export interface MaskedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  mask?: MaskPreset | string;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, rawValue: string) => void;
}

const MASKS: Record<MaskPreset, { pattern: string; placeholder: string }> = {
  cpf:        { pattern: '999.999.999-99', placeholder: '000.000.000-00' },
  cnpj:       { pattern: '99.999.999/9999-99', placeholder: '00.000.000/0000-00' },
  phone:      { pattern: '(99) 9999-9999', placeholder: '(00) 0000-0000' },
  cellphone:  { pattern: '(99) 99999-9999', placeholder: '(00) 00000-0000' },
  cep:        { pattern: '99999-999', placeholder: '00000-000' },
  date:       { pattern: '99/99/9999', placeholder: 'DD/MM/AAAA' },
  time:       { pattern: '99:99', placeholder: 'HH:MM' },
  currency:   { pattern: '', placeholder: 'R$ 0,00' }, // special handling
  creditcard: { pattern: '9999 9999 9999 9999', placeholder: '0000 0000 0000 0000' },
};

function applyMask(value: string, pattern: string): string {
  const digits = value.replace(/\D/g, '');
  let result = '';
  let digitIdx = 0;

  for (let i = 0; i < pattern.length && digitIdx < digits.length; i++) {
    if (pattern[i] === '9') {
      result += digits[digitIdx];
      digitIdx++;
    } else {
      result += pattern[i];
      if (digits[digitIdx] === pattern[i]) {
        digitIdx++;
      }
    }
  }
  return result;
}

function applyCurrencyMask(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  const num = parseInt(digits, 10);
  const formatted = (num / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `R$ ${formatted}`;
}

function unmask(value: string): string {
  return value.replace(/\D/g, '');
}

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.destructive};
  margin-top: 4px;
`;

const StyledInput = styled.input<{ $sz: string; $error?: boolean }>`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.destructive : theme.colors.input)};
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  outline: none;

  ${({ $sz }) =>
    $sz === 'sm'
      ? css`height: 32px; padding: 0 10px;`
      : $sz === 'lg'
        ? css`height: 48px; padding: 0 16px; font-size: 1rem;`
        : css`height: 40px; padding: 0 12px;`}

  &::placeholder { color: ${({ theme }) => theme.colors.mutedForeground}; }
  &:focus {
    border-color: ${({ theme }) => theme.colors.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring}33;
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, size = 'md', error, onChange, value, defaultValue, ...rest }, ref) => {
    const preset = mask && mask in MASKS ? MASKS[mask as MaskPreset] : null;
    const pattern = preset ? preset.pattern : mask || '';
    const placeholderText = rest.placeholder || (preset ? preset.placeholder : undefined);
    const isCurrency = mask === 'currency';

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        let masked: string;

        if (isCurrency) {
          masked = applyCurrencyMask(raw);
        } else if (pattern) {
          masked = applyMask(raw, pattern);
        } else {
          masked = raw;
        }

        e.target.value = masked;
        onChange?.(e, unmask(raw));
      },
      [pattern, isCurrency, onChange]
    );

    return (
      <div>
        <StyledInput
          ref={ref}
          $sz={size}
          $error={!!error}
          placeholder={placeholderText}
          onChange={handleChange}
          aria-invalid={!!error || undefined}
          inputMode={mask ? 'numeric' : undefined}
          {...rest}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  }
);
MaskedInput.displayName = 'MaskedInput';
