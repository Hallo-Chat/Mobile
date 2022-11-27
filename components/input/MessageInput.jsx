import { View, StyleSheet, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'

import { FontAwesome5, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const inputIconColor = '#595959';

const MessageInput = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        // send message
        console.warn("sending: ", message)
        setMessage('')
    }

    const onPressButtonSend = () => {
        if (message) {
            sendMessage()
        } else {
            console.warn("Chưa nhập gửi gì??")
        }
    }
    
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="smile-wink" size={24} color={inputIconColor} style={styles.icon} />
        <TextInput 
            style={styles.input}
            value={message}
            // onChangeText={(newMessage) => setMessage(newMessage)}
            // rut gon code o tren
            onChangeText={setMessage}
            placeholder='Tin nhắn'
        />
        <Feather name="camera" size={24} color={inputIconColor} style={styles.icon} />
        <MaterialCommunityIcons name="microphone-outline" size={24} color={inputIconColor} style={styles.icon_end_of_right} />
      </View>
      <Pressable onPress={onPressButtonSend} style={styles.buttonContainer}>
        <MaterialIcons name="send" size={28} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    container: {
        flex: 1
      },
    inputContainer: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        marginRight: 10,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    icon: {
        marginRight: 7
    },
    icon_end_of_right: {
        marginLeft: 5,
        marginRight: 3
    },
    input: {
        flex: 1
    },
    buttonContainer: {
        width: 42,
        height: 42,
        backgroundColor: '#1B61DB',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSend: {
        color: 'white',
    },
});

export default MessageInput