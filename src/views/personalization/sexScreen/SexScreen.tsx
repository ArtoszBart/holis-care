import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import Button from '../../common/Button';
import CustomText from '../../common/CustomText';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useSexScreen from './useSexScreen';

export default function SexScreen() {
  const { handleSelectSex } = useSexScreen();

  return (
    <PageWrapper style={styles.container} noHeader>
      <CustomText style={styles.title}>Jakiej jesteś płci?</CustomText>
      <CustomText style={styles.text}>
        Jeszcze 2 pytania. Twoje odpowiedzi pomogą nam rekomendować profilaktykę
        zdrowotną przygotowaną specjalnie dla Ciebie.
      </CustomText>
      <CustomText style={styles.text}>
        Ze względu na regulacje medyczne prosimy o wybór płci, nie tożsamości
        płciowej.
      </CustomText>

      <View style={styles.buttonContainer}>
        <Button label='Kobieta' onPress={() => handleSelectSex('female')} />
        <Button label='Mężczyzna' onPress={() => handleSelectSex('male')} />
      </View>
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    alignItems: 'flex-start',
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  text: {
    fontSize: 16,
    color: COLORS.typo2,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
    gap: 16,
  },
});
