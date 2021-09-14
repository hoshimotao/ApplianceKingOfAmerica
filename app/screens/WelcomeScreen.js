import React from "react";
import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  registerButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
