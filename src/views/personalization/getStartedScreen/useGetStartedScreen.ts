import { usePreventRemove } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { demoAppointments } from '../../../mocks/appointments';
import { tips } from '../../../mocks/tips';
import { useAppointmentStore } from '../../../stores/appointmentStore';
import { useAuthStore } from '../../../stores/authStore';
import { useTipStore } from '../../../stores/tipStore';
import { sleep } from '../../../utils/concurrency';

const useGetStartedScreen = () => {
  usePreventRemove(true, () => {});
  const { setIsAuth } = useAuthStore();
  const { setTips } = useTipStore();
  const { setAppointments } = useAppointmentStore();

  // eslint-disable-next-line react-hooks/refs
  const textAnimationRef = useRef(new Animated.Value(0)).current;

  const animateTextIn = () =>
    Animated.timing(textAnimationRef, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

  const animateTextOut = () =>
    Animated.timing(textAnimationRef, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsAuth(true);
    });

  useEffect(() => {
    const start = async () => {
      await sleep(500);
      animateTextIn();

      setTips(tips);
      setAppointments(demoAppointments);

      await Promise.all([sleep(1500)]);

      animateTextOut();
    };

    start();
  }, []);

  return { textAnimationRef };
};

export default useGetStartedScreen;
