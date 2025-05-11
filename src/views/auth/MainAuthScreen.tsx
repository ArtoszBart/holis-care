import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { AuthNavigationProp } from '../../navigation/auth';
import { AUTH_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/PageWrapper';

export default function MainAuthScreen() {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <ImageBackground
      source={require('../../assets/images/background-onboarding.png')}
      resizeMode='cover'
      style={{ flex: 1 }}
    >
      <PageWrapper style={styles.container}>
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
      </PageWrapper>
    </ImageBackground>
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
