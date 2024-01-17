import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import itemDetails from "../pages/card";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>
            Our <Text style={{ color: "#D91C3E" }}>Products</Text>{" "}
          </Text>
          <Ionicons name="cart-outline" size={30} />
        </View>
        <ScrollView
          style={{ marginBottom: 20, marginHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <Text style={{ marginHorizontal: 10 }}>ALL</Text>
          <Text style={{ marginHorizontal: 10 }}>FURNITURE</Text>
          <Text style={{ marginHorizontal: 10 }}>SHOES</Text>
          <Text style={{ marginHorizontal: 10 }}>HOODIE</Text>
          <Text style={{ marginHorizontal: 10 }}>ACCESSORIES</Text>
        </ScrollView>
        <View style={styles.container}>
          {itemDetails.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate("ItemDetails", { item });
                }}
              >
                <View>
                  <Image style={styles.image} source={item.image} />
                  <View style={styles.cardDetailsCon}>
                    <View>
                      <Text>{item.name}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                    <Ionicons size={30} color={"hotpink"} name={item.addIcon} />
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    backgroundColor: "#88A6E5",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    rowGap: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  titleTxt: {
    fontSize: 26,
    fontWeight: "700",
  },
  itemContainer: {
    width: 160,
  },
  button: {
    borderRadius: 10,
    paddingBottom: 10,
    backgroundColor: "cyan",
  },
  image: {
    width: 120,
    height: 120,
    objectFit: "contain",
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 6,
  },
  cardDetailsCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  iconItemContainer: {
    display: "flex",
    flexDirection: "row",
  },
  price: { fontWeight: "700" },
});
