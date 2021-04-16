import React, {ReactElement} from 'react';
import {Props} from './interfaces';
import {styles} from './styles';
import {AnimateItTiming, Text} from '../../atoms';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {WINDOW_HEIGHT} from '@styles/mixins';

const Loading = (props: Props): ReactElement | null => {
  return (
    <AnimateItTiming
      remove
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
      ]}
      show={props.loading}
      interpolations={[
        {
          dir: 'both',
          name: 'opacity',
          outputRange: [0, 1],
        },
      ]}>
      <LottieView
        style={{width: '40%'}}
        source={require('@assets/images/spinner.json')}
        autoPlay
        loop
      />
    </AnimateItTiming>
  );
};

export default Loading;
