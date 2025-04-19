import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { PERSONALIZATION_ROUTES } from '../../constants/routes';

type PersonalizationRouteName =
  (typeof PERSONALIZATION_ROUTES)[keyof typeof PERSONALIZATION_ROUTES];

export type PersonalizationNavigationProp = NativeStackNavigationProp<{
  [key in PersonalizationRouteName]: undefined;
}>;
