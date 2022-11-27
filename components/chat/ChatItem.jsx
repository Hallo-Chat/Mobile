import React from 'react'

import { Text, View, Image, Pressable, StyleSheet } from "react-native";

import { useNavigation } from '@react-navigation/core';

import ChatItemStyles from './ChatItemStyles';

export default function ChatItem({ chatRoomItem }) {
  const user = chatRoomItem.users[1];

  const navigation = useNavigation();

  const onPressChatItem = () => {
    console.warn('Pressed on', user.name); 
    navigation.navigate('ChatScreen', { id: chatRoomItem.id });
  }

  return (
    <Pressable onPress={onPressChatItem} style={ChatItemStyles.container}>
        <Image source={{ uri: user.imageUri }} style={ChatItemStyles.image_ava_item} />

        {chatRoomItem.newMessages ? <View style={ChatItemStyles.notify_chat_container}>
          <Text style={ChatItemStyles.notify_chat_item}>{chatRoomItem.newMessages}</Text>
        </View> : null }
        
        <View style={ChatItemStyles.rightContainer}>
          <View style={ChatItemStyles.row}>
            <Text style={ChatItemStyles.text_name_item}>{user.name}</Text>
            <Text style={ChatItemStyles.text_time_item}>{chatRoomItem.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} ellipsizeMode='middle' style={ChatItemStyles.text_chat_item}>{chatRoomItem.lastMessage.content}</Text>
        </View>
    </Pressable>
  )
}