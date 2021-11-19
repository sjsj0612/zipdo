import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {palette} from '~/style/base';
import styles from './style';

interface Props {
	backgroundColor: string;
	upperLeft?: any;
	upperRight?: any;
	contents: any;
	onPress: any;
}

const SpeechBubble = ({backgroundColor, upperLeft, upperRight, contents, onPress}: Props) => {
	return (
		<View style={styles.box}>
			{(upperLeft || upperRight) && (
				<View style={styles.upperSpace}>
					<Text style={styles.upperLeft}>{upperLeft}</Text>
					<Text style={styles.upperRight}>{upperRight}</Text>
				</View>
			)}
			<TouchableOpacity style={[styles.bubble, {backgroundColor: backgroundColor}]} onPress={onPress}>
				{contents}
			</TouchableOpacity>
		</View>
	);
};

SpeechBubble.defaultProps = {
	backgroundColor: palette.pointGreen,
	upperLeft: null,
	upperRight: null,
	contents: <View />,
};
export default SpeechBubble;
