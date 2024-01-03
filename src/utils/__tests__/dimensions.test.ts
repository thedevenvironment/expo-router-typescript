import { dimensions } from 'src/utils/dimensions'

jest.mock('react-native', () => ({ Dimensions: { get: jest.fn(() => ({ height: 1000, width: 1000 })) } }))

describe('src/assets/styles/dimensions', () => {
  it('should return 100px', () => {
    const value = dimensions(100, 'px')

    expect(value).toBe('117px')
  })
})
