export const getFont = (weight = '400') => {
  switch (weight) {
    case '400':
      return 'LexendDeca-Regular';
    case '600':
      return 'LexendDeca-SemiBold';
    case '700':
      return 'LexendDeca-Bold';
    default:
      return 'LexendDeca-Regular';
  }
};
