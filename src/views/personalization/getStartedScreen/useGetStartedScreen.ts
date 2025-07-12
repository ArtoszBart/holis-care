import { usePreventRemove } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { useAuthStore } from '../../../stores/authStore';

const useGetStartedScreen = () => {
  usePreventRemove(true, () => {});
  const { setIsAuth } = useAuthStore();

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
    ]).start(() => setIsAuth(true));
  }, []);

  return { textAnimationRef };
};

export default useGetStartedScreen;
