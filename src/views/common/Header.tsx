import { AntDesign as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';

interface IHeader {
  title?: string;
}

export default function Header({ title }: IHeader) {
  const nav = useNavigation();
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 20;

  return (
    <View style={[styles.container, { paddingTop }]}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Icon name='arrowleft' size={25} style={styles.icon} />
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
  },
  title: {
    fontSize: 20,
    color: COLORS.defaultText,
  },
});
