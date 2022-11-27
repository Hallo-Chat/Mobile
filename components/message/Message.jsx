import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const bgBlue = '#1B61DB'
const bgLGrey = 'lightgrey';

const myID = 'u1';

const Message = ({ message }) => {

    const isMyMessage = message.user.id === myID;

  return (
    <View style={[styles.container, isMyMessage ? styles.leftContainer : styles.rightContainer]}>
      <Text style={[styles.text, {color: isMyMessage ? 'white' : 'black' }]}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgBlue,
        padding: 10,
        margin: 10,
        marginBottom: 0,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
      backgroundColor: bgBlue,
      marginLeft: 'auto',
      marginRight: 10
    },
    rightContainer: {
      backgroundColor: bgLGrey,
      marginLeft: 10,
      marginRight: 'auto'
    },
    text: {
        fontSize: 12,
    }
});

export default Message