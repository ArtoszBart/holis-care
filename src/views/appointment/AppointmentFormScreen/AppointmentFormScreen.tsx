import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getBadgeConfig } from '../../../constants/badges';
import { COLORS } from '../../../constants/colors';
import {
  APPOINTMENT_STATUS,
  signUpAppointmentSchema,
  type SignUpAppointmentFormValues,
} from '../../../models/Appointment';
import { type AppointmentFormScreenProps } from '../../../navigation/appointment';
import { type RecommendationFormScreenProps } from '../../../navigation/recommendation';
import Badge from '../../common/Badge';
import CustomText from '../../common/CustomText';
import DateTimePicker from '../../common/forms/DateTimePicker';
import Form from '../../common/forms/Form';
import TextInput from '../../common/forms/TextInput';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useAppointmentFormScreen from './useAppointmentFormScreen';

type IProps = AppointmentFormScreenProps | RecommendationFormScreenProps;

export default function AppointmentFormScreen({
  route: {
    params: { appointment },
  },
}: IProps) {
  const { color, title } = getBadgeConfig(appointment.exam.type);

  const { onSubmit } = useAppointmentFormScreen(appointment);

  const defaultValues = {
    date: appointment.appointmentDate
      ? new Date(appointment.appointmentDate)
      : undefined,
    time: appointment.appointmentDate
      ? new Date(appointment.appointmentDate)
      : undefined,
    doctorName: appointment.doctorName ?? undefined,
    locationString: appointment.locationString ?? undefined,
    text: appointment.text ?? undefined,
  };

  return (
    <PageWrapper>
      <View style={styles.mainContainer}>
        <Badge color={color} label={title} style={styles.badge} />
        <CustomText style={styles.title}>{appointment.exam.name}</CustomText>
      </View>

      <Form<SignUpAppointmentFormValues>
        schema={signUpAppointmentSchema}
        defaultValues={defaultValues}
        submitLabel={
          appointment.status === APPOINTMENT_STATUS.SCHEDULED
            ? 'Zapisz zmiany'
            : 'Zapisz się'
        }
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
});
