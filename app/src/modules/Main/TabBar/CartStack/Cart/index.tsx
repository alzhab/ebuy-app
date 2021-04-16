import React from 'react';
import {Button, Card, CartCard, Flex, HeaderScroll, Text} from '@components';
import {AI, DIR, JC} from '@types';
import {Colors, TextFamily} from '@styles/base';
import {WINDOW_HEIGHT} from '@styles/mixins';

const Cart = () => {
  return (
    <Flex full size={1}>
      <HeaderScroll
        containerBottom
        withTabbar
        containerHor
        minHeight={WINDOW_HEIGHT / 6}
        headerProps={{title: 'Cart', back: true}}>
        <Flex size={1} full styles={{paddingTop: 16}}>
          <CartCard />
        </Flex>
      </HeaderScroll>

      <Flex full containerHor styles={{marginBottom: 16}}>
        <Card full>
          <Flex
            dir={DIR.row}
            full
            ai={AI.center}
            jc={JC.spaceBetween}
            styles={{marginBottom: 30}}>
            <Text size={16} family={TextFamily.SEMIBOLD}>
              Total:
            </Text>
            <Text color={Colors.PRIMARY} size={20}>
              $123
            </Text>
          </Flex>

          <Button size={16} click={() => {}} title={'Checkout'} full />
        </Card>
      </Flex>
    </Flex>
  );
};

export default Cart;
