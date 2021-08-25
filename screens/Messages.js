import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput } from "react-native";

import gs from "../style/GlobalStyle";

const Messages = () => {
  return (
    <View style={[gs.container, gs.mx20]}>
        <View style={[gs.row,gs.mb12]}>
        <Image style={styles.icon} source={require("./../images/search.png")} />
        <TextInput style={styles.input} placeholder="Search 2 Matches" />
        </View>
      <View>
        <Text style={[styles.colorText, gs.fontXL, gs.bold]}>Who Likes</Text>
        <View style={[gs.row, gs.my12]}>
          <TouchableOpacity style={[gs.alignCenter, gs.mr12]}>
            <Image
              source={require("./../images/people.png")}
              style={styles.image}
            />
            <Text style={[gs.bold, gs.fontDefault]}>Nancy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[gs.alignCenter, gs.mx20]}>
            <Image
              source={require("./../images/people.png")}
              style={styles.image}
            />
            <Text style={[gs.bold, gs.fontDefault]}>Nancy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.colorText, gs.fontXL, gs.bold]}>New Matches</Text>
      <View style={[gs.row, gs.my12]}>
        <TouchableOpacity style={[gs.alignCenter, gs.mr12]}>
          <Image
            source={require("./../images/people.png")}
            style={styles.image}
          />
          <Text style={[gs.bold, gs.fontDefault]}>Nancy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[gs.alignCenter, gs.mx20]}>
          <Image
            source={require("./../images/people.png")}
            style={styles.image}
          />
          <Text style={[gs.bold, gs.fontDefault]}>Nancy</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.colorText, gs.fontXL, gs.bold]}>Messages</Text>

      <View style={[gs.my12]}>
        <TouchableOpacity style={[gs.alignCenter, gs.row, gs.my12]}>
          <Image
            source={require("./../images/people.png")}
            style={styles.chatImage}
          />
          <View style={gs.ml12}>
            <Text style={[gs.bold, gs.fontL]}>Nancy</Text>
            <Text style={styles.chatText}>Hi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[gs.alignCenter, gs.row, gs.my12]}>
        <Image
          source={require("./../images/people.png")}
          style={styles.chatImage}
        />
        <View style={gs.ml12}>
          <Text style={[gs.bold, gs.fontL]}>Nancy</Text>
          <Text style={styles.chatText}>Hi</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default Messages;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },chatImage:{
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  colorText: {
    color: "#ff7373",
  },
  chatText: {
    color: "#6e6b6b",
    fontSize: 20,
    fontWeight: "600",
  },input:{
      borderBottomWidth: 2,
      borderBottomColor: "#e2cfcf",
      width: "80%",
      fontWeight: "600",
      fontSize: 20,
  }
});
