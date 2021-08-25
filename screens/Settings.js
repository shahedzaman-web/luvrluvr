import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground
} from "react-native";
import { FontAwesome5,MaterialIcons,AntDesign } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useNavigation } from "@react-navigation/native";


import CustomLabel from "./../components/Slider/CustomLabel"
import gs from "../style/GlobalStyle";

const Settings = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [multiSliderValue, setMultiSliderValue] = useState([18, 23]);
  const [sliderOneValue, setSliderOneValue] = useState([5]);
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);
  const  sliderOneValuesChangeFinish = () => setSliderOneChanging(false);
  const sliderOneValuesChange = values => setSliderOneValue(values);
  const   multiSliderValuesChange = values => setMultiSliderValue(values);

  return (
    <View style={gs.container}>
      <ScrollView>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={40} color="#ff7373" />
        </TouchableOpacity>
        <Text style={[gs.fontXXL, gs.bold, gs.m20, gs.ml32]}>Settings</Text>
        <View style={gs.center}>
          <View style={[styles.box,gs.my16]}>
            <View style={[gs.row, gs.alignCenter]}>
              <Image
                style={styles.logo}
                source={require("./../images/logoNN.png")}
              />
              <View style={[gs.row, gs.ml56,gs.alignCenter]}>
                <Text style={[gs.italic, gs.fontXL]}>
                  luvr<Text style={gs.bold}>luvr</Text>
                </Text>
                <View style={styles.borderBoxBlack}>
                  <Text style={[gs.textWhite,gs.bold]}>PRIMIUM</Text>
                </View>
              </View>
            </View>
            <Text style={[gs.textCenter,styles.subText]}>Priority Likes, see who Likes You, and more</Text>
          </View>
          <View style={[styles.box,gs.my16]}>
          <View style={[gs.row, gs.alignCenter]}>
            <Image
              style={styles.logo}
              source={require("./../images/logoNN.png")}
            />
            <View style={[gs.row, gs.ml56,gs.alignCenter]}>
              <Text style={[gs.italic, gs.fontXL]}>
                luvr<Text style={gs.bold}>luvr</Text>
              </Text>
              <View style={styles.borderBoxGold}>
                <Text style={[gs.textWhite,gs.bold]}>ELITE</Text>
              </View>
            </View>
          </View>
          <Text style={[gs.textCenter,styles.subText]}>See who Likes You, and more!</Text>
        </View>
        <View style={[styles.box,gs.my16]}>
        <View style={[gs.row, gs.center]}>
          <ImageBackground
          style={{width:40, height:40,justifyContent: 'center',alignItems: 'center'}}
            source={require("./../images/Group7.png")}
          >
          <MaterialIcons name="bolt" size={24} color="white" />
          </ImageBackground>
          
        </View>
        <Text style={[gs.textCenter,styles.subText]}>Give Boosts to increase your  matches!</Text>
      </View>

        </View>

        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Account settings</Text>
      <View style={gs.center}>
      <View style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Phone Number</Text>
      <TextInput styles={[gs.bold,gs.fontNormal]} placeholder="91 99000009900"/>
      </View>
      </View>
      </View>

      <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Discover settings</Text>
      <View style={gs.center}>
      <View style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Location</Text>
      <Text style={[styles.containerTextBlue, gs.fontDefault]}>My current Location</Text>
      </View>
      </View>
      
      <View style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Global</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      </View>
     
      <View style={[styles.box,gs.my16,gs.p12]}>
      <View style={[ ]}>
     <View style={[gs.row,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Maximum distance</Text>
      <Text style={[styles.containerText, gs.fontDefault]}>{sliderOneValue} Km </Text>
     </View>
     <MultiSlider
     values={sliderOneValue}
     sliderLength={310}
     min={1}
     max={100}
     onValuesChangeStart={sliderOneValuesChangeStart}
     onValuesChange={sliderOneValuesChange}
     onValuesChangeFinish={sliderOneValuesChangeFinish}
   />
      </View>
      </View>
     
      <View style={[styles.box,gs.my16]}>
      <View style={[ ]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Show Me</Text>
        <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>
        <Text style={[styles.containerText]}>Women</Text>
        <AntDesign name="right" size={16} color="#555353" />
        </View>
      </View>
      </View>

      <View style={[styles.box,gs.my16]}>
      <View style={[ ]}>
     <View style={[gs.row,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Age Range</Text>
      <Text style={[styles.containerText, gs.fontDefault]}><Text style={styles.text}>{multiSliderValue[0]}</Text> - <Text style={styles.text}>{multiSliderValue[1]}</Text> </Text>
     </View>
     <MultiSlider
     values={[multiSliderValue[0], multiSliderValue[1]]}
     sliderLength={300}
     onValuesChange={multiSliderValuesChange}
     min={18}
     max={60}
     step={1}
     allowOverlap
     snapped
     customLabel={CustomLabel}
   />
      </View>
      </View>
      <View style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Show me on <Text style={[gs.italic, gs.textNormal]}>luvr<Text style={gs.bold}>luvr</Text></Text></Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      </View>
      <TouchableOpacity style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Block Contacts </Text>
      
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>Share my Feed </Text>
      
      </View>
      </TouchableOpacity>

      <View style={[styles.box,gs.my16]}>
      <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
      <Text style={[styles.containerText, gs.fontDefault]}>recommended sort</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      </View>
      </View>

      <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Data Usage</Text>
        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
        <Text style={[styles.containerText, gs.fontDefault]}>recommended sort</Text>
        <AntDesign name="right" size={24} color="#555353" />
        </View>
        </View>

        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}> Web Profile</Text>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>
          <Text style={[styles.containerText]}>Username</Text>
        <View style={gs.row}>
        <Text style={[styles.containerText]}>Claim Yours</Text>
        <AntDesign name="right" size={16} color="#555353" />
        </View>
          </View>
        </View>
        </View>
        
        </View>
        
        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Vibes</Text>
        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}> Manage Vibes</Text>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>
          <Text style={[styles.containerText]}>Settings</Text>
  
        <AntDesign name="right" size={16} color="#555353" />
    
          </View>
        </View>
        </View>
        </View>


        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Top Picks</Text>
        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}> Manage Top Picks</Text>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>
          <Text style={[styles.containerText]}>Settings</Text>
          <AntDesign name="right" size={16} color="#555353" />
    
          </View>
        </View>
        </View>
        </View>


        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Read Receipts</Text>
        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}>Manage Read </Text>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>

          <Text style={[styles.containerText]}>Settings</Text>
          <AntDesign name="right" size={16} color="#555353" />
          </View>
        </View>
        </View>
        </View>
        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Swipe Surge</Text>

        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}>Manage Swipe Surge</Text>
           <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>

          <Text style={[styles.containerText]}>Settings</Text>
          <AntDesign name="right" size={16} color="#555353" />
          </View>
          
        </View>
        </View>
        </View>
        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Activity Status</Text>

        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}>Recently Active Status</Text>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>

          <Text style={[styles.containerText]}>Settings</Text>
          <AntDesign name="right" size={16} color="#555353" />
       
          </View>
        </View>
        </View>
        </View>


        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>App Settings</Text>

        <View style={gs.center}>
      
        <View style={[styles.boxLarge,gs.my16]}>
    
        <Text style={[styles.containerText, gs.fontDefault]}>Notifications</Text>
        <Text style={[styles.containerText]}>Email</Text>
        <Text style={[styles.containerText]}>Push notification</Text>
        <Text style={[styles.containerText]}>Team <Text style={[gs.italic,gs.textNormal]}>luvr<Text style={gs.bold}>luvr</Text></Text> </Text>
      
        </View>


        <View style={[styles.box,gs.my16]}>
        <View style={[ ]}>
        <Text style={[styles.containerText, gs.fontDefault]}> Show Distance in</Text>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>
          <Text style={[styles.containerText]}>Km.</Text>
      
        <Text style={[styles.containerText]}>MI.</Text>
          </View>
        </View>
        </View>
        </View>
        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Payment Account</Text>

        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
   
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>
          <Text style={[styles.containerText]}>Manage Payment Account</Text>
          <AntDesign name="right" size={16} color="#555353" />
          </View>
          <View style={[gs.spaceBetween,gs.row,gs.alignCenter,gs.mt12]}>

          <Text style={[styles.containerText]}>Restore Purchase</Text>
          <AntDesign name="right" size={16} color="#555353" />
       
          </View>
        </View>
        </View>
        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Contact Us</Text>

        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <Text style={[styles.containerText]}>Help & Support</Text>
        </View>
        
     
        </View>


        <Text style={[gs.bold,gs.fontXL,gs.mx20,gs.my12]}>Community</Text>
        <View style={gs.center}>
        <View style={[styles.box,gs.my16]}>
        <Text style={[styles.containerText]}>Community Guidelines</Text>
        <Text style={[styles.containerText]}>Safety Tips</Text>
        </View>
        <View style={[styles.box,gs.my16]}>
        <Text style={[styles.containerText]}>Share <Text style={[gs.italic,gs.textNormal]}>luvr<Text style={gs.bold}>luvr</Text></Text></Text>
        </View>
        <View style={[styles.boxXL,gs.my16]}>
    
        <Text style={[styles.containerText, gs.fontDefault]}>Legal</Text>
        <Text style={[styles.containerText]}>License</Text>
        <Text style={[styles.containerText]}>Privacy Preferences</Text>
        <Text style={[styles.containerText]}>Privacy Policy</Text>
        <Text style={[styles.containerText]}>Terms of Services</Text>
        
      
        </View>
        <View style={[styles.box,gs.my16]}>
        <Text style={[styles.containerText]}>Logout</Text>
        </View>
        <View style={[styles.box,gs.my16]}>
        <Text style={[styles.containerText]}>Delete Account</Text>
        </View>


        </View>
    




      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  box: {
    color: "#b6b6b6",
    borderColor: "#b6b6b6",
    borderWidth: 2,
    borderRadius: 40,
    height: 80,
    padding: 12,
    paddingHorizontal: 20,
    width: "90%",
    justifyContent: "center"
  }, boxLarge: {
    color: "#b6b6b6",
    borderColor: "#b6b6b6",
    borderWidth: 2,
    borderRadius: 60,
    height: 120,
    padding: 12,
    paddingHorizontal: 20,
    width: "90%",
    justifyContent: "center"
  },  boxXL: {
    color: "#b6b6b6",
    borderColor: "#b6b6b6",
    borderWidth: 2,
    borderRadius: 75,
    height: 150,
    padding: 12,
    paddingHorizontal: 20,
    width: "90%",
    justifyContent: "center"
  },
  input: {
    color: "#b6b6b6",
    borderColor: "#b6b6b6",
    borderWidth: 2,
    borderRadius: 30,
    height: 60,
    padding: 12,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  borderBoxBlack: {
    borderRadius: 20,
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical:2,
    marginLeft: 12,
    height:24,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: -16,
  },subText:{
      color: "#8e8b8b",
      fontWeight: "bold"
  },  borderBoxGold: {
    borderRadius: 20,
    backgroundColor: "#e1b311",
    paddingHorizontal: 16,
    paddingVertical:2,
    marginLeft: 12,
    height:24,
    alignItems: "center",
    justifyContent: "center",
  },containerText:{
      color: "#555353",
      fontWeight: "bold"
  },containerTextBlue:{
    fontWeight: "bold",
    color: "#108acf"
  }
});
// #e1b311
// #555353

