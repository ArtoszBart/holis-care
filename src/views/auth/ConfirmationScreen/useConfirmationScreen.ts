import { StackActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { emailConfirmationRequest } from '../../../api/auth';
import { type InitialFlowNavigationProp } from '../../../navigation/initialFlow';
import { AUTH_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../common/loader/loaderStore';
import { showToast } from '../../common/toast/toastHelper';

const useConfirmationScreen = ({ userEmail }: { userEmail: string }) => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const { setIsLoading } = useLoadingStore();

  const [confirmationCode, setConfirmationCode] = useState<string>();

  const onSubmit = async (): Promise<void> => {
    if (!confirmationCode) return showToast('Kod nie może być pusty');

    setIsLoading(true);
    const response = await emailConfirmationRequest(
      userEmail,
      confirmationCode,
    );
    setIsLoading(false);

    if (response.ok) {
      showToast('Konto utworzono pomyślnie', 'success');
      navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_IN_SCREEN));
    } else if (response.error) {
      showToast('Podany kod jest nieprawidłowy');
    }
  };

  return { onSubmit, setConfirmationCode };
};

export default useConfirmationScreen;
