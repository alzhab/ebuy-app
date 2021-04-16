import React from 'react';
import AnimateItTiming from '../../atoms/AnimateItTiming';
import {Text} from '../../atoms';
import {scaleSize} from '@styles/mixins';

const NotFound = (props: { show: boolean }) => {
  return (
    <AnimateItTiming
      show={props.show}
      remove
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
      toConfig={{useNativeDriver: false}}
      fromConfig={{useNativeDriver: false}}
      interpolations={[{
        dir: 'both',
        outputRange: [0, 1],
        name: 'opacity'
      }]}>
      <Text>Sorry, we not found anything :-(</Text>
    </AnimateItTiming>
  );
};

export default NotFound;
