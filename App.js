import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from './screens/WelcomeScreen';
import University from './screens/University';
import Name from './screens/Name';
import I_am from './screens/I_am';
import Birthday from './screens/Birthday';
import Location from './screens/Location';
import Avoid from './screens/Avoid';
import Mobile from './screens/Mobile';
import MainScreen from './screens/MainScreen';
import Orientation from './screens/Orientation';
import AddPhotos from './screens/AddPhotos';
import OTPScreen from './screens/OTPScreen';
import Passions from './screens/Passions';
import Picks from './screens/Picks';
import EditProfile from './screens/EditProfile';
import Settings from './screens/Settings';
import BottomTabNav from './navigation/BottomTabNav';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Mobile" component={Mobile} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Iam" component={I_am} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="University" component={University} />
      <Stack.Screen name="Birthday" component={Birthday} />
      <Stack.Screen name="Orientation" component={Orientation} />
      <Stack.Screen name="AddPhotos" component={AddPhotos} />
      <Stack.Screen name="Passions" component={Passions} />
      <Stack.Screen name="Avoid" component={Avoid} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Picks" component={Picks} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="BottomTab" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Discover/>
    // <Profile/>
    // <Likes/>
    // <Picks/>
  
    // <EditProfile/>
    // <Settings/>
    // <Messages/>
    // <Passions/>
    // <Birthday/>
    // <Location/>
    // <Avoid/>
    // <Mobile/>
    // <MainScreen/>
    // <Orientation/>
    // <AddPhotos/>
    // <OTPScreen/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
