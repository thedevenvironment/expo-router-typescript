import React from 'react'
import { create, type ReactTestRendererJSON } from 'react-test-renderer'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from 'src/config/theme'
import Spinner from 'src/components/Spinner'

jest.mock('expo-router', () => ({ Link: 'Link' }))

describe('src/components/Spinner', () => {
  const SpinnerComponent = (
    <ThemeProvider theme={appTheme}>
      <Spinner />
    </ThemeProvider>
  )

  it('renders correctly', () => {
    const spinner = create(SpinnerComponent).toJSON() as ReactTestRendererJSON
    const activityIndicator = spinner.children![0] as ReactTestRendererJSON

    expect(spinner.type).toBe('View')
    expect(spinner.props.testID).toBe('spinner')

    expect(activityIndicator.type).toBe('ActivityIndicator')
    expect(activityIndicator!.props.testID).toBe('activity-indicator')
    expect(activityIndicator!.props.size).toBe('large')
  })
})
