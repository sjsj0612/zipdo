/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {palette, fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
	box: {
		...padding(0, 0, 20, 20),
		...margin(10, 10, null, null),
	},
	bubble: {
		...padding(15, 15, 15, 15),
		...margin(0, 0, 5, 0),
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowOffset: {
			height: 8,
			width: 5,
		},
	},
	upperSpace: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	upperLeft: {
		...fontSize.xs,
		...fontWeight.thin,
	},
	upperRight: {
		...fontSize.xs,
		...fontWeight.thin,
	},
});

export default StyleSheet.create({
	...fontSize,
	...fontWeight,
	...margin,
	...padding,
	...styles,
});
