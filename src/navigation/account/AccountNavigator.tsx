import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../views/accountScreen/AccountScreen';
import { ACCOUNT_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
      initialRouteName={ACCOUNT_ROUTES.ACCOUNT_SCREEN}
    >
      <Stack.Screen
        name={ACCOUNT_ROUTES.ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
