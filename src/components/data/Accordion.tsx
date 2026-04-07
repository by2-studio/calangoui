
import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
`;

const slideUp = keyframes`
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
`;

const Root = styled(RadixAccordion.Root)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

const Item = styled(RadixAccordion.Item)`
  &:not(:last-child) { border-bottom: 1px solid ${({ theme }) => theme.colors.border}; }
`;

const Header = styled(RadixAccordion.Header)`
  display: flex;
`;

const Trigger = styled(RadixAccordion.Trigger)`
  all: unset;
  flex: 1;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  transition: background 0.15s ease;
  font-family: inherit;

  &:hover { background: ${({ theme }) => theme.colors.accent}; }

  &::after {
    content: '+';
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.mutedForeground};
    transition: transform 0.2s ease;
  }

  &[data-state='open']::after {
    content: '−';
  }
`;

const Content = styled(RadixAccordion.Content)`
  overflow: hidden;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;

  &[data-state='open'] { animation: ${slideDown} 0.3s ease; }
  &[data-state='closed'] { animation: ${slideUp} 0.3s ease; }
`;

const ContentInner = styled.div`
  padding: 0 16px 14px;
`;

export const Accordion = { Root, Item, Header, Trigger, Content, ContentInner };
