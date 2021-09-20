import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";


console.log("Message Screen");
const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);

    setMessages(newMessages);

    // delete message from messages array (above) -> call server
  };

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
            onPress={() => console.log("Message Selected!", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
