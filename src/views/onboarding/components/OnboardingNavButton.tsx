import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import CustomText from '../../common/CustomText';

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
      <CustomText style={styles.buttonText}>{label}</CustomText>
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
