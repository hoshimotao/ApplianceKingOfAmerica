import React, { useReducer } from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.description}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Jimmy Thomas"
            description="5 Listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: { padding: 20 },
  image: {
    width: "100%",
    height: 300,
  },
  description: { color: colors.secondary, fontSize: 20 },
  title: { fontSize: 24 },
  userContainer: { marginTop: 50 },
});
export default ListingDetailScreen;
