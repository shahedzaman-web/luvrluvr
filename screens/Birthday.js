import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import Screen from '../components/Screen'

const Birthday = () => {
  const navigation = useNavigation();
    return (
        <Screen>
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
        </TouchableOpacity>

        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>My birthday is</Text>
          </View>
          <TextInput style={styles.inputText} placeholder="DD / MM / YYYY" />
          <Text style={[styles.subText,styles.textCenter,styles.mt]}>Your age will be public</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Orientation")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
          </View>
        </View>
        </Screen>
     
    )
}

export default Birthday

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
  container: {
    marginTop: 30,
    marginHorizontal: 10,
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
  subText: {
    color: "#8c8b8b",
    fontSize: 24,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },marginTop:{
    marginTop: 200,
    marginBottom: 20,
  },
  btn: { 
      marginTop: 260,
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
  },textCenter:{
      textAlign: "center",
  },inputText:{
    borderBottomWidth: 2,
    borderBottomColor: '#8c8b8b',
    fontSize:24,
    paddingBottom:4,
    paddingLeft:10,
    marginTop:40,
  },mt:{
      marginTop: 80,
  }
})
