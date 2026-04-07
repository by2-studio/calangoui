
import styled from 'styled-components';

export interface PaginationProps {
  page: number;
  totalPages: number;
  siblings?: number;
  onPageChange: (page: number) => void;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PageButton = styled.button<{ $active?: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.primaryForeground : theme.colors.foreground)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.accent)};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const Ellipsis = styled.span`
  padding: 0 4px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export function Pagination({ page, totalPages, siblings = 1, onPageChange }: PaginationProps) {
  const pages: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - siblings && i <= page + siblings)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <Root>
      <PageButton onClick={() => onPageChange(page - 1)} disabled={page === 1} aria-label="Previous page">
        ‹
      </PageButton>
      {pages.map((p, i) =>
        p === '...' ? (
          <Ellipsis key={`e${i}`}>…</Ellipsis>
        ) : (
          <PageButton key={p} $active={p === page} onClick={() => onPageChange(p)} aria-label={`Page ${p}`} aria-current={p === page ? 'page' : undefined}>
            {p}
          </PageButton>
        )
      )}
      <PageButton onClick={() => onPageChange(page + 1)} disabled={page === totalPages} aria-label="Next page">
        ›
      </PageButton>
    </Root>
  );
}
