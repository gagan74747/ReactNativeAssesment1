import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from '../styles';
import FormInput from '../components/FormInput';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';

export default function LoginForm({flex}) {
  const [username, setUsername] = React.useState('');
  const navigation = useNavigation()

  const handleLogin = () => {
    console.log('hello');
    if (!username.length) {
      return;
    }
    navigation.navigate('Dashboard', {username});
  };

  return (
    <View style={[styles.loginFormContainer, {flex}]}>
      <FormInput title="USERNAME" setInputToState={setUsername} />
      <FormInput title="PASSWORD" secureTextEntry={true} />
      <View style={{alignItems: 'flex-end'}}>
        <Text style={[styles.labelText, {color: 'grey'}]}>
          Forgot password?
        </Text>
      </View>
   <Button text="LOGIN" onPress={handleLogin} />
      <View style={styles.legend}>
        <View style={{borderWidth: 1, borderBottomColor: 'black', flex: 1}} />
        <View style={{alignItems: 'center', paddingHorizontal: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 17, textAlign: 'center'}}>
            Or Connect With
          </Text>
        </View>
        <View style={{borderWidth: 1, borderBottomColor: 'black', flex: 1}} />
      </View>
    </View>
  );
}
