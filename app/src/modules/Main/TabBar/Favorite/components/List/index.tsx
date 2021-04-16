import React from 'react';
import {DIR, JC} from '@types';
import {Flex, ProductCard} from '@components';
import {CONTAINER_VER_TOP_PADDING} from '@styles/spacing';
import {observer} from 'mobx-react';
import {favoritesStore} from '@stores';

const List = ({data}: {data: any[]}) => {
  return (
    <Flex
      size={1}
      dir={DIR.row}
      wrap
      full
      jc={JC.spaceBetween}
      styles={{marginTop: 20}}>
      {data.map((item, index, arr) => (
        <ProductCard
          card={item}
          width={'48%'}
          bottom={
            index === arr.length - 2 || index === arr.length - 1
              ? CONTAINER_VER_TOP_PADDING
              : 20
          }
          key={index.toString()}
          toggleFavorite={() => favoritesStore.toggleFavorite(item.id)}
        />
      ))}
    </Flex>
  );
};

export default observer(List);
