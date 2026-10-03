import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { hideSplash, prepareSplash } from '../lib/SplashManager';

const useApp = () => {
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
