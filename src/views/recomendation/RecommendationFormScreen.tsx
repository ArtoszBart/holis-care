import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { RecommendationFormScreenProps } from '../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../navigation/routes';
import Badge from '../common/Badge';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import DateTimePicker from '../common/forms/DateTimePicker';
import Form from '../common/forms/form/Form';
import TextInput from '../common/forms/TextInput';
import useLoadingStore from '../common/loader/loaderStore';
import PageWrapper from '../common/pageWrapper/PageWrapper';

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
    <PageWrapper>
      <View style={styles.mainContainer}>
        <Badge color={recommendation.badgeColor} label={recommendation.type} />

        <CustomText style={styles.title}>{recommendation.title}</CustomText>
        <CustomText style={styles.additionalInfo}>
          {recommendation.additionalInfo}
        </CustomText>
      </View>

      <Form schema={null} submitLabel='Zapisz się' onSubmit={onButtonPress}>
        <DateTimePicker fieldName='date' mode='date' label='Data' />
        <DateTimePicker fieldName='time' mode='time' label='Godzina' />
        <TextInput fieldName='doctor' placeholder='Imię i nazwisko lekarza' />
        <TextInput fieldName='address' placeholder='Adres' />
        <TextInput
          fieldName='aditionalInfo'
          placeholder='Dodatkowe informacje (opcjonalnie)'
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
