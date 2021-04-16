import React from 'react';
import {AI, ButtonTypes, JC, TextAlign} from '@types';
import Flex from '../../atoms/Flex';
import {RefreshIcon, SadIcon} from '@icons';
import {Colors, COLORS, TextFamily} from '@styles/base';
import {Button, Text} from '@components';
import {homeStore} from '@stores';

interface IProps {
  refresh: () => void
}

const Empty = (props: IProps) => {
  return (
    <Flex ai={AI.center} full size={1}>
      <Flex full size={0.53} ai={AI.center} jc={JC.center}>
        <SadIcon color={COLORS.PRIMARY} sizeHeight={150} />
      </Flex>

      <Flex full size={0.53} ai={AI.center}>
        <Text
          textAlign={TextAlign.center}
          styles={{marginBottom: 15}}
          color={Colors.NEUTRAL_GRAY_DARK}
          size={30}
          family={TextFamily.BOLD}>
          Sorry
        </Text>
        <Text
          textAlign={TextAlign.center}
          styles={{marginBottom: 30}}
          size={15}
          color={Colors.NEUTRAL_GRAY_DARK}
          family={TextFamily.SEMIBOLD}>
          We have nothing to show you
        </Text>
      </Flex>

      <Flex full size={1} ai={AI.center} jc={JC.center}>
        <Button
          empty
          styles={{width: 50, height: 50, borderRadius: 50}}
          click={props.refresh}
          type={ButtonTypes.BORDERED}>
          <RefreshIcon color={COLORS.PRIMARY} sizeHeight={20} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Empty;
