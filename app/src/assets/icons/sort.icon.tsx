import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 15;
  const height = 12;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M6.625,12a.711.711,0,0,1,0-1.412h2.5a.711.711,0,0,1,0,1.412ZM4.375,8.47a.668.668,0,0,1-.624-.706.668.668,0,0,1,.624-.705h6.25a.711.711,0,0,1,0,1.411Zm-1.5-3.53a.668.668,0,0,1-.625-.705.668.668,0,0,1,.625-.706h10a.668.668,0,0,1,.625.706.668.668,0,0,1-.625.705ZM.625,1.412A.669.669,0,0,1,0,.706.668.668,0,0,1,.625,0h13.75A.668.668,0,0,1,15,.706a.669.669,0,0,1-.625.706Z"
        transform="translate(0 0)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
