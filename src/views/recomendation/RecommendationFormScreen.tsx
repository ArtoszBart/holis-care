import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import {
  type NewAppointmentDTO,
  type NewAppointmentFormValues,
  newAppointmentSchema,
} from '../../models/Appointment';
import { type RecommendationFormScreenProps } from '../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../navigation/routes';
import { toPayloadISODate } from '../../utils/dateTime';
import Badge from '../common/Badge';
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

  const onSubmit = async (data: NewAppointmentFormValues) => {
    const { date, time, ...rest } = data;

    const payload: NewAppointmentDTO = {
      ...rest,
      date: toPayloadISODate(date, time),
    };

    console.log('OK', payload);

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

      <Form<NewAppointmentFormValues>
        schema={newAppointmentSchema}
        submitLabel='Zapisz się'
        onSubmit={onSubmit}
        defaultValues={{
          type: recommendation.type,
          title: recommendation.title,
        }}
        fullScreen
      >
        <DateTimePicker fieldName='date' mode='date' label='Data' />
        <DateTimePicker fieldName='time' mode='time' label='Godzina' />
        <TextInput fieldName='doctor' placeholder='Imię i nazwisko lekarza' />
        <TextInput fieldName='address' placeholder='Adres' />
        <TextInput
          fieldName='aditionalInfo'
          placeholder='Dodatkowe informacje (opcjonalnie)'
        />
      </Form>
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
});
