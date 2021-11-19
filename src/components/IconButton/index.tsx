/* eslint-disable no-shadow */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styled from 'styled-components';
import {fontSize} from '~/style/base';

const DescText = Styled.text`
    marginTop: 4,
    fontSize: ${fontSize.xxs}
`;

interface Props {
	type: '삭제' | '신고' | '하트';
	hasText: boolean;
	onPress: any;
}

const Delete = ({type, hasText, onPress}: Props) => {
	const typeSwitch = (type: string) => {
		switch (type) {
			case '삭제':
				return ['trash-outline', '삭제하기'];
			case '신고':
				return ['alarm-light-outline', '신고하기'];
			case '게시':
				return ['file-upload-outline', '게시하기'];
			case '수정':
				return ['pencil-box-outline', '수정하기'];
			default:
				return ['pencil-box-outline', '수정하기'];
		}
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<Icon name={typeSwitch(type)[0]} size={30} />
			{hasText && <DescText>{typeSwitch(type)[1]}</DescText>}
		</TouchableOpacity>
	);
};

Delete.defaultProps = {
	hasText: true,
	onPress: console.log,
};
export default Delete;
