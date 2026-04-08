
import type React from 'react';
import styled from 'styled-components';

// ─── Styled ───────────────────────────────────────────────────────────────────

const Root = styled.header<{ $sticky?: boolean }>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ $sticky }) => $sticky && 'position: sticky; top: 0; z-index: 40;'}
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  margin-left: 8px;
`;

const NavLink = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  color: ${({ theme, $active }) => $active ? theme.colors.foreground : theme.colors.mutedForeground};
  background: ${({ theme, $active }) => $active ? theme.colors.accent : 'transparent'};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  flex-shrink: 0;
`;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavTopBarLink {
  label: string;
  href?: string;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface NavTopBarProps {
  /** Logo or brand content */
  logo?: React.ReactNode;
  /** Navigation links */
  links?: NavTopBarLink[];
  /** Right-side action slot (buttons, avatar, theme toggle, etc.) */
  actions?: React.ReactNode;
  /** Stick to top of viewport */
  sticky?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function NavTopBar({ logo, links, actions, sticky, className, style }: NavTopBarProps) {
  return (
    <Root $sticky={sticky} className={className} style={style}>
      {logo && <Brand>{logo}</Brand>}

      {links && links.length > 0 && (
        <Nav>
          {links.map((link, i) => (
            <NavLink
              key={i}
              href={link.href}
              $active={link.active}
              onClick={link.onClick}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </Nav>
      )}

      {actions && <Actions>{actions}</Actions>}
    </Root>
  );
}

NavTopBar.displayName = 'NavTopBar';
