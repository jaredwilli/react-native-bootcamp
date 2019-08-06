import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			textValue: 'dude'
		}

  }

	onTextChange(val) {
		this.setState({
			textValue: val,
			randomColor: null,
		});
	}

	alert() {
		Alert.alert('You clicked it')
	}

	generateColor = () => {
		return (
			'rgb(' +
				Math.floor(Math.random() * 256) + ', ' +
				Math.floor(Math.random() * 256) + ', ' +
				Math.floor(Math.random() * 256) + ')'
		);
	}

	changeBackground = () => {
		this.setState({
			randomColor: this.generateColor()
		});
	}

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColor }]}>
        {/* <Text>Hey {this.state.textValue.split(' ').map(t => t && '🍕').join(' ')}, you are awesome!</Text>

				<TextInput
						style={styles.input}
						placeholderTextColor="#333"
						placeholder="Say something..."
						onChangeText={ text => this.onTextChange(text)}
				/> */}

				<TouchableOpacity onPress={() => this.changeBackground()}>
					<Text style={styles.text}>Change Background</Text>
				</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 24,
	},
	input: {
		borderColor: '#ccc',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 4,
		paddingHorizontal: 5,
		paddingVertical: 3,
		width: 200,
	},

	text: {
		backgroundColor: '#25CCF7',
		borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 4,
		color: '#fff',
		textAlign: 'center',
		padding: 10,


	}
});
