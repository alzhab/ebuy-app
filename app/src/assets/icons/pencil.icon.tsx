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
        d="M6.8,2.193l3,3L3.289,11.709.614,12a.563.563,0,0,1-.621-.621l.3-2.677L6.8,2.193Zm4.856-.447L10.251.337a1.126,1.126,0,0,0-1.592,0L7.334,1.663l3,3L11.66,3.338a1.126,1.126,0,0,0,0-1.592Z"
        transform="translate(0.011 -0.007)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
