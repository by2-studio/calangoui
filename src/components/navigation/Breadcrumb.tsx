
import styled from 'styled-components';

const Root = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const BItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-decoration: none;
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.foreground}; text-decoration: underline; }
`;

const Page = styled.span`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Sep = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Breadcrumb = {
  Root,
  Item: BItem,
  Link,
  Page,
  Separator: Sep,
};
