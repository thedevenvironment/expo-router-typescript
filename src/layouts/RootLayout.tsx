import 'expo-dev-client'
import { ThemeProvider as NavProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import { appTheme, navTheme } from 'src/assets/styles/theme'

export default function RootLayout() {
  return (
    <ThemeProvider theme={appTheme}>
      <StatusBar style="light" />
      <S.AppWrapper>
        <NavProvider value={navTheme}>
          <Stack screenOptions={{ headerShown: false }} />
        </NavProvider>
      </S.AppWrapper>
    </ThemeProvider>
  )
}

const S = {
  AppWrapper: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color: ${appTheme.background};
  `
}
