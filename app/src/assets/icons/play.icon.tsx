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
        d="M-1683.053,7658.055a6.007,6.007,0,0,1,6-6,6.005,6.005,0,0,1,6,6,6.007,6.007,0,0,1-6,6A6.009,6.009,0,0,1-1683.053,7658.055Zm.846,0a5.16,5.16,0,0,0,5.155,5.155,5.16,5.16,0,0,0,5.155-5.155,5.161,5.161,0,0,0-5.155-5.155A5.161,5.161,0,0,0-1682.206,7658.055Zm3.98,3.093a.432.432,0,0,1-.269-.39v-5.464a.421.421,0,0,1,.258-.393.433.433,0,0,1,.465.092l2.731,2.733a.391.391,0,0,1,.123.3.415.415,0,0,1-.123.3l-2.722,2.731a.408.408,0,0,1-.3.123A.41.41,0,0,1-1678.227,7661.148Z"
        transform="translate(1683.053 -7652.056)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
