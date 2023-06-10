import useCacheAssets from 'src/hooks/useCacheAssets'

jest.mock('expo-font', () => ({
  useFonts: jest.fn(() => [true, true])
}))

jest.mock('react-native', () => ({
  Dimensions: { get: jest.fn(() => ({ height: 1000, width: 1000 })) },
  Platform: { OS: 'ios' }
}))

jest.mock('react', () => ({
  useEffect: jest.fn(),
  useMemo: jest.fn(() => true),
  useState: jest.fn(() => [true, jest.fn()])
}))

describe('src/hooks/useCacheAssets', () => {
  it('should return appLoaded', () => {
    const areAssetsCached = useCacheAssets()

    expect(areAssetsCached).toBe(true)
  })
})
