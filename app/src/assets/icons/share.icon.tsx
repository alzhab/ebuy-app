import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 11;
  const height = 12;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M7.249,10.125a1.868,1.868,0,0,1,.092-.581L3.287,7.233a1.874,1.874,0,1,1,0-2.464L7.341,2.457a1.88,1.88,0,1,1,.371.651L3.657,5.42a1.877,1.877,0,0,1,0,1.161L7.712,8.893a1.874,1.874,0,1,1-.463,1.232Zm.751,0A1.125,1.125,0,1,0,9.124,9,1.126,1.126,0,0,0,8,10.125ZM.75,6A1.125,1.125,0,1,0,1.874,4.875,1.126,1.126,0,0,0,.75,6ZM8,1.875A1.125,1.125,0,1,0,9.123.751,1.125,1.125,0,0,0,8,1.875Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
