import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IOnboardingNavButton {
  label: string;
}

export default function OnboardingNavButton({ label }: IOnboardingNavButton) {
  return (
    <TouchableOpacity style={styles.button}>
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
