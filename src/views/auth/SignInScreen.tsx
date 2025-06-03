import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { loginSchema, type LoginDTO } from '../../models/Auth';
import { type InitialFlowNavigationProp } from '../../navigation/initialFlow';
import { AUTH_ROUTES, INITIAL_FLOW_ROUTES } from '../../navigation/routes';
import Form from '../common/forms/form/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';

export default function SignInScreen() {
  const navigation = useNavigation<InitialFlowNavigationProp>();

  const onSubmit = (data: LoginDTO) => {
    navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR);
  };

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
          label='E-mail'
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
          label='Hasło'
          autoCapitalize='none'
          autoCorrect={false}
          contextMenuHidden
          secureTextEntry
          spellCheck={false}
          textContentType='password'
        />
      </Form>

      <LinkButton label='Nie pamiętasz hasła?' onPress={() => {}} />

      <LinkButton
        label='Nie masz konta? Zarejestruj się'
        style={styles.bottomLink}
        onPress={() => {
          navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_UP_SCREEN));
        }}
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
