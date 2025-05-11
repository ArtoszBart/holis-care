import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';
import { headerStyles } from './MainHeader';
import { Icon, ICONS } from './icon';

interface IHeader {
  title?: string;
}

export default function SubHeader({ title }: IHeader) {
  const nav = useNavigation();
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 20;

  return (
    <View style={[headerStyles.container, styles.container, { paddingTop }]}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Icon icon={ICONS.ARROW_LEFT} style={styles.icon} />
      </TouchableOpacity>
      <CustomText style={styles.title}>{title}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
  },
  title: {
    fontSize: 16,
    color: COLORS.typo1,
  },
  icon: {
    fontSize: 24,
    color: COLORS.typo1,
  },
});
