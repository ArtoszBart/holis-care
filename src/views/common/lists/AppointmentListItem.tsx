import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

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
  summary,
}: {
  appointment: Appointment;
  summary?: boolean;
}) {
  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
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

      <View style={styles.mainContainer}>
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

      {summary ? (
        <TouchableOpacity style={styles.actionButton}>
          <Octicons name='bell-fill' size={22} color={COLORS.typo4} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.actionButton, { justifyContent: 'center' }]}
        >
          <MaterialCommunityIcons
            name='chevron-right'
            size={25}
            color={COLORS.primary600}
          />
        </TouchableOpacity>
      )}
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
  },
  dateContainer: {
    justifyContent: 'space-between',
  },
  separator: {
    width: 2,
    backgroundColor: COLORS.babyBlue,
    marginHorizontal: 10,
  },
  mainContainer: {
    flexShrink: 1,
    gap: 2,
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
    marginTop: 'auto',
    paddingTop: 5,
  },
  additionalInfo: {
    color: COLORS.typo3,
    fontSize: 12,
  },
  actionButton: {
    marginLeft: 'auto',
    paddingLeft: 10,
  },
});
