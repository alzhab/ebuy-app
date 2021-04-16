import {Animated, Dimensions, PixelRatio} from 'react-native';
import {COLORS} from '@styles/base';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scaleSize = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale();

export const boxShadow = (
  color = COLORS.NEUTRAL_DARK,
  offset = {height: 0, width: 0},
  radius = 4,
  opacity = 0.15,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};

export const POPUP_ZINDEX = 999;
