import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';

interface IButton {
  label: string;
  onPress: VoidFunction;
  style?: ViewStyle;
}

export default function LinkButton({ label, onPress, style }: IButton) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <CustomText style={styles.buttonText}>{label}</CustomText>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: COLORS.typo1,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
