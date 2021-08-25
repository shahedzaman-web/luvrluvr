import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather,Entypo } from '@expo/vector-icons';
import Screen from '../components/Screen';
 import { useNavigation } from '@react-navigation/native';

const Avoid = () => {
     const navigation = useNavigation();
    return (
        <Screen>
        <View style={styles.container}>
            <Entypo name="cross" size={40} color="#ff7373" />
           <View style={styles.mainContainer}> 
           <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Want to Avoid someone you know on <Text style={styles.italic}><Text style={styles.textNormal}>luvr</Text>luvr?</Text></Text>
            <Text style={styles.subText}>It's easy - share your device's contacts with <Text style={styles.italic}>luvrluvr</Text> want to avoid. </Text>
            <Text style={[styles.subText,styles.mt16]}>We'll store your blocked contacts to stop you from seeing each other if your contact has an account with the same info you provide. You can stop sharing contacts with us in your settings.</Text>

            </View>
            <Text style={[styles.subtitleText,styles.mt160]}>Learn more here,including how lurluvr processes your contacts</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
             style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
           </View>
        </View>

        </Screen>
    )
}

export default Avoid;

const styles = StyleSheet.create({
    container: {
        marginTop:30,
      marginLeft: 10
    },titleText:{
        fontSize:36,
        fontWeight:'600',
        marginVertical:20
    },titleContainer:{
        marginBottom:24
    },subtitleContainer:{
        marginVertical:20,
    },subtitleText:{
        fontSize:18,
      
        color: "#8c8b8b",
    },row:{
        flexDirection:'row',
    },mainContainer:{
        marginHorizontal:20,
        marginTop:30
    },blackText:{
        color: "#3e3e3e"
    },importantText:{
        fontWeight:'bold',
        fontStyle:'italic',
    },subText:{
        color: "#8c8b8b",
        fontWeight:"500",
        fontSize: 20
    },btnText:{
        fontWeight:'bold',
        fontSize: 20
    },btn:{
        marginTop:50,
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
    },italic:{
        fontStyle:'italic',
    },mt16:{
        marginTop:16,
    },mt160:{
        marginTop:160
    },textNormal:{
        fontWeight:'normal'
    }
})

// #ff7373
// #8c8b8b
//#3e3e3e

