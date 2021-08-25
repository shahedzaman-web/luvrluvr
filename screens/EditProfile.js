import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import gs from "../style/GlobalStyle";
import ImagePick from "../components/ImagePick";

const EditProfile = () => {
  const navigation = useNavigation();

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={gs.container}>
      <ScrollView>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
          </TouchableOpacity>
          <View style={[gs.row, gs.my12]}>
            <View style={[styles.imgBox, gs.mx12]}>
              <Image
                style={[styles.imgPeople]}
                source={require("../images/people.png")}
              />
              <Image
                source={require("../images/akar-icons_circle-plus-fill.png")}
                style={styles.img}
              />
            </View>
           <ImagePick/>
           <ImagePick/>
          </View>
    

        <View style={[gs.center, gs.my20]}>
          <TouchableOpacity style={[styles.btn]}>
            <Text style={[gs.bold, gs.fontDefault]}>Add Media</Text>
          </TouchableOpacity>
        </View>
        <View style={[gs.row, gs.spaceBetween, gs.mx20, gs.alignCenter]}>
          <Text style={[gs.bold, gs.fontDefault]}>Smart Photos</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
        <Text style={[gs.bold, gs.fontDefault, gs.mx20, gs.my12]}>
          Show my Instagram Photos
        </Text>

        <Text
          style={[styles.colorText, gs.bold, gs.fontDefault, gs.mx20, gs.my12]}
        >
          Connect Instagram
        </Text>
        <View style={[gs.my20, gs.mx20]}>
          <TextInput style={styles.input} placeholder="About You" />
          <TextInput style={styles.input} placeholder="Add Passions" />
          <TextInput style={styles.input} placeholder="Add job Title" />
          <TextInput style={styles.input} placeholder="Add Company" />
          <TextInput style={styles.input} placeholder="Add University" />
          <TextInput style={styles.input} placeholder="Add City" />
          <TextInput style={styles.input} placeholder="Choose an anthem" />
          <TextInput style={styles.input} placeholder="Man / Women" />
          <TextInput
            style={styles.input}
            placeholder="Add Sexual Orientation"
          />
        </View>
        <View style={[gs.row,gs.spaceBetween,gs.mx20,gs.my12,gs.alignCenter]}>
<Text style={[gs.bold,gs.fontDefault]}>Don't Show My Age</Text>
<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
</View>
<View style={[gs.row,gs.spaceBetween,gs.mx20,gs.alignCenter,gs.my12]}>
<Text style={[gs.bold,gs.fontDefault]}>Make My Distance Invisible</Text>
<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
</View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ff7373",
    borderRadius: 30,
    width: "40%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  imgBox: {
    width: 100,
    height: 150,
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 1,
    backgroundColor: "#ededed",
    borderColor: "#c2c3c3",
  },
  imgPeople: {
    width: 100,
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  img: {
    position: "absolute",
    right: -10,
    bottom: -10,
    width: 24,
    height: 24,
    zIndex: 1,
  },
  colorText: {
    color: "#fe4141",
  },
  input: {
    color: "#b6b6b6",
    borderColor: "#b6b6b6",
    borderWidth: 2,
    borderRadius: 30,
    height: 60,
    padding: 12,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
});
