import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GroupChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text_title} onPress={() => navigation.navigate('Home')}>GroupChat Screen</Text>
    </View>
  )
}

export default GroupChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_title: {
        fontSize: 26,
        fontWeight: 'bold'
    },
})