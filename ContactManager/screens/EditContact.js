import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
	AsyncStorage,
	Alert
} from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class EditContact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			address: '',
			key: ''
		}
	}

	static navOptions = {
		title: 'Edit New Contact'
	};

	componentDidMount() {
		const { navigation } = this.props;

		navigation.addListener('willFocus', () => {
			const key = this.props.navigation.getParam('key', '');
			this.getContact(key);
		})
	}

	getContact = async key => {
		await AsyncStorage.getItem(key)
			.then(result => {
				const contact = JSON.parse(result);
				contact['key'] = key;
				this.setState(contact);
			})
			.catch(error => console.log(error));
	}

	updateContact = async key => {
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

			await AsyncStorage.mergeItem(
				key,
				JSON.stringify(contact)
			)
			.then(() => {
				console.log('Contact updated!');

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
								value={this.state.firstName}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Last Name</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="default"
								onChangeText={lastName => this.setState({ lastName })}
								value={this.state.lastName}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Phone Number</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="number-pad"
								onChangeText={phone => this.setState({ phone })}
								value={this.state.phone}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Email</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="email-address"
								onChangeText={email => this.setState({ email })}
								value={this.state.email}
							/>
						</Item>
						<Item style={styles.inputItem}>
							<Label>Address</Label>
							<Input
								autoCorrect={false}
								autoCapitalize="none"
								keyboardType="default"
								onChangeText={address => this.setState({ address })}
								value={this.state.address}
							/>
						</Item>
					</Form>

					<Button
						onPress={() => this.updateContact(this.state.key)}
						style={styles.button}
						full
					>
						<Text style={styles.buttonText}>Update</Text>
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
	},
	empty: {
	  height: 300,
	  backgroundColor: "#FFF"
	}
});

