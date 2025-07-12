import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';
import { Icon, ICONS } from './icon';

interface Props {
  color: COLORS;
  label: string;
}

export default function Badge({ color, label }: Props) {
  return (
    <View style={styles.badgeContainer}>
      <Icon icon={ICONS.CIRCLE} style={{ fontSize: 12, color }} />
      <CustomText style={styles.badgeText}>{label}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  badgeText: {
    color: COLORS.TYPO_4,
    fontSize: 12,
  },
});
