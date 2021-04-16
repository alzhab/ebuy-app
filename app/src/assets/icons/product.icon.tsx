import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 12;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M1543,7410.608h0a.494.494,0,0,1-.246-.065l-5.977-2.987a.5.5,0,0,1-.277-.448v-5.5a.5.5,0,0,1,.277-.448l5-2.5a.528.528,0,0,1,.225-.052.52.52,0,0,1,.223.052l5.98,2.99a.5.5,0,0,1,.17.124l0,0,0,.005a.5.5,0,0,1,.118.322v5a.5.5,0,0,1-.244.428l-4.984,2.991a.5.5,0,0,1-.2.077H1543Zm-5.5-3.809,5,2.5v-4.382l-5-2.5Zm6,2.424,4-2.4v-3.907l-4,2Zm-.5-5.175,3.881-1.941-4.88-2.441-3.882,1.941Z"
        transform="translate(-1536.5 -7398.608)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
