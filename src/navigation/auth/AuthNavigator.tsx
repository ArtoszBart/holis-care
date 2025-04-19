import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AUTH_ROUTES } from '../../constants/routes';
import MainAuthScreen from '../../views/auth/MainAuthScreen';
import SignUpScreen from '../../views/auth/SignUpScreen';
import Header from '../../views/common/Header';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
        header: ({ options }) => <Header title={options.title} />,
        headerTransparent: true,
      }}
      initialRouteName={AUTH_ROUTES.MAIN_SCREEN}
    >
      <Stack.Screen
        name={AUTH_ROUTES.MAIN_SCREEN}
        component={MainAuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.SIGN_UP_SCREEN}
        component={SignUpScreen}
        options={{
          title: 'Załóż konto',
        }}
      />
    </Stack.Navigator>
  );
}
