import React, {ReactElement, useEffect, useMemo, useRef, useState} from 'react';
import {useLayoutEffect} from 'react';
import {Animated, StyleProp, Text} from 'react-native';

interface Interpolation {
  name: string;
  inputRange?: number[];
  outputRange: number[] | string[];
  dir: 'to' | 'from' | 'both' | string;
}

interface TimingInterface {
  useNativeDriver?: boolean;
  duration?: number;
  delay?: number;
}

interface Props {
  children?: any;
  interpolations: Interpolation[];
  show?: boolean;
  remove?: boolean;
  style?: StyleProp<any>;
  toConfig?: TimingInterface;
  fromConfig?: TimingInterface;
}

const AnimateItTiming = (props: Props): ReactElement => {
  const {
    show = true,
    children,
    interpolations,
    style = {},
    remove = false,
    toConfig,
    fromConfig,
  } = props;

  const toAnimate = useRef(new Animated.Value(0)).current;
  const fromAnimate = useRef(new Animated.Value(1)).current;

  const defaultConfig = {
    useNativeDriver: true,
    duration: 300,
    delay: 0,
  };
  const [hide, setHide] = useState(remove ? !show : false);

  useEffect(() => {
    if (show) {
      if (remove) {
        setHide(false);
      } else {
        toAnim();
      }
    }

    if (!show) {
      if (remove) {
        if (!hide) {
          fromAnim();
        }
      } else {
        fromAnim();
      }
    }
  }, [show]);

  useEffect(() => {
    if (!hide && hide !== show) {
      toAnim();
    }
  }, [hide]);

  const toAnim = () => {
    const {useNativeDriver = true, duration = 300, delay = 0} =
      toConfig || defaultConfig;

    Animated.timing(toAnimate, {
      toValue: 1,
      useNativeDriver,
      duration,
      delay,
    }).start();
  };

  const fromAnim = () => {
    const {useNativeDriver = true, duration = 300, delay = 0} =
      fromConfig || defaultConfig;

    Animated.timing(fromAnimate, {
      toValue: 0,
      useNativeDriver,
      duration,
      delay,
    }).start(({finished}) => {
      if (remove && finished) {
        setHide(true);
      }
    });
  };

  const toAnimStyle: StyleProp<any> = {};

  const fromAnimStyle: StyleProp<any> = {};

  interpolations.forEach((inter) => {
    const transformStyles = [
      'decomposedMatrix',
      'rotation',
      'scaleX',
      'scaleY',
      'diameter',
      'transformMatrix',
      'translateX',
      'translateY',
    ];

    const toInterpolation = toAnimate.interpolate({
      inputRange: inter.inputRange ? inter.inputRange : [0, 1],
      outputRange: inter.outputRange,
    });

    const fromInterpolation = fromAnimate.interpolate({
      inputRange: inter.inputRange ? inter.inputRange : [0, 1],
      outputRange: inter.outputRange,
    });

    if (transformStyles.includes(inter.name)) {
      if (inter.dir === 'to' || inter.dir === 'both') {
        if (!toAnimStyle.transform) {
          toAnimStyle.transform = [];
        }

        toAnimStyle.transform.push({[inter.name]: toInterpolation});
      }

      if (inter.dir === 'from' || inter.dir === 'both') {
        if (!fromAnimStyle.transform) {
          fromAnimStyle.transform = [];
        }

        fromAnimStyle.transform.push({[inter.name]: fromInterpolation});
      }
    } else {
      if (inter.dir === 'to' || inter.dir === 'both') {
        toAnimStyle[inter.name] = toInterpolation;
      }

      if (inter.dir === 'from' || inter.dir === 'both') {
        fromAnimStyle[inter.name] = fromInterpolation;
      }
    }
  });

  const styles = useMemo(() => {
    return [style, show ? toAnimStyle : fromAnimStyle];
  }, [show]);

  return hide ? (
    <></>
  ) : (
    <Animated.View style={styles}>{children}</Animated.View>
  );
};

// Memo что бы компонент не обновлялся при обновлений show
export default AnimateItTiming;
