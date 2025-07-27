import DefaultToast from 'react-native-toast-message';
import Toast from './ToastComponent';
import { type IToastProps, TOAST_TYPE, type ToastConfigProps } from './types';

export const createToast = (
  defaultProps: IToastProps,
  configProps: ToastConfigProps,
) => {
  return (
    <Toast
      {...defaultProps}
      props={{ ...defaultProps.props, ...configProps }}
    />
  );
};

export const showToast = (
  message: string = 'Wystąpił nieoczekiwany błąd',
  type: TOAST_TYPE = TOAST_TYPE.ERROR,
) => {
  DefaultToast.show({
    type,
    props: { message },
    topOffset: 0,
  });
};
