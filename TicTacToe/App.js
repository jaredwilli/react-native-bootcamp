import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Button } from 'native-base';


const itemArr = Array(9).fill('empty');

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isCross: false,
			message: ""
		};
	}

	drawItem = itemNumber => {
		if (itemArr[itemNumber] === 'empty') {
			itemArr[itemNumber] = this.state.isCross;

			this.setState({
				isCross: !itemArr[itemNumber]
			}, () => {
				// what now
			})
		}

		// TODO: check for winner

	}

	itemIcon = itemNumber => {
		if (itemArr[itemNumber] !== 'empty') {
			return itemArr[itemNumber]  ? 'x' : 'o';
		}

		return 'pencil';
	}

	itemColor = itemNumber => {
		if (itemArr[itemNumber] !== 'empty') {
			return itemArr[itemNumber]  ? 'red' : 'green';
		}

		return 'black';
	}

	resetGame = () => {
		itemArr.fill('empty');

		this.setState({
			winMessage: ''
		});

		// force component update
		this.forceUpdate();
	}

	winGame = () => {
		if ((itemArr[0] !== 'empty') && (itemArr[0] === itemArr[1]) && (itemArr[1] === itemArr[2])) {
			this.setState({
				winMessage: (itemArr[0] ? 'x': 'o').concat(' win')
			});

		} else if ((itemArr[3] !== 'empty') && (itemArr[3] === itemArr[4]) && (itemArr[4] === itemArr[5])) {
			this.setState({
				winMessage: (itemArr[3] ? 'x': 'o').concat(' win')
			});

		} else if ((itemArr[6] !== 'empty') && (itemArr[6] === itemArr[7]) && (itemArr[7] === itemArr[8])) {
			this.setState({
				winMessage: (itemArr[6] ? 'x': 'o').concat(' win')
			});

		} else if ((itemArr[1] !== 'empty') && (itemArr[1] === itemArr[4]) && (itemArr[4] === itemArr[7])) {
			this.setState({
				winMessage: (itemArr[1] ? 'x': 'o').concat(' win')
			});

		} else if ((itemArr[2] !== 'empty') && (itemArr[2] === itemArr[5]) && (itemArr[5] === itemArr[8])) {
			this.setState({
				winMessage: (itemArr[2] ? 'x': 'o').concat(' win')
			});

		} else if ((itemArr[0] !== 'empty') && (itemArr[0] === itemArr[4]) && (itemArr[4] === itemArr[8])) {
			this.setState({
				winMessage: (itemArr[0] ? 'x': 'o').concat(' win')
			});

		} else if ((itemArr[2] !== 'empty') && (itemArr[2] === itemArr[4]) && (itemArr[4] === itemArr[6])) {
			this.setState({
				winMessage: (itemArr[2] ? 'x': 'o').concat(' win')
			});

		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>TicTacToe</Text>
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
	}
});
