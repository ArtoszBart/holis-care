import * as SplashScreen from 'expo-splash-screen';

export const prepareSplash = async () => {
  try {
    await SplashScreen.preventAutoHideAsync();
  } catch (e) {
    console.error('Splash screen error:', e);
  }
};

export const hideSplash = async () => {
  try {
    await SplashScreen.hideAsync();
  } catch (e) {
    console.error('Splash screen hide error:', e);
  }
};
