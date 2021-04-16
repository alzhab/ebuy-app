import React, {ReactElement} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Navigations} from '@types';
import Products from './Products';
import Filter from './Filter';

const navigations = [
  {
    name: Navigations.Products,
    component: Products,
  },
  {
    name: Navigations.Filter,
    component: Filter,
  },
];

const Stack = createStackNavigator();

const ProductsStack = (): ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      headerMode={'none'}>
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

export default ProductsStack;
