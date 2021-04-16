import {ListItem} from '../../../../../components/organisms/List';
import {CardIcon, GiftIcon, ProductIcon, UserIcon, WindowIcon} from '@icons';
import {Navigations} from '@types';

export const userList: ListItem[] = [
  {
    title: 'My order',
    Icon: ProductIcon,
    navigate: Navigations.Profile,
  },
  {
    title: 'My details',
    Icon: WindowIcon,
    navigate: Navigations.ProfileEdit,
  },
  {
    title: 'Payment methods',
    Icon: CardIcon,
    navigate: Navigations.Profile,
  },
];
