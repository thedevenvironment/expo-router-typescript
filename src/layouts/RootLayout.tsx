import 'expo-dev-client'
import { ThemeProvider as NavProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import { appTheme, navTheme } from 'src/assets/styles/theme'
import Spinner from 'src/components/Spinner'
import useAppLoading from 'src/hooks/useAppLoading'

export default function RootLayout() {
  const appLoaded = useAppLoading()

  if (!appLoaded) return <Spinner />

  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar style="light" />
      <S.AppWrapper>
        <NavProvider value={navTheme}>
          <Stack />
        </NavProvider>
      </S.AppWrapper>
    </ThemeProvider>
  )
}

const S = {
  AppWrapper: styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${appTheme.background};
  `
}
