import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    	<View style={{
				backgroundColor: '#2475B0',
				width: 100,
			}}>

    	</View>
    	<View style={{
				backgroundColor: '#D63031',
				width: 100,
			}}>

    	</View>
    	<View style={{
				backgroundColor: '#10A881',
				width: 100,
			}}>

    	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		marginTop: 24,
  },
});
