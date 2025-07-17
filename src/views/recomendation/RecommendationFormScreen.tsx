import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getBadgeConfig } from '../../constants/badges';
import { COLORS } from '../../constants/colors';
import {
  type NewAppointmentDTO,
  type NewAppointmentFormValues,
  newAppointmentSchema,
} from '../../models/Appointment';
import { type RecommendationFormScreenProps } from '../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../navigation/routes';
import useLoadingStore from '../../stores/loaderStore';
import { toPayloadISODate } from '../../utils/dateTime';
import Badge from '../common/Badge';
import CustomText from '../common/CustomText';
import DateTimePicker from '../common/forms/DateTimePicker';
import Form from '../common/forms/Form';
import TextInput from '../common/forms/TextInput';
import PageWrapper from '../common/pageWrapper/PageWrapper';

export default function RecommendationFormScreen({
  route,
  navigation,
}: RecommendationFormScreenProps) {
  const { recommendation } = route.params;
  const { color, title } = getBadgeConfig(recommendation.exam.type);

  const { setIsLoading } = useLoadingStore();

  const onSubmit = async (data: NewAppointmentFormValues) => {
    const { date, time, ...rest } = data;

    const payload: NewAppointmentDTO = {
      ...rest,
      appointmentDate: toPayloadISODate(date, time),
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
        <Badge color={color} label={title} style={styles.badge} />
        <CustomText style={styles.title}>{recommendation.exam.name}</CustomText>
      </View>

      <Form<NewAppointmentFormValues>
        schema={newAppointmentSchema}
        submitLabel='Zapisz się'
        onSubmit={onSubmit}
        fullScreen
      >
        <DateTimePicker fieldName='date' mode='date' label='Data' />
        <DateTimePicker fieldName='time' mode='time' label='Godzina' />
        <TextInput
          fieldName='doctorName'
          placeholder='Imię i nazwisko lekarza'
        />
        <TextInput fieldName='locationString' placeholder='Adres' />
        <TextInput fieldName='text' placeholder='Dodatkowe informacje' />
      </Form>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.MAIN,
    paddingHorizontal: 10,
    paddingVertical: 35,
    gap: 10,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.TYPO_1,
  },
  additionalInfo: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: COLORS.TYPO_3,
  },
});
