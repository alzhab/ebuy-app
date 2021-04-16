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
        d="M1068,7630.609v-.263l-.139-.051c-.056-.022-.111-.044-.166-.069l-.131-.061-.184.185a1.5,1.5,0,0,1-2.049.068l-.072-.068a1.5,1.5,0,0,1,0-2.121l.184-.185-.061-.132c-.022-.051-.045-.106-.069-.166l-.051-.139H1065a1.5,1.5,0,0,1-1.5-1.411l0-.088a1.5,1.5,0,0,1,1.5-1.5h.262l.051-.137c.022-.057.045-.112.069-.166l.061-.133-.184-.185a1.5,1.5,0,0,1-.068-2.049l.068-.072a1.5,1.5,0,0,1,2.121,0l.184.185.132-.061c.055-.024.11-.047.166-.069l.138-.051v-.262a1.5,1.5,0,0,1,1.413-1.5l.088,0a1.5,1.5,0,0,1,1.5,1.5v.262l.139.051c.056.022.111.045.166.069l.131.061.185-.185a1.5,1.5,0,0,1,2.049-.067l.072.067a1.5,1.5,0,0,1,0,2.121l-.185.185.061.133c.023.051.045.105.069.166l.051.137H1074a1.5,1.5,0,0,1,1.5,1.413l0,.088a1.5,1.5,0,0,1-1.5,1.5h-.262l-.052.14c-.019.05-.04.1-.068.165l-.061.132.185.185a1.5,1.5,0,0,1,.068,2.049l-.068.072a1.5,1.5,0,0,1-2.121,0l-.185-.185-.131.062c-.06.026-.115.049-.166.068l-.139.051v.263a1.5,1.5,0,0,1-1.411,1.5l-.088,0A1.5,1.5,0,0,1,1068,7630.609Zm-.274-1.488a3.481,3.481,0,0,0,.9.372.5.5,0,0,1,.376.484v.632a.5.5,0,0,0,1,0v-.632a.5.5,0,0,1,.375-.484,3.51,3.51,0,0,0,.9-.372.5.5,0,0,1,.254-.069.5.5,0,0,1,.353.146l.446.446a.5.5,0,1,0,.707-.707l-.446-.446a.5.5,0,0,1-.077-.607,3.44,3.44,0,0,0,.372-.9.5.5,0,0,1,.484-.375H1074a.5.5,0,1,0,0-1h-.631a.5.5,0,0,1-.484-.375,3.466,3.466,0,0,0-.372-.9.5.5,0,0,1,.077-.608l.446-.446a.492.492,0,0,0,.147-.353.5.5,0,0,0-.854-.354l-.446.446a.5.5,0,0,1-.354.147.5.5,0,0,1-.253-.069,3.507,3.507,0,0,0-.9-.372.5.5,0,0,1-.375-.484v-.631a.5.5,0,1,0-1,0v.631a.5.5,0,0,1-.376.484,3.5,3.5,0,0,0-.9.372.5.5,0,0,1-.253.069.5.5,0,0,1-.355-.147l-.446-.446a.5.5,0,1,0-.706.707l.446.446a.5.5,0,0,1,.077.608,3.487,3.487,0,0,0-.372.9.5.5,0,0,1-.484.375H1065a.5.5,0,1,0,0,1h.631a.5.5,0,0,1,.484.375,3.494,3.494,0,0,0,.372.9.5.5,0,0,1-.077.607l-.446.446a.5.5,0,0,0,0,.707.5.5,0,0,0,.706,0l.446-.446a.5.5,0,0,1,.354-.146A.5.5,0,0,1,1067.725,7629.121Zm-.225-3.013a2,2,0,1,1,2,2A2,2,0,0,1,1067.5,7626.108Z"
        transform="translate(-1063.5 -7620.107)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
