import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  setStatusBarTranslucent,
} from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SENTRY_CONFIG } from './src/config/sentry';
import useApp from './src/config/useApp';
import RootNavigator from './src/navigation/RootNavigator';
import Loader from './src/views/common/loader/Loader';
import Toast from './src/views/common/toast';

Sentry.init(SENTRY_CONFIG);

export default Sentry.wrap(function App() {
  const { appIsReady, onLayoutRootView } = useApp();

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

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Loader />
      <SafeAreaProvider>
        <NavigationContainer theme={Theme}>
          <RootNavigator />
        </NavigationContainer>

        <Toast />
      </SafeAreaProvider>
    </View>
  );
});
