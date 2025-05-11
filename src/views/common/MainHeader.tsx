import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';

interface IHeader {
  title?: string;
}

export default function MainHeader({ title }: IHeader) {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 20;

  return (
    <View style={[headerStyles.container, { paddingTop }]}>
      <CustomText style={headerStyles.title}>{title}</CustomText>
    </View>
  );
}

export const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: COLORS.typo1,
    fontWeight: 700,
  },
});
