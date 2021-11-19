import {storiesOf} from '@storybook/react-native';
import React from 'react';

import MyStatus from './index';

storiesOf('임장기', module).add('MyStatus', () => (
  <MyStatus
    nickname={'마포임장왕'}
    imjangReportNum={32}
    imjangMaemoolNum={105}
    rankPercent={8}
  />
));
