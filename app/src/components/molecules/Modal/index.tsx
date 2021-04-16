import React from 'react';
import {AnimateItTiming, Flex} from '../../atoms';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AI, JC} from '@types';

const MyModal = (props: {open: boolean; close: () => void; children: any}) => {
  return (
    <AnimateItTiming
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: 'rgba(0,0,0,0.69)',
        },
      ]}
      show={props.open}
      remove
      interpolations={[{dir: 'both', outputRange: [0, 1], name: 'opacity'}]}>
      <TouchableOpacity
        onPress={props.close}
        style={{flex: 1, width: '100%'}}
      />
      <Flex containerHor full ai={AI.center} jc={JC.center}>
        {props.children}
      </Flex>

      <TouchableOpacity
        onPress={props.close}
        style={{flex: 1, width: '100%'}}
      />
    </AnimateItTiming>
  );
};

export default MyModal;
