import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentFormScreen from '../../views/appointment/AppointmentFormScreen';
import AppointmentsScreen from '../../views/appointment/AppointmentsScreen';
import Header from '../../views/common/Header';
import { APPOINTMENT_ROUTES } from '../routes';
import type { AppointmentNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<AppointmentNavigatorParamList>();

export default function AppointmentNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerTransparent: true,
      }}
      initialRouteName={APPOINTMENT_ROUTES.APPOINTMENTS_SCREEN}
    >
      <Stack.Screen
        name={APPOINTMENT_ROUTES.APPOINTMENTS_SCREEN}
        component={AppointmentsScreen}
        options={{
          title: 'Twoje zalecenia',
          gestureEnabled: false,
          header: ({ options }) => <Header title={options.title} />,
        }}
      />
      <Stack.Screen
        name={APPOINTMENT_ROUTES.APPOINTMENT_FORM_SCREEN}
        component={AppointmentFormScreen}
        options={{
          title: 'Edycja wizyty',
          header: ({ options }) => <Header title={options.title} withBack />,
        }}
      />
    </Stack.Navigator>
  );
}
