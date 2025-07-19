import React from 'react';
import { StyleSheet } from 'react-native';
import { RegisterDTO, registerSchema } from '../../../models/Auth';
import Form from '../../common/forms/RenameIssue';
import TextInput from '../../common/forms/TextInput';
import LinkButton from '../../common/LinkButton';
import Logo from '../../common/Logo';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useSignUpScreen from './useSignUpScreen';

export default function SignUpScreen() {
  const { onSubmit, onLoginButtonPress } = useSignUpScreen();

  return (
    <PageWrapper style={styles.container}>
      <Logo />

      <Form<RegisterDTO>
        schema={registerSchema}
        submitLabel='Dalej'
        onSubmit={onSubmit}
      >
        <TextInput
          fieldName='email'
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
          fieldName='password'
          placeholder='Hasło'
          autoCapitalize='none'
          autoCorrect={false}
          contextMenuHidden
          secureTextEntry
          spellCheck={false}
          textContentType='newPassword'
        />
        <TextInput
          fieldName='confirmPassword'
          placeholder='Potwierdź hasło'
          autoCapitalize='none'
          autoCorrect={false}
          contextMenuHidden
          secureTextEntry
          spellCheck={false}
        />
      </Form>

      <LinkButton
        label='Masz konto? Zaloguj się'
        style={styles.bottomLink}
        onPress={onLoginButtonPress}
      />
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
  },
  bottomLink: {
    marginTop: 'auto',
  },
});
