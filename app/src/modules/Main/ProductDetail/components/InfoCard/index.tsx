import React, { FC } from 'react'
import { Card, Flex, Text, Rating } from '@components'
import { AI, DIR, JC } from '@types'
import { TextFamily } from '@styles/base'
import { IProduct } from '../../../../../api/products.api'

const InfoCard: FC<{ card: IProduct }> = ({ card }) => {
  return (
    <Card full padding={{ top: 16 }} styles={{ marginBottom: 16 }}>
      <Text size={18} styles={{ marginBottom: 16 }}>
        {/* eslint-disable-next-line react/prop-types */}
        {card.name}
      </Text>

      <Flex full dir={DIR.row} ai={AI.center} jc={JC.spaceBetween}>
        <Rating rating={4} />

        <Text size={16} family={TextFamily.SEMIBOLD}>
          ${card.price}
        </Text>
      </Flex>
    </Card>
  )
}

export default InfoCard
