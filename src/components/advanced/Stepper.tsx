import React from 'react';
import styled, { css } from 'styled-components';

export type StepStatus = 'complete' | 'active' | 'pending' | 'error';

export interface StepItem {
  label: string;
  description?: string;
  status?: StepStatus;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
}

const Root = styled.div<{ $vertical?: boolean }>`
  display: flex;
  ${({ $vertical }) =>
    $vertical ? css`flex-direction: column;` : css`flex-direction: row; align-items: flex-start;`}
`;

const StepContainer = styled.div<{ $vertical?: boolean }>`
  display: flex;
  align-items: center;
  ${({ $vertical }) =>
    $vertical
      ? css`flex-direction: row; gap: 12px;`
      : css`flex-direction: column; gap: 8px; flex: 1; text-align: center;`}
`;

const Circle = styled.div<{ $status: StepStatus }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  flex-shrink: 0;
  transition: all 0.2s ease;

  ${({ $status, theme }) => {
    switch ($status) {
      case 'complete': return css`background: ${theme.colors.primary}; color: ${theme.colors.primaryForeground};`;
      case 'active': return css`background: transparent; border: 2px solid ${theme.colors.primary}; color: ${theme.colors.primary};`;
      case 'error': return css`background: ${theme.colors.destructive}; color: ${theme.colors.destructiveForeground};`;
      default: return css`background: ${theme.colors.muted}; color: ${theme.colors.mutedForeground};`;
    }
  }}
`;

const StepLabel = styled.span<{ $active?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ $active, theme }) => ($active ? theme.colors.foreground : theme.colors.mutedForeground)};
  white-space: nowrap;
`;

const Separator = styled.div<{ $completed?: boolean; $vertical?: boolean }>`
  ${({ $vertical }) =>
    $vertical
      ? css`width: 2px; height: 24px; margin-left: 15px;`
      : css`height: 2px; flex: 1;`}
  background: ${({ $completed, theme }) => ($completed ? theme.colors.primary : theme.colors.border)};
  transition: background 0.2s ease;
`;

export function Stepper({ steps, activeStep, orientation = 'horizontal' }: StepperProps) {
  const vertical = orientation === 'vertical';
  return (
    <Root $vertical={vertical}>
      {steps.map((step, i) => {
        const status = step.status || (i < activeStep ? 'complete' : i === activeStep ? 'active' : 'pending');
        return (
          <React.Fragment key={i}>
            <StepContainer $vertical={vertical}>
              <Circle $status={status}>
                {status === 'complete' ? '✓' : status === 'error' ? '!' : i + 1}
              </Circle>
              <StepLabel $active={status === 'active' || status === 'complete'}>{step.label}</StepLabel>
            </StepContainer>
            {i < steps.length - 1 && <Separator $completed={i < activeStep} $vertical={vertical} />}
          </React.Fragment>
        );
      })}
    </Root>
  );
}
