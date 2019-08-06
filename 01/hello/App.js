import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './src/components/Button/Button.js';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Button>Submit</Button>
			</View>
		)
	}
}

export default App;
