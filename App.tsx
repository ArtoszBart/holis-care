import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  setStatusBarTranslucent,
} from 'expo-status-bar';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useIsAuthStore } from './src/config/isAuthStore';
import useApp from './src/config/useApp';
import InitialFlowNavigator from './src/navigation/initialFlow/InitialFlowNavigator';
import { MainNavigator } from './src/navigation/main';
import Loader from './src/views/common/loader/Loader';

export default function App() {
  const hook = useApp();
  const { isAuth } = useIsAuthStore();

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
          {isAuth ? <MainNavigator /> : <InitialFlowNavigator />}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
