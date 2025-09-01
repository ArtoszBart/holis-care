import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../../views/onboarding/OnboardingScreen';
import { AuthNavigator } from '../auth';
import { PersonalizationNavigator } from '../personalization';
import { INITIAL_FLOW_ROUTES } from '../routes';
import useInitialFlowNavigator from './useInitialFlowNavigator';

const Stack = createNativeStackNavigator();

export default function InitialFlowNavigator() {
  const { isFirstLaunch, isLoading } = useInitialFlowNavigator();

  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={
        isFirstLaunch
          ? INITIAL_FLOW_ROUTES.ONBOARDING_SCREEN
          : INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR
      }
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name={INITIAL_FLOW_ROUTES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR}
        component={AuthNavigator}
      />
      <Stack.Screen
        name={INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR}
        component={PersonalizationNavigator}
      />
    </Stack.Navigator>
  );
}
