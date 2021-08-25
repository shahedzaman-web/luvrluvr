import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image ,ScrollView} from 'react-native'


import gs from '../style/GlobalStyle';

const Picks = () => {
    return (
        <ScrollView>
        <View style={gs.container}>
           <View style={[gs.row,gs.spaceAround]}>
  
           <Text style={[styles.textColor]}>0 Likes</Text>
           <View style={[styles.borderRight]}/>
          
           <Text style={[gs.fontXL,gs.bold]}>Top Picks</Text>
           
           </View>
           <View style={styles.border}/>
            <View style={[gs.row,gs.spaceAround,gs.my12]}>
            <TouchableOpacity>
            <Image style={styles.img} source={require('../images/RectanglePeople.png')}/>
            <View style={styles.box}>
            <Text style={[gs.bold,gs.textCenter,gs.fontNormal]}>Nancy, 36</Text>
            <Text style={gs.textCenter}>8 hours left</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.img} source={require('../images/RectanglePeople.png')}/>
            <View style={styles.box}>
            <Text style={[gs.bold,gs.textCenter,gs.fontNormal]}>Nancy, 36</Text>
            <Text style={gs.textCenter}>8 hours left</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={[gs.row,gs.spaceAround,gs.my12]}>
            <TouchableOpacity>
            <Image style={styles.img} source={require('../images/RectanglePeople.png')}/>
            <View style={styles.box}>
            <Text style={[gs.bold,gs.textCenter,gs.fontNormal]}>Nancy, 36</Text>
            <Text style={gs.textCenter}>8 hours left</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.img} source={require('../images/RectanglePeople.png')}/>
            <View style={styles.box}>
            <Text style={[gs.bold,gs.textCenter,gs.fontNormal]}>Nancy, 36</Text>
            <Text style={gs.textCenter}>8 hours left</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={[gs.row,gs.spaceAround,gs.my12]}>
            <TouchableOpacity>
            <Image style={styles.img} source={require('../images/RectanglePeople.png')}/>
            <View style={styles.box}>
            <Text style={[gs.bold,gs.textCenter,gs.fontNormal]}>Nancy, 36</Text>
            <Text style={gs.textCenter}>8 hours left</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.img} source={require('../images/RectanglePeople.png')}/>
            <View style={styles.box}>
            <Text style={[gs.bold,gs.textCenter,gs.fontNormal]}>Nancy, 36</Text>
            <Text style={gs.textCenter}>8 hours left</Text>
            </View>
            </TouchableOpacity>
            </View>

            <View style={[gs.center,gs.mt96]}>
            <TouchableOpacity style={styles.btn}>
            <Text style={[gs.bold,gs.fontDefault]}>Unlock Top Picks </Text>
            </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    )
}

export default Picks

const styles = StyleSheet.create({

    btn:{
        position: "absolute",
        bottom: 200,
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
    },textColor:{
        color: "#a4a4a4",
        fontSize: 28,
        fontWeight: "bold" 
    },border:{
        borderBottomWidth:2,
        borderBottomColor:"#a4a4a4",
        marginTop:12
    },borderRight:{
        borderRightWidth:2,
        borderRightColor:"#a4a4a4",
     
    },img:{
        width: 160,
        height: 200
    },box:{
        borderWidth:2,
        borderRadius:20,
        borderColor: "#a4a4a4",
        padding:4
    }

})
