import { NavigationContainer } from '@react-navigation/native';

import useApp from './src/config/useApp';
import AuthNavigator from './src/navigation/auth/AuthNavigator';

export default function App() {
  const hook = useApp();

  if (hook.isBroken) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* <OnboardingNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
