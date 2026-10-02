import React from 'react';
import { Linking, StyleSheet, Switch, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { EXTERNAL_LINKS } from '../../../constants/externalLinks';
import Button from '../../common/Button';
import CustomText from '../../common/CustomText';
import TextInput from '../../common/forms/TextInput';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useNameScreen from './useNameScreen';

export default function NameScreen() {
  const { setName, isConsentGiven, setConsentGiven, handleNext } =
    useNameScreen();

  return (
    <PageWrapper style={styles.container} noHeader>
      <CustomText style={styles.title}>Przywitajmy się</CustomText>

      <TextInput
        fieldName=''
        placeholder='Podaj swoje imię'
        autoComplete='name'
        textContentType='name'
        onChangeText={setName}
      />

      <View style={styles.consent}>
        <CustomText style={styles.consentText}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych. Więcej
          informacji w{' '}
          <CustomText
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL(EXTERNAL_LINKS.TERMS_OF_SERVICE_URL)}
          >
            Regulaminie
          </CustomText>{' '}
          i{' '}
          <CustomText
            style={{ textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL(EXTERNAL_LINKS.PRIVACY_POLICY_URL)}
          >
            Polityce Prywatności
          </CustomText>
          .
        </CustomText>
        <Switch
          value={isConsentGiven}
          onValueChange={setConsentGiven}
          trackColor={{ true: COLORS.ACCENT }}
          thumbColor='white'
        />
      </View>

      <Button label='Przejdź do aplikacji' onPress={handleNext} />
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
