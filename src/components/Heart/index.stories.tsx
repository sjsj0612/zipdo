import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';

import Heart from './index';

// Editable의 경우 useState문을 할당하기 위해
const HeartEdit = () => {
  const [isHeartOn, setHeartOn] = useState(false);
  return (
    <Heart editable={true} isHeartOn={isHeartOn} setHeartOn={setHeartOn} />
  );
};

storiesOf('아이콘', module)
  .add('Heart', () => <Heart hasText={false} />)
  .add('Heart w/Text', () => <Heart hasText={true} isHeartOn={true} />)
  .add('Heart edit', () => <HeartEdit />);
