import { COLORS } from '../constants/colors';

export type Recommendation = {
  id: string;
  badgeColor: COLORS;
  type: string;
  title: string;
  period: string;
  additionalInfo: string;
  description: string;
  preparation: string;
};
