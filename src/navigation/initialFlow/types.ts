import { NavigatorScreenParams } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthNavigatorParamList } from '../auth';
import { PersonalizationNavigatorParamList } from '../personalization';
import { INITIAL_FLOW_ROUTES } from '../routes';
import { CreateParamList } from '../types';

export type InitialFlowNavigatorParamList = CreateParamList<
  typeof INITIAL_FLOW_ROUTES,
  {
    [INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR]?: NavigatorScreenParams<AuthNavigatorParamList>;
    [INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR]?: NavigatorScreenParams<PersonalizationNavigatorParamList>;
  }
>;

export type InitialFlowNavigationProp =
  NativeStackNavigationProp<InitialFlowNavigatorParamList>;
