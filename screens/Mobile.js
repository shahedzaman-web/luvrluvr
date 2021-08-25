import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Screen from '../components/Screen'
import gs from './../style/GlobalStyle'



const Mobile = () => {
    const navigation = useNavigation();
    return (
        <Screen>
        <View style={[styles.container,gs.mt32,gs.ml16]}>
        <TouchableOpacity  
        onPress={() => navigation.goBack()}>
    <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
            </TouchableOpacity>
        
       <View style={styles.mainContainer}> 
            <Text style={[gs.textCenter,gs.mt32,gs.fontDefault,gs.bold]}>My number is</Text>
<View style={[gs.row,gs.mx20,gs.mt28]}>
<TextInput  style={[gs.borderB2,gs.bold,gs.mx20,gs.fontDefault,gs.borderGray]} placeholder="IN +91"/>
<TextInput  style={[gs.borderB2,gs.bold,gs.fontDefault,gs.borderGray,gs.wP60]} placeholder="Phone Number"/>
</View>
           
            <Text style={[gs.textCenter,gs.fontNormal,gs.my40]}>When you tap "Continue", date will send a text with verification code.Message and data rates may apply. The verified phone number can be log in <Text style={gs.bold}>Learn what happens when your number change.</Text> </Text>
         <View style={gs.center}>
         <TouchableOpacity
         style={styles.btn}
         onPress={() => navigation.navigate("Location")}
         >
        <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
         </View>
        </View>
        </View>
        </Screen>
    )
}

export default Mobile

const styles = StyleSheet.create({
    btnText:{
        fontWeight:'bold',
        fontSize: 20,
        color: '#fff'
    },btn:{
        borderRadius:30,
        width:"80%",
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#ff7373",
        shadowOffset:{width:2,height:2},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation:8,
    },mainContainer:{
        marginHorizontal:40,
        marginTop:30,
    }
})
