import {StyleSheet} from 'react-native';
import {COLORS} from '@styles/base';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

export const styles = StyleSheet.create({
  back: {
    backgroundColor: 'rgba(0,0,0,0.71)',
    zIndex: 999,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: COLORS.MAIN_BG,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: CONTAINER_HOR_PADDING,
    zIndex: 1000,
  },
});
