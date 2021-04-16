import React from 'react';
import {Flex, Image} from '@components';
import {StyleSheet} from 'react-native';

const BackImage = () => {
  return (
    <>
      <Image
        style={[StyleSheet.absoluteFill]}
        source={{
          uri:
            'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
        }}
        resizeMode={'cover'}
      />

      <Flex
        styles={[
          StyleSheet.absoluteFill,
          {backgroundColor: '#000', opacity: 0.33},
        ]}
      />
    </>
  );
};

export default BackImage;
