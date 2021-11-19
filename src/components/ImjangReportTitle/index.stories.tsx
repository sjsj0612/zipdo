import {storiesOf} from '@storybook/react-native';
import React from 'react';

import ImjangReportTitle from './index';

storiesOf('임장기', module).add('ImjangReportTitle', () => (
	<ImjangReportTitle kaptName={'마포래미안푸르지오'} nickname={'나는야마포임장러'} authOn={1549312452} />
));
