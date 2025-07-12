import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { Icon, ICONS } from '../icon';
import TextSkeleton from '../skeletons/TextSkeleton';

interface Props {
  summary?: boolean;
}

export default function TipListItemSkeleton({ summary }: Props) {
  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.main}>
        <View style={styles.subMain}>
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton width='75%' />
        </View>

        <TextSkeleton width='50%' color={COLORS.skeletonPrimary} />
      </View>

      <Icon icon={ICONS.HEART_OUTLINE} style={styles.heartIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.skeletonBackground,
    padding: 16,
    borderRadius: 8,
    gap: 14,
  },
  main: {
    flex: 1,
    gap: 8,
  },
  subMain: {
    gap: 4,
  },
  heartIcon: {
    fontSize: 22,
    color: COLORS.skeletonText,
  },
});
