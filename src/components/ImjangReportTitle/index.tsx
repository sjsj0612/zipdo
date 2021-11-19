import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';
import {IimjangReport} from '~/types/imjangReport';

interface Props {
	kaptName: IimjangReport['kaptName'];
	nickname: IimjangReport['nickname'];
	authOn: IimjangReport['authOn'];
}
const ImjangReportTitle = ({kaptName, nickname, authOn}: Props) => {
	const timestamp = new Date(authOn * 1000);
	const [yyyy, mm, dd] = [timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate()];

	return (
		<View style={styles.layout}>
			<Text style={styles.reportTitle}>{kaptName}</Text>
			<View style={styles.align}>
				<Text style={styles.reportDetail}>{nickname}</Text>
				<Text style={styles.reportDetail}>
					{yyyy}.{mm}.{dd} 위치 인증
				</Text>
			</View>
		</View>
	);
};

ImjangReportTitle.defaultProps = {
	kaptName: '',
	nickname: '',
	authOn: 0,
};

export default ImjangReportTitle;
