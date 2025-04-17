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
  invertedStyle?: boolean;
}

export default function Button({ label, onPress, invertedStyle }: IButton) {
  const buttonStyle: ViewStyle = {
    backgroundColor: !invertedStyle ? COLORS.primary600 : 'white',
  };
  const textStyle: TextStyle = {
    color: !invertedStyle ? 'white' : COLORS.primary600,
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <CustomText style={[styles.buttonText, textStyle]}>{label}</CustomText>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderColor: COLORS.primary600,
    borderWidth: 2,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});
