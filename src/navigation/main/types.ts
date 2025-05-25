import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MAIN_ROUTES } from '../routes';
import { CreateParamList } from '../types';

type MainNavigatorParamList = CreateParamList<typeof MAIN_ROUTES>;

export type MainNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;
