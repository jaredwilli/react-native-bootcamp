import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navOption = {
	title: 'PhotoClicker'
  }

  render() {
	let photo = this.props.navigation.getParam('photo', 'empty');

    return (
      <View style={styles.container}>
        <Image
			resizeMode="center"
			style={styles.imageHolder}
			source={
				photo === 'empty' ? require('../assets/logo.png') : photo
			}
		/>

		<Button
			title="Take Photo"
			onPress={() => {
				this.props.navigation.navigate('Camera');
			}}
			styles={styles.button}
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
  imageHolder: {
	alignSelf: 'center',
	height: 400,
	width: 400,
  },
  button: {
	margin: 20,

  }
});
