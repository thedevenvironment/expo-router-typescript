import { useFonts } from 'expo-font'

/**
 * Use Cache Assets Before Render
 * -
 */
export default function useCacheAssets() {
  const [fontsLoaded] = useFonts({ helvetica: require('src/assets/fonts/helvetica.otf') })
  return fontsLoaded
}
