import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { PERSONALIZATION_ROUTES } from '../../constants/routes';
import { PersonalizationNavigationProp } from '../../navigation/personalization';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import CustomText from '../common/CustomText';

export default function SexScreen() {
  const navigation = useNavigation<PersonalizationNavigationProp>();

  return (
    <BackgroundWrapper style={styles.container}>
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
        <Button
          label='Kobieta'
          onPress={() =>
            navigation.navigate(PERSONALIZATION_ROUTES.BIRTH_DATE_SCREEN)
          }
        />
        <Button
          label='Mężczyzna'
          onPress={() =>
            navigation.navigate(PERSONALIZATION_ROUTES.BIRTH_DATE_SCREEN)
          }
        />
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
