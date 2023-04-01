import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import RootLayout from 'src/layouts/RootLayout'

jest.mock('src/hooks/useAppLoading', () => () => true)
jest.mock('expo-router', () => ({ Stack: 'Stack' }))

describe('src/screens/RootLayout', () => {
  const RootLayoutComponent = <RootLayout />

  it('renders correctly', () => {
    const RootLayout = create(RootLayoutComponent).toJSON() as ReactTestRendererJSON

    expect(RootLayout.type).toBe('View')
  })
})
