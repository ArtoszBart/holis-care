import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import useApp from './src/config/useApp';
import { PersonalizationNavigator } from './src/navigation/personalization';

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
      {/* <AuthNavigator /> */}
      <PersonalizationNavigator />
    </NavigationContainer>
  );
}
