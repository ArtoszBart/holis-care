import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  setStatusBarTranslucent,
} from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useApp from './src/config/useApp';
import RootNavigator from './src/navigation/RootNavigator';
import Loader from './src/views/common/loader/Loader';
import Toast from './src/views/common/toast';

export default function App() {
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
}
