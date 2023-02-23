import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 60,
  },
  loginFormContainer: {
    paddingHorizontal: 30,
  },
  labelText: {
    fontSize: 20,
    color: '#F25456',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#F25456',
    fontSize: 20,
    color: 'black',
    opacity: 0.7,
    textDecorationLine: 'none',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical: 20,
  },
  loginButtonText: {
    fontSize: 20,
    color: '#F25456',
    fontWeight: 'bold',
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialAuthButton: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    flexBasis: '47%',
    height: 50,
    borderRadius: 30,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

const Login = () => (

  <ImageBackground
    source={require('./background.jpg')}
    style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('./heartIcon.png')} />
    </View>
    <LoginForm flex={2.2} />
  </ImageBackground>

);

const LoginForm = ({ flex }) => {
  const handleLogin = () => {
    Alert.alert('Title', 'Successfully logged in', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancelled'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('success') },
    ]);
  }
  return (
    <View style={[styles.loginFormContainer, { flex }]}>
      <Text style={styles.labelText}>USERNAME</Text>
      <TextInput style={styles.input} />
      <Text style={styles.labelText}>PASSWORD</Text>
      <TextInput style={styles.input} secureTextEntry />
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={[styles.labelText, { color: 'grey' }]}>
          Forgot password?
        </Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText} onPress={handleLogin}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.legend}>
        <View style={{ borderWidth: 1, borderBottomColor: 'black', flex: 1 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}>
            Or Connect With
          </Text>
        </View>
        <View style={{ borderWidth: 1, borderBottomColor: 'black', flex: 1 }} />
      </View>
      <View style={styles.socialAuthButtonsContainer}>
        <TouchableOpacity
          style={[styles.socialAuthButton, { backgroundColor: '#36609F' }]}>
          <Image style={{ height: '70%' }} source={require('./fbIcon.png')} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialAuthButton, { backgroundColor: '#D93D2B' }]}>
          <Image style={{ height: '70%' }} source={require('./googleIcon.png')} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
