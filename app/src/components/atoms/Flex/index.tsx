import React, {ReactElement, useRef} from 'react';
import {Animated, LayoutChangeEvent, StyleProp, View} from 'react-native';
import {FlexProps} from './interface';
import {
  CONTAINER_HOR_PADDING,
  CONTAINER_VER_TOP_PADDING,
} from '@styles/spacing';

const Flex = (props: FlexProps): ReactElement => {
  const styles: StyleProp<any> = {
    flexDirection: props.dir || 'column',
    alignItems: props.ai || 'flex-start',
    justifyContent: props.jc || 'flex-start',
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
  };
  const ref = useRef<any>(null);
  const Container: any = props.animated ? Animated.View : View;

  if (props.size) {
    styles.flex = props.size;
  }

  if (props.full) {
    styles.width = '100%';
  }

  return (
    <Container
      onLayout={(event: LayoutChangeEvent) => {
        if (props.onLayout) {
          props.onLayout(event);
        }
      }}
      ref={props.myRef ? props.myRef : ref}
      style={[
        props.containerVer || props.containerHor
          ? {
              paddingHorizontal: props.containerHor ? CONTAINER_HOR_PADDING : 0,
              paddingTop: props.containerVer ? CONTAINER_VER_TOP_PADDING : 0,
              paddingBottom:
                props.containerVer || props.containerBottom
                  ? CONTAINER_VER_TOP_PADDING
                  : 0,
            }
          : null,
        styles,
        props.styles,
      ]}>
      {props.children}
    </Container>
  );
};

export default Flex;
