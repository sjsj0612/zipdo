import {storiesOf} from '@storybook/react-native';
import React from 'react';

import ImjangPunchLine from './index';

storiesOf('임장기', module)
	.add('ImjangPunchLine Edit', () => <ImjangPunchLine editable={true} />)
	.add('ImjangPunchLine View', () => <ImjangPunchLine editable={false} text={'이 가격에 이만한 아파트 찾기 쉽지 않다'} />);
