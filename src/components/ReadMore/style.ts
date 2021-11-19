import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding, palette} from '~/style/base';

const styles = StyleSheet.create({
	box: {
		backgroundColor: '#F2F2F2',
		...padding(25, 15, 20, 20),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		...fontSize.s,
		...fontWeight.light,
	},
	line: {
		backgroundColor: palette.gray,
		height: 1,
		width: '100%',
		opacity: 0.5,
	},
});

export default StyleSheet.create({
	...fontSize,
	...fontWeight,
	...margin,
	...padding,
	...styles,
});
