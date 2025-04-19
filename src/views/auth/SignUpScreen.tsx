import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

import BackgroundWrapper from '../common/BackgroundWrapper';
import Form from '../common/forms/Form';
import LinkButton from '../common/LinkButton';

export default function SignUpScreen() {
  return (
    <BackgroundWrapper
      style={styles.container}
      image={require('../../assets/images/background.png')}
    >
      <Image
        source={require('../../assets/images/logo.svg')}
        contentFit='contain'
        style={styles.logo}
      />
      <Form />
      <LinkButton
        label='Masz konto? Zaloguj się'
        style={styles.linkButton}
        onPress={() => {
          // TODO:
        }}
      />
    </BackgroundWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  logo: {
    width: '30%',
    height: '10%',
  },
  linkButton: {
    marginTop: 'auto',
  },
});
