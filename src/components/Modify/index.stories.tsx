import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Modify from './index';

storiesOf('아이콘', module)
  .add('Modify', () => <Modify hasText={false} />)
  .add('Modify w/Text', () => <Modify hasText={true} />);
