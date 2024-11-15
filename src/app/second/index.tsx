import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'

export default function SecondScreen() {
  return (
    <ScreenLayout title="Second">
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
    gap: 10px;
  `,
  Title: styled.Text`
    font-size: ${(p) => p.theme.size(150, 'px')};
  `,
  Text: styled.Text`
    color: ${(p) => p.theme.primary};
    font-family: madeRegular;
    font-size: ${(p) => p.theme.size(15, 'px')};
  `
}
