import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './style';
import {IimjangReport} from '~/types/imjangReport';

interface Props {
	editable: boolean;
	text: IimjangReport['memo'];
	onChangeText: any;
}
const ImjangPunchline = ({editable, text, onChangeText}: Props) => {
	return (
		<View style={styles.layout}>
			<View style={editable ? styles.visibleBox : styles.inVisibleBox}>
				<TextInput
					editable={editable}
					style={styles.memo}
					placeholder="메모를 입력해주세요"
					value={text}
					onChangeText={onChangeText}
					multiline={true}
					textAlign={'left'}
					autoCorrect={false}
				/>
			</View>
		</View>
	);
};

ImjangPunchline.defaultProps = {
	editable: true,
	text: '',
	onChangeText: console.log,
};
export default ImjangPunchline;
