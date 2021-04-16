import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 12;
  const height = 10;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M1495,7146.607a1.5,1.5,0,0,1-1.5-1.5v-7a1.5,1.5,0,0,1,1.5-1.5h9a1.5,1.5,0,0,1,1.5,1.5v7a1.5,1.5,0,0,1-1.5,1.5Zm-.5-8.5v7a.5.5,0,0,0,.5.5h9a.5.5,0,0,0,.5-.5v-7a.5.5,0,0,0-.5-.5h-9A.5.5,0,0,0,1494.5,7138.107Zm7,6.5a.5.5,0,0,1-.059-1l.059,0h1.5a.5.5,0,0,1,.057,1l-.057,0Zm-5.5,0a.5.5,0,0,1-.057-1l.057,0h3.5a.5.5,0,0,1,.059,1l-.059,0Zm5.89-2.188a.5.5,0,0,1,.077-.7,1.422,1.422,0,0,0,0-2.219.5.5,0,1,1,.626-.78,2.423,2.423,0,0,1,0,3.781.5.5,0,0,1-.7-.079Zm-2.14-1.812a.75.75,0,1,1,.75.75A.749.749,0,0,1,1499.75,7140.607Z"
        transform="translate(-1493.499 -7136.606)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
