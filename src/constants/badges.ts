import { EXAM_CATEGORY } from '../models/Exam';
import { COLORS } from './colors';

type BadgeConfig = {
  title: string;
  color: COLORS;
};

const EXAM_CATEGORY_CONFIG: Record<EXAM_CATEGORY, BadgeConfig> = {
  [EXAM_CATEGORY.VISIT]: {
    title: 'Wizyta',
    color: COLORS.BADGE_BLUE,
  },
  [EXAM_CATEGORY.SPEC]: {
    title: 'Badanie specjalistyczne',
    color: COLORS.BADGE_PURPLE,
  },
  [EXAM_CATEGORY.SELF_EXAM]: {
    title: 'Samobadanie',
    color: COLORS.BADGE_GREEN,
  },
};

export const getBadgeConfig = (category: EXAM_CATEGORY): BadgeConfig => {
  return (
    EXAM_CATEGORY_CONFIG[category] ?? {
      title: 'Nieznana kategoria',
      color: COLORS.DEFAULT_TEXT,
    }
  );
};
