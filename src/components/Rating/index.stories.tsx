import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';

import Rating from './index';

// Editable의 경우 useState문을 할당하기 위해
const RatingEdit = () => {
  const [scoreValue, setScoreValue] = useState(0);
  return <Rating score={scoreValue} setScore={setScoreValue} />;
};

storiesOf('임장기', module)
  .add('Rating Edit', () => <RatingEdit />)
  .add('Rating View', () => <Rating editable={false} score={2.5} />);
