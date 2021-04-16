import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 17;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M16.79.208a.717.717,0,0,0-1.011,0L5.666,10.289,1.22,5.89a.717.717,0,0,0-1.011,0,.707.707,0,0,0,0,1l4.954,4.9a.725.725,0,0,0,1.011,0L16.79,1.213a.706.706,0,0,0,0-1C16.511-.069,17.07.485,16.79.208Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
