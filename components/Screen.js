import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
const Screen = ({children}) => {
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'white','#ff7373']}
        start={{x: 0.5, y: 0.4}}
        style={styles.background}
      >
          {children}
      </LinearGradient>
    )
}

export default Screen

const styles = StyleSheet.create({
    background:{
        flex:1,
    }
})