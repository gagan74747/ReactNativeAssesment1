import {View, Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(props) {
 const navigation = useNavigation()
  const {username} = props.route.params;
  const handleLogout = () => {
navigation.navigate('Login')
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Welcome {username}</Text>
      <Text style={{fontSize: 25, textDecorationLine: 'underline'}} onPress={handleLogout}>
        Logout
      </Text>
    </View>
  );
}
