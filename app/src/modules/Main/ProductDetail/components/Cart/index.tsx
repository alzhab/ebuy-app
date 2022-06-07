import React, { FC } from 'react'
import { AI, DIR, JC } from '@types'
import { Card, Flex, Image, Text } from '@components'
import { Colors, TextFamily } from '@styles/base'
import { IProduct } from '../../../../../api/products.api'

const Cart: FC<{ card: IProduct }> = ({ card }) => {
  return (
    <Card
      full
      padding={{ top: 16, left: 78, bottom: 26 }}
      jc={JC.spaceBetween}
      ai={AI.flexStart}
      styles={{ marginBottom: 24, marginLeft: 20 }}>
      <Image
        style={[
          {
            position: 'absolute',
            width: 82,
            height: 100,
            top: -20,
            left: -20,
          },
        ]}
        source={{ uri: card.image }}
      />

      <Text family={TextFamily.SEMIBOLD} size={16}>
        {card.name}
      </Text>

      <Flex
        full
        dir={DIR.row}
        jc={JC.spaceBetween}
        ai={AI.center}
        size={14}
        styles={{ marginTop: 15 }}>
        <Text size={20} family={TextFamily.SEMIBOLD}>
          ${card.price}
        </Text>
      </Flex>
    </Card>
  )
}

export default Cart
