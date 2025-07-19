import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getBadgeConfig } from '../../../constants/badges';
import { COLORS } from '../../../constants/colors';
import {
  signUpAppointmentSchema,
  type SignUpAppointmentFormValues,
} from '../../../models/Appointment';
import { type RecommendationFormScreenProps } from '../../../navigation/recommendation';
import Badge from '../../common/Badge';
import CustomText from '../../common/CustomText';
import DateTimePicker from '../../common/forms/DateTimePicker';
import Form from '../../common/forms/Form';
import TextInput from '../../common/forms/TextInput';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useRecommendationFormScreen from './useRecommendationFormScreen';

export default function RecommendationFormScreen({
  route: {
    params: { recommendation },
  },
}: RecommendationFormScreenProps) {
  const { color, title } = getBadgeConfig(recommendation.exam.type);

  const { onSubmit } = useRecommendationFormScreen(recommendation.id);

  return (
    <PageWrapper>
      <View style={styles.mainContainer}>
        <Badge color={color} label={title} style={styles.badge} />
        <CustomText style={styles.title}>{recommendation.exam.name}</CustomText>
      </View>

      <Form<SignUpAppointmentFormValues>
        schema={signUpAppointmentSchema}
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
});
