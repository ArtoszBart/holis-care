import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { PersonalizationNavigationProp } from '../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import PageWrapper from '../common/PageWrapper';

export default function SexScreen() {
  const navigation = useNavigation<PersonalizationNavigationProp>();

  return (
    <PageWrapper style={styles.container} noHeader bottomSafeView>
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
