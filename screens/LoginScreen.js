import LoginForm from './LoginForm';
import {ImageBackground} from 'react-native';
import styles from '../styles';
import React from 'react';
import Logo from '../components/Logo';
import SocialAuth from './SocialAuth';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.container}>
      <Logo flex={1} />
      <LoginForm flex={1.2} />
      <SocialAuth flex={1} />
    </ImageBackground>
  );
}
