import React, {useState} from 'react';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {Colors, COLORS} from '@styles/base';
import {Button, Flex, Text} from '@components';

const AmountInput = () => {
  const [amount, setAmount] = useState(1);

  const minus = () => {
    if (amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const plus = () => {
    setAmount(amount + 1);
  };

  return (
    <Flex
      dir={DIR.row}
      ai={AI.stretch}
      jc={JC.spaceAround}
      styles={{
        borderWidth: 1,
        borderColor: COLORS.NEUTRAL_GRAY_DARK,
        height: 30,
        width: 95,
        borderRadius: 4,
      }}>
      <Button
        styles={{width: '30%'}}
        empty
        type={ButtonTypes.EMPTY}
        click={minus}
        title={'-'}
      />
      <Text color={Colors.PRIMARY} size={16} lineHeight={25}>
        {amount}
      </Text>
      <Button
        styles={{width: '30%'}}
        empty
        type={ButtonTypes.EMPTY}
        click={plus}
        title={'+'}
      />
    </Flex>
  );
};

export default AmountInput;
