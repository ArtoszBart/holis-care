import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../views/accountScreen/AccountScreen';
import AccountSettings from '../../views/accountSettings/AccountSettings';
import Header from '../../views/common/Header';
import { ACCOUNT_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerTransparent: true,
      }}
      initialRouteName={ACCOUNT_ROUTES.ACCOUNT_SCREEN}
    >
      <Stack.Screen
        name={ACCOUNT_ROUTES.ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{
          title: 'Moje konto',
          gestureEnabled: false,
          header: ({ options }) => <Header title={options.title} />,
        }}
      />

      <Stack.Screen
        name={ACCOUNT_ROUTES.ACCOUNT_SETTINGS_SCREEN}
        component={AccountSettings}
        options={{
          title: 'Moje dane',
          header: ({ options }) => <Header title={options.title} withBack />,
        }}
      />
    </Stack.Navigator>
  );
}
