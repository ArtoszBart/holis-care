import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import TextSkeleton from '../skeletons/TextSkeleton';

interface Props {
  summary?: boolean;
}

export default function TipListItemSkeleton({ summary }: Props) {
  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.main}>
        <View style={styles.subMain}>
          <TextSkeleton height={12} />
          <TextSkeleton height={12} />
          <TextSkeleton height={12} width='75%' />
        </View>

        <TextSkeleton height={12} width='50%' color={COLORS.SKELETON_ACCENT} />
      </View>

      <TextSkeleton height={22} width={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.SKELETON_BACKGROUND,
    padding: 16,
    borderRadius: 8,
    gap: 14,
  },
  main: {
    flex: 1,
    gap: 12,
  },
  subMain: {
    gap: 4,
  },
});
