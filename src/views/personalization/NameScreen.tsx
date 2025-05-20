import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Linking, StyleSheet, Switch, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { PersonalizationNavigationProp } from '../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import TextInput from '../common/forms/TextInput';
import PageWrapper from '../common/PageWrapper';

export default function NameScreen() {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const [isConsentGiven, setConsentGiven] = useState(false);

  return (
    <PageWrapper style={styles.container} noHeader bottomSafeView>
      <CustomText style={styles.title}>Przywitajmy się</CustomText>

      <TextInput
        placeholder='Podaj swoje imię'
        autoComplete='name'
        textContentType='name'
      />

      <View style={styles.consent}>
        <CustomText style={styles.consentText}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych. Więcej
          informacji w{' '}
          <CustomText
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://google.pl/')}
          >
            Regulaminie
          </CustomText>{' '}
          i{' '}
          <CustomText
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('https://google.pl/')}
          >
            Polityce Prywatości
          </CustomText>
          .
        </CustomText>
        <Switch
          value={isConsentGiven}
          onValueChange={setConsentGiven}
          trackColor={{ true: COLORS.primary600 }}
          thumbColor='white'
        />
      </View>

      <Button
        label='Przejdź do aplikacji'
        onPress={() =>
          navigation.navigate(PERSONALIZATION_ROUTES.GET_STARTED_SCREEN)
        }
      />
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    alignItems: 'flex-start',
    gap: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  consent: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  consentText: {
    flex: 1,
  },
});
