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
        d="M1.757,10.243a6,6,0,0,1,8.487-8.487,6,6,0,0,1-8.487,8.487Zm.662-7.824A5.064,5.064,0,0,0,9.581,9.581,5.064,5.064,0,0,0,2.419,2.419ZM5.368,8.183A.633.633,0,1,1,6,8.816.633.633,0,0,1,5.368,8.183Zm.164-1.675V3.489a.469.469,0,1,1,.937,0V6.508a.469.469,0,0,1-.937,0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
