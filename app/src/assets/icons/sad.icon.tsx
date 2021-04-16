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
        d="M6,8a6,6,0,1,0,6,6A6,6,0,0,0,6,8Zm3.484,9.348V14.581a.581.581,0,0,0-1.161,0v3.663a4.829,4.829,0,0,1-4.645,0V14.581a.581.581,0,0,0-1.161,0v2.768a4.839,4.839,0,1,1,6.968,0Zm-4.5-3.869a.291.291,0,0,0,.148-.3A1.454,1.454,0,0,0,3.68,12.161,1.452,1.452,0,0,0,2.233,13.18a.289.289,0,0,0,.479.261l.23-.206a1.256,1.256,0,0,1,1.476,0l.23.206A.285.285,0,0,0,4.979,13.48Zm3.344-1.319A1.45,1.45,0,0,0,6.876,13.18a.289.289,0,0,0,.479.261l.23-.206a1.256,1.256,0,0,1,1.476,0l.23.206a.289.289,0,0,0,.479-.261,1.45,1.45,0,0,0-1.447-1.019ZM6,14.387a1.463,1.463,0,0,0-1.355,1.548A1.463,1.463,0,0,0,6,17.484a1.463,1.463,0,0,0,1.355-1.548A1.463,1.463,0,0,0,6,14.387Z"
        transform="translate(0 -8)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
