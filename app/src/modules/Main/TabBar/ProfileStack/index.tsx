import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';

const navigations = [
  {
    name: Navigations.Profile,
    component: Profile,
  },
  {
    name: Navigations.ProfileEdit,
    component: ProfileEdit,
  },
];

const Stack = createStackNavigator();

const ProfileStack = (): ReactElement => {
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

export default ProfileStack;
