import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 11;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M.5,12a.5.5,0,0,1-.5-.5V10.454A2.5,2.5,0,0,1,1.834,8.043,14.05,14.05,0,0,1,5.5,7.5a14.08,14.08,0,0,1,3.664.543A2.5,2.5,0,0,1,11,10.454V11.5a.5.5,0,0,1-.5.5ZM2.1,9.009A1.5,1.5,0,0,0,1,10.454V11h9v-.545a1.5,1.5,0,0,0-1.012-1.42L8.9,9.007A13.111,13.111,0,0,0,5.5,8.5,13.025,13.025,0,0,0,2.1,9.009ZM2.5,3.5V3A3,3,0,0,1,5.381,0L5.5,0a3,3,0,0,1,3,3v.5a3,3,0,0,1-2.88,3L5.5,6.5A3,3,0,0,1,2.5,3.5ZM5.412,1A2,2,0,0,0,3.5,3v.5a2,2,0,0,0,1.99,2l.1,0A2,2,0,0,0,7.5,3.5V3a2,2,0,0,0-2-2Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
