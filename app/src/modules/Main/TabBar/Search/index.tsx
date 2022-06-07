import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {CategoryCard, Flex, Loading} from '@components';
import {Empty, SearchInput} from './components';
import {searchStore} from '@stores';
import {FlatList} from 'react-native';
import {serverFiles} from '@utils';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

const Search = () => {
	return (
		<Flex full containerVer size={1}>
			<SearchInput
				value={searchStore.value}
				onChange={searchStore.setValue}
				onEnter={() => searchStore.search()}
				onClear={() => {
					searchStore.clear();
				}}
			/>

			{searchStore.loading ? (
				<Loading show={true} />
			) : searchStore.categories.length ? (
				<FlatList
					style={{width: '100%', paddingHorizontal: CONTAINER_HOR_PADDING}}
					data={searchStore.categories}
					ItemSeparatorComponent={() => <Flex styles={{height: 20}} />}
					keyExtractor={(item) => item.id}
					renderItem={({item}) => (
						<CategoryCard
							card={{
								title: item.name,
								image: {uri: serverFiles.serverImage(item.img)},
								id: item.id,
							}}
						/>
					)}
				/>
			) : (
				<Empty />
			)}
		</Flex>
	);
};

export default observer(Search);
