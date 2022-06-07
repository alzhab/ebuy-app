import React from 'react'
import { AnimateItTiming, Flex, Image, Text } from '../../../atoms'
import { Button, Card } from '../../../molecules'
import { Source } from 'react-native-fast-image'
import navigate from '@navigations/RootNavigation'
import { ButtonTypes, Navigations } from '@types'

const CategoryCard = ({
  bottom,
  card,
}: {
  bottom?: number
  card: { title: string; image: Source | number; id: string }
}) => {
  return (
    <AnimateItTiming
      style={{ width: '100%' }}
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
      <Button
        empty
        type={ButtonTypes.EMPTY}
        styles={{ width: '100%', marginBottom: bottom || 0, marginTop: 30 }}
        click={() =>
          navigate(Navigations.ProductsStack, {
            screen: Navigations.Products,
            params: { categoryId: card.id },
          })
        }>
        <Card
          full
          styles={{ positioni: 'relative' }}
          padding={{ top: 0, right: 16 }}>
          <Text styles={{ paddingVertical: 50 }} size={24}>
            {card.title}
          </Text>

          <Flex
            styles={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              height: '150%',
              width: '30%',
            }}>
            <Image resizeMode={'cover'} source={card.image} />
          </Flex>
        </Card>
      </Button>
    </AnimateItTiming>
  )
}

export default CategoryCard
