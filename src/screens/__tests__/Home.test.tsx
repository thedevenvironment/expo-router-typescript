import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from 'src/assets/styles/theme'
import Home from 'src/screens/Home'

jest.mock('expo-router', () => ({ Stack: { Screen: 'Screen' } }))
jest.mock('src/components/LinkButton', () => 'LinkButton')

describe('src/screens/Home', () => {
  const HomeComponent = (
    <ThemeProvider theme={appTheme}>
      <Home />
    </ThemeProvider>
  )

  it('renders correctly', () => {
    const home = create(HomeComponent).toJSON() as ReactTestRendererJSON
    const screen = home.children![0] as ReactTestRendererJSON
    const title = home.children![1] as ReactTestRendererJSON
    const text = home.children![2] as ReactTestRendererJSON
    const linkButton = home.children![3] as ReactTestRendererJSON

    expect(home.type).toBe('View')
    expect(home.props.testID).toBe('home-screen')

    expect(screen.type).toBe('Screen')

    expect(title.type).toBe('Text')
    expect(title.props.testID).toBe('home-screen-title')

    expect(text.type).toBe('Text')
    expect(text.props.testID).toBe('home-screen-text')
  })
})
