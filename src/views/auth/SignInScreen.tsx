import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

import { AUTH_ROUTES } from '../../constants/routes';
import { type AuthNavigationProp } from '../../navigation/auth';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';

export default function SignInScreen() {
  const navigation = useNavigation<AuthNavigationProp>();

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

      <Form>
        <TextInput
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          autoComplete='email'
          autoCorrect={false}
          inputMode='email'
          spellCheck={false}
          textContentType='emailAddress'
        />
        <TextInput
          placeholder='Hasło'
          autoCapitalize='none'
          autoCorrect={false}
          contextMenuHidden
          secureTextEntry
          spellCheck={false}
          textContentType='password'
        />
        <Button
          label='Zaloguj się'
          onPress={() => {
            // TODO:
          }}
        />
      </Form>

      <LinkButton label='Nie pamiętasz hasła?' onPress={() => {}} />
      <LinkButton
        label='Nie masz konta? Zarejestruj się'
        style={styles.bottomLink}
        onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_UP_SCREEN)}
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
  bottomLink: {
    marginTop: 'auto',
  },
});
