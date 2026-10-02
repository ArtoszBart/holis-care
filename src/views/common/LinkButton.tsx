import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';

interface IButton {
  label: string;
  onPress: VoidFunction;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function LinkButton({
  label,
  onPress,
  style,
  textStyle,
}: IButton) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <CustomText style={[styles.buttonText, textStyle]}>{label}</CustomText>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.TYPO_1,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
