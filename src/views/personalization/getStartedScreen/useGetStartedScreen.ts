import { usePreventRemove } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { getAppointmentsRequest } from '../../../api/appointment';
import { getTipsRequest } from '../../../api/tips';
import { useAppointmentStore } from '../../../stores/appointmentStore';
import { useAuthStore } from '../../../stores/authStore';
import { useTipStore } from '../../../stores/tipStore';
import { sleep } from '../../../utils/concurrency';

const useGetStartedScreen = () => {
  usePreventRemove(true, () => {});
  const { setIsAuth } = useAuthStore();
  const { setTips } = useTipStore();
  const { setAppointments } = useAppointmentStore();

  const textAnimationRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const start = async () => {
      await sleep(500);
      animateTextIn();

      await Promise.all([fetchData(), sleep(1500)]);

      animateTextOut();
    };

    start();
  }, []);

  const fetchData = async () => {
    const tipsResponse = await getTipsRequest();
    if (tipsResponse.ok) setTips(tipsResponse.data);
    const appointmentsResponse = await getAppointmentsRequest();
    if (appointmentsResponse.ok) setAppointments(appointmentsResponse.data);
  };

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

  return { textAnimationRef };
};

export default useGetStartedScreen;
