
import * as RadixAvatar from '@radix-ui/react-avatar';
import styled, { css } from 'styled-components';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';

const sizes: Record<AvatarSize, number> = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };

const Root = styled(RadixAvatar.Root)<{ $size?: AvatarSize; $shape?: AvatarShape }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  vertical-align: middle;

  ${({ $shape, theme }) =>
    $shape === 'square'
      ? css`border-radius: ${theme.radii.md};`
      : css`border-radius: 50%;`}

  ${({ $size }) => {
    const s = sizes[$size || 'md'];
    return css`width: ${s}px; height: ${s}px;`;
  }}
`;

const Image = styled(RadixAvatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Fallback = styled(RadixAvatar.Fallback)<{ $size?: AvatarSize }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ $size }) => {
    const s = sizes[$size || 'md'];
    return `${s * 0.4}px`;
  }};
`;

export const Avatar = { Root, Image, Fallback };
