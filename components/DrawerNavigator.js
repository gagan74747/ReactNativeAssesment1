import React from 'react';
import TabNavigator from './TabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({username}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        initialParams={{username}}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
