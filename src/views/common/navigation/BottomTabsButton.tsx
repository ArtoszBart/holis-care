import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from '../icon';
import { IconDefinition } from '../icon/iconDefinition.type';

interface Props {
  icon: IconDefinition;
  size: number;
  color: string;
  focused: boolean;
}

export default function BottomTabsButton({
  icon,
  size,
  color,
  focused,
}: Props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon icon={icon} style={{ fontSize: size, color }} />
      {focused && <View style={[styles.dot, { backgroundColor: color }]} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    bottom: -10,
    width: 5,
    height: 5,
    borderRadius: 3,
  },
});
