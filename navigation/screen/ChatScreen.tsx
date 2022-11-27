import { useNavigation, useRoute } from '@react-navigation/core'
import axios from 'axios'
import React from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { io } from 'socket.io-client'
import MessageData from '../../assets/dummy-data/Chats'
import MessageInput from '../../components/input/MessageInput'
import Message from '../../components/message/Message'

export default function ChatScreen() {
  const route = useRoute()

  const navigation = useNavigation()
  navigation.setOptions({ title: route.params?.usernameReciver })
  const conversationSelected = JSON.parse(route.params?.conversationSelected)
  const [messageData, setMessageData] = React.useState([])
  if (!conversationSelected) return null

  const [isReload, setIsReload] = React.useState(true)

  React.useEffect(() => {
    if (!isReload) return
    ;(async () => {
      const res = await axios
        .get('http://10.0.2.2:4000/api/messages/' + conversationSelected._id)
        .then((res) => {
          setMessageData(res.data)
          setIsReload(false)
        })
        .catch((error) => {
          console.log('🚀 ~ file: ChatItem.jsx ~ line 27 ~ ; ~ error', error)
        })
    })()
  }, [isReload])

  const socket = React.useRef(null)
  React.useEffect(() => {
    if (!socket.current) return
    socket.current = io('http://localhost:8900')
    socket.current.on('getMessage', (data) => {
      setMessageData((pre) => [
        ...pre,
        {
          sender: data.senderId,
          text: data.text,
          _id: Date.now(),
        },
      ])
    })
  }, [])

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.scrollView}>
        {messageData.map((item) => (
          <Message message={item} key={item._id} />
        ))}
      </ScrollView>
      <MessageInput
        conversationSelected={conversationSelected}
        handleReload={() => setIsReload(true)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },

  scrollView: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
})
