import React from 'react';

import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Message from '../../components/message/Message';

import MessageData from '../../assets/dummy-data/Chats';
import MessageInput from '../../components/input/MessageInput';

import { useRoute } from '@react-navigation/core';

import { useNavigation } from '@react-navigation/core';

export default function ChatScreen() {

    const route = useRoute();

    const navigation = useNavigation();
    navigation.setOptions({ title: 'Elon Musk' })

    console.warn("Display chat screen: ", route.params?.id)

    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={MessageData.messages}
                renderItem={({ item }) => <Message message={item} />}              
            />
            <MessageInput />
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    }
});