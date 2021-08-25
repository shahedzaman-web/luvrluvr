import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



import Screen from "../components/Screen";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <Screen>
      <View style={styles.container}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Entypo name="cross" size={40} color="#ff7373" />
</TouchableOpacity>
       
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome</Text>
            <Text style={styles.subText}>Please follow therse house rules</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.row}>
              <Feather name="chevrons-right" size={24} color="black" />
              <Text style={styles.subtitleText}>Be Yourself</Text>
            </View>
            <Text style={styles.blackText}>
              Make sure your photos, age and bio are true to who you are
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.row}>
              <Feather name="chevrons-right" size={24} color="black" />
              <Text style={styles.subtitleText}>Stay Safe</Text>
            </View>
            <Text>
              <Text style={styles.blackText}>
                Don't be too quick to give out personal information.
              </Text>
              <Text style={styles.importantText}>Dete Safely</Text>
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <View style={styles.row}>
              <Feather name="chevrons-right" size={24} color="black" />
              <Text style={styles.subtitleText}>Play It Cool</Text>
            </View>
            <View>
              <Text style={styles.blackText}>
                Respect others and treat them as you would like to be treated
              </Text>
            </View>
          </View>
          <View style={styles.subtitleContainer}>
            <View style={styles.row}>
              <Feather name="chevrons-right" size={24} color="black" />
              <Text style={styles.subtitleText}>Be Proactive</Text>
            </View>
            <View>
              <Text style={styles.blackText}>Always Report bad behavior</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("BottomTab")}
          >
            <Text style={styles.btnText}>I Agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
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
  subtitleContainer: {
    marginVertical: 20,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  mainContainer: {
    marginHorizontal: 40,
    marginTop: 30,
  },
  blackText: {
    color: "#3e3e3e",
  },
  importantText: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  subText: {
    color: "#8c8b8b",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
    marginTop: 50,
    borderRadius: 30,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
});

// #ff7373
// #8c8b8b
//#3e3e3e
