import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AUTH_ROUTES } from '../routes';
import { CreateParamList } from '../types';

export type AuthNavigatorParamList = CreateParamList<typeof AUTH_ROUTES>;

export type AuthNavigationProp =
  NativeStackNavigationProp<AuthNavigatorParamList>;
