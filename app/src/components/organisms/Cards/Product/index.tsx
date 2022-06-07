import React from 'react'
import { AnimateItTiming, Flex, Image, Text } from '../../../atoms'
import { Button, Card } from '../../../molecules'
import { COLORS, Colors, TextFamily } from '@styles/base'
import { AI, ButtonTypes, DIR, JC, Navigations } from '@types'
import { HeartIcon } from '@icons'
import navigate from '@navigations/RootNavigation'
import { TouchableOpacity } from 'react-native'
import { IProduct } from '../../../../api/products.api'
import { observer } from 'mobx-react'

interface IProps {
  width?: number | string
  bottom?: number
  card: IProduct
  toggleFavorite: () => void
}

const Product = ({ width, bottom, card, toggleFavorite }: IProps) => {
  return (
    <AnimateItTiming
      show={true}
      style={{ width: width ? width : '100%' }}
      interpolations={[
        {
          outputRange: [0, 1],
          name: 'opacity',
          dir: 'to',
        },
        {
          outputRange: [50, 0],
          name: 'translateX',
          dir: 'to',
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          position: 'relative',
          width: '100%',
          marginBottom: bottom || 0,
          marginTop: 50,
        }}
        onPress={() => navigate(Navigations.ProductDetail, { card })}>
        <Card full padding={{ top: 50, left: 16, bottom: 16 }}>
          <Flex
            styles={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: 100,
              width: '100%',
              transform: [{ translateY: -60 }],
            }}>
            <Image resizeMode={'cover'} source={{ uri: card.image }} />
          </Flex>

          <Text
            size={14}
            family={TextFamily.SEMIBOLD}
            color={Colors.NEUTRAL_GRAY_DARK}>
            {card ? card.name : ''}
          </Text>

          <Flex
            full
            dir={DIR.row}
            ai={AI.center}
            jc={JC.spaceBetween}
            styles={{ marginTop: 10 }}>
            <Text size={16} family={TextFamily.SEMIBOLD}>
              ${card ? card.price : 0}
            </Text>

            <Button
              activeOpacity={0.3}
              click={toggleFavorite}
              empty
              type={ButtonTypes.EMPTY}>
              <HeartIcon
                sizeHeight={20}
                color={
                  card.inFavorite
                    ? COLORS.SEMATIC_RED
                    : COLORS.NEUTRAL_GRAY_DARK
                }
              />
            </Button>
          </Flex>
        </Card>
      </TouchableOpacity>
    </AnimateItTiming>
  )
}

export default observer(Product)
