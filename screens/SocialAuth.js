import {View} from 'react-native';
import React from 'react';
import styles from '../styles';
import ButtonWithIcon from '../components/ButtonWithIcon';

export default function SocialAuth({flex}) {
  return (
    <View style={[styles.socialAuthButtonsContainer, {flex}]}>
      <ButtonWithIcon
        buttonText="Facebook"
        backgroundColor="#36609F"
        iconPath={require('../assets/images/fbIcon.png')}
      />
      <ButtonWithIcon
        buttonText="Google"
        backgroundColor="#D93D2B"
        iconPath={require('../assets/images/googleIcon.png')}
      />
    </View>
  );
}
