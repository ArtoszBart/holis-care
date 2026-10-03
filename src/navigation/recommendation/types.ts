import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import type {
  Appointment,
  AppointmentNavigationParam,
} from '../../models/Appointment';
import { RECOMMENDATIONS_ROUTES } from '../routes';
import { type CreateParamList } from '../types';

export type RecommendationNavigatorParamList = CreateParamList<
  typeof RECOMMENDATIONS_ROUTES,
  {
    [RECOMMENDATIONS_ROUTES.RECOMMENDATION_INFO_SCREEN]: {
      recommendation: Omit<Appointment, 'appointmentDate'> & {
        appointmentDate: string | undefined;
      };
    };
    [RECOMMENDATIONS_ROUTES.RECOMMENDATION_FORM_SCREEN]: {
      appointment: AppointmentNavigationParam;
    };
  }
>;

export type RecommendationNavigationProp =
  NativeStackNavigationProp<RecommendationNavigatorParamList>;

export type RecommendationInfoScreenProps = NativeStackScreenProps<
  RecommendationNavigatorParamList,
  typeof RECOMMENDATIONS_ROUTES.RECOMMENDATION_INFO_SCREEN
>;

export type RecommendationFormScreenProps = NativeStackScreenProps<
  RecommendationNavigatorParamList,
  typeof RECOMMENDATIONS_ROUTES.RECOMMENDATION_FORM_SCREEN
>;
