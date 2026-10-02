import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ACCOUNT_ROUTES } from '../routes';
import { CreateParamList } from '../types';

type AccountNavigatorParamList = CreateParamList<typeof ACCOUNT_ROUTES>;

export type AccountNavigationProp =
  NativeStackNavigationProp<AccountNavigatorParamList>;
