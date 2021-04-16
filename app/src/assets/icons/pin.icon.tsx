import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.NEUTRAL_DARK;

  const size = props.sizeHeight;
  const width = 9;
  const height = 12;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M4.5,12a.486.486,0,0,1-.357-.157l-.075-.081c-.15-.161-.317-.348-.483-.541l-.2-.229C2.893,10.41,2.427,9.815,2,9.224.655,7.342,0,5.861,0,4.7a4.751,4.751,0,0,1,1.337-3.38,4.461,4.461,0,0,1,6.326,0A4.751,4.751,0,0,1,9,4.7,5.894,5.894,0,0,1,8.155,7.39,17.4,17.4,0,0,1,6.9,9.361c-.417.575-.889,1.169-1.4,1.766-.155.18-.311.357-.463.525l-.179.194A.485.485,0,0,1,4.5,12Zm0-10.957A3.433,3.433,0,0,0,2.036,2.062,3.7,3.7,0,0,0,1,4.7,7.936,7.936,0,0,0,2.8,8.6c.4.556.846,1.129,1.333,1.7l.07.081.027.032.266.3.253-.289c.489-.569.942-1.141,1.348-1.7A16.339,16.339,0,0,0,7.283,6.882,4.992,4.992,0,0,0,8,4.7,3.7,3.7,0,0,0,6.964,2.062,3.432,3.432,0,0,0,4.5,1.043Zm0,5.739A2.047,2.047,0,0,1,2.5,4.7a2.047,2.047,0,0,1,2-2.087A2.047,2.047,0,0,1,6.5,4.7,2.048,2.048,0,0,1,4.5,6.782Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
