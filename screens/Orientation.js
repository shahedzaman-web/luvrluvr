import React, { useState }  from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";

import Screen from '../components/Screen';
import gs from '../style/GlobalStyle';


const Orientation = () => {
  const navigation = useNavigation();

    const [checked, setChecked] = useState(false);
    const [straight, setStraight] = useState(false);
    const [gay, setGay] = useState(false);
    const [lesbian, setLesbian] = useState(false);
    const [bisexual, setBisexual] = useState(false);
    const [asexual, setAsexual] = useState(false);
    const [demisexual, setDemisexual] = useState(false);
    const [pansexual, setPansexual] = useState(false);
    return (
       <Screen>
       <View style={styles.container}>
       <TouchableOpacity  onPress={() => navigation.goBack()}
       >
   <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
           </TouchableOpacity>
       
      <View style={styles.mainContainer}> 
      <Text style={[gs.fontXXL,gs.bold]}>My sexual orientation is</Text>
      <Text style={[styles.subText,gs.my20]}>select up to 3</Text>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setStraight(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Straight</Text>
      </View>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setGay(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Gay</Text>
      </View>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setLesbian(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Lesbian</Text>
      </View>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setBisexual(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Bisexual</Text>
      </View>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setAsexual(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Asexual</Text>
      </View>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setDemisexual(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Demisexual</Text>
      </View>
      <View style={[gs.row,gs.alignCenter,gs.my12]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setPansexual(isChecked);
      }}
    />
    <Text style={[styles.checkboxText,gs.fontDefault,gs.ml12]}>Pansexual</Text>
      </View>


      <View style={[gs.row,gs.center,gs.my16]}>   
      <BouncyCheckbox
      size={25}
      fillColor="#ff7373"
      iconStyle={{ borderColor: "#ff7373" }}
      isChecked={straight}
      onPress={(isChecked) => {
        setChecked(isChecked);
      }}
    />
    <Text style={[styles.checkText,gs.fontDefault,gs.ml12]}>Show my orientation on my profile</Text>
      </View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("AddPhotos")}
      style={styles.btn}>
     <Text style={styles.btnText}>Continue</Text>
     </TouchableOpacity>
   </View>
   </View>
   </Screen>
    )
}

export default Orientation

const styles = StyleSheet.create({
    container: {
        marginTop:30,
      marginHorizontal: 10
    },mainContainer:{
        marginHorizontal:40,
        marginTop:30,
    },titleText:{
        fontSize:40,
        fontWeight:'bold',
        marginVertical:20
    },titleContainer:{
        marginHorizontal: 30,
        marginBottom:24
    },subText:{
        color: "#8c8b8b",
        fontSize:24
    },btnText:{
        fontWeight:'bold',
        fontSize: 20
    },btn:{
        borderRadius:30,
        width:"100%",
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "white",
        shadowOffset:{width:2,height:2},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation:8,
    },checkboxText:{
        color: "#4b4949",
        fontWeight: "600"
    },checkText:{
        color: "#938787"
    }
})