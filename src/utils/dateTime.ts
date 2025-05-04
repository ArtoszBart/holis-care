const LOCALE = 'pl-PL';

export const getDisplayDayOfWeekShort = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, { weekday: 'short' });
};

export const getDisplayDate = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export const getDisplayTime = (date: Date): string => {
  return date.toLocaleTimeString(LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
  });
};
