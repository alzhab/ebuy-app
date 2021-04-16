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
        d="M2163.35,3737.757a1.065,1.065,0,1,1,1.065,1.065A1.065,1.065,0,0,1,2163.35,3737.757Zm-7.273,0a1.065,1.065,0,1,1,1.065,1.065A1.065,1.065,0,0,1,2156.078,3737.757Zm1.065-2.051a.545.545,0,0,1-.529-.412l-.012-.061-.976-7.319h-1.08a.546.546,0,0,1-.542-.482l0-.064a.545.545,0,0,1,.482-.542l.063,0h1.558a.545.545,0,0,1,.529.412l.012.061.283,2.124h8.527a.546.546,0,0,1,.543.59l-.009.063-1.039,5.194a.545.545,0,0,1-.47.435l-.065,0Z"
        transform="translate(-2154 -3726.822)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
