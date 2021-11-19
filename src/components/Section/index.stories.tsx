import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, View} from 'react-native';

import Section from './index';

storiesOf('임장기', module)
	.add('Section (1)', () => (
		<Section
			isFoldable={false}
			hasReadMore={false}
			title="내가 쓴 임장기"
			titleNum={null}
			contents={
				<View>
					<Text>으악</Text>
				</View>
			}
		/>
	))
	.add('Section (2)', () => (
		<Section
			isFoldable={true}
			hasReadMore={true}
			title="내가 쓴 임장기"
			titleNum={105}
			contents={
				<View>
					<Text>으악</Text>
				</View>
			}
		/>
	));
