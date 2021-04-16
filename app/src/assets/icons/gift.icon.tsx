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
        d="M6,12H2.5A1.5,1.5,0,0,1,1,10.588L1,10.5v-4a.5.5,0,0,1,1-.058L2,6.5v4a.5.5,0,0,0,.442.5L2.5,11h3V5.5H.5A.5.5,0,0,1,0,5V3a.5.5,0,0,1,.5-.5H1.69A1.874,1.874,0,0,1,1.5,1.735,1.794,1.794,0,0,1,3.291,0h.057l.115,0A2.959,2.959,0,0,1,5.819,1.472c.065.1.125.193.179.285.054-.093.113-.188.179-.285A3.6,3.6,0,0,1,7.252.4,2.622,2.622,0,0,1,8.649,0L8.7,0A1.8,1.8,0,0,1,10.5,1.735v.032a1.789,1.789,0,0,1-.185.734H11.5A.5.5,0,0,1,12,3V5a.5.5,0,0,1-.5.5h-5V11h3a.5.5,0,0,0,.5-.442l0-.058v-4a.5.5,0,0,1,1-.058L11,6.5v4A1.5,1.5,0,0,1,9.586,12L9.5,12Zm5-7.5v-1H6.5v1ZM1,4.5H5.5v-1H1ZM2.5,1.735a.8.8,0,0,0,.807.767H5.261L5.173,2.33l-.088-.152L4.99,2.03A1.993,1.993,0,0,0,3.333,1H3.291A.786.786,0,0,0,2.5,1.735Zm4.509.3a4.021,4.021,0,0,0-.264.454L6.735,2.5h2a.8.8,0,0,0,.761-.693l0-.057,0-.054A.8.8,0,0,0,8.74,1H8.665A1.992,1.992,0,0,0,7.007,2.031Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
