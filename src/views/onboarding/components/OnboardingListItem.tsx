import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';

interface IOnboardingListItem {
  bullet: string;
  text: string;
}

export default function OnboardingListItem({
  bullet,
  text,
}: IOnboardingListItem) {
  return (
    <View style={styles.listItem}>
      <CustomText>{bullet}</CustomText>
      <CustomText style={styles.paragraph}>{text}</CustomText>
    </View>
  );
}

export const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
    maxWidth: 300,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.TYPO_2,
    marginLeft: 4,
  },
});
