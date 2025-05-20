import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { PersonalizationNavigationProp } from '../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import DateTimePicker from '../common/forms/DateTimePicker';
import PageWrapper from '../common/PageWrapper';

const minAge = 18;
const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - minAge);

export default function BirthDateScreen() {
  const navigation = useNavigation<PersonalizationNavigationProp>();

  return (
    <PageWrapper style={styles.container} noHeader bottomSafeView>
      <CustomText style={styles.title}>Podaj datę urodzenia</CustomText>

      <DateTimePicker label='Data urodzenia:' maxDate={maxBirthDate} spinner />

      <Button
        label='Dalej'
        onPress={() => navigation.navigate(PERSONALIZATION_ROUTES.NAME_SCREEN)}
        style={styles.button}
      />
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
