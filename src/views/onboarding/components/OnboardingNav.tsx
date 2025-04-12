import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import OnboardingNavButton from './OnboardingNavButton';

export default function OnboardingNav() {
  return (
    <View style={styles.nav}>
      <OnboardingNavButton label='Pomiń' />
      <View style={styles.pageIndicator}>
        <View style={[styles.circle, { backgroundColor: COLORS.primary600 }]} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
      <OnboardingNavButton label='Dalej' />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: Platform.OS === 'android' ? 10 : 40,
  },
  navButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageIndicator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '50%' }],
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: COLORS.orange400,
  },
});
