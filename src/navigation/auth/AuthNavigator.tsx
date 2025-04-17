import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AUTH_ROUTES } from '../../constants/routes';
import MainAuthScreen from '../../views/auth/MainAuthScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName={AUTH_ROUTES.MAIN_SCREEN}
    >
      <Stack.Screen name={AUTH_ROUTES.MAIN_SCREEN} component={MainAuthScreen} />
    </Stack.Navigator>
  );
}
