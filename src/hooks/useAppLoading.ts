import { useEffect, useMemo, useState } from 'react'
import { Platform } from 'react-native'
import { useFonts } from 'expo-font'

export default function useAppLoading() {
  const [appLoaded, setAppLoaded] = useState(false)
  const [fonts] = useFonts({ helvetica: require('src/assets/fonts/helvetica.otf') })
  const isWeb = useMemo(() => Platform.OS === 'web', [])

  // Set Web CSS Styles
  useEffect(() => {
    if (isWeb) document.body.style.cssText = `height: ${window.innerHeight * 0.01}px;`
  }, [])

  // Set App Loaded
  useEffect(() => {
    if (fonts && !appLoaded) setAppLoaded(true)
  }, [fonts])

  return appLoaded
}
