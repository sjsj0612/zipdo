/* eslint-disable no-shadow */
import StarRating from 'react-native-star-rating';
import React from 'react';

import styles from './style';
import {palette} from '~/style/base';
import {IimjangReport} from '~/types/imjangReport';

interface Props {
	editable: boolean;
	score: IimjangReport['rating'];
	setScore: any;
	size: 's' | 'm' | 'l';
}

const Rating = ({editable, score, setScore, size}: Props) => {
	const starSize = (size: string) => {
		switch (size) {
			case 's':
				return 20;
			case 'm':
				return 30;
			case 'l':
				return 40;
		}
	};
	return (
		<StarRating
			containerStyle={styles.starContainer}
			starSize={starSize(size)}
			disabled={!editable}
			halfStarEnabled={true}
			fullStarColor={palette.pointYellow}
			halfStarColor={palette.pointYellow}
			emptyStarColor={palette.pointYellow}
			maxStars={5}
			rating={score}
			selectedStar={e => setScore(e)}
		/>
	);
};

Rating.defaultProps = {
	editable: true,
	score: 0,
	setScore: console.log,
	size: 'm',
};
export default Rating;
