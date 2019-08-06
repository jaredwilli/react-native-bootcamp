import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

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
				<Image
					source={ require("./src/images/email.png")}
				/>

				<Image
					source={{
						uri: 'https://picsum.photos/200/300'
					}}
					style={{ width: 200, height: 300 }}
				/>
			</View>
		)
	}
}

export default App;
