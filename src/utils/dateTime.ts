const LOCALE = 'pl-PL';

export const getDisplayDayOfWeekShort = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, { weekday: 'short' });
};

export const getDisplayDateShort = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export const getDisplayDate = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export const getDisplayDateLong = (date: Date): string => {
  return date.toLocaleDateString(LOCALE, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export const getDisplayTime = (date: Date): string => {
  return date.toLocaleTimeString(LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getAge = (birthDate: Date): number => {
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
};
