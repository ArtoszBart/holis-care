import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';
import { Icon, ICONS } from './icon';

interface IHeader {
  title?: string;
}

export default function AuthHeader({ title }: IHeader) {
  const nav = useNavigation();
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 20;

  return (
    <View style={[styles.container, { paddingTop }]}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Icon icon={ICONS.ARROW_LEFT} style={styles.icon} />
      </TouchableOpacity>

      <CustomText style={styles.title}>{title}</CustomText>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    color: COLORS.typo4,
    fontSize: 25,
  },
  title: {
    fontSize: 20,
    color: COLORS.defaultText,
  },
});
