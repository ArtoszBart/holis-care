import React from 'react';
import { StyleSheet, View } from 'react-native';

import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import DateTimePicker from '../common/forms/DateTimePicker';

const minAge = 18;
const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - minAge);

export default function BirthDateScreen() {
  return (
    <BackgroundWrapper style={styles.container}>
      <CustomText style={styles.title}>Podaj datę urodzenia</CustomText>

      <DateTimePicker maxDate={maxBirthDate} style={styles.datePicker} />

      <View style={styles.buttonContainer}>
        <Button label='Dalej' onPress={() => {}} />
      </View>
    </BackgroundWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  datePicker: {
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
  },
});
