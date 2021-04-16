import React, {ReactElement, useContext, useRef, useState} from 'react';
import {AI, JC, Navigations} from '@types';
import {Button, Flex} from '@components';
import {OnboardingContext} from '@context';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {slides, text} from './constants';
import {Slide} from './components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ISlide} from './components/Slide';
import {WINDOW_WIDTH} from '@styles/mixins';
import {COLORS} from '@styles/base';

const Onboarding = (): ReactElement => {
  const {hideOnboarding} = useContext(OnboardingContext);
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const hide = () => {
    hideOnboarding();
    navigation.navigate(Navigations.Auth);
  };

  const _renderItem = ({item}: {item: ISlide}) => {
    return <Slide data={item} />;
  };

  return (
    <Flex size={1} ai={AI.center} jc={JC.center} containerVer>
      <Flex size={1} full ai={AI.center}>
        <Carousel
          layout={'stack'}
          ref={carouselRef}
          data={slides}
          sliderWidth={WINDOW_WIDTH}
          itemWidth={WINDOW_WIDTH}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />

        <Pagination
          dotsLength={slides.length}
          activeDotIndex={activeIndex}
          inactiveDotScale={1}
          dotStyle={{backgroundColor: COLORS.PRIMARY}}
          inactiveDotStyle={{backgroundColor: COLORS.NEUTRAL_GRAY}}
          dotContainerStyle={{marginHorizontal: 4}}
        />
      </Flex>

      <Flex full containerHor>
        <Button size={16} full click={hide} title={text.button} />
      </Flex>
    </Flex>
  );
};

export default observer(Onboarding);
