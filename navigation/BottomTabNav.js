import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'

import Discover from '../screens/Discover'
import Messages from '../screens/Messages'
import Likes from '../screens/Likes';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();


const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false,tabBarShowLabel: false, }}>
        <Tab.Screen   options={{
            tabBarIcon: () => (
            <Image style={{width: 36,height:36,resizeMode: "contain"}} source={require("./../images/Group-2.png")} />
            ),
          }} name="Discover" component={Discover} />
        <Tab.Screen options={{
            tabBarIcon: () => (
            <Image style={{width: 60,height:60,resizeMode: "contain"}} source={require("./../images/tab1.png")} />
            ),
          }} name="Likes" component={Likes} />
        <Tab.Screen options={{
            tabBarIcon: () => (
            <Image style={{width: 60,height:60,resizeMode: "contain"}} source={require("./../images/tab2.png")} />
            ),
          }}  name="Messages" component={Messages} />
        <Tab.Screen options={{
            
            tabBarIcon: () => (
            <Image style={{width: 60,height:60,resizeMode: "contain"}} source={require("./../images/tab3.png")} />
            ),
          }}  name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}

export default BottomTabNav


