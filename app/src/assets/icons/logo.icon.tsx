import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 16;
  const height = 14;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        fill={color}
        d="M13.486,0,16,4.375H13.192L11.269,0ZM9.931,0l1.922,4.375H4.147L6.069,0ZM2.514,0H4.731L2.808,4.375H0ZM0,5.25H2.8l3.417,6.882a.084.084,0,0,1-.139.09Zm4.117,0h7.767l-3.806,8.7a.084.084,0,0,1-.153,0Zm5.669,6.882L13.2,5.25H16L9.925,12.22a.083.083,0,0,1-.139-.087Z"
      />
    </Svg>
  );
};

export default Icon;
