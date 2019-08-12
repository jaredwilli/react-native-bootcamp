import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Follow extends React.Component {
  render() {
		const followReq = this.props.navigation.getParam('followReq', '0');
		const following = this.props.navigation.getParam('following', '0');
		const handleFollow = this.props.navigation.getParam('handleFollow', '');

    return (
      <View style={styles.container}>
        <Text>Follow me</Text>
        <Text>Length {followReq.length}</Text>

				{followReq.map((friend, index) => {
					return (
						<Button
							key={friend}
							title={`Follow ${friend}`}
							onPress={() => handleFollow(index)}
						/>
					)
				})}

				<Button
					title="Home"
					onPress={() => {
						this.props.navigation.navigate('Home');
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
