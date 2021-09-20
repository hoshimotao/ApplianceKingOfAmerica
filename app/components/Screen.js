import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
