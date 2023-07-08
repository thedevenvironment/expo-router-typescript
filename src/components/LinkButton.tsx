import styled from 'styled-components/native'
import { Link } from 'expo-router'
import { openURL } from 'expo-linking'

type Props = { href: string; text: string }

export default function LinkButton({ href, text }: Props) {
  return href.substring(0, 1) === '/' ? (
    <S.InternalLink testID="link-button" href={href}>
      <S.LinkText testID="link-button-text">{text}</S.LinkText>
    </S.InternalLink>
  ) : (
    <S.ExternalLink testID="link-button" onPress={() => openURL(href)}>
      <S.LinkText testID="link-button-text">{text}</S.LinkText>
    </S.ExternalLink>
  )
}

const S = {
  ExternalLink: styled.TouchableOpacity`
    padding: ${p => p.theme.dimensions(10, 'px')} ${p => p.theme.dimensions(20, 'px')};
    border-color: ${p => p.theme.highlight};
    border-width: ${p => p.theme.dimensions(1, 'px')};
    border-radius: ${p => p.theme.dimensions(5, 'px')};
    background-color: transparent;
  `,
  InternalLink: styled(Link)`
    padding: ${p => p.theme.dimensions(10, 'px')} ${p => p.theme.dimensions(20, 'px')};
    border-color: ${p => p.theme.highlight};
    border-width: ${p => p.theme.dimensions(1, 'px')};
    border-radius: ${p => p.theme.dimensions(5, 'px')};
    background-color: transparent;
  `,
  LinkText: styled.Text`
    color: ${p => p.theme.highlight};
    font-weight: 600;
  `
}
