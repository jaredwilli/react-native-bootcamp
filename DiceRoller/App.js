import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			dice1: require('./src/images/dice1.png'),
			dice2: require('./src/images/dice1.png'),
		};
	}

	randomNumber = () => {
		return Math.floor(Math.random() * 6) + 1;
	}

	playGame = () => {
		const number1 = this.randomNumber();
		const number2 = this.randomNumber();

		switch (number1) {
			case 1:
				this.setState({
					dice1: require('./src/images/dice1.png')
				});
				break;
			case 2:
				this.setState({
					dice1: require('./src/images/dice2.png')
				});
				break;
			case 3:
				this.setState({
					dice1: require('./src/images/dice3.png')
				});
				break;
			case 4:
				this.setState({
					dice1: require('./src/images/dice4.png')
				});
				break;
			case 5:
				this.setState({
					dice1: require('./src/images/dice5.png')
				});
				break;
			case 6:
				this.setState({
					dice1: require('./src/images/dice6.png')
				});
				break;
			default:
				this.setState({
					dice1: require('./src/images/dice1.png')
				});
				break;
		}

		switch (number2) {
			case 1:
				this.setState({
					dice2: require('./src/images/dice1.png')
				});
				break;
			case 2:
				this.setState({
					dice2: require('./src/images/dice2.png')
				});
				break;
			case 3:
				this.setState({
					dice2: require('./src/images/dice3.png')
				});
				break;
			case 4:
				this.setState({
					dice2: require('./src/images/dice4.png')
				});
				break;
			case 5:
				this.setState({
					dice2: require('./src/images/dice5.png')
				});
				break;
			case 6:
				this.setState({
					dice2: require('./src/images/dice6.png')
				});
				break;
			default:
				this.setState({
					dice2: require('./src/images/dice1.png')
				});
				break;
		}
	}

  render() {
    return (
      <View style={styles.container}>
        <Image
					source={this.state.dice1}
					style={{ flex: 1, }}
				/>
        <Image
					source={this.state.dice2}
					style={{ flex: 1, }}
				/>

				<TouchableOpacity
					onPress={() => {this.playGame()}}
				>
					<Text style={styles.button}>Roll Dice</Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,

    backgroundColor: '#EAF0F1',
    alignItems: 'center',
    justifyContent: 'center',
	},
	button: {
		backgroundColor: '#1287A5',
		borderColor: '#1283a5',
		borderWidth: 1,
		borderRadius: 4,
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 10,
		margin: 20,
	}
});
