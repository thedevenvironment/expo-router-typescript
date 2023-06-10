import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

export default function useCacheAssets() {
  const [cacheComplete, setCacheComplete] = useState(false)
  const [fonts] = useFonts({ helvetica: require('src/assets/fonts/helvetica.otf') })

  // Set Cache Complete
  useEffect(() => {
    if (fonts && !cacheComplete) setCacheComplete(true)
  }, [fonts])

  return cacheComplete
}
