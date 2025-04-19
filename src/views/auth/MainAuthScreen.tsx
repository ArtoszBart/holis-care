import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AUTH_ROUTES } from '../../constants/routes';
import { AuthNavigationProp } from '../../navigation/auth';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';

export default function MainAuthScreen() {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <BackgroundWrapper
      style={styles.container}
      image={require('../../assets/images/background-onboarding.png')}
      opacity={1}
    >
      <Image
        source={require('../../assets/images/logo.svg')}
        contentFit='contain'
        style={styles.logo}
      />
      <Image
        source={require('../../assets/images/omega.png')}
        contentFit='contain'
        style={styles.omega}
      />
      <View style={styles.buttonContainer}>
        <Button
          label='Zaloguj się'
          onPress={() => {
            // TODO:
          }}
        />
        <Button
          label='Załóż konto'
          invertedStyle
          onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_UP_SCREEN)}
        />
      </View>
    </BackgroundWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    width: '30%',
    height: '10%',
  },
  omega: {
    width: '100%',
    paddingTop: '100%',
    marginLeft: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});
