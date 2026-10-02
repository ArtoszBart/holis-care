import {
  NativeStackScreenProps,
  type NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { AUTH_ROUTES } from '../routes';
import { CreateParamList } from '../types';

export type AuthNavigatorParamList = CreateParamList<
  typeof AUTH_ROUTES,
  {
    [AUTH_ROUTES.CONFIRMATION_SCREEN]: {
      userEmail: string;
    };
  }
>;

export type AuthNavigationProp =
  NativeStackNavigationProp<AuthNavigatorParamList>;

export type ConfirmationScreenProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  typeof AUTH_ROUTES.CONFIRMATION_SCREEN
>;
