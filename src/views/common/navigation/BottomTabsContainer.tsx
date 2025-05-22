import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function BottomTabsContainer() {
  return (
    <View
      style={[StyleSheet.absoluteFill, BottomTabsContainerStyles.wrapper]}
    />
  );
}

export const BottomTabsContainerStyles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#f3f3f3',
  },
  tabBarStyle: {
    elevation: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    paddingTop: 12,
    justifyContent: 'center',
  },
});
