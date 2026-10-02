import { type ToastConfigParams } from 'react-native-toast-message';
import { type IconDefinition } from '../icon/iconDefinition.type';

export enum TOAST_TYPE {
  SUCCESS = 'success',
  ERROR = 'error',
  WARN = 'warning',
}

export interface ToastConfigProps {
  accentColor: string;
  icon: IconDefinition;
}

interface ToastProps extends ToastConfigProps {
  message: string;
}

export interface IToastProps extends ToastConfigParams<ToastProps> {}
