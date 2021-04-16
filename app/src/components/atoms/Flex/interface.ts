import {LayoutChangeEvent, StyleProp, ViewStyle} from 'react-native';
import {RefObject} from 'react';
import {AI, DIR, JC} from '@types';

export interface FlexProps {
  size?: number;
  children?: any;
  styles?:
    | StyleProp<ViewStyle>
    | StyleProp<any>
    | StyleProp<ViewStyle>[]
    | StyleProp<any>[];
  dir?: DIR;
  wrap?: boolean;
  jc?: JC;
  ai?: AI;
  full?: boolean;
  animated?: boolean;
  reanimated?: boolean;
  myRef?: RefObject<any>;
  onLayout?: (event: LayoutChangeEvent) => void;
  containerHor?: boolean;
  containerVer?: boolean;
  containerBottom?: boolean;
}
