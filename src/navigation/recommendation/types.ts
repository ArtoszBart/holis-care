import {
  NativeStackScreenProps,
  type NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Recommendation } from '../../models/Recommendation';
import { RECOMMENDATIONS_ROUTES } from '../routes';
import { CreateParamList } from '../types';

export type RecommendationNavigatorParamList = CreateParamList<
  typeof RECOMMENDATIONS_ROUTES,
  {
    [RECOMMENDATIONS_ROUTES.RECOMMENDATION_DETAILS_SCREEN]: {
      recommendation: Recommendation;
    };
  }
>;

export type RecommendationNavigationProp =
  NativeStackNavigationProp<RecommendationNavigatorParamList>;

export type RecommendationDetailsScreenProps = NativeStackScreenProps<
  RecommendationNavigatorParamList,
  typeof RECOMMENDATIONS_ROUTES.RECOMMENDATION_DETAILS_SCREEN
>;
