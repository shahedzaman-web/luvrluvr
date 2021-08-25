import React, { useState } from 'react'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'

const Passion = ({item}) => {
    const [selected, setselected] = useState(false);

    return (
     
         <TouchableOpacity 
         onPress={() => setselected(!selected)}
         style={selected ?styles.containerSelected : styles.container }>
         <Text style={styles.text}>{item}</Text>
         </TouchableOpacity>
       
    )
}

export default Passion

const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        margin: 6,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },text:{
        fontSize: 16,
        fontWeight: 'bold',
    },containerSelected:{
        borderColor: "#ff7373",
        borderWidth: 3,
        margin: 6,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
