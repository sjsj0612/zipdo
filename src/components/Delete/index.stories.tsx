import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Delete from './index';

storiesOf('아이콘', module)
  .add('Delete', () => <Delete hasText={false} />)
  .add('Delete w/Text', () => <Delete hasText={true} />);
