import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
	bar: {
		// backgroundColor: palette.lightGray.toString(),
		backgroundColor: '#F2F2F2',
		height: 10,
		width: '100%',
	},
});

export default StyleSheet.create({
	...fontSize,
	...fontWeight,
	...margin,
	...padding,
	...styles,
});
