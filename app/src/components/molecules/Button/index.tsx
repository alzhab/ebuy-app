import React, {ReactElement} from 'react';
import {ButtonProps, ButtonStylesInterface} from './interfaces';
import {TouchableOpacity} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {COLORS, Colors, TextFamily} from '@styles/base';
import {Flex, Text} from '../../atoms';
import {AI, ButtonTypes, DIR, JC, TextAlign} from '@types';

const Index = (props: ButtonProps): ReactElement => {
  const type = props.type || 'PRIMARY';
  const shadow = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  };
  const isUnpressed = props.type === 'UNPRESSED';

  const styles: ButtonStylesInterface = {
    borderRadius: props.solid ? 0 : scaleSize(5),
    alignItems: 'center',
    justifyContent: 'center',
  };
  let color = Colors.NEUTRAL_LIGHT;

  switch (type) {
    case ButtonTypes.PRIMARY:
      color = Colors.NEUTRAL_LIGHT;
      styles.backgroundColor = COLORS.PRIMARY;
      break;
    case ButtonTypes.DISABLED:
      color = Colors.NEUTRAL_LIGHT;
      styles.backgroundColor = COLORS.NEUTRAL_GRAY_DARK;
      break;
    case ButtonTypes.EMPTY:
      styles.backgroundColor = 'transparent';
      styles.borderWidth = 0;
      styles.borderColor = 'transparent';
      color = Colors.NEUTRAL_DARK;
      break;
    case ButtonTypes.BORDERED:
      styles.backgroundColor = 'transparent';
      styles.borderWidth = 1;
      styles.borderColor = COLORS.PRIMARY;
      color = Colors.PRIMARY;
      break;
    case ButtonTypes.CIRCLE:
      styles.borderRadius = 100;
      styles.backgroundColor = COLORS.NEUTRAL_LIGHT;
      styles.borderWidth = 1;
      styles.borderColor = 'transparent';
      color = Colors.PRIMARY;
      break;
  }

  if (props.full) {
    styles.width = '100%';
  }

  return (
    <TouchableOpacity
      disabled={type === ButtonTypes.DISABLED}
      activeOpacity={props.activeOpacity ? props.activeOpacity : 0.9}
      onPress={() => {
        if (type !== ButtonTypes.DISABLED) {
          props.click();
        }
      }}
      style={[
        {
          paddingVertical:
            props.empty || type === ButtonTypes.CIRCLE ? 0 : scaleSize(18),
          paddingHorizontal:
            props.empty || type === ButtonTypes.CIRCLE ? 0 : scaleSize(15),
        },
        styles,
        isUnpressed && shadow,
        props.styles,
      ]}>
      <Flex
        dir={props.icon ? DIR.row : DIR.column}
        full
        ai={AI.center}
        jc={JC.center}>
        {props.icon ? (
          <Flex styles={{marginRight: 14}}>{props.icon}</Flex>
        ) : null}

        {props.title ? (
          <Text
            color={props.color || color}
            size={props.size}
            family={props.family || TextFamily.BOLD}
            textAlign={TextAlign.center}>
            {props.title}
          </Text>
        ) : null}

        {props.children ? props.children : null}
      </Flex>
    </TouchableOpacity>
  );
};

export default Index;
