import React, {memo, Ref, useRef} from 'react';

import {FlatList} from 'react-native';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import Flex from '../Flex';
import {scaleSize} from '@styles/mixins';
import {Props} from './interfaces';

const Scroll = (props: Props) => {
  const scrollProps = {
    keyExtractor: (_: any, index: number) => index.toString(),
    contentContainerStyle: {paddingHorizontal: props.container ? CONTAINER_HOR_PADDING : 0, ...(props.style || {})},
    style: {width: '100%', marginBottom: scaleSize(props.bottom || 0)},
    data: props.data,
    renderItem: props.item,
    ListFooterComponent: props.footer
  };
  
  const ref: Ref<FlatList> = useRef(null);
  
  const scrollToEnd = () => {
    if (ref.current && props.data.length) {
      ref.current.scrollToOffset({animated: true, offset: props.data.length * 300})
    }
  };
  
  return props.horizontal ? (
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(15)}}/>}
        {...scrollProps}
      />
    )
    : <FlatList
      ref={ref}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      onContentSizeChange={() => scrollToEnd()}
      onLayout={() => scrollToEnd()}
      ItemSeparatorComponent={() => <Flex styles={{height: scaleSize(15)}}/>}
      {...scrollProps}
    />;
};

export default memo(Scroll, (prev, next) => {
  return (JSON.stringify(prev.data) === JSON.stringify(next.data));
});
