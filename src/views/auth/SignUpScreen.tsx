import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { type AuthNavigationProp } from '../../navigation/auth';
import { AUTH_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';
import Logo from '../common/Logo';
import PageWrapper from '../common/PageWrapper';

export default function SignUpScreen() {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <PageWrapper style={styles.container}>
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
          textContentType='newPassword'
        />
        <TextInput
          placeholder='Potwierdź hasło'
          autoCapitalize='none'
          autoCorrect={false}
          contextMenuHidden
          secureTextEntry
          spellCheck={false}
        />
        <Button
          label='Dalej'
          onPress={() => {
            // TODO:
          }}
        />
      </Form>

      <LinkButton
        label='Masz konto? Zaloguj się'
        style={styles.bottomLink}
        onPress={() => navigation.navigate(AUTH_ROUTES.SIGN_IN_SCREEN)}
      />
    </PageWrapper>
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
