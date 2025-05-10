import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthNavigationProp } from '../../navigation/auth';
import { AUTH_ROUTES } from '../../navigation/routes';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import Logo from '../common/Logo';
import Omega from '../common/Omega';

export default function MainAuthScreen() {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <BackgroundWrapper
      style={styles.container}
      image={require('../../assets/images/background-onboarding.png')}
      opacity={1}
    >
      <Logo />
      <Omega />
      <View style={styles.buttonContainer}>
        <Button
          label='Zaloguj się'
          onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_IN_SCREEN)}
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
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});
