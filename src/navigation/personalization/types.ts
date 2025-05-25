import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PERSONALIZATION_ROUTES } from '../routes';
import { CreateParamList } from '../types';

export type PersonalizationNavigatorParamList = CreateParamList<
  typeof PERSONALIZATION_ROUTES
>;

export type PersonalizationNavigationProp =
  NativeStackNavigationProp<PersonalizationNavigatorParamList>;
