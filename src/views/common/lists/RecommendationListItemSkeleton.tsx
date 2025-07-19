import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import TextSkeleton from '../skeletons/TextSkeleton';

interface Props {
  summary?: boolean;
}

export default function RecommendationListItemSkeleton({ summary }: Props) {
  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.mainContainer}>
        <View style={[styles.badgeContainer]}>
          <TextSkeleton width={12} height={12} color={COLORS.SKELETON_ACCENT} />
          <TextSkeleton width='60%' style={{ flex: 1 }} height={12} />
        </View>

        <TextSkeleton width='100%' />
        <TextSkeleton width='40%' height={12} style={styles.period} />
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
    alignItems: 'center',
    backgroundColor: COLORS.SKELETON_BACKGROUND,
    padding: 16,
    borderRadius: 8,
    gap: 4,
  },
  mainContainer: {
    flexShrink: 1,
    width: '70%',
    gap: 6,
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  period: {
    marginTop: 7,
  },
  actionButton: {
    marginLeft: 'auto',
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
