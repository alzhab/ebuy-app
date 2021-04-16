import React from 'react';

import {Button, Flex, HeaderScroll, List, Text} from '@components';
import {scaleSize} from '@styles/mixins';

const Filter = () => {
  return (
    <>
      <HeaderScroll containerHor headerProps={{title: 'Filter', back: true}}>
        <Flex
          size={1}
          full
          styles={{paddingTop: 10, marginBottom: scaleSize(20)}}>
          <List
            items={[
              {
                title: 'Gender',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Product type',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Style',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Leather / Non Leather',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Color',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Brand',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Body fit',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Size',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Price',
                right: <Text>All</Text>,
                click: () => {},
              },
              {
                title: 'Brand',
                right: <Text>All</Text>,
                click: () => {},
              },
            ]}
          />
        </Flex>

        <Button full size={16} click={() => {}} title={'View items'} />
      </HeaderScroll>
    </>
  );
};

export default Filter;
