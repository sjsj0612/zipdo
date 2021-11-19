import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface Props {
	isMaemool?: boolean;
	text: string;
	num?: number | null;
}
const ItemTitle = ({isMaemool, text, num}: Props) => {
	return (
		<View style={styles.layout}>
			<Text style={isMaemool ? styles.maemoolItem : styles.normalItem}>{text}</Text>
			{num && <Text style={isMaemool ? styles.maemoolItem : styles.normalItem}>({num})</Text>}
		</View>
	);
};

ItemTitle.defaultProps = {
	isMaemool: false,
	text: null,
};

export default ItemTitle;
