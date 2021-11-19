import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
	box: {
		...padding(25, 15, 10, 10),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export default StyleSheet.create({
	...fontSize,
	...fontWeight,
	...margin,
	...padding,
	...styles,
});
