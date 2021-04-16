import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 9;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M7.5,12h-6A1.5,1.5,0,0,1,0,10.5v-9A1.5,1.5,0,0,1,1.5,0h6A1.5,1.5,0,0,1,9,1.5v9A1.5,1.5,0,0,1,7.5,12ZM1.5,1a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5h6a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,7.5,1Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
