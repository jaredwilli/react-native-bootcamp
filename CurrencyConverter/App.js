import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Picker,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';

const currencyPerDollar = {
		DOLLAR: 0.014,
		EUROal: 0.012,
		POUNDal: 0.011,
		RUBELal: 0.93,
		AUSDOLLAR: 0.2,
		CANDOLLAR: 0.019,
		YEN: 1.54,
		DINAR: 0.0043,
		BITCOIN: 0.0000041,
];

export default class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			val: '',
			result: '0.0',
		};
  }

	onChangeInput = event => {
		const convertedVal = Number(event.nativeEvent.text) * this.state.currency;

		this.setState({
			val: event.nativeEvent.text,
			result: convertedVal
		});
	}

  render() {
    return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
				<SafeAreaView style={styles.container}>
					<View style={styles.view}>
						<TextInput
							style={styles.input}
							value={this.state.val}
							selectionColor="#fff"
							keyboardType="numeric"
							placeholder="Enter value"
							onChange={e => this.onChangeInput(e)}
						/>
					</View>

					<View style={styles.view}>
						<Text style={styles.resultContainer}>
							{this.state.result}
						</Text>
					</View>

					<View style={styles.view}>
						<Text>$</Text>
						<Text>Euro</Text>
						<Text>Pound</Text>
						<Text>$Aus/Text>
						<Text>Canada</Text>
						<Text>YEN</Text>
						<Text>$</Text>
						<Text>$</Text>
						<Text>$</Text>
						<Text>$</Text>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#1287A5',
		paddingTop: 24,
		alignItems: 'center',
	},
	view: {
		flex: 1,
		flexDirection: 'row',
	},
	valContainer: {
		backgroundColor: '#019031',
		flex: 1,
		alignItems: 'stretch',
		fontSize: 30,

	},
	resultContainer: {
		backgroundColor: '#192A56',
		color: '#fff',
		flex: 1,
		alignItems: 'stretch',
		textAlign: 'center',
		fontSize: 30,
	},
	input: {

	}
});
