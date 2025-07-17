import { APPOINTMENT_CATEGORY } from '../models/Recommendation';
import { COLORS } from './colors';

type BadgeConfig = {
  title: string;
  color: COLORS;
};

const APPOINTMENT_CATEGORY_CONFIG: Record<APPOINTMENT_CATEGORY, BadgeConfig> = {
  [APPOINTMENT_CATEGORY.VISIT]: {
    title: 'Wizyta',
    color: COLORS.BLUE,
  },
  [APPOINTMENT_CATEGORY.SPEC]: {
    title: 'Badanie specjalistyczne',
    color: COLORS.PURPLE,
  },
  [APPOINTMENT_CATEGORY.SELF_EXAM]: {
    title: 'Samobadanie',
    color: COLORS.YELLOW,
  },
};

export const getBadgeConfig = (category: APPOINTMENT_CATEGORY): BadgeConfig => {
  return (
    APPOINTMENT_CATEGORY_CONFIG[category] ?? {
      title: 'Nieznana kategoria',
      color: COLORS.DEFAULT_TEXT,
    }
  );
};
