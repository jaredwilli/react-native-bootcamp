import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import ViewContact from './screens/ViewContact';
import EditContact from './screens/EditContact';
import AddContact from './screens/AddContact';

const MainNavigator = createStackNavigator({
	Home: { screen: Home },
	View: { screen: ViewContact },
	Edit: { screen: EditContact },
	Add: { screen: AddContact },
}, {
	defaultNavigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#B83227'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	}
});

const App = createAppContainer(MainNavigator);

export default App;
