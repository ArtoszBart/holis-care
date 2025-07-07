import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { hideSplash, prepareSplash } from '../lib/SplashManager';
import AppStorage, { STORAGE_KEYS } from '../lib/storage';
import { useAuthStore } from './authStore';

const useApp = () => {
  const { setIsAuth } = useAuthStore();

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

      const storedIsAuth = await AppStorage.get<boolean>(STORAGE_KEYS.IS_AUTH);
      setIsAuth(!!storedIsAuth);

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
