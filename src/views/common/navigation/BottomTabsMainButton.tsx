import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { Icon } from '../icon';
import { IconDefinition } from '../icon/iconDefinition.type';

interface Props {
  icon: IconDefinition;
  size: number;
  focused: boolean;
}

export default function BottomTabsMainButton({ icon, size, focused }: Props) {
  const bgSize = size + 25;

  return (
    <View
      style={[
        styles.container,
        {
          height: bgSize,
          width: bgSize,
          borderColor: focused ? COLORS.ACCENT_LIGHT : COLORS.MAIN,
        },
      ]}
    >
      <Icon icon={icon} style={[styles.icon, { fontSize: size - 5 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderRadius: 50,
    backgroundColor: COLORS.ACCENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.MAIN,
  },
});
