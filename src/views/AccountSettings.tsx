import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { COLORS } from '../constants/colors';
import Button from './common/Button';
import LinkButton from './common/LinkButton';
import PageWrapper from './common/PageWrapper';
import DateTimePicker from './common/forms/DateTimePicker';
import Form from './common/forms/Form';
import TextInput from './common/forms/TextInput';

const profileImageSize = Dimensions.get('window').width * 0.4;
const minAge = 18;
const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - minAge);

export default function AccountSettings() {
  return (
    <PageWrapper style={styles.wrapper}>
      <Image
        style={styles.profileImage}
        source={require('../mocks/person.png')}
      />
      <LinkButton
        label='Zmień zdjęcie'
        onPress={() => {}}
        textStyle={styles.linkButton}
      />

      <Form>
        <TextInput
          placeholder='Imię'
          autoCapitalize='words'
          autoComplete='name'
          textContentType='name'
          autoCorrect
          spellCheck
        />
        <TextInput
          placeholder='Nazwisko'
          autoCapitalize='words'
          autoComplete='family-name'
          textContentType='familyName'
          autoCorrect
          spellCheck
        />
        {/* <TextInput
          placeholder='Data urodzenia'
          autoCapitalize='words'
          autoComplete='name'
          textContentType='name'
          autoCorrect
          spellCheck
        /> */}
        <DateTimePicker maxDate={maxBirthDate} />
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
          placeholder='Nr telefonu'
          keyboardType='phone-pad'
          inputMode='numeric'
          textContentType='telephoneNumber'
        />
        <TextInput
          placeholder='Miejscowość'
          autoCapitalize='words'
          textContentType='addressCity'
          autoCorrect
          spellCheck
        />
        <View style={styles.buttonsContainer}>
          <Button label='Anuluj' onPress={() => {}} invertedStyle />
          <Button label='Zapisz' onPress={() => {}} />
        </View>
      </Form>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: profileImageSize,
    height: profileImageSize,
    borderRadius: 20,
  },
  linkButton: {
    color: COLORS.primary600,
    fontSize: 16,
    fontWeight: 600,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
});
