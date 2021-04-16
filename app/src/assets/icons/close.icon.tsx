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
        d="M8.275,86l3.411-3.411a1.072,1.072,0,0,0,0-1.516l-.758-.758a1.072,1.072,0,0,0-1.516,0L6,83.725,2.589,80.314a1.072,1.072,0,0,0-1.516,0l-.758.758a1.072,1.072,0,0,0,0,1.516L3.725,86,.314,89.411a1.072,1.072,0,0,0,0,1.516l.758.758a1.072,1.072,0,0,0,1.516,0L6,88.275l3.411,3.411a1.072,1.072,0,0,0,1.516,0l.758-.758a1.072,1.072,0,0,0,0-1.516Z"
        transform="translate(0 -80)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
