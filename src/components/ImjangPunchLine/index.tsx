import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import {IimjangReport} from '~/types/imjangReport';

interface Props {
	editable: boolean;
	text: IimjangReport['punchLine'];
	onChangeText: any;
	color?: string;
}
const ImjangPunchline = ({editable, text, onChangeText, color}: Props) => {
	return (
		<View style={styles.align}>
			<Icon name="format-quote-open" size={20} color={color} />
			<TextInput
				editable={editable}
				style={[styles.punchLine, {color: color}]}
				placeholder="임장 한줄평을 남겨주세요"
				value={text}
				onChangeText={onChangeText}
				multiline={true}
				textAlign={'center'}
				maxLength={50}
				autoCorrect={false}
			/>
			<Icon name="format-quote-close" size={20} color={color} />
		</View>
	);
};

ImjangPunchline.defaultProps = {
	editable: true,
	text: '',
	onChangeText: console.log,
	color: '#000000',
};
export default ImjangPunchline;
