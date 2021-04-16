import React, {useState} from 'react';
import {
  AnimateItTiming,
  Button,
  Card,
  Flex,
  HeaderScroll,
  Text,
} from '@components';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {scaleSize, WINDOW_HEIGHT} from '@styles/mixins';
import {
  Actions,
  DescCard,
  InfoCard,
  Modal,
  Pagination,
  ReviewsCard,
  Slider,
} from './components';
import {ShareIcon, StarIcon} from '@icons';
import {COLORS, TextFamily} from '@styles/base';
import {Opacity} from './components/Slider';
import {StyleSheet} from 'react-native';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

const ProductDetail = () => {
  const [showSlider, setShowSlider] = useState(Opacity.start);
  const [show, setShow] = useState(false);

  const handleScroll = (y: number) => {
    if (y > 100) {
      setShowSlider(Opacity.end);
    } else if (y <= 100 && y >= 50) {
      setShowSlider(Opacity.middle);
    } else if (y < 50) {
      setShowSlider(Opacity.start);
    }
  };

  const addToCart = () => {
    if (!show) {
      setShow(true);
    }
  };

  return (
    <Flex full size={1} styles={{backgroundColor: 'transparent'}}>
      <Flex size={1} full>
        <HeaderScroll
          scrollHeader={<Slider show={showSlider} />}
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
          <InfoCard />

          <DescCard />

          <ReviewsCard />
        </HeaderScroll>

        <Modal show={show} close={() => setShow(false)} />
      </Flex>

      <Flex
        full
        containerHor
        containerBottom
        styles={{backgroundColor: COLORS.MAIN_BG}}>
        <Button click={addToCart} full title={'Add to card'} />
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
