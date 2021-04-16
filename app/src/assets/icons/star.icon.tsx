import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@styles/base';

const Icon = (props: IconProps & {active?: boolean}): ReactElement => {
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
      {props.active ? (
        <Path
          d="M2.787,7.673l-.634,3.889a.375.375,0,0,0,.552.389L6,10.128l3.3,1.824a.375.375,0,0,0,.552-.389L9.213,7.674l2.68-2.751a.376.376,0,0,0-.212-.633L7.993,3.725,6.339.2a.39.39,0,0,0-.679,0L4.008,3.724.319,4.289a.376.376,0,0,0-.212.633Z"
          fill={color}
        />
      ) : (
        <Path
          d="M2.518,12a.319.319,0,0,1-.194-.067.35.35,0,0,1-.133-.341l.627-3.905L.1,4.93a.356.356,0,0,1-.086-.356.34.34,0,0,1,.268-.238l3.744-.583L5.691.2a.326.326,0,0,1,.6,0L7.972,3.74l3.744.558a.338.338,0,0,1,.268.237.351.351,0,0,1-.088.358L9.2,7.667l.647,3.882a.272.272,0,0,1,.01.08.341.341,0,0,1-.332.348.327.327,0,0,1-.153-.039L6.016,10.1,2.673,11.959A.3.3,0,0,1,2.518,12ZM5.991,1.135,4.548,4.223a.332.332,0,0,1-.249.191l-3.248.506L3.405,7.313a.354.354,0,0,1,.1.307l-.544,3.392,2.9-1.61a.34.34,0,0,1,.158-.04.313.313,0,0,1,.153.04L9.08,10.994,8.516,7.607A.355.355,0,0,1,8.609,7.3l2.347-2.407L7.706,4.405a.342.342,0,0,1-.252-.19Z"
          fill={color}
        />
      )}
    </Svg>
  );
};

export default Icon;
