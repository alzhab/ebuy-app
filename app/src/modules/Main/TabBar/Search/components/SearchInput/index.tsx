import React, {useEffect, useRef} from 'react';
import {AI, ButtonTypes, DIR, JC} from '@types';
import {COLORS} from '@styles/base';
import {AnimateItTiming, Button, Flex} from '@components';
import {CloseIcon, SearchIcon} from '@icons';
import {TextInput} from 'react-native';
import {scaleFont} from '@styles/mixins';

interface IProps {
  value: string;
  onChange: (val: string) => void;
  onEnter: () => void;
  onClear: () => void;
}

const SearchInput = (props: IProps) => {
  return (
    <Flex full containerHor>
      <Flex
        full
        dir={DIR.row}
        ai={AI.center}
        styles={{
          borderRadius: 4,
          backgroundColor: COLORS.NEUTRAL_GRAY_LIGHT,
          paddingHorizontal: 16,
          marginTop: 16,
          marginBottom: 20,
          paddingVertical: 14,
        }}>
        <Flex styles={{width: '5%'}} ai={AI.center}>
          <SearchIcon sizeHeight={16} color={COLORS.PRIMARY} />
        </Flex>
        <TextInput
          onSubmitEditing={props.onEnter}
          value={props.value}
          onChangeText={(val) => props.onChange(val)}
          selectionColor={COLORS.PRIMARY}
          placeholder={'Search'}
          style={{
            width: '90%',
            paddingHorizontal: 15,
            fontSize: scaleFont(16),
            paddingVertical: 0,
          }}
        />
        <AnimateItTiming
          remove
          style={{width: '5%'}}
          show={!!props.value}
          interpolations={[
            {name: 'opacity', outputRange: [0, 1], dir: 'both'},
          ]}>
          <Button
            activeOpacity={0.5}
            click={props.onClear}
            empty
            type={ButtonTypes.EMPTY}>
            <CloseIcon sizeHeight={14} color={COLORS.NEUTRAL_GRAY_DARK} />
          </Button>
        </AnimateItTiming>
      </Flex>
    </Flex>
  );
};

export default SearchInput;
