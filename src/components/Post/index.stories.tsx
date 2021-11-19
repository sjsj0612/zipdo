import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Post from './index';

storiesOf('아이콘', module)
	.add('Post', () => <Post hasText={false} />)
	.add('Post w/Text', () => <Post hasText={true} />);
