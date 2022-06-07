import React, { FC, useState } from 'react'
import { Button, Flex } from '@components'
import { ButtonTypes } from '@types'
import { boxShadow, scaleSize } from '@styles/mixins'
import { COLORS } from '@styles/base'
import { HeartIcon, PlayIcon } from '@icons'
import { CONTAINER_HOR_PADDING } from '@styles/spacing'
import { StyleSheet } from 'react-native'
import Video from 'react-native-video'

const Actions: FC<{
  isFavorite: boolean
  video?: string
  showVideo: () => void
}> = ({ isFavorite, video, showVideo }) => {
  return (
    <>
      <Flex styles={{ marginRight: CONTAINER_HOR_PADDING }}>
        <Button
          type={ButtonTypes.CIRCLE}
          click={() => {}}
          styles={[
            boxShadow(COLORS.NEUTRAL_DARK, { height: 5, width: 0 }, 4, 0.1),
            { width: 44, height: 44, marginBottom: scaleSize(16) },
          ]}>
          <HeartIcon
            sizeHeight={18}
            color={isFavorite ? COLORS.SEMATIC_RED : COLORS.NEUTRAL_GRAY_DARK}
          />
        </Button>

        {!!video && (
          <Button
            type={ButtonTypes.CIRCLE}
            click={showVideo}
            styles={[
              boxShadow(COLORS.NEUTRAL_DARK, { height: 5, width: 0 }, 4, 0.1),
              { width: 44, height: 44 },
            ]}>
            <PlayIcon sizeHeight={18} color={COLORS.NEUTRAL_DARK} />
          </Button>
        )}
      </Flex>
    </>
  )
}

export default Actions
