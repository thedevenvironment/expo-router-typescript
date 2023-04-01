import { Dimensions } from 'react-native'

export const { height, width } = Dimensions.get('window')

function getWindowHeight() {
  let numerator
  const denominator = 850
  if (height < 600) numerator = 600
  else if (height > 1100) numerator = 1100
  else numerator = height
  return Math.floor((numerator / denominator) * 100) / 100
}

export function dimensions(value: number, suffix: string): string {
  const size = value * getWindowHeight()
  return size + suffix
}
