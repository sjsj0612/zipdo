import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from '~/navigation/RootStack';

const App = () => {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
};

export default App;
