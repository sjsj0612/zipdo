import {storiesOf} from '@storybook/react-native';
import React from 'react';

import ImjangReport from './index';

// dummy data
import {IMJANGREPORT, IMJANGREPORTAUTHONLY} from '../../data/dummyImjangReport';

storiesOf('스크린', module)
	.add('ImjangReport View', () => <ImjangReport editable={false} userId={'1111594'} reportData={IMJANGREPORT} />)
	.add('ImjangReport Modify', () => <ImjangReport editable={true} userId={'1111594'} reportData={IMJANGREPORT} />)
	.add('ImjangReport Write', () => <ImjangReport editable={true} userId={'1111594'} reportData={IMJANGREPORTAUTHONLY} />);
