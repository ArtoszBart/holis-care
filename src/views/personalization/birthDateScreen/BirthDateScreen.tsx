import React from 'react';
import { StyleSheet } from 'react-native';
import { MAX_BIRTH_DATE } from '../../../constants/age';
import Button from '../../common/Button';
import CustomText from '../../common/CustomText';
import DateTimePicker from '../../common/forms/DateTimePicker';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useBirthDateScreen from './useBirthDateScreen';

export default function BirthDateScreen() {
  const { birthDate, setBirthDate, handleNext } = useBirthDateScreen();

  return (
    <PageWrapper style={styles.container} noHeader>
      <CustomText style={styles.title}>Podaj datę urodzenia</CustomText>

      <DateTimePicker
        fieldName=''
        maxDate={MAX_BIRTH_DATE}
        spinner
        value={birthDate}
        onChange={setBirthDate}
      />

      <Button label='Dalej' onPress={handleNext} style={styles.button} />
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    gap: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  button: {
    marginTop: 'auto',
  },
});
