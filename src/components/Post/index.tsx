import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

interface Props {
	hasText: boolean;
	onPress: any;
}

const Post = ({hasText, onPress}: Props) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Icon name="file-upload-outline" size={30} />
			{hasText && <Text style={styles.text}>게시하기</Text>}
		</TouchableOpacity>
	);
};

Post.defaultProps = {
	hasText: true,
	onPress: console.log,
};
export default Post;
