/* eslint-disable react-native/no-inline-styles */
import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Rating, ImjangPunchLine, Heart} from '../../components';
import {palette} from '~/style/base';
import SpeechBubble from './index';

const contents1 = (
	<View style={{flexDirection: 'column', width: '100%'}}>
		<Text style={{color: 'white'}}>매물 3건</Text>
		<View style={{alignSelf: 'center'}}>
			<Rating score={3} editable={false} size="m" />
			<ImjangPunchLine editable={false} text={'준강남권이라는 말이 실감난다'} color={'white'} />
		</View>
	</View>
);

const HeartEdit = () => {
	const [isHeartOn, setHeartOn] = useState(false);
	return <Heart editable={true} isHeartOn={isHeartOn} setHeartOn={setHeartOn} />;
};

const contents2 = (
	<View style={{flexDirection: 'column', width: '100%'}}>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<Text style={{color: 'black'}}>매물 3건</Text>
			<HeartEdit />
		</View>

		<View style={{alignSelf: 'center'}}>
			<Rating score={3} editable={false} size="m" />
			<ImjangPunchLine editable={false} text={'준강남권이라는 말이 실감난다'} color={'black'} />
		</View>
	</View>
);
storiesOf('임장기', module)
	.add('SpeechBubble (1)', () => (
		<SpeechBubble
			backgroundColor={palette.pointGreen}
			upperLeft={'마포래미안푸르지오'}
			upperRight={'2021년 3월 10일'}
			contents={contents1}
			onPress={console.log('Speech Bubble Pressed')}
		/>
	))
	.add('SpeechBubble (2)', () => (
		<SpeechBubble
			backgroundColor={palette.lightGray}
			upperLeft={'마포래미안푸르지오'}
			upperRight={'2021년 3월 10일'}
			contents={contents2}
			onPress={console.log('Speech Bubble Pressed')}
		/>
	));
