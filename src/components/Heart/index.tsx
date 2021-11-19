/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './style';

interface Props {
	editable: boolean;
	hasText: boolean;
	isHeartOn: boolean;
	setHeartOn?: any;
}

const Heart = ({editable, hasText, isHeartOn, setHeartOn}: Props) => {
	const color = isHeartOn ? 'red' : 'black';
	return editable ? (
		<TouchableOpacity onPress={() => setHeartOn(!isHeartOn)}>
			{isHeartOn ? <Icon name="heart" size={30} color={color} /> : <Icon name="heart" size={30} color={color} />}
			{hasText && <Text style={styles.text}>찜하기</Text>}
		</TouchableOpacity>
	) : (
		<View>
			{isHeartOn ? <Icon name="heart" size={30} color={color} /> : <Icon name="heart" size={30} color={color} />}
			{hasText && <Text style={styles.text}>찜하기</Text>}
		</View>
	);
};

Heart.defaultProps = {
	editable: false,
	hasText: false,
	isHeartOn: false,
	setHeartOn: console.log,
};
export default Heart;
