import { Dimensions } from 'react-native'

export const { height, width } = Dimensions.get('window')

/**
 * Will Get Window Height between 600 - 1100
 * -
 */
function getWindowHeight() {
  let numerator
  const denominator = 850
  if (height < 600) numerator = 600
  else if (height > 1100) numerator = 1100
  else numerator = height
  return Math.floor((numerator / denominator) * 100) / 100
}

/**
 * Will Return A Dynamic Value Based On Window Size.
 * -
 */
export function dimensions(value: number, suffix: string): string {
  const size = value * getWindowHeight()
  return size + suffix
}
