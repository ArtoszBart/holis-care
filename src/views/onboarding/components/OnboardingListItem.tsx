import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../constants/colors';

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
      <Text>{bullet}</Text>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 2,
    paddingInline: 25,
    marginBottom: 4,
  },
  paragraph: {
    flex: 1,
    fontSize: 16,
    color: COLORS.typo2,
  },
});
