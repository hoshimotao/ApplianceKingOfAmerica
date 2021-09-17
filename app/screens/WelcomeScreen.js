import React from "react";
import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1.75}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <Image
        style={styles.logoContainer}
        resizeMode="contain"
        style={styles.logo}
        source={require("../assets/koa-logo.png")}
      />

      <Text style={styles.tagline}>Appliance KOA</Text>
      <Text style={styles.tagline}>EST. 1946</Text>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="gold" />
        <AppButton title="Register" color="black" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    top: -50
  },
  logoContainer: { position: "absolute", top: 25, alignItems: "center" },
  tagline: {
    fontSize: 25,
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default WelcomeScreen;
