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
        d="M11.322,12a.669.669,0,0,1-.472-.2l-3.5-3.567.013-.014A4.468,4.468,0,0,1,1.2,7.749a4.685,4.685,0,0,1,.04-6.3,4.464,4.464,0,0,1,6.169-.394A4.681,4.681,0,0,1,8.218,7.3l.066-.071,3.527,3.6a.7.7,0,0,1-.009.97A.668.668,0,0,1,11.322,12ZM4.582,1.3A3.273,3.273,0,1,0,7.853,4.575,3.275,3.275,0,0,0,4.582,1.3Z"
        transform="translate(0)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
