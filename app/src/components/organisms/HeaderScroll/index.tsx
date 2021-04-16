import React, {useEffect, useState} from 'react';
import {Flex} from '../../atoms';
import {Header, Loading} from '../../molecules';
import {RefreshControl, ScrollView} from 'react-native';
import {Props} from '../../molecules/Header';
import {WINDOW_HEIGHT} from '@styles/mixins';
import {
  CONTAINER_VER_TOP_PADDING,
  HEADER_HEIGHT,
  TABBAR_HEIGHT,
} from '@styles/spacing';
import {COLORS} from '@styles/base';
import Empty from '../Empty';

const HeaderScroll = (props: {
  headerProps: Props;
  containerBottom?: boolean;
  containerHor?: boolean;
  children: any;
  refreshLoading?: boolean;
  refresh?: () => void;
  withTabbar?: boolean;
  empty?: boolean;
  loading?: boolean;
  scrollHeader?: any;
  onScroll?: (y: number) => void;
  minHeight?: number;
}) => {
  const [showShadow, setShowShadow] = useState(false);
  const HEIGHT = props.minHeight || WINDOW_HEIGHT;
  const minHeight = props.withTabbar
    ? HEIGHT - HEADER_HEIGHT - TABBAR_HEIGHT
    : HEIGHT - HEADER_HEIGHT;

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;

    if (props.onScroll) {
      props.onScroll(y);
    }

    if (y > 30 && !showShadow) {
      setShowShadow(true);
    } else if (y <= 30 && showShadow) {
      setShowShadow(false);
    }
  };

  if (props.loading) return <Loading show={true} />;

  return (
    <Flex size={1} full>
      <Header showShadow={showShadow} {...props.headerProps} />

      <ScrollView
        refreshControl={
          props.refresh ? (
            <RefreshControl
              refreshing={props.refreshLoading || false}
              onRefresh={props.refresh}
              colors={[COLORS.PRIMARY]}
              tintColor={COLORS.PRIMARY}
            />
          ) : undefined
        }
        bounces={!!props.refresh}
        onScroll={handleScroll}
        scrollEventThrottle={100}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={props.scrollHeader ? [0] : []}
        style={{
          width: '100%',
          paddingTop: 20,
        }}
        contentContainerStyle={{
          minHeight,
          paddingBottom: props.containerBottom ? CONTAINER_VER_TOP_PADDING : 0,
        }}>
        {props.scrollHeader ? props.scrollHeader : null}

        <Flex
          full
          size={1}
          containerHor={props.containerHor}
          styles={{zIndex: props.scrollHeader ? 99 : 1}}>
          {props.empty && props.refresh ? (
            <Empty refresh={props.refresh} />
          ) : (
            props.children
          )}
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default HeaderScroll;
