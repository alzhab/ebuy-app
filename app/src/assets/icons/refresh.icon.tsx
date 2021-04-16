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
        d="M14.011,8a5.98,5.98,0,0,1,4.134,1.662l.864-.864A.581.581,0,0,1,20,9.208v3.243a.581.581,0,0,1-.581.581H16.176a.581.581,0,0,1-.411-.991l1.01-1.01a4.064,4.064,0,1,0-.1,6.028.29.29,0,0,1,.4.013l.96.96a.291.291,0,0,1-.012.422A6,6,0,1,1,14.011,8Z"
        transform="translate(-8 -8)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
