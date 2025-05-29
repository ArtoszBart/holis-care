import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainAuthScreen from '../../views/auth/MainAuthScreen';
import SignInScreen from '../../views/auth/SignInScreen';
import SignUpScreen from '../../views/auth/SignUpScreen';
import Header from '../../views/common/Header';
import { AUTH_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
        header: ({ options }) => (
          <Header title={options.title} transparent withBack />
        ),
        headerTransparent: true,
      }}
      initialRouteName={AUTH_ROUTES.MAIN_SCREEN}
    >
      <Stack.Screen
        name={AUTH_ROUTES.MAIN_SCREEN}
        component={MainAuthScreen}
        options={{ headerShown: false, gestureEnabled: false }}
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
