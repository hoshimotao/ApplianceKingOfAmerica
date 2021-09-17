import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  listDetailsContainer: {},
  subTitle: {
    color: colors.medium,
    fontSize: 20,
  },
  title: { fontSize: 24, fontWeight: "600" },
});

export default ListItem;
