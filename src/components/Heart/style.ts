import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
	text: {
		...padding(7, 7, 0, 6),
		...fontSize.xxs,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export default StyleSheet.create({
	...fontSize,
	...fontWeight,
	...margin,
	...padding,
	...styles,
});
