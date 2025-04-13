import { NavigationContainer } from '@react-navigation/native';

import useApp from './src/config/useApp';
import { OnboardingNavigator } from './src/navigation/onboarding';

export default function App() {
  const hook = useApp();

  if (hook.isBroken) {
    return null;
  }

  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
}
