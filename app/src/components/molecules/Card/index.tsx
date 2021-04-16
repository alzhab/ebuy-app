import React from 'react';
import {Flex} from '../../atoms';
import {COLORS} from '@styles/base';
import {boxShadow} from '@styles/mixins';
import {FlexProps} from '../../atoms/Flex/interface';

interface IProps {
  children: any;
  padding?: {
    top: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const Card = (props: FlexProps & IProps) => {
  const padding = ({
    top = 20,
    right = 16,
    bottom,
    left,
  }: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }) => {
    return {
      paddingTop: top,
      paddingRight: Number.isInteger(right) ? right : top,
      paddingBottom: Number.isInteger(bottom) ? bottom : top,
      paddingLeft: Number.isInteger(left)
        ? left
        : Number.isInteger(right)
        ? right
        : top,
    };
  };

  return (
    <Flex
      {...props}
      styles={{
        borderRadius: 4,
        backgroundColor: COLORS.MAIN_BG,
        ...padding(props.padding || {top: 20, right: 16}),
        ...boxShadow(),
        ...props.styles,
      }}>
      {props.children}
    </Flex>
  );
};

export default Card;
