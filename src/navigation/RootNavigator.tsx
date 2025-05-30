import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useIsAuthStore } from '../config/isAuthStore';
import { InitialFlowNavigator } from './initialFlow';
import { MainNavigator } from './main';
import { ROOT_ROUTES } from './routes';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isAuth = useIsAuthStore((s) => s.isAuth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      {!isAuth ? (
        <Stack.Screen
          name={ROOT_ROUTES.INITIAL_FLOW_NAVIGATOR}
          component={InitialFlowNavigator}
        />
      ) : (
        <Stack.Screen
          name={ROOT_ROUTES.MAIN_NAVIGATOR}
          component={MainNavigator}
        />
      )}
    </Stack.Navigator>
  );
}
