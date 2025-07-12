import { type ToastConfig } from 'react-native-toast-message';
import { COLORS } from '../../../constants/colors';
import { ICONS } from '../icon';
import { createToast } from './toastHelper';
import { TOAST_TYPE, type ToastConfigProps } from './types';

const toastTypeConfig: Record<TOAST_TYPE, ToastConfigProps> = {
  success: {
    accentColor: COLORS.SUCCESS_GREEN,
    icon: ICONS.CHECK,
  },
  error: {
    accentColor: COLORS.ERROR_RED,
    icon: ICONS.ERROR,
  },
};

export const toastConfig: ToastConfig = {
  success: (props) => createToast(props, toastTypeConfig.success),
  error: (props) => createToast(props, toastTypeConfig.error),
};
