import {StyleSheet} from 'react-native';
import {scaleFont, scaleSize} from '@styles/mixins';
import {COLORS} from '@styles/base';

export const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    position: 'relative',
    marginBottom: scaleSize(27),
  },
});
