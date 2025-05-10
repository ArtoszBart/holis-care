import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ACCOUNT_ROUTES } from '../routes';

type AccountRouteName = (typeof ACCOUNT_ROUTES)[keyof typeof ACCOUNT_ROUTES];

export type AccountNavigationProp = NativeStackNavigationProp<{
  [key in AccountRouteName]: undefined;
}>;
