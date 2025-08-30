import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { getTipsRequest } from '../api/tips';
import { getSelfRequest } from '../api/user';
import { unauth } from '../auth/unauth';
import { hideSplash, prepareSplash } from '../lib/SplashManager';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';
import { useAppointmentStore } from '../stores/appointmentStore';
import { useAuthStore } from '../stores/authStore';
import { useTipStore } from '../stores/tipStore';
import { useUserStore } from '../stores/userStore';

const useApp = () => {
  const { setIsAuth } = useAuthStore();
  const { setUser } = useUserStore();
  const { setTips } = useTipStore();
  const { getRefreshedAppointments } = useAppointmentStore();

  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, fontsError] = useFonts({
    'LexendDeca-Light': require('../assets/fonts/LexendDeca-Light.ttf'),
    'LexendDeca-Regular': require('../assets/fonts/LexendDeca-Regular.ttf'),
    'LexendDeca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf'),
    'LexendDeca-Bold': require('../assets/fonts/LexendDeca-Bold.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      await prepareSplash();

      const isAuth = await tryAuth();
      if (isAuth) await fetchData();

      if (!fontsLoaded && !fontsError) return;

      setAppIsReady(true);
    };

    prepare();
  }, [fontsLoaded, fontsError]);

  const onLayoutRootView = async () => {
    if (appIsReady) {
      await hideSplash();
    }
  };

  const tryAuth = async () => {
    const token = await AppStorage.get(STORAGE_KEYS.ACCESS_TOKEN);
    if (!token) return false;

    const response = await getSelfRequest();
    const isAuth = response.ok && response.status !== 204;

    if (isAuth) {
      setIsAuth(true);
      setUser(response.data);
    } else {
      await unauth();
    }

    return isAuth;
  };

  const fetchData = async () => {
    const tipsResponse = await getTipsRequest();
    if (tipsResponse.ok) setTips(tipsResponse.data);
    await getRefreshedAppointments();
  };

  return { appIsReady, onLayoutRootView };
};

export default useApp;
