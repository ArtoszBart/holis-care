import { StyleSheet } from 'react-native';
import { loginSchema, type LoginDTO } from '../../../models/Auth';
import DemoCredentials from '../../common/demo/DemoCredentials';
import Form from '../../common/forms/Form';
import TextInput from '../../common/forms/TextInput';
import LinkButton from '../../common/LinkButton';
import Logo from '../../common/Logo';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useSignInScreen from './useSignInScreen';

export default function SignInScreen() {
  const { onSubmit, onRegisterButtonPress } = useSignInScreen();

  return (
    <PageWrapper style={styles.container}>
      <Logo />

      <Form<LoginDTO>
        schema={loginSchema}
        submitLabel='Zaloguj się'
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
          textContentType='password'
        />
      </Form>

      <DemoCredentials />

      {/* <LinkButton label='Nie pamiętasz hasła?' onPress={() => {}} /> */}

      <LinkButton
        label='Nie masz konta? Zarejestruj się'
        style={styles.bottomLink}
        onPress={onRegisterButtonPress}
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
