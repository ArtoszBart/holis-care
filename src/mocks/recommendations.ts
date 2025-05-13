import { COLORS } from '../constants/colors';
import { Recommendation } from '../models/Recommendation';

export const recommendations: Recommendation[] = [
  {
    id: '1',
    badgeColor: COLORS.purple,
    type: 'Badanie',
    title: 'Ginekolog',
    period: 'co 3 miesiące',
    additionalInfo: 'cytologia płynna',
  },
  {
    id: '2',
    badgeColor: COLORS.purple,
    type: 'Badanie',
    title: 'Laryngolog',
    period: 'co 3 miesiące',
    additionalInfo: 'cytologia płynna',
  },
  {
    id: '3',
    badgeColor: COLORS.purple,
    type: 'Badanie',
    title: 'Onkolog',
    period: 'co 3 miesiące',
    additionalInfo: 'cytologia płynna',
  },
];
