import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { Appointment } from '../../../models/Appointment';
import {
  getDisplayDate,
  getDisplayDayOfWeekShort,
  getDisplayTime,
} from '../../../utils/dateTime';
import CustomText from '../CustomText';

export default function AppointmentListItem({
  appointment,
}: {
  appointment: Appointment;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.dateContainer}>
        <View>
          <CustomText style={styles.normalText}>
            {getDisplayDayOfWeekShort(appointment.date)}
          </CustomText>
          <CustomText style={styles.normalText}>
            {getDisplayDate(appointment.date)}
          </CustomText>
        </View>
        <CustomText style={styles.mainText}>
          {getDisplayTime(appointment.date)}
        </CustomText>
      </View>
      <View style={styles.separator} />
      <View>
        <View style={styles.badgeContainer}>
          <MaterialCommunityIcons
            name='record-circle'
            size={12}
            color={appointment.badgeColor}
          />
          <CustomText style={styles.badgeText}>{appointment.type}</CustomText>
        </View>
        <CustomText style={styles.mainText}>{appointment.title}</CustomText>
        {appointment.doctorName && (
          <CustomText style={styles.normalText}>
            {appointment.doctorName}
          </CustomText>
        )}
        {appointment.facility && (
          <View style={styles.additionalInfoContainer}>
            <CustomText style={styles.additionalInfo}>
              {appointment.facility.name},
            </CustomText>
            <CustomText style={styles.additionalInfo}>
              {appointment.facility.street}, {appointment.facility.city}
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    gap: 2,
    width: 284,
  },
  dateContainer: {
    justifyContent: 'space-between',
  },
  separator: {
    width: 2,
    backgroundColor: COLORS.babyBlue,
    marginHorizontal: 10,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  badgeText: {
    color: COLORS.typo4,
    fontSize: 12,
  },
  mainText: {
    fontWeight: 700,
    color: COLORS.typo1,
  },
  normalText: {
    color: COLORS.typo1,
    fontSize: 12,
  },
  additionalInfoContainer: {
    marginTop: 5,
  },
  additionalInfo: {
    color: COLORS.typo3,
    fontSize: 12,
  },
  actionButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
