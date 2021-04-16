import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 13;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M6.084,11.822,1.119,6.713a4.017,4.017,0,0,1,0-5.563L1.23,1.04a3.734,3.734,0,0,1,5.28.109L6.5,1.139l.1-.1a3.732,3.732,0,0,1,5.169,0l.111.109a4.017,4.017,0,0,1,0,5.563l-4.966,5.11a.575.575,0,0,1-.831,0Z"
        transform="translate(0 0)"
        fill={color}
        
      />
    </Svg>
  );
};

export default Icon;
