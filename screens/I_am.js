import React,{ useState }  from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";

import Screen from "../components/Screen";


const I_am = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
        </TouchableOpacity>

        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>I am a</Text>
          </View>
          <TouchableOpacity style={styles.btnGender}>
            <Text style={styles.btnTextGender}>WOMAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGender}>
            <Text style={styles.btnTextGender}>MAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGender}>
            <Text style={styles.btnTextGender}>MORE</Text>
          </TouchableOpacity>
          <View style={[styles.row,styles.marginTop]}>
          <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
              <Text style={styles.checkoutText}>Show my gender on my profile</Text>
          </View>
    
          <TouchableOpacity
            onPress={() => navigation.navigate("Name")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default I_am;

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
  btnGender: {
    marginVertical: 20,
    borderColor: "#8c8b8b",
    borderWidth: 1,
    borderRadius: 30,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  btnTextGender: {
    color: "#8c8b8b",
    fontWeight: "bold",
    fontSize: 20,
  },checkoutText:{
    color: "#8c8b8b",
  }
});
