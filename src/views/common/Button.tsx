import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, type ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';

interface IButton {
  label: string;
  onPress: () => void | Promise<void>;
  invertedStyle?: boolean;
  style?: ViewStyle;
}

export default function Button({
  label,
  onPress,
  invertedStyle,
  style,
}: IButton) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePress = async () => {
    if (isProcessing) return;

    setIsProcessing(true);
    await onPress();
    setIsProcessing(false);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: !invertedStyle ? COLORS.ACCENT : 'white' },
        style,
      ]}
      onPress={handlePress}
      disabled={isProcessing}
    >
      <CustomText
        style={[
          styles.buttonText,
          { color: !invertedStyle ? 'white' : COLORS.ACCENT },
        ]}
      >
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderColor: COLORS.ACCENT,
    borderWidth: 2,
    borderRadius: 6,
    flexShrink: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});
