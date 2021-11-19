import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

interface Props {
	hasText: boolean;
	onPress: any;
}

const Claim = ({hasText, onPress}: Props) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Icon name="alarm-light-outline" size={30} />
			{hasText && <Text style={styles.text}>신고하기</Text>}
		</TouchableOpacity>
	);
};

Claim.defaultProps = {
	hasText: true,
	onPress: console.log,
};
export default Claim;
