import { zodResolver } from '@hookform/resolvers/zod';
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react';
import {
  type FieldValues,
  type Path,
  type PathValue,
  useForm as useDefaultForm,
} from 'react-hook-form';
import { type ZodType } from 'zod';
import { showToast } from '../../toast/toastHelper';
import DateTimePicker, { type IDateTimePicker } from '../DateTimePicker';
import TextInput, { type ITextInput } from '../TextInput';
import { type IForm } from './Form';

const useForm = <T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
}: Omit<IForm<T>, 'submitLabel'>) => {
  const {
    handleSubmit: defaultHandleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useDefaultForm<T>({
    resolver: zodResolver(schema as ZodType<T>),
    defaultValues,
  });

  const updatedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const { fieldName } = child.props as { fieldName: string };
    const type = child.type;

    switch (type) {
      case TextInput:
        return cloneElement(child as ReactElement<ITextInput>, {
          onChangeText: (text: string) =>
            setValue(fieldName as Path<T>, text as PathValue<T, Path<T>>, {
              shouldValidate: true,
            }),
          defaultValue: defaultValues?.[fieldName],
          errorMessage: errors[fieldName]?.message as string,
        });

      case DateTimePicker:
        return cloneElement(child as ReactElement<IDateTimePicker>, {
          onChange: (date: Date) =>
            setValue(fieldName as Path<T>, date as PathValue<T, Path<T>>, {
              shouldValidate: true,
            }),
          value: watch(fieldName as Path<T>),
          errorMessage: errors[fieldName]?.message as string,
        });

      default:
        return child;
    }
  });

  const onInvalid = () => {
    showToast('Formularz zawiera błędy');
  };

  const handleSubmit = defaultHandleSubmit(onSubmit, onInvalid);

  return { handleSubmit, updatedChildren };
};

export default useForm;
