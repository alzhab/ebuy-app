import React, {ReactElement} from 'react';
import {Flex, Text} from '../../atoms';
import {Card} from '../../molecules';
import {AI, DIR, IconProps, JC, Navigations} from '@types';
import {COLORS, TextFamily} from '@styles/base';
import {TouchableOpacity} from 'react-native';
import {ArrowRightIcon} from '@icons';
import navigate from '@navigations/RootNavigation';

export interface ListItem {
  Icon?: (props: IconProps) => ReactElement;
  title: string;
  click?: () => void;
  right?: ReactElement;
  navigate?: Navigations;
}

interface IProps {
  items: ListItem[];
  bottom?: number;
}
const List = (props: IProps) => {
  return (
    <Card
      full
      padding={{top: 20, right: 16}}
      styles={{marginBottom: props.bottom || 0}}>
      {props.items.map(renderItem)}
    </Card>
  );
};

const renderItem = (item: ListItem, index: number, array: ListItem[]) => {
  const Icon = item.Icon;
  return (
    <Flex key={index.toString()} full>
      <TouchableOpacity
        style={{width: '100%'}}
        activeOpacity={item.click || item.navigate ? 0 : 1}
        onPress={() => {
          if (item.navigate) {
            navigate(item.navigate);
          } else if (item.click) {
            item.click();
          }
        }}>
        <Flex
          full
          dir={DIR.row}
          ai={AI.center}
          jc={JC.spaceBetween}
          styles={{
            paddingTop: 1,
            paddingBottom: 12,
            borderBottomColor: COLORS.NEUTRAL_GRAY_LIGHT,
            borderBottomWidth: 1,
          }}>
          <Flex dir={DIR.row} ai={AI.center}>
            {Icon ? (
              <Flex
                styles={{marginRight: 12, width: 24}}
                ai={AI.center}
                jc={JC.center}>
                <Icon color={COLORS.PRIMARY} sizeHeight={24} />
              </Flex>
            ) : null}

            <Text size={16} family={TextFamily.SEMIBOLD}>
              {item.title}
            </Text>
          </Flex>

          <Flex>
            {item.right ? item.right : null}
            {item.navigate ? (
              <ArrowRightIcon sizeHeight={14} color={COLORS.NEUTRAL_GRAY} />
            ) : null}
          </Flex>
        </Flex>
      </TouchableOpacity>

      {index !== array.length - 1 ? <Flex styles={{height: 18}} /> : null}
    </Flex>
  );
};

export default List;
