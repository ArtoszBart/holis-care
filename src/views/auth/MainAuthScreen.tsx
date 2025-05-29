import { useNavigation, usePreventRemove } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthNavigationProp } from '../../navigation/auth';
import { AUTH_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/pageWrapper/PageWrapper';

export default function MainAuthScreen() {
  usePreventRemove(true, () => {});
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/background-onboarding.png')}
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
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});
