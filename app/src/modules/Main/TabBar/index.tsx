import React, {ReactElement} from 'react';
import {Navigations} from '@types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileStack from './ProfileStack';
import {BottomBar} from '@navigations/components';
import {CartIcon, HeartIcon, HomeIcon, SearchIcon, UserIcon} from '@icons';
import {Flex, HeaderScroll} from '@components';
import Favorite from './Favorite';
import Home from './Home';
import Search from './Search';
import CartStack from './CartStack';

const Comp = () => {
  return (
    <HeaderScroll containerHor headerProps={{title: 'Screen'}}>
      <Flex size={1} />
    </HeaderScroll>
  );
};

const navigations = [
  {
    name: Navigations.Home,
    component: Home,
    Icon: HomeIcon,
  },
  {
    name: Navigations.Search,
    component: Search,
    Icon: SearchIcon,
  },
  {
    name: Navigations.CartStack,
    component: CartStack,
    Icon: CartIcon,
  },
  {
    name: Navigations.Favorites,
    component: Favorite,
    Icon: HeartIcon,
  },
  {
    name: Navigations.ProfileStack,
    component: ProfileStack,
    Icon: UserIcon,
  },
];

const TabBar = createBottomTabNavigator();

const TabBarNavigation = (): ReactElement => {
  return (
    <TabBar.Navigator tabBar={BottomBar}>
      {navigations.map((route) => (
        <TabBar.Screen
          options={{
            // @ts-ignore
            Icon: route.Icon,
          }}
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </TabBar.Navigator>
  );
};

export default TabBarNavigation;
