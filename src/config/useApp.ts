import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { refreshTokens } from '../auth/authService';
import { hideSplash, prepareSplash } from '../lib/SplashManager';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';
import { type User } from '../models/User';
import { useUserStore } from '../stores/userStore';
import { useAuthStore } from './authStore';

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

      const isAuth = await refreshTokens();
      setIsAuth(!!isAuth);

      if (isAuth) {
        const user = await AppStorage.get<User>(STORAGE_KEYS.USER);
        if (user) setUser(user);
      }

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
