import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { type AppointmentNavigationParam } from '../../models/Appointment';
import { APPOINTMENT_ROUTES } from '../routes';
import { type CreateParamList } from '../types';

export type AppointmentNavigatorParamList = CreateParamList<
  typeof APPOINTMENT_ROUTES,
  {
    [APPOINTMENT_ROUTES.APPOINTMENT_FORM_SCREEN]: {
      appointment: AppointmentNavigationParam;
    };
  }
>;

export type AppointmentNavigationProp =
  NativeStackNavigationProp<AppointmentNavigatorParamList>;

export type AppointmentFormScreenProps = NativeStackScreenProps<
  AppointmentNavigatorParamList,
  typeof APPOINTMENT_ROUTES.APPOINTMENT_FORM_SCREEN
>;
