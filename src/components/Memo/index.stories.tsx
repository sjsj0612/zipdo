import {storiesOf} from '@storybook/react-native';
import React from 'react';

import Memo from './index';

storiesOf('임장기', module)
  .add('Memo Edit', () => <Memo editable={true} />)
  .add('Memo View', () => (
    <Memo
      editable={false}
      text={
        '싱크대 무조건 바꿔야함. \n집주인 잔금 5/31까지 무조건 맞춰달라고 했음 \n곰팡이 없었음 \n수납공간이 조금 적은편'
      }
    />
  ));
