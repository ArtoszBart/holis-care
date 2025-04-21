import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Linking, StyleSheet, Switch, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { PERSONALIZATION_ROUTES } from '../../constants/routes';
import { PersonalizationNavigationProp } from '../../navigation/personalization';
import BackgroundWrapper from '../common/BackgroundWrapper';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import TextInput from '../common/forms/TextInput';

export default function NameScreen() {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const [isConsentGiven, setConsentGiven] = useState(false);

  return (
    <BackgroundWrapper style={styles.container}>
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
  consent: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  consentText: {
    flex: 1,
  },
});
