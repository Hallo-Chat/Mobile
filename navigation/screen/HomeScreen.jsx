import * as React from 'react-native';

import { View, StyleSheet, FlatList } from 'react-native';

import ChatItem from '../../components/chat/ChatItem';

import ChatRoomItemData from '../../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
        data={ChatRoomItemData}
        renderItem={({ item }) => <ChatItem chatRoomItem={item} />}
        ListHeaderComponent={() => <FlatList 
          data={ChatRoomItemData}
          renderItem={({ item }) => <ChatItem chatRoomItem={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
});