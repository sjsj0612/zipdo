import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

interface Props {
	sectionTitle: string;
	onPress: any;
}
const ReadMore = ({sectionTitle, onPress}: Props) => {
	return (
		<View>
			<View style={styles.line} />
			<TouchableOpacity style={styles.box} onPress={onPress}>
				<Text style={styles.text}>{sectionTitle} 더보기</Text>
				<Icon name="arrow-down" size={20} />
			</TouchableOpacity>
			<View style={styles.line} />
		</View>
	);
};

ReadMore.defaultProps = {
	sectionTitle: '',
	onPress: console.log('ReadMore Click'),
};

export default ReadMore;
