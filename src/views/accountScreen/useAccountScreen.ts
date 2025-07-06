import { logout } from '../../auth/authService';
import useLoadingStore from '../common/loader/loaderStore';
import { showToast } from '../common/toast';

const useAccountScreen = () => {
  const { setIsLoading } = useLoadingStore();

  const onSignOut = async (): Promise<void> => {
    setIsLoading(true);
    const result = await logout();
    setIsLoading(false);

    if (result) {
      // TODO: unauth
    } else {
      showToast('Wystąpił nieoczekiwany błąd');
    }
  };

  return { onSignOut };
};

export default useAccountScreen;
