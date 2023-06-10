import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from 'src/assets/styles/theme'
import Second from 'src/screens/Second'

jest.mock('expo-router', () => ({ Stack: { Screen: 'Screen' } }))
jest.mock('src/components/LinkButton', () => 'LinkButton')
jest.mock('src/hooks/useCacheAssets', () => () => true)

describe('src/screens/Second', () => {
  const SecondComponent = (
    <ThemeProvider theme={appTheme}>
      <Second />
    </ThemeProvider>
  )

  it('renders correctly', () => {
    const second = create(SecondComponent).toJSON() as ReactTestRendererJSON
    const layout = second.children![0] as ReactTestRendererJSON
    const screen = layout.children![0] as ReactTestRendererJSON
    const title = layout.children![1] as ReactTestRendererJSON
    const text = layout.children![2] as ReactTestRendererJSON
    const linkButton = layout.children![3] as ReactTestRendererJSON

    expect(second.type).toBe('View')
    expect(second.props.testID).toBe('second-screen-layout')

    expect(screen.type).toBe('Screen')

    expect(title.type).toBe('Text')
    expect(title.props.testID).toBe('second-screen-title')

    expect(text.type).toBe('Text')
    expect(text.props.testID).toBe('second-screen-text')

    expect(linkButton.type).toBe('LinkButton')
  })
})
