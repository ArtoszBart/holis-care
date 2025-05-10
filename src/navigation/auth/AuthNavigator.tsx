import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainAuthScreen from '../../views/auth/MainAuthScreen';
import SignInScreen from '../../views/auth/SignInScreen';
import SignUpScreen from '../../views/auth/SignUpScreen';
import AuthHeader from '../../views/common/AuthHeader';
import { AUTH_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
        header: ({ options }) => <AuthHeader title={options.title} />,
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
      <Stack.Screen
        name={AUTH_ROUTES.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={{
          title: 'Logowanie',
        }}
      />
    </Stack.Navigator>
  );
}
