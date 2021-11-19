/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {IimjangReport, IimjangReportMaemool, IimjangReportPhoto} from '~/types/imjangReport';
import {ImjangPunchLine, ImjangReportTitle, ItemTitle, Memo, Rating} from '~/components';

interface Props {
	userId: string;
	editable: boolean;
	reportData: IimjangReport;
	photoData?: IimjangReportPhoto;
	maemoolData?: IimjangReportMaemool;
}

const ImjangReport = ({userId, editable, reportData, photoData, maemoolData}: Props) => {
	const [score, setScore] = useState(() => {
		if (reportData.rating) {
			return reportData.rating;
		} else {
			return 0;
		}
	});
	const [punchLine, setPunchLine] = useState(reportData.punchLine);
	const [memo, setMemo] = useState(reportData.memo);
	return (
		<SafeAreaView>
			<ImjangReportTitle kaptName={reportData.kaptName} nickname={reportData.nickname} authOn={reportData.authOn} />
			<ItemTitle text={'별점'} />
			<Rating editable={editable} score={score} setScore={setScore} />
			<ItemTitle text={'한줄평'} />
			<ImjangPunchLine editable={editable} text={punchLine} onChangeText={setPunchLine} />
			<ItemTitle text={'사진'} />
			<ItemTitle text={'메모'} />
			<Memo editable={editable} text={memo} onChangeText={setMemo} />
			<ItemTitle text={'매물정보'} num={3} />
		</SafeAreaView>
	);
};

ImjangReport.defaultProps = {
	userId: '',
	editable: true,
	reportData: {},
	photoData: {},
	maemoolData: {},
};

export default ImjangReport;
