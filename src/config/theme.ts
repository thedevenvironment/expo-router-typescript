import type { Theme as NavTheme } from '@react-navigation/native'
import type { DefaultTheme } from 'styled-components/native'
import { dimensions, height, width } from 'src/utils/dimensions'

/**
 * Theme For Styled Components
 * -
 */
export const appTheme = {
  background: '#003C4F',
  primary: '#FFF',
  secondary: '#CCC',
  highlight: '#F35570',
  size: dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`
} as DefaultTheme

/**
 * Theme For Expo Navigation Header
 * -
 */
export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.secondary,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
} as NavTheme
