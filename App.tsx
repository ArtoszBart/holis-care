import { NavigationContainer } from '@react-navigation/native';

import { OnboardingNavigator } from './src/navigation/onboarding';

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
}
