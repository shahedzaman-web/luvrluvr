import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';




import gs from "../style/GlobalStyle";

const Discover = () => {
    


    return (
        <View style={gs.container}>
   
        <TouchableOpacity 
        style={styles.imgContainer}
       >
        <Image style={styles.imgFilter} source={require('../images/feather_filter.png')} />
        </TouchableOpacity>
            
            <Text style={[gs.bold,gs.textCenter,gs.fontXL,gs.my12,gs.mb32]}>Discover</Text>
            <View style={gs.center}>
            <Image style={styles.rectangle2} source={require('../images/Rectangle103.png')} />
            <Image style={styles.rectangle1} source={require('../images/rectangle102.png')} />
            <Image style={[styles.imgPeople]} source={require('../images/people.png')} />
            </View>
            <View style={[gs.spaceAround,gs.row,gs.mt28,gs.mt20]}>
            <Text style={[styles.colorText]}>Working Out</Text>
            <Text style={[styles.colorText]}>Cooking</Text>
            <Text style={[styles.colorText]}>Blogging</Text>
            </View>
            <View style={gs.center}>
            <Text style={[gs.bold,gs.fontL,gs.my12,gs.mt28]}>Priya Singh, 23</Text>
            <Text style={[gs.alignCenter,gs.fontNormal,gs.bold,gs.my12]}>Manager <MaterialIcons name="my-location" size={16} color="black" /> 10 KM</Text>
            <Text style={[gs.alignCenter,gs.fontNormal,gs.bold,gs.textCenter]}>Feminist, Cats, Others stuff that's midly interesting </Text>

            </View>
            <View style={[gs.row,gs.center,gs.my20]}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
            <Image style={styles.logo} source={require('../images/logo2.png')} />
            <Image style={styles.logo} source={require('../images/logo5.png')} />
            <Image style={styles.logo} source={require('../images/logo4.png')} />
            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    imgContainer:{
        position: 'absolute',
        right: 10
    },imgPeople:{
        width: 250,
        height: 300,
        borderRadius: 10,
        zIndex: 5,
    },rectangle2:{
        position: 'absolute',
        top: -18,
        width: 180,
        height: 200,
        borderRadius: 10,
        zIndex: 3,
    },rectangle1:{
        position: 'absolute',
        top: -8,
        width: 200,
        height: 200,
        borderRadius: 10,
        zIndex: 4,
    },colorText:{
        color: "#ff7373",
        fontWeight: "bold",
        borderRadius:10,
        borderWidth:2,
        padding:4,
        borderColor: "#ff7373",
    },logo:{
        marginRight:12
    }
})
