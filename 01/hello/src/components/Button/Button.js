import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textStyle: {
		backgroundColor: '#070',
		borderRadius: 4,
		color: '#fff',
		fontSize: 20,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 5,
	}
});

const Button = ({ children }) => (
	<Text style={styles.textStyle}>
		{children}
	</Text>
)

export default Button;
