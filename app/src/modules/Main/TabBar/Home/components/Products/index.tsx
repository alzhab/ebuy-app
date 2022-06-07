import React from 'react';
import {Flex, ProductCard, Section, Skeletons} from '@components';
import {DIR, JC} from '@types';
import {viewAll} from '../../utils';
import {IProduct} from '../../../../../../api/products.api';
import {observer} from 'mobx-react';
import {homeStore} from '@stores';

const Products = ({
	data = [],
	loading,
}: {
  data: IProduct[];
  loading: boolean;
}) => {
	return !data.length && !loading ? null : (
		<Section
			headerBottom={20}
			bottom={40}
			title={'Popular products'}
			right={viewAll(() => {
				console.log('products');
			})}>
			<Flex dir={DIR.row} wrap full jc={JC.spaceBetween}>
				{loading ? (
					<Skeletons height={124} />
				) : (
					data.map((item, index, arr) => (
						<ProductCard
							card={item}
							width={'48%'}
							bottom={
								index === arr.length - 2 || index === arr.length - 1 ? 0 : 20
							}
							toggleFavorite={() => homeStore.toggleFavorite(item.id)}
							key={index.toString()}
						/>
					))
				)}
			</Flex>
		</Section>
	);
};

export default observer(Products);
