import React, { useEffect, useRef, useState } from 'react'
import { Flex, Image } from '@components'
import { AI, DIR, JC } from '@types'
import { Actions, Pagination } from '../index'
import { Animated, StyleSheet } from 'react-native'
import { CONTAINER_VER_TOP_PADDING } from '@styles/spacing'
import { WINDOW_WIDTH } from '@styles/mixins'
import Carousel from 'react-native-snap-carousel'
import { ISlide } from '../../../../Onboarding/components/Slide'
import { IImage } from '../../../../../api/customers.api'
import { Source } from 'react-native-fast-image'
import { IProduct } from '../../../../../api/products.api'

export enum Opacity {
  start = 1,
  middle = 0.5,
  end = 0,
}

const Slider = ({
  show,
  card,
  showVideo,
}: {
  show: Opacity
  card: IProduct
  showVideo: () => void
}) => {
  const anim = useRef(new Animated.Value(show)).current
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const slides = card.images.map(item => ({ image: { uri: item } }))

  const animate = (val: Opacity) => {
    Animated.timing(anim, {
      toValue: val,
      useNativeDriver: false,
      duration: 300,
    }).start()
  }

  useEffect(() => {
    animate(show)
  }, [show])

  const opacity = anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  })

  const _renderItem = ({ item }: { item: { image: Source | number } }) => {
    return (
      <Image
        style={{ backgroundColor: 'rgba(236,236,236,0.55)', marginBotom: 30 }}
        resizeMode={'cover'}
        source={item.image}
      />
    )
  }

  return (
    <Flex
      animated
      full
      styles={{
        opacity,
        height: 280,
        marginBottom: -30,
        paddingBottom: 60,
        marginTop: CONTAINER_VER_TOP_PADDING,
      }}
      dir={DIR.row}
      ai={AI.flexEnd}
      jc={JC.spaceBetween}>
      <Flex full styles={[StyleSheet.absoluteFill]}>
        <Carousel
          layout={'tinder'}
          ref={carouselRef}
          data={slides}
          sliderWidth={WINDOW_WIDTH}
          itemWidth={WINDOW_WIDTH}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </Flex>

      <Pagination activeIndex={activeIndex} length={slides.length} />

      <Actions showVideo={showVideo} isFavorite={!!card.inFavorite} video={card.video} />
    </Flex>
  )
}

export default Slider
