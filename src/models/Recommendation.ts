import { ColorValue } from '../constants/colors';

export type Recommendation = {
  id: string;
  badgeColor: ColorValue;
  type: string;
  title: string;
  period: string;
  additionalInfo: string;
  description: string;
  preparation: string;
};
