import styled from 'styled-components/native'
import Spinner from 'src/components/Spinner'
import useCacheAssets from 'src/hooks/useCacheAssets'

interface Props {
  children: React.ReactNode
  testID?: string
}

export default function ScreenLayout({ children, testID }: Props) {
  const areAssetsCached = useCacheAssets()

  return <S.Wrapper testID={testID}>{areAssetsCached ? children : <Spinner />}</S.Wrapper>
}

const S = {
  Wrapper: styled.View`
    flex: 1;
  `
}
