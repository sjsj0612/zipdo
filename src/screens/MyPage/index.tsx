import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {Section, SectionPartitionBar} from '~/components';

const MyPage = () => {
	return (
		<SafeAreaView>
			<Section
				isFoldable={false}
				hasReadMore={false}
				title="취향분석"
				titleNum={null}
				contents={
					<View>
						<Text>취향분석 컨텐츠</Text>
					</View>
				}
			/>
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
