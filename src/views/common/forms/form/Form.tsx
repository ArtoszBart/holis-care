import React, { type PropsWithChildren } from 'react';
import { type DefaultValues, type FieldValues } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { type ZodType } from 'zod';
import Button from '../../Button';
import useForm from './useForm';

export interface IForm<T extends FieldValues> extends PropsWithChildren {
  schema: ZodType<T> | null;
  defaultValues?: DefaultValues<T>;
  submitLabel: string;
  onSubmit: (data: T) => void;
}

export default function Form<T extends FieldValues>({
  submitLabel,
  onSubmit,
  ...otherProps
}: IForm<T>) {
  const { updatedChildren, handleSubmit } = useForm(otherProps);

  return (
    <View style={styles.form}>
      {updatedChildren}
      <Button label={submitLabel} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 24,
    width: '100%',
    gap: 10,
  },
});
