import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			followReq: [
				'John',
				'Jane',
				'Bob',
				'Leah'
			],
			following: ['Jared']
		};
	}


	handleFollow = index => {
		const { followReq, following } = this.state;
		const followNew = followReq.splice(index, 1);

		following.push(followNew);

		this.setState({
			followReq,
			following
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>You are following {this.state.following.length} people.</Text>

				<Button
					title="Follow"
					onPress={() => {
						this.props.navigation.navigate('Follow', {
							followReq: this.state.followReq,
							following: this.state.following,
							handleFollow: this.handleFollow
						});
					}}
				/>
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
});
