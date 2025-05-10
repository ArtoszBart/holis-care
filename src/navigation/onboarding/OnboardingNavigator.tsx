import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from '../../views/onboarding/BookScreen';
import CollectScreen from '../../views/onboarding/CollectScreen';
import HelloScreen from '../../views/onboarding/HelloScreen';
import ManageScreen from '../../views/onboarding/ManageScreen';
import TipsScreen from '../../views/onboarding/TipsScreen';
import OnboardingNavigation from '../../views/onboarding/components/OnboardingNav/OnboardingNavigation';
import { ONBOARDING_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={ONBOARDING_ROUTES.HELLO_SCREEN}
    >
      <Stack.Screen
        name={ONBOARDING_ROUTES.HELLO_SCREEN}
        component={HelloScreen}
      />
      <Stack.Screen
        name={ONBOARDING_ROUTES.BOOK_SCREEN}
        component={BookScreen}
      />
      <Stack.Screen
        name={ONBOARDING_ROUTES.MANAGE_SCREEN}
        component={ManageScreen}
      />
      <Stack.Screen
        name={ONBOARDING_ROUTES.COLLECT_SCREEN}
        component={CollectScreen}
      />
      <Stack.Screen
        name={ONBOARDING_ROUTES.TIPS_SCREEN}
        component={TipsScreen}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingNavigatorWrapper() {
  return (
    <>
      <OnboardingNavigator />
      <OnboardingNavigation />
    </>
  );
}
