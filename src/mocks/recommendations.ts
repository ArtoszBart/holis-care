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
    title: 'Morfologia',
    period: 'co 3 miesiące',
    additionalInfo: 'cytologia płynna',
  },
  {
    id: '3',
    badgeColor: COLORS.yellow,
    type: 'Szczepienie',
    title: 'Szczepienie',
    period: 'jednorazowo',
    additionalInfo: 'szczepienie na grypę',
  },
  {
    id: '4',
    badgeColor: COLORS.red,
    type: 'Konsultacja Online',
    title: 'Internista',
    period: 'jednorazowo',
    additionalInfo: 'Wizywa kontrolna',
  },
];
