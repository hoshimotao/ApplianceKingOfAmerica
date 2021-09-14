import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Alert,
  Text,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  // REMOVE CONSOLE LOGS
  console.log("APP CONNECTED");
  console.log(Dimensions.get("window"));

  const handlePress = () => alert("Hey, you clicked me!");
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={{ width: "auto", flex: 1 }}
      />
      <View
        style={{
          backgroundColor: "#fc5c65",
          width: "100%",
          height: 75,
        }}
      >
        <TouchableOpacity>
          <View>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#4ECDC4",
          width: "100%",
          height: 75,
        }}
      >
        <TouchableOpacity>
          <View>
            <Text>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  buttonStyles: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "gold",
  },
});
