import React from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { PersonalizationNavigationProp } from '../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../navigation/routes';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import DateTimePicker from '../common/forms/DateTimePicker';

const minAge = 18;
const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - minAge);

export default function BirthDateScreen() {
  const navigation = useNavigation<PersonalizationNavigationProp>();

  return (
    <BackgroundWrapper style={styles.container}>
      <CustomText style={styles.title}>Podaj datę urodzenia</CustomText>

      <DateTimePicker maxDate={maxBirthDate} style={styles.datePicker} />

      <Button
        label='Dalej'
        onPress={() => navigation.navigate(PERSONALIZATION_ROUTES.NAME_SCREEN)}
        style={styles.button}
      />
    </BackgroundWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  datePicker: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 'auto',
  },
});
