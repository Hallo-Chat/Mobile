import { StyleSheet } from "react-native";

const ChatItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10
    },
    image_ava_item: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginRight: 10
    },
    notify_chat_container: {
      backgroundColor: '#3777F0',
      height: 25,
      width: 25,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 50,
      top: 10
    },
    notify_chat_item: {
      fontSize: 12,
      color: 'white'
    },
    rightContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    row: {
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    text_name_item: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    text_time_item: {
      fontSize: 11,
      textAlignVertical: 'center',
      color: 'gray'
    },
    text_chat_item: {
      fontSize: 14,
      color: 'gray'
    },
});

export default ChatItemStyles;