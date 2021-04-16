import React from 'react';
import {AI} from '@types';
import {BackImage, User} from './components';
import {Flex, Header} from '@components';
import {scaleSize} from '@styles/mixins';
import {getImage} from '../../../../../../../utils/server';
import {IImage} from '../../../../../../../api/customers.api';

interface IProps {
  bottom: number;
  fullname: string;
  avatar: string | null;
  edit: (image: IImage) => void;
}

const ProfileHeder = (props: IProps) => {
  return (
    <Flex full ai={AI.center}>
      <BackImage />

      <Header transparent title={''} />

      <User
        img={
          props.avatar
            ? {
                uri: getImage(props.avatar),
              }
            : require('@assets/images/profile.png')
        }
        fullname={props.fullname}
        edit={props.edit}
        diameter={scaleSize(100)}
      />

      <Flex styles={{paddingBottom: props.bottom}} animated>
        <></>
      </Flex>
    </Flex>
  );
};

export default ProfileHeder;
