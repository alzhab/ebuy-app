import {ReactElement} from 'react';
import {StyleProp} from 'react-native';

export interface Props {
  data: any[],
  style?: StyleProp<any>,
  bottom?: number,
  container?: boolean,
  horizontal?: boolean,
  loading?: boolean,
  item: (data: {item: any, index: number}) => ReactElement,
  footer?: () => ReactElement
}
