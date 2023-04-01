import styled from 'styled-components/native'
import { Link } from 'expo-router'

interface Props {
  href: string
  text: string
}

export default function LinkButton({ href, text }: Props) {
  return (
    <S.Button testID="link-button" href={href}>
      <S.ButtonText testID="link-button-text">{text}</S.ButtonText>
    </S.Button>
  )
}

const S = {
  Button: styled(Link)`
    padding: ${p => p.theme.dimensions(10, 'px')} ${p => p.theme.dimensions(20, 'px')};
    border-color: ${p => p.theme.highlight};
    border-width: ${p => p.theme.dimensions(1, 'px')};
    border-radius: ${p => p.theme.dimensions(5, 'px')};
    background-color: transparent;
  `,
  ButtonText: styled.Text`
    color: ${p => p.theme.highlight};
    font-weight: 600;
  `
}
