import React from 'react';
import {CategoryCard, Section, Skeletons} from '@components';
import {viewAll} from '../../utils';
import {ICategory} from '../../../../../../api/categories.api';
import {serverFiles} from '@utils';

const Boards = ({
  data = [],
  loading,
}: {
  data: ICategory[];
  loading: boolean;
}) => {
  return !data.length && !loading ? null : (
    <>
      <Section
        headerBottom={0}
        bottom={40}
        title={'Popular boards'}
        right={viewAll(() => {
          console.log('boards');
        })}>
        {loading ? (
          <Skeletons height={124}  />
        ) : (
          data.map((card, index, arr) => (
            <CategoryCard
              key={index.toString()}
              card={{
                title: card.name,
                image: {uri: serverFiles.serverImage(card.img)},
                id: card.id,
              }}
              bottom={index === arr.length - 1 ? 0 : 20}
            />
          ))
        )}
      </Section>
    </>
  );
};

export default Boards;
