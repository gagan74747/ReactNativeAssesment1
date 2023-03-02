import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import React from 'react';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Dashboard({route}) {
  const {username} = route.params;
 return (
   
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            return <Ionicicons name={'home'} size={24} />;
          },
        }}
        initialParams={{username}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerTitleAlign: 'center'}}
      />
    </Tab.Navigator>
 );


 // return (
 //  <Drawer.Navigator>
 //   <Drawer.Screen name="Profile" component={Profile} />
  
 //  </Drawer.Navigator>
 // );

}
