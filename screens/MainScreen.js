import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Screen from '../components/Screen'
import gs from '../style/GlobalStyle'
import { AntDesign,Feather } from '@expo/vector-icons';


const MainScreen = () => {
    const navigation = useNavigation();
    return (
        <Screen>
        <View style={gs.container}>
        <View style={gs.center}>
        <Image source={require('./../images/logo.png')} style={styles.logo}/>
        </View>
           
            <Text style={[gs.fontNormal,styles.textColor,gs.textCenter,gs.mb64,gs.mt96]}>By Clicking "Log in",you agree with our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy. </Text>

       <View style={gs.center}>
       <TouchableOpacity
       style={[styles.btn,gs.row,]}
       onPress={() => navigation.navigate("OTP")}
       >
       <AntDesign name="mobile1" size={24} color="black" />
       <Text style={[gs.ml8,gs.bold,gs.fontNormal]}>Log in Phone Number</Text>
       </TouchableOpacity>

       <TouchableOpacity
       style={[styles.btn,gs.row,gs.my48]}
       >
       <Feather name="facebook" size={24} color="black" />
       <Text style={[gs.ml8,gs.bold,gs.fontNormal]}>Log in with Facebook</Text>
       </TouchableOpacity>
       </View>
         <TouchableOpacity>
         <Text style={[gs.fontDefault,gs.bold,gs.textWhite,gs.textCenter]}>Trouble Logging in?</Text>
         </TouchableOpacity>
        </View>
        </Screen>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    textColor:{
        color:'#938787',
        fontWeight: "600"
    },btn:{
        borderRadius:30,
        width:"90%",
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "white",
        shadowOffset:{width:2,height:2},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation:8,
    }
})
