import Toast, { type ToastConfigParams } from 'react-native-toast-message';

export type ToastType = 'success' | 'error' | 'info';
interface ToastProps {
  message: string;
}
export interface IToastProps extends ToastConfigParams<ToastProps> {
  type: ToastType;
}

export const showToast = (message: string, type: ToastType = 'error') => {
  Toast.show({
    type,
    props: { message },
    topOffset: 0,
  });
};
