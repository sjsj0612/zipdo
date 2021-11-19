import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ImjangReport from '~/screens/ImjangReport';

const Stack = createNativeStackNavigator();
const RootStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ImjangReport" component={ImjangReport} />
		</Stack.Navigator>
	);
};

export default RootStack;
