import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'

export default function HomeScreen() {
  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        <Stack.Screen options={{ title: 'Home Screen' }} />

        <S.Title testID="home-screen-title">🏠</S.Title>
        <S.Text testID="home-screen-text">Go to app/index.tsx to edit</S.Text>

        <LinkButton href="/second" text="Go To Second Screen" />
      </S.Content>
    </ScreenLayout>
  )
}

const S = {
  Content: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.Text`
    color: ${(p) => p.theme.primary};
    font-family: helvetica;
    font-weight: 900;
    font-size: ${(p) => p.theme.size(200, 'px')};
    margin-bottom: ${(p) => p.theme.size(10, 'px')};
  `,
  Text: styled.Text`
    color: ${(p) => p.theme.primary};
    font-family: helvetica;
    font-weight: 700;
    font-size: ${(p) => p.theme.size(15, 'px')};
    margin-bottom: ${(p) => p.theme.size(15, 'px')};
  `
}
