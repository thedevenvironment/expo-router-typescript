/* Asset Extensions */
declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.otf'

/* Styled Components */
declare module 'styled-components' {
  import type { CSSProp } from 'styled-components'
  import { appTheme } from 'src/config/theme'
  type ThemeType = typeof appTheme
  export interface DefaultTheme extends ThemeType {}
}
