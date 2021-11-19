import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import ItemTitle from '../ItemTitle';
import styles from './style';

interface Props {
	isFordable?: boolean;
	isFolded?: boolean;
	onPress?: any;
	title: string;
	titleNum?: number | null;
}

const SectionHeader = ({isFordable, isFolded, onPress, title, titleNum}: Props) => {
	const arrow = isFolded ? (
		<TouchableOpacity onPress={onPress}>
			<Icon name="arrow-down" size={20} />
		</TouchableOpacity>
	) : (
		<TouchableOpacity onPress={onPress}>
			<Icon name="arrow-up" size={20} />
		</TouchableOpacity>
	);

	return (
		<View style={styles.box}>
			<ItemTitle isMaemool={false} text={title} num={titleNum} />
			{isFordable === true && arrow}
		</View>
	);
};

SectionHeader.defaultProps = {
	isFordable: false,
	isFolded: true,
	onPress: console.log('Icon Click'),
	title: '',
	titleNum: 0,
};

export default SectionHeader;
