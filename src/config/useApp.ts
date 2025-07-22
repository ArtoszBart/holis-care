import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { getSelfRequest } from '../api/user';
import { unauth } from '../auth/unauth';
import { hideSplash, prepareSplash } from '../lib/SplashManager';
import { useAuthStore } from '../stores/authStore';
import { useUserStore } from '../stores/userStore';

const useApp = () => {
  const { setIsAuth } = useAuthStore();
  const { setUser } = useUserStore();

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

      const response = await getSelfRequest();
      if (response.ok && response.status !== 204) {
        setIsAuth(true);
        setUser(response.data);
      } else await unauth();

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

  return { appIsReady, onLayoutRootView };
};

export default useApp;
