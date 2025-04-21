import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { MAIN_ROUTES } from '../../constants/routes';

type MainRouteName = (typeof MAIN_ROUTES)[keyof typeof MAIN_ROUTES];

export type MainNavigationProp = BottomTabNavigationProp<{
  [key in MainRouteName]: undefined;
}>;
