import {storiesOf} from '@storybook/react-native';
import React from 'react';

import SectionHeader from './index';

storiesOf('임장기', module)
	.add('SectionHeader not Foldable', () => <SectionHeader isFordable={false} isFolded={false} title={'취향분석'} titleNum={null} />)
	.add('SectionHeader Fordable(1)', () => <SectionHeader isFordable={true} isFolded={true} title={'내가 쓴 임장기'} titleNum={105} />)
	.add('SectionHeader Fordable(2)', () => <SectionHeader isFordable={true} isFolded={false} title={'내가 쓴 임장기'} titleNum={105} />);
