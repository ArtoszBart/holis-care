import { type NavigatorScreenParams } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { type AppointmentNavigatorParamList } from '../appointment';
import { type RecommendationNavigatorParamList } from '../recommendation';
import { MAIN_ROUTES } from '../routes';
import { type CreateParamList } from '../types';

type MainNavigatorParamList = CreateParamList<
  typeof MAIN_ROUTES,
  {
    [MAIN_ROUTES.APPOINTMENTS_NAVIGATOR]?: NavigatorScreenParams<AppointmentNavigatorParamList>;
    [MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR]?: NavigatorScreenParams<RecommendationNavigatorParamList>;
  }
>;

export type MainNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;
