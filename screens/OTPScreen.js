import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import Screen from "../components/Screen";
import gs from "../style/GlobalStyle";

const OTPScreen = () => {
    const navigation = useNavigation();
  return (
    <Screen>
      <View style={gs.container}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
        </TouchableOpacity>

        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={[styles.titleText, gs.textCenter]}>My Code is</Text>
            <View style={[gs.center,gs.my20,gs.row]}>
            <TextInput style={[gs.borderB,gs.w40,gs.mr12,gs.textCenter,gs.bold,gs.fontDefault]}  placeholder="4"/>
            <TextInput style={[gs.borderB,gs.w40,gs.mr12,gs.textCenter,gs.bold,gs.fontDefault]}  placeholder="4"/>
            <TextInput style={[gs.borderB,gs.w40,gs.mr12,gs.textCenter,gs.bold,gs.fontDefault]}  placeholder="4"/>
            <TextInput style={[gs.borderB,gs.w40,gs.mr12,gs.textCenter,gs.bold,gs.fontDefault]}  placeholder="4"/>
        
            </View>
            <Text style={[gs.textCenter,gs.bold,gs.fontDefault]}>Please enter the 4-digit code send to you at +91 35678909876</Text>
          </View>
     
        <View style={gs.center}>
        <TouchableOpacity style={styles.btnResend}>
        <Text style={[styles.btnText,gs.textWhite]}>Resend</Text>
      </TouchableOpacity></View>

     <View style={gs.center}>
     <View style={styles.box}>
  <View style={gs.row}>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>1</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>2</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>3</Text>
  </TouchableOpacity></View>
  <View style={gs.row}>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>4</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>5</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>6</Text>
  </TouchableOpacity></View>
  <View style={gs.row}>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>7</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>8</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>9</Text>
  </TouchableOpacity></View>
  <View style={gs.row}>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>*</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>0</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.otpBtn}>
  <Text style={styles.otpText}>#</Text>
  </TouchableOpacity></View>

     </View>
     </View>
      <View style={gs.center}>
      <TouchableOpacity style={styles.btn}
      onPress={() => navigation.navigate("Mobile")}
      >
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
      </View>
    
        </View>
      </View>
    </Screen>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
   
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },
  titleContainer: {
    marginHorizontal: 10,
    marginBottom: 24,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
    marginTop: 40,
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
  },  btnResend: {
    borderRadius: 25,
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7373",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },box:{
      marginTop:40,
      borderWidth: 1,
      width: 280,
      height: 280,
      borderRadius: 40,
      padding:20,
      
  },otpText:{
    fontSize:32,
    fontWeight:"bold",
  },otpBtn:{
      paddingHorizontal:28,
      paddingVertical:10,
      alignItems: "center"
  }
})