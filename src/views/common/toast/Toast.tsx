import DefaultToast from 'react-native-toast-message';
import { toastConfig } from './toastConfig';

export default function Toast() {
  return <DefaultToast config={toastConfig} />;
}
