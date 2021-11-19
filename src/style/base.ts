import {StyleSheet} from 'react-native';

export const palette = {
	transparent: 'transparent',
	black: '#000000',
	darkGray: '#969796',
	gray: '#969796',
	lightGray: '#F2F2F2',
	white: '#FFFFFF',
	pointRed: '#F64F4F',
	pointYellow: '#FFDE26',
	pointGreen: '#1B9E52',
	pointBlue: '#147BFF',
};

export const align = StyleSheet.create({
	sameLine: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	sameLineStretch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	leftOrder: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	rightOrder: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	centerOrder: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export const fontSize = StyleSheet.create({
	xxxs: {
		fontSize: 3,
	},
	xxs: {
		fontSize: 6,
	},
	xs: {
		fontSize: 12,
	},
	s: {
		fontSize: 16,
	},
	sm: {
		fontSize: 18,
	},
	m: {
		fontSize: 20,
	},
	ml: {
		fontSize: 22,
	},
	l: {
		fontSize: 24,
	},
	xl: {
		fontSize: 28,
	},
	xxl: {
		fontSize: 34,
	},
	xxxl: {
		fontSize: 40,
	},
});

export const fontWeight = StyleSheet.create({
	thin: {
		fontWeight: '100',
	},
	extraLight: {
		fontWeight: '200',
	},
	light: {
		fontWeight: '300',
	},
	medium: {
		fontWeight: '500',
	},
	semiBold: {
		fontWeight: '700',
	},
	bold: {
		fontWeight: 'bold',
	},
});

/* Margin */
export const margin = (right: any, left: any, top: any, bottom: any) => {
	return StyleSheet.create({
		marginTop: top,
		marginBottom: bottom,
		marginRight: right,
		marginLeft: left,
	});
};

/* Padding */
export const padding = (right: any, left: any, top: any, bottom: any) => {
	return StyleSheet.create({
		paddingTop: top,
		paddingBottom: bottom,
		paddingRight: right,
		paddingLeft: left,
	});
};
