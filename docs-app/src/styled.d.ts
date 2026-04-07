import 'styled-components';
import type { CalangoUITheme } from 'calangoui';

declare module 'styled-components' {
  export interface DefaultTheme extends CalangoUITheme {}
}
