import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { getBadgeConfig } from '../../../constants/badges';
import { COLORS } from '../../../constants/colors';
import { type Appointment } from '../../../models/Appointment';
import {
  getDisplayDateShort,
  getDisplayDayOfWeekShort,
  getDisplayTime,
} from '../../../utils/dateTime';
import Badge from '../Badge';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

interface Props {
  appointment: Appointment;
  summary?: boolean;
}

export default function AppointmentListItem({ appointment, summary }: Props) {
  const { color, title } = getBadgeConfig(appointment.exam.type);

  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.dateContainer}>
        <View>
          <CustomText style={styles.normalText}>
            {getDisplayDayOfWeekShort(appointment.appointmentDate!)}
          </CustomText>
          <CustomText style={styles.normalText}>
            {getDisplayDateShort(appointment.appointmentDate!)}
          </CustomText>
        </View>
        <CustomText style={styles.mainText}>
          {getDisplayTime(appointment.appointmentDate!)}
        </CustomText>
      </View>

      <View style={styles.separator} />

      <View style={styles.mainContainer}>
        <Badge color={color} label={title} />

        <CustomText style={styles.mainText}>{appointment.exam.name}</CustomText>

        {appointment.doctorName && (
          <CustomText style={styles.normalText}>
            {appointment.doctorName}
          </CustomText>
        )}

        {appointment.locationString && (
          <View style={styles.additionalInfoContainer}>
            <CustomText style={styles.additionalInfo}>
              {appointment.locationString},
            </CustomText>
          </View>
        )}
      </View>

      {summary ? (
        <>
          {/* <TouchableOpacity style={styles.actionButton}>
            <Icon
              icon={ICONS.BELL_FILL}
              style={styles.summaryActionButtonIcon}
            />
          </TouchableOpacity> */}
        </>
      ) : (
        <TouchableOpacity
          style={[styles.actionButton, { justifyContent: 'center' }]}
        >
          <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.actionButtonIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.MAIN,
    padding: 16,
    borderRadius: 8,
    gap: 2,
  },
  dateContainer: {
    justifyContent: 'space-between',
  },
  separator: {
    width: 2,
    backgroundColor: COLORS.ACCENT_2,
    marginHorizontal: 10,
  },
  mainContainer: {
    flexShrink: 1,
    gap: 2,
  },
  mainText: {
    fontWeight: 700,
    color: COLORS.TYPO_1,
  },
  normalText: {
    color: COLORS.TYPO_1,
    fontSize: 12,
  },
  additionalInfoContainer: {
    marginTop: 'auto',
    paddingTop: 5,
  },
  additionalInfo: {
    color: COLORS.TYPO_3,
    fontSize: 12,
  },
  actionButton: {
    marginLeft: 'auto',
    paddingLeft: 10,
  },
  summaryActionButtonIcon: {
    fontSize: 22,
    color: COLORS.TYPO_4,
  },
  actionButtonIcon: {
    fontSize: 25,
    color: COLORS.ACCENT,
  },
});
