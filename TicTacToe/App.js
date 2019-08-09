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

		this.winGame();
	}

	itemIcon = itemNumber => {
		if (itemArr[itemNumber] !== 'empty') {
			return itemArr[itemNumber]  ? 'cross' : 'circle';
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

		this.forceUpdate();
	}

	winGame = () => {
		if ((itemArr[0] !== 'empty') && (itemArr[0] === itemArr[1]) && (itemArr[1] === itemArr[2])) {
			this.setState({
				winMessage: (itemArr[0] ? 'cross': 'circle').concat(' win')
			});

		} else if ((itemArr[3] !== 'empty') && (itemArr[3] === itemArr[4]) && (itemArr[4] === itemArr[5])) {
			this.setState({
				winMessage: (itemArr[3] ? 'cross': 'circle').concat(' win')
			});

		} else if ((itemArr[6] !== 'empty') && (itemArr[6] === itemArr[7]) && (itemArr[7] === itemArr[8])) {
			this.setState({
				winMessage: (itemArr[6] ? 'cross': 'circle').concat(' win')
			});

		} else if ((itemArr[1] !== 'empty') && (itemArr[1] === itemArr[4]) && (itemArr[4] === itemArr[7])) {
			this.setState({
				winMessage: (itemArr[1] ? 'cross': 'circle').concat(' win')
			});

		} else if ((itemArr[2] !== 'empty') && (itemArr[2] === itemArr[5]) && (itemArr[5] === itemArr[8])) {
			this.setState({
				winMessage: (itemArr[2] ? 'cross': 'circle').concat(' win')
			});

		} else if ((itemArr[0] !== 'empty') && (itemArr[0] === itemArr[4]) && (itemArr[4] === itemArr[8])) {
			this.setState({
				winMessage: (itemArr[0] ? 'cross': 'circle').concat(' win')
			});

		} else if ((itemArr[2] !== 'empty') && (itemArr[2] === itemArr[4]) && (itemArr[4] === itemArr[6])) {
			this.setState({
				winMessage: (itemArr[2] ? 'X' : 'O').concat(' wins!')
			});

		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.grid}>
					<View style={styles.row}>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(0)}
							>
								<Entypo
									name={this.itemIcon(0)}
									color={this.itemColor(0)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(1)}
							>
								<Entypo
									name={this.itemIcon(1)}
									color={this.itemColor(1)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(2)}
							>
								<Entypo
									name={this.itemIcon(2)}
									color={this.itemColor(2)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

					</View>

					<View style={styles.row}>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(3)}
							>
								<Entypo
									name={this.itemIcon(3)}
									color={this.itemColor(3)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(4)}
							>
								<Entypo
									name={this.itemIcon(4)}
									color={this.itemColor(4)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(5)}
							>
								<Entypo
									name={this.itemIcon(5)}
									color={this.itemColor(5)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

					</View>

					<View style={styles.row}>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(6)}
							>
								<Entypo
									name={this.itemIcon(6)}
									color={this.itemColor(6)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(7)}
							>
								<Entypo
									name={this.itemIcon(7)}
									color={this.itemColor(7)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.item}>
							<TouchableOpacity
								onPress={() => this.drawItem(8)}
							>
								<Entypo
									name={this.itemIcon(8)}
									color={this.itemColor(8)}
									size={50}
								/>
							</TouchableOpacity>
						</View>

					</View>
				</View>

				<Text style={styles.winMessage}>
					{this.state.winMessage}
				</Text>

				<Button full rounded primary
					onPress={this.resetGame}
				>
					<Text style={styles.button}>Reset Game</Text>
				</Button>
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
	},
	grid: {

	},
	row: {
		flexDirection: 'row',
	},
	item: {
		borderWidth: 2,
		borderColor: '#000',
		padding: 30,
	},
	winMessage: {
		padding: 20,
		fontSize: 25,
		fontWeight: 'bold'
	},
	button: {
		margin: 20,
		padding: 10,
		color: '#fff',
		fontWeight: 'bold',

	}
});
