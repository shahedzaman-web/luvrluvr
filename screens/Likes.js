import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import gs from '../style/GlobalStyle'

const Likes = () => {
    const navigation = useNavigation();
    return (
        <View style={gs.container}>
        <TouchableOpacity >
        <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
      </TouchableOpacity>
            <Text style={[gs.textCenter,gs.fontXL,gs.bold]}>Top Picks</Text>
            <Image style={styles.image} source={require('../images/mdi_heart-multiple.png')} />
            <Text style={[styles.detailsText,gs.my20,gs.mx32]}>See people who liked you with <Text style={gs.italic}>luvr<Text style={gs.bold}>luvr</Text></Text> Gold </Text>
    <View style={[gs.center,gs.mt96]}>
    <TouchableOpacity style={styles.btn}
    onPress={() => navigation.navigate('Picks')}>
    
    <Text style={[gs.bold,gs.fontDefault]}>See Who Likes You</Text>
    </TouchableOpacity>
    </View>
        </View>
    )
}

export default Likes

const styles = StyleSheet.create({
    detailsText :{
        color: "#655f5f",
        fontSize: 20,
        textAlign: "center"
    },image:{
        width: "90%",
        resizeMode: "contain",
        marginTop: 180
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
        backgroundColor:  "#ff7373",  
        zIndex: 5
    }

})
