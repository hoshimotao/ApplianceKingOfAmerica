import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";

console.log(Constants);
const messages = [
  {
    id: 1,
    title: "This dryer sucks!",
    description:
      "It wouldn't work when I tried it home after lugging it inside from the car.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "This dryer is great!",
    description: "Worked great and quietly as soon as I turned it on!",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
export default MessagesScreen;
