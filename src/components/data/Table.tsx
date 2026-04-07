import styled, { css } from 'styled-components';

export interface TableRootProps {
  $striped?: boolean;
  $hoverable?: boolean;
  $compact?: boolean;
}

const Root = styled.table<TableRootProps>`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  th, td {
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    ${({ $compact }) => ($compact ? css`padding: 6px 10px;` : css`padding: 10px 14px;`)}
  }

  th {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.mutedForeground};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  ${({ $striped, theme }) =>
    $striped &&
    css`tbody tr:nth-child(even) { background: ${theme.colors.muted}44; }`}

  ${({ $hoverable, theme }) =>
    $hoverable &&
    css`tbody tr:hover { background: ${theme.colors.accent}; }`}
`;

const Header = styled.thead``;
const Body = styled.tbody``;
const Footer = styled.tfoot``;
const Row = styled.tr``;
const Head = styled.th``;
const Cell = styled.td``;

export const Table = { Root, Header, Body, Footer, Row, Head, Cell };
