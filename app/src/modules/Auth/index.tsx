import React, {ReactElement} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Navigations} from '@types';
import Signin from './Signin';
import Signup from './Signup';

const navigations = [
  {
    name: Navigations.Auth_SignIn,
    component: Signin,
  },
  {
    name: Navigations.Auth_SignUp,
    component: Signup,
  },
];

const Stack = createStackNavigator();

const AuthNavigaiton = (): ReactElement => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
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

export default AuthNavigaiton;
