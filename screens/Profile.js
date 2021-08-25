import React from 'react'
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity } from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import gs from '../style/GlobalStyle';



const Profile = () => {
    const navigation = useNavigation();
    return (
        <View style={gs.container}>
        <View style={[gs.center,gs.my20]}>
        <Image style={[styles.imgPeople]} source={require('../images/people.png')} />
        <Text style={[styles.colorText,gs.textCenter,gs.my12]}>Priya Singh, 23</Text>
        </View>
<View style={[gs.spaceAround,gs.row]}>
<TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
<ImageBackground style={styles.bgImg} source={require('../images/Rectangle156.png')}>
<Image  source={require('../images/fa-solid_pen.png')} />
</ImageBackground>
<Text style={styles.text}>Edit Info</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() =>navigation.navigate("Settings")}>
<ImageBackground style={styles.bgImg} source={require('../images/Rectangle156.png')}>
<Image  source={require('../images/ri_settings-4-fill.png')} />
</ImageBackground>
<Text style={styles.text}>Settings</Text>
</TouchableOpacity>


</View>
<TouchableOpacity style={[gs.center]}>
<ImageBackground style={styles.bgImg} source={require('../images/Rectangle157.png')}>
<Ionicons name="ios-camera-sharp" size={30} color="white" />
<AntDesign style={styles.plusIcon} name="pluscircle" size={12} color="white" />
</ImageBackground>
<Text style={styles.text}>Add Media</Text>
</TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    imgPeople:{
        width: 250,
        height: 300,
        borderRadius: 10,
        zIndex: 5,
    },colorText:{
        color: "#ff7373",
        fontWeight: "600",
        fontSize: 32,
        padding:4,
        borderColor: "#ff7373",
    },bgImg:{
        resizeMode: 'contain',
        justifyContent: 'center',
        width: 60,
        height: 60,
        alignItems: 'center'
    },plusIcon:{
        position:'absolute',
        right:2,
        bottom:2,
        shadowOpacity: 0.4,
        shadowRadius:5,
        shadowColor: "gray"

    },text:{
        textAlign:'center',
        color: "#a6a1a1",
        fontWeight: "bold",
        fontSize: 16,

    }
})
