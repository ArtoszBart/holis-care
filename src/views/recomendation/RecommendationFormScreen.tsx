import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { RecommendationFormScreenProps } from '../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../navigation/routes';
import Badge from '../common/Badge';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import DateTimePicker from '../common/forms/DateTimePicker';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import useLoadingStore from '../common/loader/loaderStore';
import PageWrapper from '../common/PageWrapper';

export default function RecommendationFormScreen({
  route,
  navigation,
}: RecommendationFormScreenProps) {
  const { recommendation } = route.params;

  const { setIsLoading } = useLoadingStore();

  const onButtonPress = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(RECOMMENDATIONS_ROUTES.RECOMMENDATION_SUCCESS_SCREEN);
    }, 3000);
  };

  return (
    <PageWrapper style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <Badge color={recommendation.badgeColor} label={recommendation.type} />

        <CustomText style={styles.title}>{recommendation.title}</CustomText>
        <CustomText style={styles.additionalInfo}>
          {recommendation.additionalInfo}
        </CustomText>
      </View>

      <Form>
        <DateTimePicker mode='date' label='Data:' />
        <DateTimePicker mode='time' label='Godzina:' />
        <TextInput
          placeholder='Adres'
          autoCapitalize='sentences'
          autoComplete='address-line1'
          textContentType='streetAddressLine1'
          autoCorrect
          spellCheck
        />
        <TextInput
          placeholder='Dodatkowe informacje (opcjonalnie)'
          autoCapitalize='sentences'
          autoCorrect
          spellCheck
        />
      </Form>

      <Button
        style={styles.button}
        label='Zapisz się'
        onPress={onButtonPress}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingBottom: 10,
  },
  mainContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.typo1,
  },
  additionalInfo: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: COLORS.typo3,
  },
  button: {
    marginTop: 'auto',
  },
});
