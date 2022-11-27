import React, { useState } from 'react'

import { View, StyleSheet, FlatList } from 'react-native'

import ChatItem from '../../components/chat/ChatItem'

// import ChatRoomItemData from '../../assets/dummy-data/ChatRooms'
import useBearStore from '../../store/login'

import axios from 'axios'

export default function TabOneScreen() {
  const user = useBearStore((state) => state.user || {})

  const [conversations, setConversations] = useState([])

  React.useEffect(() => {
    if (!user || conversations.length > 0) return
    ;(async () => {
      const res = await axios
        .get('http://10.0.2.2:4000/api/conversations/' + user._id)
        .then((res) => {
          setConversations(res.data || [])
        })
        .catch((error) => console.log(error))
    })()
  }, [user])

  return (
    <View style={styles.page}>
      <FlatList
        data={conversations}
        renderItem={({ item }) => <ChatItem chatRoomItem={item} user={user} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
})
