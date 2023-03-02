import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from '../styles';

export default function ButtonWithIcon({
  buttonText,
  backgroundColor,
  iconPath,
}) {
  return (
    <TouchableOpacity style={[styles.buttonWithIcon, {backgroundColor}]}>
      <Image style={styles.icon} source={iconPath} />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
