import React, { useState,useEffect }  from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import gs from '../style/GlobalStyle';



const ImagePick = () => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    
    return (
        <TouchableOpacity onPress={()=>pickImage() }
        style={[styles.imgBox, gs.mx12]}>
        {image && <Image source={{ uri: image }} style={{ width: 100, height: 150,resizeMode: "cover" }} />}
         <Image
           source={require("../images/akar-icons_circle-plus-fill.png")}
           style={styles.img}
         />
       </TouchableOpacity>
    )
}

export default ImagePick

const styles = StyleSheet.create({

    imgBox: {
        width: 100,
        height: 150,
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth: 1,
        backgroundColor: "#ededed",
        borderColor: "#c2c3c3",
      },
      img: {
        position: "absolute",
        right: -10,
        bottom: -10,
        width: 24,
        height: 24,
      },
})
