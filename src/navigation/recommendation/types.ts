import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RECOMMENDATIONS_ROUTES } from '../routes';

type RecommendationRouteName =
  (typeof RECOMMENDATIONS_ROUTES)[keyof typeof RECOMMENDATIONS_ROUTES];

export type RecommendationNavigationProp = NativeStackNavigationProp<{
  [key in RecommendationRouteName]: undefined;
}>;
