import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

interface Props {
	hasText: boolean;
	onPress: any;
}

const Delete = ({hasText, onPress}: Props) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Icon name="trash-outline" size={30} />
			{hasText && <Text style={styles.text}>삭제하기</Text>}
		</TouchableOpacity>
	);
};

Delete.defaultProps = {
	hasText: true,
	onPress: console.log,
};
export default Delete;
