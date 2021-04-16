import React, {useEffect} from 'react';
import {Empty, HeaderScroll} from '@components';
import {Boards, Products} from './components';
import {observer} from 'mobx-react';
import {homeStore} from '@stores';

const Home = () => {
  useEffect(() => {
    homeStore.init();
  }, []);

  const pageEmpty =
    !homeStore.popularCategories.length &&
    !homeStore.popularProducts.length &&
    homeStore.popularCategoriesFinish &&
    homeStore.popularCategoriesFinish;

  return (
    <HeaderScroll
      refresh={homeStore.refresh}
      refreshLoading={homeStore.refreshLoading}
      containerHor
      withTabbar
      containerBottom
      headerProps={{title: ''}}>
      {!pageEmpty ? (
        <>
          <Boards
            data={homeStore.popularCategories}
            loading={homeStore.popularCategoriesLoading}
          />

          <Products
            data={homeStore.popularProducts}
            loading={homeStore.popularProductsLoading}
          />

          {/*<Recom data={recommendations} />*/}
        </>
      ) : (
        <Empty refresh={homeStore.refresh} />
      )}
    </HeaderScroll>
  );
};

export default observer(Home);
