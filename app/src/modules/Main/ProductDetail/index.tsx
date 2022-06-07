import React, { useCallback, useState } from 'react'
import { Button, Flex, HeaderScroll, Modal } from '@components'
import { ButtonTypes, Navigations } from '@types'
import {
  DescCard,
  InfoCard,
  Modal as CartModal,
  ReviewsCard,
  Slider,
} from './components'
import { ShareIcon } from '@icons'
import { COLORS } from '@styles/base'
import { Opacity } from './components/Slider'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { IProduct } from '../../../api/products.api'
import Video from 'react-native-video'
import { WINDOW_HEIGHT } from '@styles/mixins'
import { authStore, cartStore, noticeMessageStore } from '@stores'
import { NoticeTypeEnum } from '../../../stores/NoticeMessageStore'
import navigate from '@navigations/RootNavigation'

const ProductDetail = () => {
  const [showSlider, setShowSlider] = useState(Opacity.start)
  const [show, setShow] = useState(false)
  const [card, setCard] = useState<IProduct | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [videoLoading, setVideoLoading] = useState(false)
  const route = useRoute<any>()

  useFocusEffect(
    useCallback(() => {
      if (route?.params?.card) {
        setCard(route?.params?.card)

        return () => {
          setCard(null)
        }
      }
    }, []),
  )

  const handleScroll = (y: number) => {
    if (y > 100) {
      setShowSlider(Opacity.end)
    } else if (y <= 100 && y >= 50) {
      setShowSlider(Opacity.middle)
    } else if (y < 50) {
      setShowSlider(Opacity.start)
    }
  }

  const addToCart = () => {
    if (card) {
      if (!authStore.isAuthorized) {
        navigate(Navigations.Auth)
      } else {
        if (!show) {
          setShow(true)
        } else {
          cartStore.addProduct(card, '#EF452C')
          noticeMessageStore.showMessage(
            'Successfully added to cart',
            NoticeTypeEnum.success,
          )
          setShow(false)
        }
      }
    }
  }

  return (
    <>
      {!!card && (
        <Flex full size={1} styles={{ backgroundColor: 'transparent' }}>
          <Flex size={1} full>
            <HeaderScroll
              scrollHeader={
                <Slider
                  showVideo={() => setShowVideo(true)}
                  card={card}
                  show={showSlider}
                />
              }
              containerHor
              containerBottom
              onScroll={handleScroll}
              headerProps={{
                title: '',
                back: true,
                transparent: true,
                absolute: true,
                right: (
                  <Button empty type={ButtonTypes.EMPTY} click={() => {}}>
                    <ShareIcon sizeHeight={24} color={COLORS.NEUTRAL_DARK} />
                  </Button>
                ),
              }}>
              <InfoCard card={card} />

              <DescCard card={card} />

              <ReviewsCard />
            </HeaderScroll>

            <CartModal card={card} show={show} close={() => setShow(false)} />
          </Flex>

          <Flex
            full
            containerHor
            containerBottom
            styles={{ backgroundColor: COLORS.MAIN_BG }}>
            <Button click={addToCart} full title={'Add to card'} />
          </Flex>
        </Flex>
      )}

      {!!card && (
        <Modal close={() => setShowVideo(false)} open={showVideo}>
          <Video
            onLoad={() => setVideoLoading(false)}
            onLoadStart={() => setVideoLoading(true)}
            controls
            onError={() => {
              console.log('error')
            }}
            onBuffer={() => {
              console.log('buffer')
            }}
            source={{ uri: card.video }} // Can be a URL or a local file.
            style={{
              height: WINDOW_HEIGHT / 3,
              width: '100%',
              borderRadius: 10,
              zIndex: 101,
              backgroundColor: '#ececec',
            }}
          />
        </Modal>
      )}
    </>
  )
}

export default ProductDetail
