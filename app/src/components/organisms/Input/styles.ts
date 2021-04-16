import {StyleSheet} from 'react-native';
import {scaleFont, scaleSize} from '@styles/mixins';
import {COLORS} from '@styles/base';

export const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    fontSize: scaleFont(18),
    paddingVertical: scaleSize(13),
    paddingHorizontal: scaleSize(10),
    backgroundColor: COLORS.NEUTRAL_LIGHT,
    borderWidth: 1,
    borderRadius: 8,
  },
});
