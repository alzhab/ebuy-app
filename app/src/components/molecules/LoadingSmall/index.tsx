import React from 'react';
import AnimateItTiming from '../../atoms/AnimateItTiming';
import {Text} from '../../atoms';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

const LoadingSmall = (props: {show: boolean}) => {
  return (
    <AnimateItTiming
      show={props.show}
      remove
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        },
      ]}
      toConfig={{useNativeDriver: false}}
      fromConfig={{useNativeDriver: false}}
      interpolations={[
        {
          outputRange: [0, 1],
          name: 'opacity',
          dir: 'both',
        },
      ]}>
      <LottieView
        style={{width: '50%'}}
        source={require('@assets/images/spinner.json')}
        autoPlay
        loop
      />
    </AnimateItTiming>
  );
};

export default LoadingSmall;
