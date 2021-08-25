import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import gs from "./../style/GlobalStyle";
import Passion from "../components/Passion";

const Passions = () => {
     const navigation = useNavigation();
  const passions = [
    "Movies",
    "craft Beer",
    "Festivals",
    "Fishing",
    "Gardening",
    "Brunch",
    " Plant-based",
    "Poetry",
    "Cooking",
    "Reading",
    "Writer",
    "Biryani",
    "Working out",
    " VR Room",
    "Baking",
    "Sushi",
    "Tea",
    "Instagram",
    "Wine",
    "Cycling",
    "Hiking",
    "Gamer",
    "Maggi",
    "Bhangra",
    " House Parties",
    "Art",
    "Blogging",
    "Athlete",
    "Climbing",
    "Shopping",
    "Photography",
    "DIY",
    "New in Town",
    "Golf",
    "Vegan",
    "Dog Lover",
    "Cat Lover",
    "Musie",
    "Running",
    "Potterhead",
    "Comedy",
    "Langauage Exchange",
    "Volunteering",
    "Trivia",
    "sneakers",
    "Grab a drink",
    "Slam Poetry",
    "Travel",
    "Environmentalism",
    "VR Room",
    "Netflix",
    "Plant-based",
    "90s Kid",
    "Ludo",
    "Foodie",
    "Museum",
    "spirituality",
    "K-pop",
  ];

  return (
      <ScrollView>
    
    <Screen>
        <View style={gs.container}>
          <TouchableOpacity  style={[gs.mx12,gs.my12]}
            onPress={() => navigation.goBack()}
          >
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
          </TouchableOpacity>

          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={[styles.titleText,gs.ml12]}>Passions</Text>
              <Text style={[styles.subText, gs.mt20,gs.ml12]}>
                Let everyone k ow what you're passionate about by adding it your
                profile.
              </Text>
            </View>
           
            <View style={[styles.box]}>
            {
                passions.map((item,index) =>   <Passion style={gs.center}  key={index} item={item}/>)
               }
            </View>
       
           <View style={[gs.center,gs.my20]}>
           <TouchableOpacity style={[styles.btn,gs.mb20]}
           onPress={() => navigation.navigate("Avoid")}>
           <Text style={styles.btnText}>Continue</Text>
         </TouchableOpacity>
         </View>
          </View>
        </View>
    </Screen>
    </ScrollView>
  );
};

export default Passions;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  titleContainer: {
    marginHorizontal: 10,
    marginBottom: 24,
  },
  subtitleContainer: {
    marginVertical: 20,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  mainContainer: {
  
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
    fontSize: 16,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
   
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
  },box:{
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    display: "flex"
  } 
});

// #ff7373
// #8c8b8b
//#3e3e3e
