import {StyleProp} from 'react-native';
import {Colors, TextFamily, TextSize} from '@styles/base';
import {TextAlign} from '@types';

export interface TextProps {
  children: any,
  styles?: StyleProp<any>,
  size?: TextSize,
  family?: TextFamily,
  color?: Colors,
  animated?: boolean,
  numberOfLines?: number,
  textAlign?: TextAlign,
  full?: boolean;
  lineHeight?: number;
  letterSpacing?: number
}
