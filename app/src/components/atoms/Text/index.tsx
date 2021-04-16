import React, {ReactElement, useContext} from 'react';
import {Animated, Text} from 'react-native';
import {TextProps} from './interfaces';
import {COLORS, TextFamily} from '@styles/base';
import {scaleFont} from '@styles/mixins';
import {TextAlign} from '@types';

const MyText = (props: TextProps): ReactElement => {
  const fontSizeName = props.size || 14;
  const fontSize = scaleFont(fontSizeName);
  const fontFamily = props.family || TextFamily.REGULAR;
  const Container = props.animated ? Animated.Text : Text;

  const styles = {
    width: props.full ? '100%' : null,
    color: props.color ? COLORS[props.color] : COLORS.NEUTRAL_DARK,
    textAlign: props.textAlign || TextAlign.left,
    fontSize,
    fontFamily,
    lineHeight: props.lineHeight ? props.lineHeight : fontSize,
    letterSpacing: props.letterSpacing,
  };

  return (
    <Container
      allowFontScaling={false}
      style={[styles, props.styles]}
      numberOfLines={props.numberOfLines ? props.numberOfLines : 0}>
      {props.children}
    </Container>
  );
};

export default MyText;
