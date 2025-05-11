import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../views/accountScreen/AccountScreen';
import AccountSettings from '../../views/AccountSettings';
import Header from '../../views/common/Header';
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
        options={{
          title: 'Moje konto',
          header: ({ options }) => <Header title={options.title} />,
        }}
      />
      <Stack.Screen
        name={ACCOUNT_ROUTES.ACCOUNT_SETTINGS_SCREEN}
        component={AccountSettings}
        options={{
          title: 'Informacje',
          header: ({ options }) => <Header title={options.title} withBack />,
        }}
      />
    </Stack.Navigator>
  );
}
