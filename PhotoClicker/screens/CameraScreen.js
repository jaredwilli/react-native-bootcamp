import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasPermission: null,
			type: Camera.Constants.Type.back,
			isFlashlightOn: Camera.Constants.FlashMode.off
		}
	}

	static navOption = {
		title: 'Camera'
	}

	// Ask for camera permissions
	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);

		this.setState({
			hasPermission: status === 'granted'
		});
	}

	// Flip the camera
	flipCamera = () => {
		this.setState({
			type: this.state.type === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		})
	}

	// Toggle flashlight
	flashLight = () => {
		this.setState({
			isFlashlightOn: this.state.isFlashlightOn === Camera.Constants.FlashMode.off
				? Camera.Constants.FlashMode.on
				: Camera.Constants.FlashMode.off
		});
	}

	// Take pictureand send to home screen
	takePicture = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
			this.props.navigation.navigate('Home', { photo });
		}
	}

	render() {
		const { hasPermission } = this.state;

		if (hasPermission === null) {
			return <View />
		} else if (hasPermission === false) {
			return <View><Text>No access to camera</Text></View>
		} else if (hasPermission === true) {

			return (
				<View style={styles.container}>
					<Camera
						style={styles.cameraView}
						type={this.state.type}
						flashMode={this.state.isFlashlightOn}
						ref={ref => {
							this.camera = ref;
						}}
					>

					<View style={styles.actionContainer}>
						<TouchableOpacity
							onPress={() => this.flipCamera()}
							style={styles.iconHolder}
						>
							<FontAwesome
								name="camera"
								size={35}
								style={styles.icon}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => this.takePicture()}
							style={styles.iconHolder}
						>
							<FontAwesome
								name="circle"
								size={35}
								style={styles.icon}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => this.flashLight()}
							style={styles.iconHolder}
						>
							<FontAwesome
								name="flash"
								size={35}
								style={styles.icon}
							/>
						</TouchableOpacity>
					</View>
					</Camera>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
	flex: 1,
},
actionContainer: {
	backgroundColor: 'transparent',
	flex: 1,
	flexDirection: 'row',
  },
  iconHolder: {
	flex: 1,
	alignItems: 'center',
	alignSelf: 'flex-end',
  },
  icon: {
	marginBottom: 10,
	color: '#fff',
  },
});
