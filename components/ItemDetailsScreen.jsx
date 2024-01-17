import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ItemDetailsScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.viewer}>
      <Ionicons name="cart-outline" size={30} style={styles.cartBtn} />
      <Image style={styles.img} source={item.image} />
      <View style={styles.card}>
        <Text style={styles.txt}>{item.name}</Text>
        <View style={styles.reviewContainer}>
          <View style={styles.reviewItems}>
            <View style={styles.ratingIconContainer}>
              <Ionicons name="star" color={"gold"} />
              <Ionicons name="star" color={"gold"} />
              <Ionicons name="star" color={"gold"} />
              <Ionicons name="star-half" color={"gold"} />
              <Ionicons name="star-outline" color={"gold"} />
            </View>
            <Text style={styles.reviewText}>{item.reviews}</Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Text>{item.ratings}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewer: {
    flex: 1,
    backgroundColor: "#88A6E5",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  cartBtn: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  txt: {
    fontSize: 27,
    marginBottom: 6,
  },
  img: {
    width: 200,
    height: 300,
    objectFit: "contain",
    alignSelf: "center",
  },
  card: {
    position: "absolute",
    bottom: 0,
    top: 450,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 35,
    paddingTop: 20,
    paddingHorizontal: 35,
    shadowColor: "black",
    elevation: 10,
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewItems: {
    display: "flex",
    flexDirection: "row",
  },
  ratingIconContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 5,
  },
  reviewText: {
    color: "grey",
  },
  price: {
    fontWeight: "700",
    fontSize: 20,
  },
});
