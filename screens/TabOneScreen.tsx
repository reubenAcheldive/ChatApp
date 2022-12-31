import { FlatList, StyleSheet } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem/ChatRoomItem";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";
const chatRoomItem1 = ChatRoomsData[0];
const chatRoomItem2 = ChatRoomsData[1];
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem={({ item }) => (
          <View>
            <ChatRoomItem chat={item} />
            <ChatRoomItem chat={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});

