import type React from 'react';
import { forwardRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import type { CalangoUITheme } from '../../theme/themes';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
}

function getAlertColor(theme: CalangoUITheme, variant: AlertVariant): string {
  const g = theme.colors[variant];
  return typeof g === 'object' && 'DEFAULT' in g ? g.DEFAULT : theme.colors.foreground;
}

const StyledAlert = styled.div<{ $c: string }>`
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.5;
  border: 1px solid ${({ $c }) => $c}44;
  background: ${({ $c }) => $c}11;
  color: ${({ theme }) => theme.colors.foreground};
  position: relative;
`;

export const AlertTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: 2px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mutedForeground};
  cursor: pointer;
  padding: 2px;
  font-size: 16px;
  line-height: 1;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; }
`;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', closable, onClose, icon, children, ...rest }, ref) => {
    const theme = useTheme() as CalangoUITheme;
    const color = getAlertColor(theme, variant);
    const [visible, setVisible] = useState(true);
    if (!visible) return null;

    return (
      <StyledAlert ref={ref} $c={color} role="alert" {...rest}>
        {icon && <span>{icon}</span>}
        <div style={{ flex: 1 }}>{children}</div>
        {closable && (
          <CloseButton onClick={() => { setVisible(false); onClose?.(); }} aria-label="Close">
            ×
          </CloseButton>
        )}
      </StyledAlert>
    );
  }
);
Alert.displayName = 'Alert';
