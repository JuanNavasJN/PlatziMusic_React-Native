import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const DEFAULT_AVATAR = 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
const AVATAR_SIZE = 32

const Comment = (props) =>
	<View style={styles.comment}>
		{
			props.avatar ? 
				<Image style={styles.avatar} source={{ uri: props.avatar }}/> :
				<Image style={styles.avatar} source={{ uri: DEFAULT_AVATAR }}/>
		}
		
		<Text style={styles.text}>{props.text}</Text>
	</View>

const styles = StyleSheet.create({
	comment: {
		backgroundColor: '#ecf0f1',
		padding: 10,
		margin: 5,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		marginLeft: 10,
	},
	avatar: {
		width: AVATAR_SIZE,
		height: AVATAR_SIZE,
		borderRadius: AVATAR_SIZE / 2,
	}
})

export default Comment