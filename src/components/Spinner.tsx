import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { appTheme } from 'src/config/theme'

export default function Spinner() {
  return (
    <S.Spinner testID="spinner">
      <ActivityIndicator testID="activity-indicator" color={appTheme.highlight} size="large" />
    </S.Spinner>
  )
}

const S = {
  Spinner: styled.View`
    background-color: ${appTheme.background};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
}
