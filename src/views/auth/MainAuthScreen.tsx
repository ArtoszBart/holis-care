import { useNavigation, usePreventRemove } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthNavigationProp } from '../../navigation/auth';
import { AUTH_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';

const bgId = Math.floor(Math.random() * 3);
const backgroundImages = [
  require(`../../assets/images/backgrounds/background-auth-1.webp`),
  require(`../../assets/images/backgrounds/background-auth-2.webp`),
  require(`../../assets/images/backgrounds/background-auth-3.webp`),
  require(`../../assets/images/backgrounds/background-auth-4.webp`),
];

export default function MainAuthScreen() {
  usePreventRemove(true, () => {});
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={backgroundImages[bgId]}
      opacity={1}
    >
      <Logo />

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
