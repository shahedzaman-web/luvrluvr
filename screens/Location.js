import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";

const Location = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.center}>
          <View style={styles.iconContainer}>
            <Ionicons name="md-location-outline" size={100} color="#8c8b8b" />
          </View>
        </View>
        <View>
          <Text style={styles.titleText}>Enable Location</Text>
          <Text style={[styles.descriptionText, styles.mt, styles.px]}>
            You'll need to enable your location in order to use Tinder
          </Text>
          <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate("Iam")}
          >
            <Text style={styles.btnText}>Allow Location</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.descriptionText}>Tell Me More</Text>
            <Entypo name="chevron-down" size={24} color="#8c8b8b" />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Location;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  mainContainer: {
    marginHorizontal: 40,
    marginTop: 30,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 20,
  },
  titleContainer: {
    marginHorizontal: 30,
    marginBottom: 24,
  },
  mt: {
    marginTop: 50,
  },
  px: {
    paddingHorizontal: 40,
  },
  descriptionText: {
    textAlign: "center",
    color: "#8c8b8b",
    fontSize: 24,
    fontWeight: "bold",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  marginTop: {
    marginTop: 200,
    marginBottom: 20,
  },
  btn: {
    marginTop: 240,
    borderRadius: 30,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 20,
  },
  textCenter: {
    textAlign: "center",
  },
  iconContainer: {
    borderColor: "#d0d0d0",
    backgroundColor: "#ededed",
    marginTop: 80,
    borderRadius: 80,
    width: 160,
    height: 160,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
