import React from 'react';
import {AI, DIR, JC} from '@types';
import {Card, Flex, Image, Text} from '@components';
import {Colors, TextFamily} from '@styles/base';

const Cart = () => {
  return (
    <Card
      full
      padding={{top: 16, left: 78, bottom: 26}}
      jc={JC.spaceBetween}
      ai={AI.flexStart}
      styles={{marginBottom: 24, marginLeft: 20}}>
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
        source={require('@assets/images/cart-product.png')}
      />

      <Text family={TextFamily.SEMIBOLD} size={16}>
        Women's hoodie{' '}
      </Text>

      <Flex
        full
        dir={DIR.row}
        jc={JC.spaceBetween}
        ai={AI.center}
        size={14}
        styles={{marginTop: 15}}>
        <Text color={Colors.NEUTRAL_GRAY_DARK}>Warehouse: 83</Text>

        <Text size={20} family={TextFamily.SEMIBOLD}>
          $123
        </Text>
      </Flex>
    </Card>
  );
};

export default Cart;
