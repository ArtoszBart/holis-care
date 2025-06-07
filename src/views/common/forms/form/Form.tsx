import React, { type PropsWithChildren } from 'react';
import { type DefaultValues, type FieldValues } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { type ZodType } from 'zod';
import Button from '../../Button';
import useForm from './useForm';

export interface IForm<T extends FieldValues> extends PropsWithChildren {
  schema: ZodType<T>;
  defaultValues?: DefaultValues<T>;
  submitLabel: string;
  onSubmit: (data: T) => void;
  fullScreen?: boolean;
}

export default function Form<T extends FieldValues>({
  submitLabel,
  fullScreen,
  ...otherProps
}: IForm<T>) {
  const { updatedChildren, handleSubmit } = useForm(otherProps);

  return (
    <View
      style={[
        styles.form,
        fullScreen
          ? { flex: 1, marginBottom: 0 }
          : { flex: 0, marginBottom: 24 },
      ]}
    >
      {updatedChildren}
      <Button
        label={submitLabel}
        onPress={handleSubmit}
        style={{ marginTop: fullScreen ? 'auto' : null }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 24,
    width: '100%',
    gap: 10,
  },
});
