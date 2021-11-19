import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

interface Props {
	nickname: string;
	imjangReportNum: number;
	imjangMaemoolNum: number;
	rankPercent: number;
}

const MyStatus = ({nickname, imjangReportNum, imjangMaemoolNum, rankPercent}: Props) => {
	return (
		<View style={styles.box}>
			<View style={styles.profilePhoto} />
			<Text style={styles.nickname}>{nickname}</Text>
			<View style={styles.stretch}>
				<View style={styles.center}>
					<View style={styles.status}>
						<Text style={styles.pointText}>{imjangReportNum}</Text>
						<Text style={styles.regularText}>개</Text>
					</View>
					<Text style={styles.subText}>임장 아파트수</Text>
				</View>
				<View style={styles.center}>
					<View style={styles.status}>
						<Text style={styles.pointText}>{imjangMaemoolNum}</Text>
						<Text style={styles.regularText}>개</Text>
					</View>
					<Text style={styles.subText}>임장 매물수</Text>
				</View>
				<View style={styles.center}>
					<View style={styles.status}>
						<Text style={styles.regularText}>상위</Text>
						<Text style={styles.pointText}>{rankPercent}%</Text>
					</View>
					<Text style={styles.subText}>전국 임장 순위</Text>
				</View>
			</View>
		</View>
	);
};

MyStatus.defaultProps = {
	nickname: '',
	imjangReportNum: 0,
	imjangMaemoolNum: 0,
	rankPercent: 100,
};

export default MyStatus;
