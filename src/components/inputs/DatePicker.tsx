import { useState, useMemo, useCallback } from 'react';
import * as Popover from '@radix-ui/react-popover';
import styled from 'styled-components';

const Trigger = styled(Popover.Trigger)`
  display: inline-flex;
  align-items: center;
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

  &:focus { border-color: ${({ theme }) => theme.colors.ring}; }
  &[data-placeholder] { color: ${({ theme }) => theme.colors.mutedForeground}; }
`;

const Content = styled(Popover.Content)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndex.popover};
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;

const MonthLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  gap: 2px;
`;

const DayHeader = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-align: center;
  padding: 4px 0;
`;

const DayButton = styled.button<{ $selected?: boolean; $today?: boolean; $outside?: boolean; $disabled?: boolean }>`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: inherit;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background: ${({ $selected, theme }) => ($selected ? theme.colors.primary : 'transparent')};
  color: ${({ $selected, $outside, $disabled, theme }) =>
    $selected ? theme.colors.primaryForeground : $disabled ? theme.colors.mutedForeground : $outside ? theme.colors.mutedForeground : theme.colors.foreground};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};

  ${({ $today, theme }) => $today && `font-weight: ${theme.typography.fontWeight.bold};`}

  &:hover:not(:disabled) {
    background: ${({ $selected, theme }) => ($selected ? theme.colors.primary : theme.colors.accent)};
  }
`;

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  min?: Date;
  max?: Date;
  placeholder?: string;
  disabled?: boolean;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function DatePicker({ value, onChange, min, max, placeholder = 'Pick a date', disabled }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const initialView = () => {
    if (value) return value;
    const now = new Date();
    if (min && now < min) return min;
    if (max && now > max) return max;
    return now;
  };
  const [viewDate, setViewDate] = useState(initialView);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();
    const result: { date: Date; outside: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      result.push({ date: new Date(year, month - 1, daysInPrev - i), outside: true });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      result.push({ date: new Date(year, month, i), outside: false });
    }
    const remaining = 42 - result.length;
    for (let i = 1; i <= remaining; i++) {
      result.push({ date: new Date(year, month + 1, i), outside: true });
    }
    return result;
  }, [year, month]);

  const isDisabled = useCallback((date: Date) => {
    if (min && date < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
    if (max && date > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
    return false;
  }, [min, max]);

  const today = new Date();
  const isSameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Trigger disabled={disabled}>
        {value ? value.toLocaleDateString() : placeholder}
      </Trigger>
      <Popover.Portal>
        <Content sideOffset={4} align="start">
          <CalendarHeader>
            <NavButton onClick={() => setViewDate(new Date(year, month - 1, 1))}>‹</NavButton>
            <MonthLabel>{MONTHS[month]} {year}</MonthLabel>
            <NavButton onClick={() => setViewDate(new Date(year, month + 1, 1))}>›</NavButton>
          </CalendarHeader>
          <DayGrid>
            {DAYS.map((d) => <DayHeader key={d}>{d}</DayHeader>)}
            {days.map(({ date, outside }, i) => {
              const dis = isDisabled(date);
              const sel = value ? isSameDay(date, value) : false;
              return (
                <DayButton
                  key={i}
                  $selected={sel}
                  $today={isSameDay(date, today)}
                  $outside={outside}
                  $disabled={dis}
                  disabled={dis}
                  onClick={() => {
                    if (!dis) {
                      onChange?.(date);
                      setOpen(false);
                    }
                  }}
                >
                  {date.getDate()}
                </DayButton>
              );
            })}
          </DayGrid>
        </Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
