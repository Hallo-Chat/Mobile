import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text_title} onPress={() => navigation.navigate('Home')}>Settings Screen</Text>
    </View>
  )
}

export default SettingsScreen

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