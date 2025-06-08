import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { MAX_BIRTH_DATE } from '../../constants/age';
import { COLORS } from '../../constants/colors';
import { personMock } from '../../mocks/person';
import { UserDTO, userSchema } from '../../models/User';
import DateTimePicker from '../common/forms/DateTimePicker';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import ScrollView from '../common/scrollView/ScrollView';
import useAccountSettings from './useAccountSettings';

export default function AccountSettings() {
  const hook = useAccountSettings();

  return (
    <PageWrapper style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../mocks/person.png')}
        />
        <LinkButton
          label='Zmień zdjęcie'
          onPress={() => {}}
          textStyle={styles.linkButton}
        />

        <Form<UserDTO>
          schema={userSchema}
          submitLabel='Zapisz'
          onSubmit={hook.onSaveButtonPress}
          onCancel={hook.onCancelButtonPress}
          defaultValues={personMock}
          fullScreen
        >
          <TextInput
            fieldName='firstName'
            label='Imię'
            autoCapitalize='words'
            autoComplete='name'
            textContentType='name'
            autoCorrect
            spellCheck
          />
          <TextInput
            fieldName='lastName'
            label='Nazwisko'
            autoCapitalize='words'
            autoComplete='family-name'
            textContentType='familyName'
            autoCorrect
            spellCheck
          />
          <DateTimePicker
            fieldName='birthDate'
            maxDate={MAX_BIRTH_DATE}
            label='Data urodzenia'
            spinner
          />
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
            fieldName='phoneNumber'
            label='Nr telefonu'
            keyboardType='phone-pad'
            inputMode='numeric'
            textContentType='telephoneNumber'
          />
          <TextInput
            fieldName='city'
            label='Miejscowość'
            autoCapitalize='words'
            textContentType='addressCity'
            autoCorrect
            spellCheck
          />
        </Form>
      </ScrollView>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  profileImage: {
    marginBottom: 15,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    borderRadius: 8,
  },
  linkButton: {
    color: COLORS.primary600,
    fontSize: 16,
    fontWeight: 600,
  },
});
