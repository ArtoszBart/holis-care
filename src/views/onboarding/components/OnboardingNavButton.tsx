import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IOnboardingNavButton {
  label: string;
  onPress: VoidFunction;
}

export default function OnboardingNavButton({
  label,
  onPress,
}: IOnboardingNavButton) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
