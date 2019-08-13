import React from 'react';
import { StyleSheet,
	Text,
	View,
	Keyboard,
	AsyncStorage,
	Alert,
	TouchableWithoutFeedback,
	ScrollView
} from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class AddContact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			address: '',
		}
	}

	static navOptions = {
		title: 'Add New Contact'
	};

	saveContact = async () => {
		if (
			this.state.firstName !== '' &&
			this.state.lastName !== '' &&
			this.state.phone !== '' &&
			this.state.email !== '' &&
			this.state.address !== ''
		) {
			// create contact obj
			const contact = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				phone: this.state.phone,
				email: this.state.email,
				address: this.state.address,
			};

			await AsyncStorage.setItem(
				Date.now().toString(),
				JSON.stringify(contact)
			)
			.then(() => {
				console.log('Contact saved!');

				this.props.navigation.goBack();
			})
			.catch(error => {
				console.log(error);
			});
		} else {
			Alert.alert('All fields are required');
		}
	}

	render() {
		return (
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}
			>
				<ScrollView style={styles.container}>
					<Form>
						<Item style={styles.inputItem}>
							<Label>First Name</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="default"
								onChangeText={firstName => this.setState({ firstName })}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Last Name</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="default"
								onChangeText={lastName => this.setState({ lastName })}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Phone Number</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="number-pad"
								onChangeText={phone => this.setState({ phone })}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Email</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="email-address"
								onChangeText={email => this.setState({ email })}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Address</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="default"
								onChangeText={address => this.setState({ address })}
							/>
						</Item>
					</Form>

					<Button
						onPress={() => this.saveContact()}
						style={styles.button}
						full
					>
						<Text style={styles.buttonText}>Save</Text>
					</Button>

					<View style={styles.empty}></View>
				</ScrollView>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#fff",
	  margin: 10,
	  height: 500
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
	  fontWeight: "bold",
	  fontSize: 18
	},
	empty: {
	  height: 00,
	  backgroundColor: "#FFF"
	}
  });
