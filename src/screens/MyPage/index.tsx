import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {Section, SectionPartitionBar, MyStatus, RadarChart, SectionPartitionLine} from '~/components';

const MyPage = () => {
	return (
		<SafeAreaView>
			<MyStatus nickname={'마포임장왕'} imjangReportNum={32} imjangMaemoolNum={105} rankPercent={8} />
			<SectionPartitionBar />
			<Section isFoldable={false} hasReadMore={false} title="취향분석" titleNum={null} contents={<View />} />
			<SectionPartitionLine />
			<View>
				<RadarChart category={['신축', '재개발', '대단지', '역세권', '학군']} value={[80, 90, 40, 60, 5]} />
			</View>
			<SectionPartitionBar />
			<Section
				isFoldable={true}
				hasReadMore={false}
				title="내가 쓴 임장기"
				titleNum={105}
				contents={
					<View>
						<Text>내가 쓴 임장기 컨텐츠</Text>
					</View>
				}
			/>
			<SectionPartitionBar />
			<Section
				isFoldable={true}
				hasReadMore={true}
				title="내가 방문한 매물"
				titleNum={35}
				contents={
					<View>
						<Text>내가 방문한 매물 컨텐츠</Text>
					</View>
				}
			/>
			<SectionPartitionBar />
			<Section
				isFoldable={true}
				hasReadMore={false}
				title="내가 찜한 임장기"
				titleNum={70}
				contents={
					<View>
						<Text>내가 찜한 임장기 컨텐츠</Text>
					</View>
				}
			/>
			<SectionPartitionBar />
		</SafeAreaView>
	);
};

export default MyPage;
