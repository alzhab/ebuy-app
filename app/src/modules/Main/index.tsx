import React, {ReactElement} from 'react';
import {Navigations} from '@types';
import {createStackNavigator} from '@react-navigation/stack';
import TabBarNavigation from './TabBar';
import ProductsStack from './ProductsStack';
import ProductDetail from './ProductDetail';

const navigations = [
  {
    name: Navigations.BottomBar,
    component: TabBarNavigation,
  },
  {
    name: Navigations.ProductsStack,
    component: ProductsStack,
  },
  {
    name: Navigations.ProductDetail,
    component: ProductDetail,
  },
];

const Main = createStackNavigator();

const MainNavigaiton = (): ReactElement => {
  return (
    <Main.Navigator headerMode={'none'}>
      {navigations.map((route) => (
        <Main.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </Main.Navigator>
  );
};

export default MainNavigaiton;
