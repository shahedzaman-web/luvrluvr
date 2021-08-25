import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import Screen from "../components/Screen";
import gs from "../style/GlobalStyle";
import ImagePick from "../components/ImagePick";


const AddPhotos = () => {
    const navigation = useNavigation();
  



  return (
    <Screen>
      <View style={gs.container}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
        </TouchableOpacity>
       
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={[styles.titleText, gs.textCenter]}>Add Photo</Text>
            <Text style={styles.subText}>
              Add at least 2 photos to continue
            </Text>
          </View>
          <View style={[gs.row, gs.my12]}>
           <ImagePick/>
           <ImagePick/>
           <ImagePick/>
        
          </View>
          <View style={[gs.row, gs.my12]}>
          <ImagePick/>
          <ImagePick/>
          <ImagePick/>
          </View>
          <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate("Passions")}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
   
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  titleContainer: {
    marginHorizontal: 10,
    marginBottom: 24,
  },
  subText: {
    color: "#8c8b8b",
    fontSize: 20,
    fontWeight: "600",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
    marginTop: 200,
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
  },

});
