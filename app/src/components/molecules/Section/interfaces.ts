import {ReactElement} from 'react';
import {StyleProp} from 'react-native';

export interface Props {
  title: string;
  right?: ReactElement,
  style?: StyleProp<any>,
  children: any,
  headerBottom?: number,
  bottom?: number,
  headerContainer?: boolean;
  contentContainer?: boolean;
}
