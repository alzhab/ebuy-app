import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {WINDOW_WIDTH} from '@styles/mixins';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

const width = WINDOW_WIDTH - CONTAINER_HOR_PADDING * 2;

interface IProps {
  height: number;
}

const Skeletons = ({height}: IProps) => {
	return (
		<SkeletonPlaceholder>
			<SkeletonPlaceholder.Item
				width={width}
				height={height}
				borderRadius={4}
			/>
		</SkeletonPlaceholder>
	);
};

export default Skeletons;
