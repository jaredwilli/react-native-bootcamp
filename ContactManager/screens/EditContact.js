import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class EditContact extends React.Component {
  constructor(props) {
    super(props);
  }


	static navOptions = {
		title: 'Edit New Contact'
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Edit contact</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#fff",
	  margin: 10
	},
	inputItem: {
	  margin: 10
	},
	button: {
	  backgroundColor: "#B83227",
	  marginTop: 40
	},
	buttonText: {
	  color: "#fff",
	  fontWeight: "bold"
	}
});

