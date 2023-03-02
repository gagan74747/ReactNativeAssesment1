import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';

export default function Button({text, onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.loginButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
