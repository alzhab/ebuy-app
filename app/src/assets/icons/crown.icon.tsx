import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 12;
  const height = 9.5;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M1422,7345.608a1.5,1.5,0,0,1-1.5-1.5v-6.5a.5.5,0,0,1,.5-.5.493.493,0,0,1,.31.111l2.15,1.72,2.684-2.684a.5.5,0,0,1,.707,0l2.683,2.684,2.15-1.72a.493.493,0,0,1,.31-.111.5.5,0,0,1,.5.445l0,.057v6.5a1.5,1.5,0,0,1-1.5,1.5Zm-.5-1.5a.5.5,0,0,0,.442.5l.058,0h9a.5.5,0,0,0,.5-.5v-.5h-10Zm10-1.5v-3.96l-1.687,1.351a.5.5,0,0,1-.619,0l-.047-.041-2.646-2.646-2.647,2.646a.5.5,0,0,1-.353.146.506.506,0,0,1-.312-.109l-1.688-1.351v3.96Z"
        transform="translate(-1420.5 -7336.108)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
