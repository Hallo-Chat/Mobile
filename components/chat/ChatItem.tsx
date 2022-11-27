import React, { useState } from 'react'

import { Text, View, Image, Pressable, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/core'

import ChatItemStyles from './ChatItemStyles'
import axios from 'axios'

export default function ChatItem({ chatRoomItem, user }) {
  const [dataUserRecive, setdataUserRecive] = useState(null)
  const navigation = useNavigation()

  const receiverId =
    chatRoomItem.members.find((member) => member !== user._id) || null

  React.useEffect(() => {
    if (!receiverId || dataUserRecive) return
    ;(async () => {
      const res = await axios
        .get('http://10.0.2.2:4000/api/user?userId=' + receiverId)
        .then((res) => {
          setdataUserRecive(res.data)
        })
        .catch((error) => {
          console.log('🚀 ~ file: ChatItem.jsx ~ line 27 ~ ; ~ error', error)
        })
    })()
  }, [receiverId])

  if (!receiverId || chatRoomItem.isGroup) return null
  if (!dataUserRecive) return null
  // return null
  // const user = chatRoomItem.users[1]

  const onPressChatItem = () => {
    console.warn('Pressed on', user.name)
    navigation.navigate('ChatScreen', {
      conversationSelected: JSON.stringify(chatRoomItem),
      usernameReciver: dataUserRecive.username,
    })
  }

  return (
    <Pressable onPress={onPressChatItem} style={ChatItemStyles.container}>
      <Image
        source={{
          uri: dataUserRecive.profilePicture
            ? 'http://10.0.2.2:4000/images/' + dataUserRecive.profilePicture
            : 'https://i.pravatar.cc/300',
        }}
        style={ChatItemStyles.image_ava_item}
      />

      {/* {chatRoomItem.newMessages ? (
        <View style={ChatItemStyles.notify_chat_container}>
          <Text style={ChatItemStyles.notify_chat_item}>
            {chatRoomItem.newMessages}
          </Text>
        </View>
      ) : null} */}

      <View style={ChatItemStyles.rightContainer}>
        <View style={ChatItemStyles.row}>
          <Text style={ChatItemStyles.text_name_item}>
            {dataUserRecive?.username || 'test'}
          </Text>
          <Text style={ChatItemStyles.text_time_item}>1 hour ago</Text>
        </View>
      </View>
    </Pressable>
  )
}
