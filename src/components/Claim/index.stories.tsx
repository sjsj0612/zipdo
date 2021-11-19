import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Claim from './index';

storiesOf('아이콘', module)
  .add('Claim', () => <Claim hasText={false} />)
  .add('Claim w/Text', () => <Claim hasText={true} />);
