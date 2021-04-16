import {scaleSize} from './mixins';
import {NativeModules, Platform} from 'react-native';

const {StatusBarManager} = NativeModules;

export const CONTAINER_HOR_PADDING = scaleSize(20);
export const CONTAINER_VER_TOP_PADDING = StatusBarManager.HEIGHT;
export const TABBAR_HEIGHT = scaleSize(60);
export const MODAL_HOR_PADDING = scaleSize(16);
export const HEADER_PADDING = 15;
export const HEADER_HEIGHT =
  scaleSize(40) + CONTAINER_VER_TOP_PADDING + HEADER_PADDING;
