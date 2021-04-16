import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 9;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M.5,12a.5.5,0,0,1-.5-.441L0,11.5V.5A.5.5,0,0,1,.442,0L.5,0h7A.5.5,0,0,1,8,.442L8,.5V2a.5.5,0,0,1-1,.057L7,2V1H1V11H7V10a.5.5,0,0,1,.442-.5l.058,0a.5.5,0,0,1,.5.441L8,10v1.5a.5.5,0,0,1-.441.5L7.5,12ZM6.147,8.354a.5.5,0,0,1-.042-.66l.042-.048L7.293,6.5H2.5a.5.5,0,0,1-.059-1l.059,0H7.293L6.147,4.353a.5.5,0,0,1-.042-.66l.042-.048a.5.5,0,0,1,.66-.042l.048.042L8.839,5.632a.5.5,0,0,1,.017.719l0,0-2,2a.5.5,0,0,1-.707,0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
