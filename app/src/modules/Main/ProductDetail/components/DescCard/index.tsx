import React, { FC } from 'react'
import { Card, Flex, Text } from '@components'
import { AI, DIR, JC } from '@types'
import { StarIcon } from '@icons'
import { Colors, COLORS, TextFamily } from '@styles/base'
import Rating from '../../../../../components/organisms/Rating'
import { IProduct } from '../../../../../api/products.api'

const InfoCard: FC<{ card: IProduct }> = ({ card }) => {
  return (
    <Card full padding={{ top: 16 }} styles={{ marginBottom: 16 }}>
      <Text size={16} styles={{ marginBottom: 11 }}>
        Description
      </Text>

      <Text lineHeight={22} size={15} color={Colors.NEUTRAL_GRAY_DARK}>
        {card.description}
      </Text>
    </Card>
  )
}

export default InfoCard
