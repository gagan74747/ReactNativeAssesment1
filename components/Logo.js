import {View, Image} from 'react-native';
import React from 'react';
import styles from '../styles';

export default function Logo({flex}) {
  return (
    <View style={[styles.logoContainer, {flex}]}>
      <Image
        style={styles.logo}
        source={require('../assets/images/heartIcon.png')}
      />
    </View>
  );
}
