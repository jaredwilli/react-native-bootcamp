import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const bgColors = {
	1: '#B83227',
	2: '#2475B0',
	3: '#26ae60',
	4: '#F5C469',
	5: '#2C3335',
	6: '#0ABDE3',
	7: '#0A3D62',
	8: '#218F76',
	9: '#AE1438',
	10: '#586776',
};

const soundList = {
	one: require('./assets/one.wav'),
	two: require('./assets/two.wav'),
	three: require('./assets/three.wav'),
	four: require('./assets/four.wav'),
	five: require('./assets/five.wav'),
	six: require('./assets/six.wav'),
	seven: require('./assets/seven.wav'),
	eight: require('./assets/eight.wav'),
	nine: require('./assets/nine.wav'),
	ten: require('./assets/ten.wav'),
};

export default class App extends React.Component {

	playSound = async number => {
		const soundObject = new Audio.Sound();

		try {
			let path = soundList[number];

			await soundObject.loadAsync(require('./assets/ten.wav'));
			await soundObject.playAsync()
				.then(async playbackStatus => {
					console.log(playbackStatus);

					setTimeout(() => {
						soundObject.unloadAsync();
					}, playbackStatus.playableDurationMillis);
				})
				.catch(error => {
					// Error
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	}

  render() {
    return (
			<ScrollView style={styles.container}>
				<View style={styles.grid}>
					<Image
						source={require('./assets/logo.png')}
						style={styles.logo}
					/>

					<View style={styles.row}>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[1] }]}
							onPress={() => this.playSound('one')}
						>
							<Text style={styles.itemText}>
								One
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[2] }]}
							onPress={() => this.playSound('two')}
						>
							<Text style={styles.itemText}>
								Two
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.row}>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[3] }]}
							onPress={() => this.playSound('three')}
						>
							<Text style={styles.itemText}>
								Three
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[4] }]}
							onPress={() => this.playSound('four')}
						>
							<Text style={styles.itemText}>
								Four
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.row}>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[5] }]}
							onPress={() => this.playSound('five')}
						>
							<Text style={styles.itemText}>
								Five
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[6] }]}
							onPress={() => this.playSound('six')}
						>
							<Text style={styles.itemText}>
								Siz
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.row}>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[7] }]}
							onPress={() => this.playSound('seven')}
						>
							<Text style={styles.itemText}>
								Seven
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[8] }]}
							onPress={() => this.playSound('eight')}
						>
							<Text style={styles.itemText}>
								Eight
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.row}>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[9] }]}
							onPress={() => this.playSound('nine')}
						>
							<Text style={styles.itemText}>
								Nine
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.item, { backgroundColor: bgColors[10] }]}
							onPress={() => this.playSound('ten')}
						>
							<Text style={styles.itemText}>
								Ten
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Image
						source={require('./assets/logo.png')}
						style={styles.logo}
					/>
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	},
	logo: {
		alignSelf: 'center',
		marginTop: 25,
		width: 100,
		height: 100,
	},
	grid: {
		flex: 1,
		margin: 5,
	},
	row: {
		flexDirection: 'row',
	},
	item: {
		flex: 1,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 2,
	},
	itemText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	}
});
