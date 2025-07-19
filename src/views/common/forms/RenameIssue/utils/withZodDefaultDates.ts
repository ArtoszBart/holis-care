import { DefaultValues, FieldValues, Path, PathValue } from 'react-hook-form';
import { ZodDate, ZodObject, ZodTypeAny } from 'zod';

export const withZodDefaultDates = <T extends FieldValues>(
  schema: ZodTypeAny,
  defaultValues: DefaultValues<T>,
): DefaultValues<T> => {
  if (schema instanceof ZodObject) {
    const shape = schema.shape as Record<string, ZodTypeAny>;

    for (const [fieldName, fieldSchema] of Object.entries(shape)) {
      if (fieldSchema instanceof ZodDate && !defaultValues[fieldName]) {
        defaultValues[fieldName] = new Date() as PathValue<T, Path<T>>;
      }
    }
  }

  return defaultValues;
};
