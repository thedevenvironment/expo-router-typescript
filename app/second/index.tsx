import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'

export default function SecondScreen() {
  return (
    <ScreenLayout testID="second-screen-layout">
      <S.Content testID="second-screen-content">
        <Stack.Screen options={{ title: 'Second Screen' }} />

        <S.Title testID="second-screen-title">🥈</S.Title>
        <S.Text testID="second-screen-text">Go to app/second/index.tsx to edit</S.Text>

        <LinkButton href="/" text="Go To Home Screen" />
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
    font-weight: 600;
    font-size: ${(p) => p.theme.size(15, 'px')};
    margin-bottom: ${(p) => p.theme.size(15, 'px')};
  `
}
