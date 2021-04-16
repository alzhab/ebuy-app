import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 12;
  const height = 12;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M-4103,7390.083a6.006,6.006,0,0,1,6-6,6.007,6.007,0,0,1,6,6,6.007,6.007,0,0,1-6,6A6.007,6.007,0,0,1-4103,7390.083Zm.861,0a5.145,5.145,0,0,0,5.138,5.14,5.145,5.145,0,0,0,5.14-5.14,5.145,5.145,0,0,0-5.14-5.14A5.145,5.145,0,0,0-4102.138,7390.083Zm4.974.759a.429.429,0,0,1-.43-.429V7386.9a.429.429,0,0,1,.43-.431.429.429,0,0,1,.431.431v3.081h2.82a.43.43,0,0,1,.429.431.429.429,0,0,1-.429.429Z"
        transform="translate(4103 -7384.084)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
