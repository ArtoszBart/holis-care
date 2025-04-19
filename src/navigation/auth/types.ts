import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AUTH_ROUTES } from '../../constants/routes';

type AuthRouteName = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];

export type AuthNavigationProp = NativeStackNavigationProp<{
  [key in AuthRouteName]: undefined;
}>;
