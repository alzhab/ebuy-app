import React, {useState} from 'react';
import {Button, HeaderScroll, SelectList} from '@components';
import {CartIcon} from '@icons';
import {COLORS} from '@styles/base';
import {ButtonTypes, NavigationProps} from '@types';
import {List, SortAndFilter} from './components';
import {observer} from 'mobx-react';
import {byCategoryStore, modalStore} from '@stores';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Products = ({route}: NavigationProps) => {
  const navigation = useNavigation();
  const [sortType, setSortType] = useState('recom');

  useFocusEffect(
    React.useCallback(() => {
      if (route?.params?.categoryId || false) {
        byCategoryStore.init(route?.params?.categoryId);
      } else {
        navigation.goBack();
      }

      return () => byCategoryStore.clear();
    }, [route]),
  );

  const sortList = [
    {
      title: 'Recommended',
      value: 'recom',
    },
    {
      title: "What's New",
      value: 'new',
    },
    {
      title: 'Price: High to low',
      value: 'price-hight-to-low',
    },
    {
      title: 'Price: Low to high',
      value: 'price-low-to-hight',
    },
  ];

  const sort = () => {
    modalStore.showModal(() => {
      return (
        <SelectList list={sortList} select={setSortType} value={sortType} />
      );
    });
  };

  const pageEmpty =
    !byCategoryStore.products.length && byCategoryStore.productsFinish;

  return (
    <HeaderScroll
      refresh={byCategoryStore.refresh}
      refreshLoading={byCategoryStore.refreshLoading}
      containerHor
      containerBottom
      empty={pageEmpty}
      loading={byCategoryStore.productsLoading}
      headerProps={{
        title: 'New Trend',
        back: true,
        right: (
          <Button empty type={ButtonTypes.EMPTY} click={() => {}}>
            <CartIcon sizeHeight={22} color={COLORS.NEUTRAL_DARK} />
          </Button>
        ),
      }}>
      <SortAndFilter sort={sort} />

      <List data={byCategoryStore.products} />
    </HeaderScroll>
  );
};

export default observer(Products);
