import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import TextSkeleton from '../skeletons/TextSkeleton';

interface Props {
  summary?: boolean;
}

export default function AppointmentListItemSkeleton({ summary }: Props) {
  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.dateContainer}>
        <TextSkeleton width={24} height={12} />
        <TextSkeleton width='100%' height={12} />
        <TextSkeleton width='80%' height={14} style={styles.hour} />
      </View>

      <View style={styles.separator} />

      <View style={styles.mainContainer}>
        <View style={styles.badgeContainer}>
          <TextSkeleton width={12} height={12} color={COLORS.SKELETON_ACCENT} />
          <TextSkeleton width='60%' style={{ flex: 1 }} height={12} />
        </View>

        <TextSkeleton width='100%' />
        <TextSkeleton width='40%' height={12} style={styles.location} />
      </View>

      {summary ? (
        <TouchableOpacity style={styles.actionButton}>
          {/* <Icon icon={ICONS.BELL_FILL} style={styles.summaryActionButtonIcon} /> */}
        </TouchableOpacity>
      ) : (
        <TextSkeleton
          width={14}
          color={COLORS.SKELETON_ACCENT}
          style={styles.actionButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.SKELETON_BACKGROUND,
    padding: 16,
    borderRadius: 8,
    gap: 2,
  },
  dateContainer: {
    marginBlock: 1,
    gap: 3,
    width: 44,
  },
  hour: {
    marginTop: 'auto',
  },
  separator: {
    width: 2,
    backgroundColor: COLORS.ACCENT_2,
    marginHorizontal: 10,
  },
  mainContainer: {
    marginBlock: 1,
    width: '100%',
    flexShrink: 1,
    gap: 5,
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  location: {
    marginTop: 5,
  },
  actionButton: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 6,
    marginLeft: 10,
  },
});
