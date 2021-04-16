import React, {useEffect} from 'react';
import {Flex, List, Loading} from '@components';
import {RefreshControl, ScrollView, StatusBar} from 'react-native';
import {LogoutIcon} from '@icons';
import {ProfileHeader} from './components';
import {TABBAR_HEIGHT} from '@styles/spacing';
import {observer} from 'mobx-react';
import {authStore, profileStore} from '@stores';
import {userList} from './constants';
import {COLORS} from '@styles/base';

const HEADER_BOTTOM = 60;

const Profile = () => {
  useEffect(() => {
    profileStore.init();
  }, []);

  if (profileStore.loading) return <Loading show={true} />;

  const fullName = `${profileStore.user?.first_name} ${profileStore.user?.last_name}`;
  const avatar = profileStore.user?.avatar_path || null;

  return profileStore.user ? (
    <>
      <StatusBar barStyle={'light-content'} />

      <Flex size={1} full>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={profileStore.refreshLoading}
              onRefresh={() => profileStore.refresh()}
              colors={[COLORS.PRIMARY]}
              tintColor={COLORS.PRIMARY}
            />
          }
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            width: '100%',
          }}
          contentContainerStyle={{
            paddingBottom: TABBAR_HEIGHT,
          }}>
          <ProfileHeader
            edit={(res) => {
              profileStore.updateProfile({avatar: res});
            }}
            fullname={fullName}
            avatar={avatar}
            bottom={HEADER_BOTTOM}
          />

          <Flex
            containerHor
            full
            styles={{
              marginTop: -HEADER_BOTTOM / 2,
            }}>
            <List bottom={16} items={userList} />

            <List
              bottom={16}
              items={[
                {
                  title: 'Sign out',
                  Icon: LogoutIcon,
                  click: () => {
                    authStore.logout();
                  },
                },
              ]}
            />
          </Flex>
        </ScrollView>
      </Flex>
    </>
  ) : null;
};

export default observer(Profile);
