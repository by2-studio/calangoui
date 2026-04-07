
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); }`;

const Overlay = styled(RadixAlertDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({ theme }) => theme.zIndex.overlay};
  animation: ${fadeIn} 0.15s ease;
`;

const Content = styled(RadixAlertDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 24px;
  min-width: 400px;
  max-width: 90vw;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: ${slideUp} 0.2s ease;
  &:focus { outline: none; }
`;

const Title = styled(RadixAlertDialog.Title)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;

const Description = styled(RadixAlertDialog.Description)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 20px;
  line-height: 1.5;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const AlertDialog = {
  Root: RadixAlertDialog.Root,
  Trigger: RadixAlertDialog.Trigger,
  Portal: RadixAlertDialog.Portal,
  Overlay,
  Content,
  Title,
  Description,
  Footer,
  Cancel: RadixAlertDialog.Cancel,
  Action: RadixAlertDialog.Action,
};
