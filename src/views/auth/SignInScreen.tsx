import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { type AuthNavigationProp } from '../../navigation/auth';
import { AUTH_ROUTES } from '../../navigation/routes';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';
import Logo from '../common/Logo';

export default function SignInScreen() {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <BackgroundWrapper style={styles.container}>
      <Logo />

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
  bottomLink: {
    marginTop: 'auto',
  },
});
