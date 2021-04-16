import * as React from 'react';
import {NavigationParams} from 'react-navigation';
import {Navigations} from '../types';

export const navigationRef: any = React.createRef();

function navigate(name: Navigations, params: NavigationParams = {}) {
  navigationRef.current?.navigate(name, params);
}

export default navigate;
