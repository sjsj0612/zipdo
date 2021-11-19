import {storiesOf} from '@storybook/react-native';
import React from 'react';

import RadarChart from './index';

const tasteCate = ['신축', '재개발', '대단지', '역세권', '학군'];
const tasteValue = [80, 20, 60, 40, 30];
storiesOf('차트', module).add('Radar Chart', () => <RadarChart category={tasteCate} value={tasteValue} />);
