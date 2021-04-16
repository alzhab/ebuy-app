import React from 'react';
import {WINDOW_HEIGHT} from '@styles/mixins';
import {
  AmountInput,
  AnimateItTiming,
  Button,
  ColorButtons,
  Flex,
  SizeButtons,
  Text,
} from '@components';
import {styles} from './styles';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {CloseIcon} from '@icons';
import {Colors, COLORS} from '@styles/base';
import Cart from '../Cart';

const Modal = ({show, close}: {show: boolean; close: () => void}) => {
  const modalProps = {
    style: styles.modal,
    toConfig: {duration: 200},
    fromConfig: {duration: 200},
    interpolations: [
      {
        name: 'translateY',
        dir: 'both',
        outputRange: [WINDOW_HEIGHT / 2, 0],
      },
      {
        name: 'opacity',
        dir: 'both',
        outputRange: [0, 1],
      },
    ],
    remove: true,
    show,
  };

  const colors = ['#EF452C', '#390B12', '#9D9EA3'];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <>
      <AnimateItTiming
        show={show}
        style={styles.back}
        interpolations={[{name: 'opacity', outputRange: [0, 1], dir: 'both'}]}
        remove
      />

      <AnimateItTiming {...modalProps}>
        <Flex full ai={AI.flexEnd} styles={{marginBottom: 36}}>
          <Button empty type={ButtonTypes.EMPTY} click={close}>
            <CloseIcon sizeHeight={20} color={COLORS.NEUTRAL_GRAY_DARK} />
          </Button>
        </Flex>

        <Cart />

        <Flex full styles={{marginBottom: 23}}>
          <Text size={14} styles={{marginBottom: 14}}>
            Color:
          </Text>

          <Flex dir={DIR.row}>
            <ColorButtons colors={colors} />
          </Flex>
        </Flex>

        <Flex full styles={{marginBottom: 23}}>
          <Text size={14} styles={{marginBottom: 14}}>
            Size:
          </Text>

          <Flex dir={DIR.row}>
            <SizeButtons sizes={sizes} />
          </Flex>
        </Flex>

        <Flex full dir={DIR.row} ai={AI.center} jc={JC.spaceBetween}>
          <Text size={14}>Amount:</Text>

          <AmountInput />
        </Flex>
      </AnimateItTiming>
    </>
  );
};

export default Modal;
