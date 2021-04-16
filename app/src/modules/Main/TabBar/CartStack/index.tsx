import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import Cart from './Cart';

const navigations = [
  {
    name: Navigations.Cart,
    component: Cart,
  },
];

const Stack = createStackNavigator();

const CartStack = (): ReactElement => {
  return (
    <Stack.Navigator headerMode={'none'}>
      {navigations.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CartStack;
