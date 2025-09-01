import React from 'react';
import { StyleSheet, type TextStyle, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';

interface IOnboardingListItem {
  bullet: string;
  text: string;
  style?: TextStyle;
}

export default function OnboardingListItem({
  bullet,
  text,
  style,
}: IOnboardingListItem) {
  return (
    <View style={styles.listItem}>
      <CustomText>{bullet}</CustomText>
      <CustomText style={[styles.paragraph, style]}>{text}</CustomText>
    </View>
  );
}

export const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    maxWidth: 300,
    gap: 4,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.TYPO_2,
    marginLeft: 4,
  },
});
