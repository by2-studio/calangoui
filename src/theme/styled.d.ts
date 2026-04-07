import 'styled-components';
import type { CalangoUITheme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends CalangoUITheme {}
}
