import styled from 'styled-components/native'
import { Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'

export default function SecondScreen() {
  return (
    <S.Wrapper testID="second-screen">
      <Stack.Screen options={{ title: 'Second Screen', headerShown: false }} />

      <S.Title testID="second-screen-title">🥈 Second Screen 🥈</S.Title>
      <S.Text testID="second-screen-text">Go to src/screens/Second.tsx to edit</S.Text>

      <LinkButton href="/" text="Go To Home Screen" />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 900;
    font-size: ${p => p.theme.dimensions(20, 'px')};
    margin-bottom: ${p => p.theme.dimensions(10, 'px')};
  `,
  Text: styled.Text`
    color: ${p => p.theme.primary};
    font-family: helvetica;
    font-weight: 300;
    font-size: ${p => p.theme.dimensions(15, 'px')};
    margin-bottom: ${p => p.theme.dimensions(15, 'px')};
  `
}
