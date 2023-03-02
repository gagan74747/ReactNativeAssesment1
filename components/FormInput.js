import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from '../styles';

function FormInput({title, secureTextEntry, setInputToState}) {
  return (
    <View>
      <Text style={styles.labelText}>{title}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={setInputToState}
      />
    </View>
  );
}

export default React.memo(FormInput);