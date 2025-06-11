import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { emailConfirmationRequest } from '../../../api/auth';
import { type InitialFlowNavigationProp } from '../../../navigation/initialFlow';
import { INITIAL_FLOW_ROUTES } from '../../../navigation/routes';
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
      navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR);
    } else {
      showToast('Podany kod jest nieprawidłowy');
    }
  };

  return { onSubmit, setConfirmationCode };
};

export default useConfirmationScreen;
