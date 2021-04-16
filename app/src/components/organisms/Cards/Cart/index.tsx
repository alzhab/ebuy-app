import React from 'react';
import {AI, DIR, JC} from '@types';
import {AmountInput, Button, Card, Flex, Image, Text} from '@components';
import {COLORS, Colors, TextFamily} from '@styles/base';
import {CloseIcon} from '@icons';
import {StyleSheet} from 'react-native';

const Cart = () => {
  return (
    <Flex full styles={{paddingLeft: 41, paddingRight: 16}}>
      <Card
        full
        padding={{top: 19, left: 65, bottom: 19}}
        jc={JC.spaceBetween}
        ai={AI.flexStart}
        styles={{marginBottom: 24}}>
        <Image
          style={styles.image}
          source={require('@assets/images/cart-product.png')}
        />

        <DeleteButton />

        <Text family={TextFamily.SEMIBOLD} size={16}>
          Women's hoodie
        </Text>

        <Body />

        <Footer />
      </Card>
    </Flex>
  );
};

const Footer = () => (
  <Flex
    dir={DIR.row}
    styles={{marginTop: 20}}
    ai={AI.center}
    jc={JC.spaceBetween}
    full>
    <Text size={18} family={TextFamily.SEMIBOLD}>
      $123
    </Text>

    <AmountInput />
  </Flex>
);

const Body = () => (
  <Flex full dir={DIR.row} ai={AI.center} styles={{marginTop: 10}}>
    <Flex dir={DIR.row} ai={AI.center} styles={{marginRight: 16}}>
      <Text color={Colors.NEUTRAL_GRAY_DARK}>Color:</Text>
      <Flex styles={styles.color} />
    </Flex>

    <Flex dir={DIR.row} ai={AI.center}>
      <Text color={Colors.NEUTRAL_GRAY_DARK}>Size:</Text>
      <Text color={Colors.NEUTRAL_GRAY_DARK} styles={{marginLeft: 8}}>
        M
      </Text>
    </Flex>
  </Flex>
);

const DeleteButton = () => (
  <Button click={() => {}} empty styles={styles.deleteButton}>
    <CloseIcon color={COLORS.MAIN_BG} sizeHeight={16} />
  </Button>
);

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: COLORS.SEMATIC_RED,
    width: 36,
    height: 36,
    position: 'absolute',
    top: 16,
    right: -16,
  },
  color: {
    marginLeft: 13,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#390B12',
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 125,
    top: -16,
    left: -41,
  },
});

export default Cart;
