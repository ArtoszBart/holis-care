export const getMonthString = (monthsCount: number): string => {
  if (monthsCount === 1) return 'miesiąc';
  if (monthsCount >= 2 && monthsCount <= 4) return 'miesiące';

  return 'miesięcy';
};
