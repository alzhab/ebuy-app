import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 12;
  const height = 11.5;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M2530,7127.607a.5.5,0,0,1-.5-.442l0-.059v-5a.5.5,0,0,1,1-.057l0,.057v4.5h2v-2.5a.5.5,0,0,1,.442-.5l.059,0h2a.5.5,0,0,1,.5.442l0,.057v2.5h2v-4.5a.5.5,0,0,1,.442-.5l.059,0a.5.5,0,0,1,.5.442l0,.057v5a.5.5,0,0,1-.44.5l-.059,0Zm4.5-1v-2h-1v2Zm-6.343-5.137-.043-.046a.5.5,0,0,1,.023-.66l.046-.043,5.5-4.5a.5.5,0,0,1,.581-.038l.052.038,5.5,4.5a.5.5,0,0,1-.583.811l-.052-.036-5.182-4.243-5.184,4.243a.5.5,0,0,1-.66-.025Z"
        transform="translate(-2528 -7116.108)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
