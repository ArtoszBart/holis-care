import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import CustomText from '../../common/CustomText';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useGetStartedScreen from './useGetStartedScreen';

export default function GetStartedScreen() {
  const { textAnimationRef } = useGetStartedScreen();

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../../assets/images/background-onboarding.png')}
      opacity={1}
    >
      <Animated.Text style={[styles.title, { opacity: textAnimationRef }]}>
        <CustomText style={styles.title}>Zaczynajmy!</CustomText>
      </Animated.Text>
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 700,
  },
});
