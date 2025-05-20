import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { COLORS } from '../../../../constants/colors';
import OnboardingNavButton from '../OnboardingNavButton';
import useOnboardingNav from './useOnboardingNavigation';

export default function OnboardingNavigation() {
  const hook = useOnboardingNav();

  return (
    <View style={[styles.nav, { marginBottom: hook.insets.bottom }]}>
      <OnboardingNavButton label='Pomiń' onPress={hook.handleSkipPress} />
      <View style={styles.pageIndicator}>
        {hook.routeList.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.circle,
              {
                backgroundColor:
                  hook.currentNo === idx ? COLORS.primary600 : COLORS.orange400,
              },
            ]}
          />
        ))}
      </View>
      <OnboardingNavButton label='Dalej' onPress={hook.handleNextPress} />
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
    backgroundColor: '#fff',
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
