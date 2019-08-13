import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import moment from 'moment';

export default class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			time: moment().format('LTS'),
			date: moment().format('LL')
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				time: moment().format('LTS'),
				date: moment().format('LL')
			});
		}, 1000);
	}

  render() {
    return (
			<View style={styles.container}>
				<StatusBar style={{ backgroundColor: 'transparent' }} />

				<Text style={styles.timeText}>
					{this.state.time}
				</Text>

				<Text style={styles.dateText}>
					{this.state.date}
				</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: '#999999',
    fontSize: 75,
  },
  dateText: {
    color: '#999999',
    fontSize: 40,
  },
});
