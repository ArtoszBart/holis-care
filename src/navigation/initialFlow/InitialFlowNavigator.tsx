import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator } from '../auth';
import { OnboardingNavigatorWrapper } from '../onboarding';
import { PersonalizationNavigator } from '../personalization';
import { INITIAL_FLOW_ROUTES } from '../routes';
import useInitialFlowNavigator from './useInitialFlowNavigator';

const Stack = createNativeStackNavigator();

export default function InitialFlowNavigator() {
  const { isFirstLaunch, isLoading } = useInitialFlowNavigator();

  if (isLoading) return null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      {isFirstLaunch && (
        <Stack.Screen
          name={INITIAL_FLOW_ROUTES.ONBOARDING_NAVIGATOR}
          component={OnboardingNavigatorWrapper}
        />
      )}
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
