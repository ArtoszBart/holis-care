import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';

interface IHeader {
  title?: string;
}

export default function Header({ title }: IHeader) {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 20;

  return (
    <View style={[styles.container, { paddingTop }]}>
      <CustomText style={styles.title}>{title}</CustomText>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
    color: COLORS.defaultText,
    fontWeight: 700,
  },
});
