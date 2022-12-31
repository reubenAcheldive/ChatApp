import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import { ChatRoomData } from "../../types/chatRoomItem.type";

const ChatRoomItem = ({ chat }: { chat: ChatRoomData }) => {
  console.log(chat.users[0].imageUri);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${chat.users[1].imageUri}`,
        }}
      />
      {chat?.newMassage ? (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chat.newMassage}</Text>
        </View>
      ) : (
        <></>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{chat.users[1].name}</Text>
          <Text style={styles.text}>{chat.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chat.lastMessage.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
