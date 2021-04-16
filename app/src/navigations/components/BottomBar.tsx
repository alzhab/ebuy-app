import React, {ReactElement} from 'react';
import {AnimateItTiming, Button, Flex} from '@components';
import {COLORS} from '@styles/base';
import {ButtonTypes, DIR, IconProps, JC, Navigations} from '@types';
import {boxShadow, WINDOW_WIDTH} from '@styles/mixins';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TABBAR_HEIGHT} from '@styles/spacing';
import {SafeAreaView} from 'react-navigation';

const BottomBar = (props: BottomTabBarProps) => {
  const routes = props.state.routes;
  const history = props.state.history;
  const descrptors = props.descriptors;

  const activeKey = history[history.length - 1].key;

  const navigate = (route: Navigations, key: string) => {
    if (activeKey !== key) {
      props.navigation.navigate(route);
    }
  };
  return (
    <Flex
      full
      dir={DIR.row}
      jc={JC.spaceBetween}
      containerHor
      styles={{
        height: TABBAR_HEIGHT,
        backgroundColor: COLORS.MAIN_BG,
        ...boxShadow(),
      }}>
      {routes.map((route) => {
        const key = route.key;
        const options = descrptors[key].options;
        // @ts-ignore
        const Icon: (props: IconProps) => ReactElement = options.Icon;
        const isActive = activeKey === key;

        return (
          <Button
            key={route.name}
            styles={{
              paddingHorizontal: 12,
              paddingVertical: 11,
              position: 'relative',
              width: WINDOW_WIDTH / 5 - 12 * 2,
            }}
            type={ButtonTypes.EMPTY}
            click={() => navigate(Navigations[route.name], route.key)}>
            <AnimateItTiming
              show={isActive}
              interpolations={[
                {
                  name: 'opacity',
                  outputRange: [0, 1],
                  dir: 'both',
                },
              ]}
              style={{
                position: 'absolute',
                left: -12,
                right: -12,
                top: -11,
                height: 3,
                backgroundColor: COLORS.PRIMARY,
              }}>
              <></>
            </AnimateItTiming>

            <Icon
              color={isActive ? COLORS.PRIMARY : COLORS.NEUTRAL_GRAY_DARK}
              sizeHeight={24}
            />
          </Button>
        );
      })}
    </Flex>
  );
};

export default BottomBar;
