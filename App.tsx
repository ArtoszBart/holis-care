import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import useApp from './src/config/useApp';
import { AuthNavigator } from './src/navigation/auth';

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

  return (
    <NavigationContainer theme={Theme}>
      {/* <OnboardingNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
