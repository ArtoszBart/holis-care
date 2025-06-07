export const MIN_AGE = 18;

export const MAX_BIRTH_DATE = new Date();
MAX_BIRTH_DATE.setFullYear(MAX_BIRTH_DATE.getFullYear() - MIN_AGE);
MAX_BIRTH_DATE.setHours(0, 0, 0, 0);
