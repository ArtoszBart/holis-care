import { zodResolver } from '@hookform/resolvers/zod';
import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
} from 'react';
import {
  DefaultValues,
  useForm as useDefaultForm,
  type FieldValues,
  type Path,
  type PathValue,
} from 'react-hook-form';
import { showToast } from '../../toast/toastHelper';
import DateTimePicker, { type IDateTimePicker } from '../DateTimePicker';
import TextInput, { type ITextInput } from '../TextInput';
import { type IForm } from './Form';
import { withZodDefaultDates } from './utils/withZodDefaultDates';

const useForm = <T extends FieldValues>({
  schema,
  defaultValues = {} as DefaultValues<T>,
  onSubmit,
  children,
}: Omit<IForm<T>, 'submitLabel' | 'fullScreen' | 'onCancel'>) => {
  const [shouldValidate, setShouldValidate] = useState<boolean>(false);

  const {
    handleSubmit: defaultHandleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useDefaultForm<T>({
    resolver: zodResolver(schema),
    defaultValues: withZodDefaultDates(schema, { ...defaultValues }),
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
              shouldValidate,
            }),
          defaultValue: defaultValues?.[fieldName],
          errorMessage: errors[fieldName]?.message as string,
        });

      case DateTimePicker:
        return cloneElement(child as ReactElement<IDateTimePicker>, {
          onChange: (date: Date) =>
            setValue(fieldName as Path<T>, date as PathValue<T, Path<T>>, {
              shouldValidate,
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
    setShouldValidate(true);
  };

  const handleSubmit = defaultHandleSubmit(onSubmit, onInvalid);

  return { handleSubmit, updatedChildren };
};

export default useForm;
