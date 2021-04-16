import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 6;
  const height = 12;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M499.8,9.28a.818.818,0,0,0,0-1.061.616.616,0,0,0-.943,0L494.2,13.47a.818.818,0,0,0,0,1.061l4.667,5.25a.615.615,0,0,0,.943,0,.818.818,0,0,0,0-1.061L495.61,14Z"
        transform="translate(-494 -8)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
