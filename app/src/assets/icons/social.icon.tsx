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
        d="M7,12a.5.5,0,0,1-.5-.5v-.583a1.479,1.479,0,0,1,.557-1.168A3.443,3.443,0,0,1,9.249,9a3.44,3.44,0,0,1,2.193.75A1.478,1.478,0,0,1,12,10.917V11.5a.5.5,0,0,1-.5.5Zm.679-1.468a.49.49,0,0,0-.18.385V11H11v-.082a.5.5,0,0,0-.134-.344l-.046-.042a2.583,2.583,0,0,0-3.141,0ZM.5,12a.5.5,0,0,1-.5-.5v-.583A1.477,1.477,0,0,1,.558,9.749,3.437,3.437,0,0,1,2.75,9a3.437,3.437,0,0,1,2.191.75A1.478,1.478,0,0,1,5.5,10.917V11.5A.5.5,0,0,1,5,12Zm.681-1.468A.487.487,0,0,0,1,10.917V11H4.5v-.082a.487.487,0,0,0-.135-.344l-.045-.042A2.463,2.463,0,0,0,2.75,10,2.461,2.461,0,0,0,1.18,10.532ZM7.5,6.75A1.75,1.75,0,1,1,9.249,8.5,1.752,1.752,0,0,1,7.5,6.75Zm1,0A.75.75,0,1,0,9.249,6,.751.751,0,0,0,8.5,6.75ZM1,6.75A1.75,1.75,0,1,1,2.749,8.5,1.752,1.752,0,0,1,1,6.75Zm1,0A.75.75,0,1,0,2.749,6,.751.751,0,0,0,2,6.75ZM5,5.555,5,5.5V.5A.5.5,0,0,1,5.5,0h6a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5H8.175L5.812,5.89A.492.492,0,0,1,5.5,6,.5.5,0,0,1,5,5.555Zm1-1.1L7.687,3.109A.5.5,0,0,1,7.932,3L8,3h3V1H6Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
