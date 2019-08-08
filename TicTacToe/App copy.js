import React from 'react';
import { Image } from 'react-native';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right
} from 'native-base';

export default class App extends React.Component {
	constructor(props) {
			super(props);

			this.state = {
				isFontLoaded: false
			};
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
		});

		this.setState({ isFontLoaded: true });
	}

	render() {
		if (!this.state.isFontLoaded) {
			return null;
		}

		return (
			<Container>
				<Header />
				<Content>
					<Card>
						<CardItem>
							<Left>
								<Thumbnail
									width="100"
									height="100"
									source={{uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/62564812_10155961662242041_6083959640234655744_n.jpg?_nc_cat=103&_nc_oc=AQlYEBSjOKDkCmM2pD3vFc-ML21wXqVoDQ1eI555Z2XKZn3e3GqTnttmHRM0MR76vug&_nc_ht=scontent-atl3-1.xx&oh=c8d65305b47d124d92a5d2e880681983&oe=5DEC384D'}}
								/>

								<Body>
									<Text>Jared Williams</Text>
									<Text note>Kiter | Coder</Text>
								</Body>
							</Left>
						</CardItem>

						<CardItem cardBody>
							<Image
								source={{uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/67815307_10156062807012041_2004099927214391296_o.jpg?_nc_cat=107&_nc_oc=AQlw8-Z97ZhcpVe-OWNLDPS70tr0prRVifJT2HjyxqmKjBxrdnS0a3Tf1VZAq7Spo-U&_nc_ht=scontent-atl3-1.xx&oh=c57159988adbdf6000cd96e7f7f9beb3&oe=5DD67C66'}}
								style={{height: 300, width: null, flex: 1}}
							/>
						</CardItem>

						<CardItem>
							<Left>
								<Button transparent>
									<Icon active name="thumbs-up" />
									<Text>12 Likes</Text>
								</Button>
							</Left>

							<Body>
								<Button transparent>
										<Icon active name="chatbubbles" />
										<Text>4 Comments</Text>
								</Button>
							</Body>

							<Right>
								<Text>11h ago</Text>
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
