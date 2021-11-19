import {storiesOf} from '@storybook/react-native';
import React from 'react';

import ItemTitle from './index';

storiesOf('임장기', module)
	.add('ItemTitle 일반용', () => <ItemTitle isMaemool={false} text={'사진'} num={30} />)
	.add('ItemTitle 매물용', () => <ItemTitle isMaemool={true} text={'가격'} />);
