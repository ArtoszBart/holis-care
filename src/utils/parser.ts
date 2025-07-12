export const reviveDates = (key: string, value: unknown) => {
  if (typeof value === 'string') {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

    if (isoDateRegex.test(value)) {
      return new Date(value);
    }
  }
  return value;
};
