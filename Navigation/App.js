import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Follow from './src/screens/Follow';

const App = createStackNavigator({
	Home: { screen: Home },
	Follow: { screen: Follow },
}, {
	defaultNavigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#FF1756'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	}
});

export default createAppContainer(App);
