import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding, palette} from '~/style/base';

const styles = StyleSheet.create({
	layout: {
		...padding(10, 10, 10, 10),
		flexDirection: 'row',
		alignItems: 'center',
	},
	maemoolItem: {
		color: palette.black,
		...fontWeight.semiBold,
		...fontSize.s,
	},
	normalItem: {
		color: palette.black,
		...fontWeight.semiBold,
		...fontSize.m,
	},
});

export default StyleSheet.create({
	...fontSize,
	...fontWeight,
	...margin,
	...padding,
	...styles,
});
