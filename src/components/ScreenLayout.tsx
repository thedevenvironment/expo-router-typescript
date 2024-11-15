import Head from 'expo-router/head'
import { Stack } from 'expo-router'
import styled from 'styled-components/native'
import Spinner from 'src/components/Spinner'
import useCacheAssets from 'src/hooks/useCacheAssets'

interface Props {
  children: React.ReactNode
  desc?: string
  title: string | undefined
}

export default function ScreenLayout({ children, desc, title }: Props) {
  const areAssetsCached = useCacheAssets()

  return (
    <S.Wrapper testID="screen-layout">
      <Stack.Screen options={{ title }} />
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc ?? ''} />
      </Head>

      {areAssetsCached ? children : <Spinner />}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.View`
    flex: 1;
  `
}
