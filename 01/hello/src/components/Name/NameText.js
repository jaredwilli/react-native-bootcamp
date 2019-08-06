import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textStyle: {
		backgroundColor: '#111',
		borderRadius: 2,
		color: '#4dacac',
		fontSize: 20,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 5,
	}
});

const NameText = () => (
	<Text style={styles.textStyle}>Submit</Text>
)

export default NameText;
