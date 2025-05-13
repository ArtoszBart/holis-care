import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { Recommendation } from '../../../models/Recommendation';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

export default function RecommendationListItem({
  recommendation,
}: {
  recommendation: Recommendation;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <Icon
          icon={ICONS.CIRCLE}
          style={{ fontSize: 12, color: recommendation.badgeColor }}
        />
        <CustomText style={styles.badgeText}>{recommendation.type}</CustomText>
      </View>
      <CustomText style={styles.title}>{recommendation.title}</CustomText>
      <CustomText style={styles.period}>{recommendation.period}</CustomText>
      <CustomText style={styles.additionalInfo}>
        {recommendation.additionalInfo}
      </CustomText>
      <TouchableOpacity style={styles.actionButton}>
        <Icon icon={ICONS.BELL_FILL} style={styles.actionButtonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    gap: 4,
    width: 284,
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
  title: {
    fontWeight: 700,
    color: COLORS.typo1,
  },
  period: {
    color: COLORS.typo1,
    fontSize: 12,
  },
  additionalInfo: {
    marginTop: 5,
    color: COLORS.typo3,
    fontSize: 12,
  },
  actionButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  actionButtonIcon: {
    fontSize: 22,
    color: COLORS.typo4,
  },
});
