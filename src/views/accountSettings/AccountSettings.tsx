import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { MAX_BIRTH_DATE } from '../../constants/age';
import { COLORS } from '../../constants/colors';
import { personMock } from '../../mocks/person';
import Button from '../common/Button';
import DateTimePicker from '../common/forms/DateTimePicker';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import LinkButton from '../common/LinkButton';
import PageWrapper from '../common/PageWrapper';
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
        <Form>
          <TextInput
            label='Imię'
            autoCapitalize='words'
            autoComplete='name'
            textContentType='name'
            autoCorrect
            spellCheck
            defaultValue={personMock.firstName}
          />
          <TextInput
            label='Nazwisko'
            autoCapitalize='words'
            autoComplete='family-name'
            textContentType='familyName'
            autoCorrect
            spellCheck
            defaultValue={personMock.lastName}
          />
          <DateTimePicker
            maxDate={MAX_BIRTH_DATE}
            label='Data urodzenia'
            initDate={personMock.birthDate}
          />
          <TextInput
            label='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect={false}
            inputMode='email'
            spellCheck={false}
            textContentType='emailAddress'
            defaultValue={personMock.email}
          />
          <TextInput
            label='Nr telefonu'
            keyboardType='phone-pad'
            inputMode='numeric'
            textContentType='telephoneNumber'
            defaultValue={personMock.phoneNumber}
          />
          <TextInput
            label='Miejscowość'
            autoCapitalize='words'
            textContentType='addressCity'
            autoCorrect
            spellCheck
            defaultValue={personMock.city}
          />
        </Form>
        <View style={styles.buttonsContainer}>
          <Button
            label='Anuluj'
            onPress={hook.onCancelButtonPress}
            invertedStyle
          />
          <Button label='Zapisz' onPress={hook.onSaveButtonPress} />
        </View>
      </ScrollView>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 0,
    marginBottom: 0,
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
  buttonsContainer: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
});
