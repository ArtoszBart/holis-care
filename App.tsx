import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  setStatusBarTranslucent,
} from 'expo-status-bar';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import useApp from './src/config/useApp';
import RootNavigator from './src/navigation/RootNavigator';
import Loader from './src/views/common/loader/Loader';
import { toastConfig } from './src/views/common/toast/toastConfig';

export default function App() {
  const hook = useApp();

  if (hook.isBroken) {
    return null;
  }

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  if (Platform.OS === 'android') {
    setStatusBarStyle('dark');
    setStatusBarBackgroundColor('transparent');
    setStatusBarTranslucent(true);
  }

  return (
    <>
      <Loader />
      <SafeAreaProvider>
        <NavigationContainer theme={Theme}>
          <RootNavigator />
        </NavigationContainer>

        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </>
  );
}
