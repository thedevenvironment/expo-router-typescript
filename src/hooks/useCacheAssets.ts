import { useFonts } from 'expo-font'

/**
 * Use Cache Assets Before Render
 * -
 */
export default function useCacheAssets() {
  const [fontsLoaded] = useFonts({
    madeBlack: require('src/assets/fonts/MADECarvingSoft-Black.otf'),
    madeBold: require('src/assets/fonts/MADECarvingSoft-Bold.otf'),
    madeSemiBold: require('src/assets/fonts/MADECarvingSoft-SemiBold.otf'),
    madeRegular: require('src/assets/fonts/MADECarvingSoft-Regular.otf'),
    madeMedium: require('src/assets/fonts/MADECarvingSoft-Medium.otf'),
    madeLight: require('src/assets/fonts/MADECarvingSoft-Light.otf'),
    madeExtraLight: require('src/assets/fonts/MADECarvingSoft-ExtraLight.otf'),
    madeThin: require('src/assets/fonts/MADECarvingSoft-Thin.otf')
  })
  
  return fontsLoaded
}
