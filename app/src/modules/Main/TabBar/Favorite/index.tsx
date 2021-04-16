import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Button, HeaderScroll, Text} from '@components';
import {favoritesStore} from '@stores';
import {ButtonTypes} from '@types';
import {CartIcon} from '@icons';
import {COLORS} from '@styles/base';
import {List} from './components';

const Favorite = () => {
  useEffect(() => {
    favoritesStore.init();
  }, []);

  const pageEmpty =
    !favoritesStore.products.length && favoritesStore.productsFinish;

  return (
    <HeaderScroll
      refresh={favoritesStore.refresh}
      refreshLoading={favoritesStore.refreshLoading}
      containerHor
      containerBottom
      empty={pageEmpty}
      loading={favoritesStore.productsLoading}
      withTabbar
      headerProps={{
        title: 'Saved Items',
        right: (
          <Button empty type={ButtonTypes.EMPTY} click={() => {}}>
            <CartIcon sizeHeight={22} color={COLORS.NEUTRAL_DARK} />
          </Button>
        ),
      }}>
      <List data={favoritesStore.products} />
    </HeaderScroll>
  );
};

export default observer(Favorite);
