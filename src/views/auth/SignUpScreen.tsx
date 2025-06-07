import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RegisterDTO, registerSchema } from '../../models/Auth';
import { type InitialFlowNavigationProp } from '../../navigation/initialFlow';
import { AUTH_ROUTES, INITIAL_FLOW_ROUTES } from '../../navigation/routes';
import Form from '../common/forms/form/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';

export default function SignUpScreen() {
  const navigation = useNavigation<InitialFlowNavigationProp>();

  return (
    <PageWrapper style={styles.container}>
      <Logo />

      <Form<RegisterDTO>
        schema={registerSchema}
        submitLabel='Dalej'
        onSubmit={() =>
          navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR)
        }
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
        onPress={() => {
          navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_IN_SCREEN));
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
