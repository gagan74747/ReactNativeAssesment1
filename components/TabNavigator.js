import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';

export default function TabNavigator({username}) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicicons name={'home'} size={24} />;
          },
        }}
        initialParams={{username}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
