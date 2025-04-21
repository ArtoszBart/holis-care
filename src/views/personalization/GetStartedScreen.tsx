import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { usePreventRemove } from '@react-navigation/native';
import BackgroundWrapper from '../common/BackgroundWrapper';
import CustomText from '../common/CustomText';

export default function GetStartedScreen() {
  usePreventRemove(true, () => {});

  const textAnimationRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(textAnimationRef, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(textAnimationRef, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  }, []);

  return (
    <BackgroundWrapper style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: textAnimationRef }]}>
        <CustomText style={styles.title}>Zaczynajmy!</CustomText>
      </Animated.Text>
    </BackgroundWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 700,
  },
});
