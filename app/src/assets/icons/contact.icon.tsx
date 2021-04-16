import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 12;
  const height = 13;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M1527,7250.607a.5.5,0,0,1-.5-.5v-10a.5.5,0,0,1,.5-.5h11a.5.5,0,0,1,.5.5v10a.5.5,0,0,1-.5.5Zm.5-1h10v-7h-10Zm10-8v-1H1530v1Zm-8.5,0v-1h-1.5v1Zm0,6.5a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5Zm5-1a.5.5,0,0,1-.057-1l.057,0h1a.5.5,0,0,1,.057,1l-.057,0Zm0-2a.5.5,0,0,1-.057-1l.057,0h2a.5.5,0,0,1,.059,1l-.059,0Z"
        transform="translate(-1526.5 -7239.607)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
