import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 6;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M.159,6.428l4.9,5.395a.517.517,0,0,0,.779,0,.649.649,0,0,0,0-.856L1.327,6,5.838,1.034a.649.649,0,0,0,0-.857.517.517,0,0,0-.779,0L.159,5.572A.656.656,0,0,0,.159,6.428Z"
        transform="translate(6 12) rotate(180)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
